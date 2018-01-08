module.exports = function(app, db) {

    var parents = db.collection('parents');
    var ObjectId = require('mongodb').ObjectId;
    var lodash = require('lodash');


    //create a child
    app.post('/parents/:parentId/children', (req, res) => {
        var parentId = ObjectId(req.params.parentId);
        var data = req.body;
        data._id = new ObjectId();

        parents.updateOne({
            _id: parentId
        }, {
            $addToSet: { children: data }
        }, (err, result) => {
            if (err) res.send(err);
            else res.send(result);
        });
    });

    app.get('/parents/:parentId/children', (req, res) => {
        var parentId = ObjectId(req.params.parentId);

        parents.findOne({
            _id: parentId
        }, {
            _id: false,
            children: 1 // or use true instead
        }).then((err, result) => {
            if (err) res.send(err);
            else res.send(result);
        });
    });

    //get one child by ID 
    app.get('/parents/:parentId/children/:childId', (req, res) => {
        var parentId = ObjectId(req.params.parentId);
        var childId = ObjectId(req.params.childId);

        parents.find({
            _id: parentId,
            "children._id": childId
        }, {
            _id: 0,
            "children.$": 1
        }).toArray((err, result) => {
            if (err) res.send(err);
            else res.send(result[0].children[0]);
        });
    });

    app.put('/parents/:parentId/children/:childId', (req, res) => {
        //to update a specific child, you should first get the previous
        //child, then merge the previous one with the new one by using
        // the function merge on lodash module installed using 
        // npm install lodash --save


        var parentId = ObjectId(req.params.parentId);
        var childId = ObjectId(req.params.childId);

        var data = req.body;

        //find the child to modify
        parents.find({
            _id: parentId,
            'children._id': childId
        }, {
            _id: false,
            'children.$': 1
        }).toArray((err, result) => {
            if (err) res.send(err);
            else {
                // then merge the previous and the new one here and update
                var previous = result[0].children[0];
                // merge works like this
                // new = lodash.merge(previous, new);

                data = lodash.merge(previous, data);

                parents.updateOne({
                    _id: parentId,
                    "children._id": childId
                }, {
                    $set: { 'children.$': data }
                }).then((err, result) => {
                    if (err) res.send(err);
                    else res.send(result);
                });
            }
        });
    });


    app.delete('/parents/:parentId/children/:childId', (req, res) => {

        var parentId = ObjectId(req.params.parentId);
        var childId = ObjectId(req.params.childId);

        parents.update({
            _id: parentId
        }, {
            $pull: { children: { _id: childId } }
        }, (err, result) => {
            if (err) res.send(err);
            else res.send(result);
        });

    });

}
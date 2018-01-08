module.exports = function (app, db) {

    var parents = db.collection('parents');
    var ObjectId = require('mongodb').ObjectId;

    //create a garden //localhost:1337/garden
    app.post('/parents', (req, res) => {
        var data = req.body;

        parents.insertOne(data, (err, result) => {
            if (err) res.send(err);
            else res.send(result);
        });
    });
    
    //read all the garden
    app.get('/parents', (req, res) => {

        parents.find().toArray((err, result) => {
            if (err) res.send(err);
            else res.send(result);
        });
    });

    //read one garden
    app.get('/parents/:parentId', (req, res) => {
        var parentID = ObjectId(req.params.parentId);

        parents.findOne(
            {
                _id: parentID
            }
        ).then((err, result) => {
            if (err) res.send(err);
            else res.send(result);
        });
    });

    //update one garden
    app.put('/parents/:parentId', (req, res) => {
        var parentID = ObjectId(req.params.parentId);
        var data = req.body;

        parents.updateOne(
            {
                _id: parentID
            },
            {
                $set: data
            }
        ).then((err, result) => {
            if (err) res.send(err);
            else res.send(result);
        });
    });

    //delete one garden
    app.delete('/parents/:parentId', (req, res) => {
        var parentID = ObjectId(req.params.parentId);

        parents.deleteOne(
            {
                _id: parentID
            }
        ).then((err, result) => {
            if (err) res.send(err);
            else res.send(result);
        });
    });


}
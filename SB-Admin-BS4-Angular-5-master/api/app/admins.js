module.exports = function(app, db) {

    var admins = db.collection('admins');
    var ObjectId = require('mongodb').ObjectId;

    //create a garden //localhost:1337/garden
    app.post('/admins', (req, res) => {
        var data = req.body;

        admins.insertOne(data, (err, result) => {
            if (err) res.send(err);
            else res.send(result);
        });
    });

    //read all the garden
    app.get('/admins', (req, res) => {

        admins.find().toArray((err, result) => {
            if (err) res.send(err);
            else res.send(result);
        });
    });

    //read one garden
    app.get('/admins/:adminId', (req, res) => {
        var adminID = ObjectId(req.params.adminId);

        admins.findOne({
            _id: adminID
        }).then((err, result) => {
            if (err) res.send(err);
            else res.send(result);
        });
    });

    //update one garden
    app.put('/admins/:adminId', (req, res) => {
        var adminID = ObjectId(req.params.adminId);
        var data = req.body;

        admins.updateOne({
            _id: adminID
        }, {
            $set: data
        }).then((err, result) => {
            if (err) res.send(err);
            else res.send(result);
        });
    });

    //delete one garden
    app.delete('/admins/:adminId', (req, res) => {
        var adminID = ObjectId(req.params.adminId);

        admins.deleteOne({
            _id: adminID
        }).then((err, result) => {
            if (err) res.send(err);
            else res.send(result);
        });
    });


}
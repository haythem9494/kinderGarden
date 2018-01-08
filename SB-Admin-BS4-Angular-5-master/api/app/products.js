module.exports = function (app, db) {

    var products = db.collection('products');
    var ObjectId = require('mongodb').ObjectId;

    //create a garden //localhost:1337/garden
    app.post('/products', (req, res) => {
        var data = req.body;

        products.insertOne(data, (err, result) => {
            if (err) res.send(err);
            else res.send(result);
        });
    });

    //read all the garden
    app.get('/products', (req, res) => {

        products.find().toArray((err, result) => {
            if (err) res.send(err);
            else res.send(result);
        });
    });

    //read one garden
    app.get('/products/:productId', (req, res) => {
        var productID = ObjectId(req.params.productId);

        products.findOne(
            {
                _id: productID
            }
        ).then((err, result) => {
            if (err) res.send(err);
            else res.send(result);
        });
    });

    //update one garden
    app.put('/products/:productId', (req, res) => {
        var productID = ObjectId(req.params.productId);
        var data = req.body;

        products.updateOne(
            {
                _id: productID
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
    app.delete('/products/:productId', (req, res) => {
        var productID = ObjectId(req.params.productId);

        products.deleteOne(
            {
                _id: productID
            }
        ).then((err, result) => {
            if (err) res.send(err);
            else res.send(result);
        });
    });


}
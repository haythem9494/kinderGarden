const parents = require('./parents');
const childrens = require('./childrens');
const products = require('./products');
const admins = require('./admins');
module.exports = function(app, db) {
    parents(app, db); // this module is tested and works
    childrens(app, db);
    products(app, db); //done 
    admins(app, db); //done 
}
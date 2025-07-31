const overviewController = require('../controllers/overviewcontroller');
const productController = require('../controllers/productcontroller');
const apiController = require('../controllers/apicontroller');
const contactController = require('../controllers/contactcontroller');
const aboutController = require('../controllers/aboutcontroller');
const formController = require('../controllers/formController');
const addProductSuccessController = require('../controllers/addProductSuccessController');

const handle = (req, res) => {
    const{ pathname } = req;

    const routes = {
        '/' : overviewController,
        '/overview' : overviewController,
        '/product' : productController,
        '/api' : apiController,
        '/contact' : contactController,
        '/about' : aboutController,
        '/add-product' : formController,
        '/add-product-success': addProductSuccessController,
    };

    const routHandler = routes[pathname];
    if(routHandler){
        routHandler(req, res);
    } else{
        res.writeHeader(404, {
            'content-type': 'text/html'
        });
        res.end('Page not found!');
    }
};

module.exports = { handle };
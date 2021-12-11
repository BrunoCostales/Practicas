const indexController = {
    index : function(req, res, next) {
        res.render('index'); //Mandamos la vista
        }

}
module.exports = indexController ;//Exportamos el Controlador
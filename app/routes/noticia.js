module.exports = (app) => {



    app.get('/noticia/:id', (req, res) => {
        let connection = app.config.dbConnection();
        let id = req.params.id;
        let noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticia(id, connection, (err, result) => {
            res.render('noticias/noticia', { noticia: result });
        });

    })

}

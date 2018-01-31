module.exports = function () {


    this.getNoticias = (connection, callback)=>{
        connection.query('SELECT * FROM noticias', callback)
    };

    this.getNoticia = (id,connection,callback)=>{
        connection.query(`SELECT * from noticias WHERE id_noticia = ${id};`,callback);
    }


    return this;
}
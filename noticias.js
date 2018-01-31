let http = require('http');

http.createServer((req, res) => {

    var cat = req.url;
    console.log(cat);
    switch (cat) {
        case '/moda':
            res.end("<html><body>Portao de Moda<body></html>");
            break;
        case '/tecnologia':
            res.end("<html><body>Portao de Tecnologia<body></html>");
            break;
        case '/beleza':
            res.end("<html><body>Portao de Beleza<body></html>");
            break;
        default:
            res.end("<html><body>Portao de Notícias<body></html>");
            break;
    }

}).listen(8001);


var compression = require('compression'),
  express = require('express'),
  app = express(),
  colors = require('colors'),
  moment = require('moment'),
  fs = require('fs'),
  helmet = require('helmet'),
  mcache = require('memory-cache'),
  port = process.env.PORT || 3000;

app.listen(5000)

/*une fois que vous avez l'intention de traiter des fichiers texte d'une taille supérieure à environ 10 Mo
,je vous conseille de laisser tomber readFile et de commencer à utiliser les flux(fs.readfilestream).
*/

const path = require('path')
app.use('/', express.static(path.join(__dirname, 'Page web')))

app.use(helmet())
app.use(compression())

// server-sent event stream
app.get('/events', function (req, res) {
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')

  // send a ping approx every 2 seconds
  var timer = setInterval(function () {
    res.write('data: ping\n\n')

    // !!! this is the important part
    res.flush()
  }, 2000)

  res.on('close', function () {
    clearInterval(timer)
  })
});

colors.setTheme({ //mettre des couleur sur le console.log
  silly: 'rainbow',
  input: 'grey',//contribution
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});
console.log('---------------------------------'.verbose)

console.log(('Langue:' + moment.locale('fr') + 'ançaise\n').silly + //Langue française
  '---------------------------------'.verbose +
  '\nDémarré le :\n'.info +
  moment().format('llll').prompt      /*    mar. 18 sept. 2018 20:59 */)





var cache = (duration) => {
  return (req, res, next) => {
    let key = '__express__' + req.originalUrl || req.url
    let cachedBody = mcache.get(key)
    if (cachedBody) {
      res.send(cachedBody)
      return
    } else {
      res.sendResponse = res.send
      res.send = (body) => {
        mcache.put(key, head, body, duration * 1000);
        res.sendResponse(head, body)
      }
      next()
    }
  }
}

// set up plain http server

var http = express();
// set up a route to redirect http to https
http.get('*', function (req, res) {
  res.redirect('https://' + req.headers.host + req.url);
})

// have it listen on 8080
http.listen(port);





app.get('/', cache(20), function (req, res) {
  fs.exists("./Page web/index.html", function (exists) {
    if (exists) {
      fs.readFile('./Page web/index.html', 'utf-8', function (error, content) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }) //fin fs read file
    } else {

      res.redirect('/notexist')

    }; /*else exist */
  });   //fs ecist
});



function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}








app.get('/notexist', function (req, res) {
  console.log('Le fichier ici: '.error + './Page web/notexist/index.html'.warn + ' n\'éxiste pas'.error)
  console.log('Chargement du message de '.info + '\"Erreur'.error + ' Foetal !\"'.silly)
  console.log('Cause de l\'erreur: le fichier html qui vous dit que le fichier n\'existe ben lui aussi il n\'hésite pas'.white)
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write('<!DOCTYPE html>' +
    '<html>' +
    '    <head>' +
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>' +
    '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>' +
    '        <title>Erreur Fatal !</title>' +
    '    </head>' +
    '    <body> <div>' +
    '     	<H3>Vous avez été redirigée ici car le fichier html qui vous dit que le fichier n\'existe pas lui aussi' +
    '         il n\'existe pas !</H3><br><br> ' +
    '<a onclick="javascript:window.history.back()" class="btn-large waves-effect waves-light orange">Cliquer ici pour revenir en arrière</a><br><br>' +
    '<br><br><a href="/" class="btn-large waves-effect waves-light orange">Cliquer ici pour revenir sur l\'acceuil</a><br><br>' +
    '<H5>Si ce lien juste au dessue recharge la page ça veut dire que  l\'acceuil n\'existe pas,attendez que le dev regle le probléme</H5>' +
    '    <div> </body>' +
    '</html>');
  res.end();
}) // fin app get notexists



app.get('/ampoule/feed.png', function (req, res) { //chargement images

  if (req.url.indexOf('./Page web/ampoule/feed.png') < 0) {
    res.writeHead(200, { "Content-Type": "image/gif" });
    res.write(fs.readFileSync('./Page web/ampoule/feed.png'));
    res.end();
  }
})

app.get('/api/fruits', function (req, res) {
  var data = {
    fruits: ['banana', 'apple'],
    how_many: 2
  };
  res.json(data);
});


ms = require('mediaserver'); //ms require

//chargement pour toute les musique
app.get('/portal2end.mp3', function (req, res) {
  ms.pipe(req, res, "./Page web/audioplayer/Portal2end.mp3");
});


var morgan = require('morgan'); // Charge le middleware de logging
var favicon = require('serve-favicon'); // Charge le middleware de favicon


app.use(morgan('combined')) // Active le middleware de logging
  // Indique que le dossier /public contient des fichiers statiques (middleware chargé de base)
  .use(favicon(__dirname + '/public/favicon.ico'))
  .use(function (req, res) { // Répond enfin
    fs.readFile('./Page web/index.html', 'utf-8', function (error, content) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  });




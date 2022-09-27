var compression = require('compression'),
    express = require('express'),
    app = express(),
    colors = require('colors'),
    moment = require('moment'),
    fs = require('fs'),
    helmet = require('helmet'),
    port = process.env.PORT || 3000;
const path = require('path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.listen(port)
var bodyParser = require("body-parser");

/*une fois que vous avez l'intention de traiter des fichiers texte d'une taille supérieure à environ 10 Mo
,je vous conseille de laisser tomber readFile et de commencer à utiliser les flux(fs.readfilestream).
*/

app.use('/', express.static(path.join(__dirname, 'views')))

app.get('/', function(req, res) {
    res.render('index.ejs')
})
app.get('/presentpersonnel', function(req, res) {
    res.render('presentpersonnel.ejs')
})
app.get('/presentbtssio', function(req, res) {
    res.render('presentbtssio.ejs')
})
app.get('/travauxpersonnel', function(req, res) {
    res.render('travauxpersonnel.ejs')
})
app.get('/contact', function(req, res) {
    res.render('contact.ejs')
})
app.get('/veilletechnologique', function(req, res) {
    res.render('veilletechnologique.ejs')
})
app.get('/stage', function(req, res) {
    res.render('stage.ejs')
})
app.get('/cv.pdf', function(req, res) {
    fs.readFile('./views/cv.pdf', 'utf-8', function(error, content) {
        res.writeHead(200, { "Content-Type": "application/pdf" });
        res.end(content);
    });

})

app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet())
app.use(compression())


app.post('/send', async function(request, res, next) {
    var youremail = request.body.youremail
    var yoursubject = request.body.yoursubject
    var yourmessage = request.body.yourmessage
    console.log(`${yoursubject} ${yourmessage}`);
    await main(youremail, yoursubject, yourmessage)
    next();
}, function(req, res) {
    res.redirect('/')
});



// server-sent event stream
app.get('/events', function(req, res) {
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')

    // send a ping approx every 2 seconds
    var timer = setInterval(function() {
        res.write('data: ping\n\n')

        // !!! this is the important part
        res.flush()
    }, 2000)

    res.on('close', function() {
        clearInterval(timer)
    })
});

colors.setTheme({ //mettre des couleur sur le console.log
    silly: 'rainbow',
    input: 'grey', //contribution
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
    moment().format('llll').prompt + `\nPort: ${port}`.info)


app.get('/cv', function(req, res) {
    var file = path.join(__dirname, './Page web/cv.pdf');
    res.download(file, function(err) {
        if (err) {
            console.log("Error");
            console.log(err);
        } else {
            console.log("Success");
        }
    });
});
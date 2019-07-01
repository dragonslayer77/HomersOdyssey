// I declare all the necessary libraries
const http  =  require('http');
const  path  =  require('path');
const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const  morgan  =  require('morgan');
const  app  =  express();

const authRouter = require('./routes/auth/auth');
const connection = require('./helpers/db');


// I set up the application
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));

//where authRouter is imported
app.use('/auth', authRouter);
// I implement the API part
app.get("/", (req,res) => {
    res.send("this is the back end");
})
/// in case of a not found path, I return the 'Not Found' 404 code
app.use(function(req, res, next) {
    var  err  =  new  Error('Not Found');
    err.status  =  404;
    next(err);
});

//I launch the node server
let  server  =  app.listen( process.env.PORT  ||  5000, function(){
    console.log('Listening on port '  +  server.address().port);
});
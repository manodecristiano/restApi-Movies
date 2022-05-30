const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan');

const app = express();

//SERVER


//settings
app.set('port',process.env.PORT || 3000);
app.set('json spaces', 2)


//middlewares
app.use(morgan('dev'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended:false}))

app.use(bodyParser.json());

//routes
app.use(require('./routes/app'));
app.use('/api/movies',require('./routes/movies'));


//starting the server
app.listen(app.get('port'),() => {
  console.log(`Server on port ${app.get('port')}`);
});

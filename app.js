const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const  userRoutes = require('./routes/userRoutes');
app.use('/',userRoutes);

const port = process.env.PORT || 1234;

app.listen(port,()=>{
    console.log(`Server running on port${port}`);
});
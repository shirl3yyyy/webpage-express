const workingHours = require('./workingHours');
const express = require('express');
const app = express();
const path = require('path');

app.use(workingHours);

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/contact', (req,res) =>{
    res.render('contact');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
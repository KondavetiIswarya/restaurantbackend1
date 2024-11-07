const express = require('express');
const mongoose = require('mongoose');
const Dish = require('./Dish'); 


mongoose.connect('mongodb://127.0.0.1:27017/restaurant0')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");


app.get('/', async (req, res) => {
    const dishes = await Dish.find({});
    res.render('home', { dishes });
});


app.get('/form', (req, res) => {
    res.render('form');
});


app.post('/dishes', async (req, res) => {
    const { dishName, price, image, } = req.body;
    const dish = new Dish({ dishName, price, image });
    await dish.save();
    res.redirect('/');
});


app.post('/dishes/delete/:id', async (req, res) => {
    await Dish.findByIdAndDelete(req.params.id);
    res.redirect('/');
});


app.get('/dishes/edit/:id', async (req, res) => {
    const dish = await Dish.findById(req.params.id);
    res.render('edit', { dish });
});


app.post('/dishes/update/:id', async (req, res) => {
    const { dishName, price, image} = req.body;
    await Dish.findByIdAndUpdate(req.params.id, { dishName, price, image });
    res.redirect('/');
});

app.listen(1700, () => {
    console.log('Server running on port 1700');
});
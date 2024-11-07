

const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({

    dishName: String,
        image: String,
        price: String
     
});

const Dish = mongoose.model('Dish', dishSchema);
// Dish.insertMany([
//     {
//       dishName: "Chicken Burger",
//       image: "https://th.bing.com/th/id/OIP.x2vg5HgA4Rl9W12EEh1w1wHaF6?w=256&h=205&c=7&r=0&o=5&dpr=1.3&pid=1.7",  // Replace with actual image path or URL
//       price: "224"
//     },
//     {
//       dishName: "Toasted Bread",
//       image: "https://th.bing.com/th/id/OIP.HZ7DURVdeSb5Y-K3ZLqt5gHaLG?w=119&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7",  // Replace with actual image path or URL
//       price: "155"
//     },
//     {
//       dishName: "Egg Sandwich",
//       image: "https://th.bing.com/th/id/OIP.qzmjiuZkF7U-ma_zS6rLgQHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",  // Replace with actual image path or URL
//       price: " 180"
//     }
//   ])
//   .then(() => console.log("Data inserted"))
//   .catch(err => console.log(err));
  
module.exports = Dish;
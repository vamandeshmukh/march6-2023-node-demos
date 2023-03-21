
// run as - 
// npm start 
// view output on browser - 
// http://localhost:3000/
// to stop - 
// Ctrl + C  enter Y 

const express = require('express');
const app = express();
const portNumber = 8000;

// syntax 
// app.get(arg, arg2);
// app.get(url, () => {});
// app.get(url, (request, response) => {});

// home, about, contact, ... 

app.get('/', (req, res) => {
    console.log('Home');
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    console.log('About');
    res.send('Deloitte is a good company!');
});

app.get('/contact', (req, res) => {
    console.log('Contact');
    res.send('Please visit out office.');
});

app.get('/*', (req, res) => {
    console.log('Page404');
    res.send('Page not found!');
});

app.listen(portNumber, () => {
    // starting code 
    console.log(`Open http://localhost:${portNumber}/ on your browser to view the app.`);
});






// const express = require('express');
// const app = express();

// app.get('/', function (req, res) {
//     res.send('Hello World');
// });

// app.listen(3000);


// // core java
// // adv java - jdbc, servlet

// // white rice
// // lemon rice

// console.log('Hello world!');

// // M E R N stack
// // M E A N stack 

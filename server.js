//Lav Serveren

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const model = require('./model/user')
const controller = require('./controller/usercontroller');
const fetch = require('fetch');

const server = express();// definere at serveren er en express server - og har nu mulighed for at bruge alle de funktioner der er i.
const PORT = 4123;  // definere port nr
express.static('/client'); // THis is a root argument, specifies which root directory to serve static assets

// var whitelist = 'http://localhost:4123';

// var corsOptions = {
//     origin: function (origin, callback) {
//       if (whitelist.indexOf(origin) !== -1 || !origin) {
//         callback(null, true)
//       } else {
//         callback(new Error('Not allowed by CORS'))
//       }
//     }
//   }


server.use(cors());
server.use(express.static('client'));// //makes it possible to go to all static sides in my folder client

server.use(bodyParser.json()) //behandler POST-requesten

// endpoint er her: /, and when put under the domain - its : HTTP://localhost:4123
server.get('/', controller.getlogin); 

// post fordi vi ønsker at sende data til server
server.post('/', cors(), controller.getInput);

fetch('http://localhost:4123/')

server.listen(PORT, ()=>{
  
    console.log(`Serveren lytter nu på http://localhost:${PORT}`)
})//metoder der laver en lytter på en port. server.listen(port, hostname, backlog, callback);


const fs = require('fs');
const data = require('../user.json');
const server = require('../server');
const bodyParser= require('body-parser');
const controller = require('../controller/usercontroller');

const storage = fs.readFileSync('user.json')
var userObject = JSON.parse(storage);
console.log(userObject)


class Users {
    constructor(username, password){
        this.username;
        this.password;
        this.toJSON = "{" + 
        "\"username\":\"" + this.username + "\", " +
        "\"password\":\"" + this.password + "\", " +
        "}"
    }
}

module.exports = Users;
// console.log(controller.getInput);

// function getUsers( user){
    
   
    // let newUser = new User();

    // for( const [key, value] of userObject){
    //     newUser[key] = value;
    // }
    // return newUser;
//     return datarray;
// }


//looking uo keys instead of indexes, 
//https://www.youtube.com/watch?v=3YtxMsAjyoY

// function Dictonairy(){
//     let datastore = userObject;
//     //add something to datastore
//     this.add = function(key, value){
//         if(key && value){
//             this.datastore.push({
//                 key: key,
//                 value: value    
//             });
//             return this.datastore;
//         }
//     };
//     //removes something from datastore
//     this.removeAt = function(key){
//         for(var i = 0; i< this.datastore.length; i++){
//             if(this.datastore[i].key === key){

//                 this.datastore.splice(this.datastore[i], 1);
//                 return this.datastore;
//         }
//     }
//     return this.datastore;
// };
// //find something in datastore
// this.findAt = function(key){
//     for(var i = 0; i < this.datastore.length; i ++){
//         if(this.datastore[i].key === key){
//             return this.datastore[i].value;
//         }
//     }
//     return "Not found " + this.datastore;
// };
// this.size = function(){
//     return this.datastore.length;
// };

// }

// let users = new Dictonairy();

// users.add("hej","hej")
// console.log(users)

// console.log(Dictonairy());

// users.add("one", 1);
// dictonairy1.add("two", 2);
// dictonairy1.add("three", 3);
// dictonairy1.add("four", 4);
// dictonairy1.add("five", 5);
//console.log(dictonairy1.size());

// console.log(dictonairy1.datastore);

// //console.log(dictonairy1.removeAt("two"));
// console.log(dictonairy1.findAt("six"));



// let newStorage = JSON.stringify(userObject, null, 2);
//     fs.writeFileSync('../user.json', newStorage, 'UTF8')
//      console.log('tjekker om json delen bliver kørt også i model');
     
//      console.log(newStorage)



// //gemmer login-objekter som JSON-string i txt-fil pÃ¥ skrivebordet
// //fÃ¸rst importeres filesaver modul
// const fs = require('fs');

// //users stringifies - To add to json file
// let user = JSON.stringify(userinput);

// //filesaver modulet gemmer filen pÃ¥ den specificerede sti
// //Husk at selve pathen, skal være en fil og ikke en folder
// fs.writeFile('../user.json', user, err => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('Succes!')
//     };
// });

//JSON.parse is for making it to an object


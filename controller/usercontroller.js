
const fs = require('fs');

const model = require('../model/user');

const getlogin = function (req, res){  // Hver gang denne path med http verb bliver kaldt, så vil vi starte en fubnktion med 2 parametrer, req & res
    fs.readFile('./client/frontpage.html', 'utf8', function(err, text){
         res.send(text);
    });// hver gang der kommer en get request, sender vi frontpage ud til browseren, som er en en html fil.
}


const getInput = function (req,res){
    console.log('test test i controller')
    let dataarray = JSON.parse(fs.readFileSync('user.json'))
    dataarray.push(req.body)
    
    fs.writeFile('user.json', JSON.stringify(dataarray, null, 2), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
    // let user = new Users(
    //     req.body.username,
    //     req.body.password
    // );
    // Users.push(user);
    // var storage = JSON.stringify(Users, null, 2);
    // fs.writeFileSync('user.json', storage, (err)=>{
    //     if(err) throw err;
    // });
};


//eksportere funktioner 
module.exports = {getlogin, getInput};
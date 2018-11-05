const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} = require('./../server/models/user');


var id = "5bd901da10bc410634f8362b";


User.findById('5a8708e0e40b324268c5206c').then((user) => {
    if(!user) {
         return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
 }, (e) => {
    console.log(e);
 });
// Todo.findById(id).then((todo) => { 
//     if(!todo) { 
//       return console.log('Id not found'); 
//     } 
//     console.log('Todo By Id', todo); 
//   }).catch((e) => console.log(e));
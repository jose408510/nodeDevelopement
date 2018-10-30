var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// this is like the main schema 
var User = mongoose.model("User" , {
    email: {
        type: String,
        require: true,
        trim: true,
        minlength: 1
    },
})

var user = new User({
    email: "jose@example.com"
}) 
user.save().then((doc) => {
    console.log('User saved', doc);
  }, (e) => {
    console.log('Unable to save user', e);
  });





// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//         // trim property is going to remove all of the leading and trailing spaces
//     },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// })
// var newTodo = new Todo({
//     text: '          Cooking dinner'
//   })
//   newTodo.save().then((doc) => {
//     console.log("Saved " , doc)
//     }, (e) => {
//         console.log("could not save error");
// });
// var otherTodo = new Todo ({
//     text: 'Feed the cat',
//     completed: true,
//     completedAt: 123
//   });
  
//   otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
//   } , (e) => {
//       console.log("Unable to save" , e );
//   });
  



  
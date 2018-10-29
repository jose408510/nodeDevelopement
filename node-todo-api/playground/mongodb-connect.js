const {MongoClient , ObjectID} = require('mongodb'); 

var obj = new ObjectID(); 
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => { 
    if(err) {
    return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')
    
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err,result) => {
        if(err){
            return console.log("Unable to insert todo" , err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });


    db.collection('Users').insertOne({
        name: 'Jose',
        age: 25,
        location: 'San jose'
    }, (err, result) => {
        if(err){
            return console.log("Unable to insert " , err);
        }
        console.log(result.ops)
    });
    // es6 Destructuring 
    var user = {name: 'andrew', age: 25};
    var {name} = user;
    console.log(name);
    // would output andrew 

    client.close();



});

MongoClient.connect('mongodb://localhost:27017/TodoApp'); 
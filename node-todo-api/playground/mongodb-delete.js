// const MongoClient = require('mongodb').MongoClient;
const { MongoClient , ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){ 
    console.log('Unable to connect to MongoDB server');
  } 
  console.log("Connected to MongoDb Server")
  const db = client.db('TodoApp');

  db.collection('Todos').deleteMany({text: 'Walk the dog'}).then((result) => {
    console.log(result); 
  });
    client.close();

});
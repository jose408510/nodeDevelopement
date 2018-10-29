// const MongoClient = require('mongodb').MongoClient;
const { MongoClient , ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){ 
    console.log('Unable to connect to MongoDB server');
  } 
  console.log("Connected to MongoDb Server")
  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('57bc4b15b3b6a3801d8c47a2')
  }, {
    $set: {
      completed:true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
});
        client.close();

})
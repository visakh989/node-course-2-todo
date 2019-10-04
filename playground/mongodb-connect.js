// const MongoClient = require('mongodb').MongoClient;
////testting
const {
    MongoClient,
    ObjectID
} = require('mongodb');

// var objID = new ObjectID();
// console.log(objID);


// MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true, useUnifiedTopology: true}, (err, db)=>{

//             if(err){
//                 return console.log('Unable to connect to mongo DB server');                
//             }
//             console.log('Connected to mongo DB Server');

//             db.collection('Todos').insertOne({
//                 text: 'Something to do',
//                 completed: false

//             }, (err, result)=>{
//                 if(err) {
//                     return console.log('Unable to insert todo', err);
//                 }

//                 console.log(JSON.stringify(result.ops, undefined, 2));

//             });

//             db.close();
// });


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{

                if(err){
                    return console.log('Unable to connect to mongo DB server');
                }

                console.log('Connected to mongo DB Server');

                client.db('TodoApp').collection('Todos').insertOne({
                    text: 'Walk the dog',
                    completed: false             
                }, (err, result) => {
                    if (err) {
                        return console.log('Unable to insert todo', err);
                    }

                    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
                });

                client.close();

})

// MongoClient.connect('mongodb://localhost:27017/TodoApp', {
//     useNewUrlParser: true
// }, (err, client) => {

//     if (err) {
//         return console.log('Unable to connect to mongo DB server');
//     }

//     console.log('Connected to mongo DB Server');

//     client.db('TodoApp').collection('Todos').insertOne({
//         text: 'Complete it by tomo',
//         time: '2 pm'
//     }, (err, result) => {
//         if (err) {
//             return console.log('Unable to insert todo', err);
//         }

//         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
//     });

//     client.close();

// });

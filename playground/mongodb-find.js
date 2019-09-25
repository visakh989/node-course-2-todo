const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{

                if(err){
                    return console.log('Unable to connect to mongo DB server');
                }

                console.log('Connected to mongo DB Server');

                client.db('TodoApp').collection('Todos').find({completed:true}).toArray().then((docs)=>{
                    console.log('Todos');
                    console.log(JSON.stringify(docs, undefined, 2));

                }, (err)=>{
                    console.log('Unable to fetch the data', err);
                })

                client.close();

});
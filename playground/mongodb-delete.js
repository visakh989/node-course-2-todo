const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
                if(err){
                    return console.log('Unable to connect to Mongo DB');
                }

                console.log('Connected to Mongo DB Server');

                //deleteMany

                // client.db('TodoApp').collection('Todos').deleteMany({text: 'evening gym'}).then((result)=>{
                //         console.log(result);
                // }, (err)=>{
                //     console.log('Unable to delete the data', err);
                // });

                //deleteOne

                // client.db('TodoApp').collection('Todos').deleteOne({text: 'evening gym'}).then((result)=>{
                //     console.log(result);
                // }, (err)=>{
                //     console.log('Unable to delete the data', err);
                // });

                //findone and Delete

                client.db('TodoApp').collection('Todos').findOneAndDelete({text:'evening gym'}).then((result)=>{
                    console.log(result);
                }, (err)=>{
                    console.log('Unable to delete the data');
                })

                //client.close();

               
});
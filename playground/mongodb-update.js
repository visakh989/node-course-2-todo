const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongo db server');
    }

    console.log('Connected to mongo db server');

    // client.db('TodoApp').collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5d8b172186f195a837d6024b')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false

    // }).then((result)=>{
    //     console.log(result);
    // }, (err)=>{
    //     console.log('Unable to update the data', err);
    // })

    client.db('TodoApp').collection('Users').findOneAndUpdate({
        name: 'Visakh'
    }, {
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to update the data', err);
    });
});
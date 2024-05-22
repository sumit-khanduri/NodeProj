const express = require('express');
const mongoose = require(`mongoose`);

const app = express();
const port = 3000;
const pwd = 'root'
const username = 'root';

app.get('/', (req,res)=>res.send(`I love you ${port}`))
app.get('/new', (req,res)=>res.send(`new ${port}`))


mongoose.set("strictQuery", false);
mongoose.connect(`mongodb+srv://${username}:${pwd}@khanduriboycluster.psqmknc.mongodb.net/Node-API?retryWrites=true&w=majority&appName=khanduriBoyCluster`).then(
    () => {
        console.log(`connected to mongoDB`);
        app.listen(3000, () => {
            console.log(`Node API app is running on port ${port}`);
        })
    }

).catch(err => console.log(err));

const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req,res)=>res.send(`I love you ${port}`))

app.get('/new', (req,res)=>res.send(`new ${port}`))

app.listen(3000, () => {
    console.log(`Node API app is running on port ${port}`);
})

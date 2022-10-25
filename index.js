const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const catagoryes = require('./data/catagory.json')

app.get('/', (req, res) =>{
    res.send('java script is running');
})

app.get('/topic-catagory', (req, res) =>{
    res.send(catagoryes)
})

app.listen(port, () =>{
    console.log('Dragon Nes Server running on port', port);
})
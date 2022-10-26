const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const catagoryes = require('./data/catagory.json');
const topic = require('./data/topic.json');
const premium = require('./data/premium.json')

app.get('/', (req, res) =>{
    res.send('java script is running');
})

app.get('/topic-catagory', (req, res) =>{
    res.send(catagoryes)
    
})
app.get('/catagory/:id', (req, res) =>{
    const id = req.params.id
    const selectedCatagory = topic.filter(sc => sc.category_id === id )
    res.send(selectedCatagory)
})
app.get('/topic', (req, res) =>{
    res.send(topic)
})
app.get('/topic/:id', (req, res) =>{
    console.log(req.params)
    const id = req.params.id;
    const selectedTopic = topic.find(tp => tp._id === id)
    res.send(selectedTopic)
})

app.get('/premium', (req, res) =>{
    res.send(premium)
})
app.get('/premium/:id', (req, res) =>{
    console.log(req.params)
    const id = req.params.id;
    const selectedPremium = premium.find(tp => tp.id === id)
    res.send(selectedPremium)
})

app.listen(port, () =>{
    console.log('Dragon Nes Server running on port', port);
})
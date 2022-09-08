require('dotenv').config()
const express = require('express')
const User = require('./model/user')
const { mongoConnect } = require('./mongo_config')

const app = express()

app.use('/getusers/:name', async (req,res)=>{
    const name = req.params.name
    const result = await User.create({username: name})
    res.json({status: 'success', data: result})
})

app.use('/', (req,res)=>{
    res.send('port stated')
})

app.listen(5000, () => {
    console.log('app listing to port')
})
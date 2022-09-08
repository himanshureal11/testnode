const express = require('express')

const app = express()


app.use('/', (req,res)=>{
    res.send('port stated')
})

app.listen(5000, () => {
    console.log('app listing to port')
})
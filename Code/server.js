if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}


const express = require('express')
const app = express()
const fs = require('fs')

app.set('views', './view')
app.set('view engine', 'ejs')
app.use(express.static('Project'))

app.get('/store', function(req, res){
  fs.readFile('items.json', function(error, data){
    if (error){
      res.status(500).end()
    } else {
      res.render('store.ejs', {
        items: JSON.parse(data)  
      })
    }
  })
})

app.listen(3000)
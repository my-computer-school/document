const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
const port = 3000

app.set('view engine', 'hbs')
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index'
}))

app.get('/', (req, res) => {
    res.sendFile("hello")
})


app.listen(port, () => console.log("Listening on port 3000"))

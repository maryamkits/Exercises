const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')
const app = express()

const PORT = 3000

app.use(cookieParser('cipher'))
app.use(express.urlencoded({extended: true}))

app.set('views', './public')
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
    res.cookie('username', 'Maryam')
    res.cookie('cart', { items: [1,2,3] })
    res.cookie('forever', 1, {maxAge: 6000})

    res.cookie('signed', 'random text', {signed: true})

    res.send('Hello')
})

app.get('/cookies', (req, res) => {
    res.write(`<h1> Username - ${req.cookies.username} </h1>`)
    res.write(`<h1> forever - ${req.cookies.forever} </h1>`)
    res.write(`<h1>Cart - ${req.cookies.cart.items.join(' ')}</h1>`)
    res.write(`<h1>${req.signedCookies['signed']}</h1>`)
    res.end()
})
app.get('/clear', (req, res) => {
    res.clearCookie('forever')
    res.send('Cookies has been removed')
})

app.get('/color', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`PORT - ${PORT}`)
})
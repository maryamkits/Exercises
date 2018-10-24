const express =  require('express')
const path = require('path')
const bodyParser = require('body-parser');
const app = express()

const PORT = process.env.PORT || 7000

app.set('views', './public/views')
app.set('view engine', 'pug')

app.use( express.static( path.join(__dirname, '/views') )  )
app.use( express.urlencoded( { extended: true } ) )

// app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

let people = []
let cars = []

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Users',
        peoplePage: true, 
        people,
    })
})
app.post('/', (req, res) => {
    const {person_name, lastname, fathersname, id, birthday} = req.body
    people.push({person_name, lastname, fathersname, id, birthday})

    res.render('index', {
                title: 'Users',
                peoplePage: true,
                people,
            })
})
app.get('/cars', (req, res) => {
    res.render('index', {
                title: 'Cars',
                carPage: true,
                cars
            })
})
app.post('/cars', (req, res) => {
    const {car_name, model, vin, num, color} = req.body
    cars.push({owner, car_name, model, vin, num, color})
    let people = people
    res.render('index', {
                title: 'Cars',
                carPage: true,
                // peoplePage: true,
                people,
                cars,
    })
})

app.listen(PORT, () => {
    console.log(`PORT - ${PORT}`)
})

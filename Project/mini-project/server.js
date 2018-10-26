const express =  require('express')
const path = require('path')
const bodyParser = require('body-parser');
const app = express()

const PORT = process.env.PORT || 7000

app.set('views', './public/views')
app.set('view engine', 'pug')

app.use( express.static( path.join(__dirname, '/views') )  )
app.use( express.urlencoded( { extended: true } ) )

app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())

let people = []
let cars = []

app.get('/', (req, res) => {
        res.render('index', {
            title: 'Users',
            peoplePage: true, 
            people
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
app.get('/editPeople/:id', (req, res) => {
    let id = req.params.id
    const person = people.find(person => person.id == id)
    res.render('index', {
                title: 'Edit User',
                editPeople: true,
                // people,
                person
    })
})
app.post('/editPeople/:id', (req, res) => {
    let oldId = req.params.id
    const person = people.find(person => person.id == oldId)
    const {person_name, lastname, fathersname, id, birthday} = req.body
    let i = people.indexOf(person.id)
    people.splice(i, 1, {person_name, lastname, fathersname, id, birthday})
    // res.render('index', {
    //             title: 'Edit User',
    //             editPeople: true,
    //             people,
    // })
    res.redirect(`/`)
})

app.get('/cars', (req, res) => {
    res.render('index', {
                title: 'Cars',
                carPage: true,
                people,
                cars
            })
})
app.post('/cars', (req, res) => {
    const {owner, car_name, model, vin, num, color} = req.body
    cars.push({owner, car_name, model, vin, num, color})
    res.render('index', {
                title: 'Cars',
                carPage: true,
                people,
                cars
    })
})
app.get('/editCar/:vin', (req, res) => {
    let vin = req.params.vin
    const car = cars.find(car => car.vin == vin)
    res.render('index', {
                title: 'Edit Car',
                editCar: true,
                people,
                car
    })
})
app.post('/editCar/:vin', (req, res) => {
    let oldVin = req.params.vin
    const car = cars.find(car => car.vin == oldVin)
    const {owner, car_name, model, vin, num, color} = req.body
    let i = cars.indexOf(car.vin)
    people.splice(i, 1, {owner, car_name, model, vin, num, color})
    res.redirect(`/cars`)
})

app.listen(PORT, () => {
    console.log(`PORT - ${PORT}`)
})

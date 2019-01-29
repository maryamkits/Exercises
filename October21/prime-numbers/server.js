const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))

let PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/primes', (req, res) => {
    if(!req.query.min_num || !req.query.max_num){
        res.sendStatus(400)
    }
    let min_num = Number(req.query.min_num)
    let max_num = Number(req.query.max_num)
    let count = 0
    let flag;
    while (min_num < max_num){
        flag = 0;
        for(i = 2; i <= min_num/2; ++i){
            if(min_num % i == 0){
                flag = 1;
                break;
            }
        }
        if (flag == 0){
            console.log(min_num)
            count++
        }
        ++min_num;
    }
    setTimeout(() => {
        res.send(count.toString())
    }, 2000)
})
app.listen(PORT, () => {
    console.log(`PORT - ${PORT}`)
})
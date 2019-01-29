let userJSON = localStorage.getItem('usernames')
if(!userJSON){
    users = JSON.parse(userJSON)
}

// let saveUser = localStorage.setItem('usernames', JSON.stringify(users))
// localStorage.setItem('usernames', users)

const usernames = () => {
    return fetch(`https://jsonplaceholder.typicode.com/users`).then((response) => {
        if(response.status === 200){
            return response.json()
        } else {
            throw new Error('Errror')
        }
     }).then((data) => {
        localStorage.setItem('usernames', JSON.stringify(data))
     })
}

// usernames().then((user) => {
//     // users = data.find((item) => {item.username})
//     users.push(user)
//     // console.log(user)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })


JSON.parse(userJSON)
let users = JSON.parse(userJSON)
let userNames = users.map((item => item.username))
// console.log(userNames)
document.querySelector('.userNames').innerHTML = users.map((item => `<div id=${item.username}>${item.username} <button class=edit id=${item.username}>Edit</button> <button class=remove id=${item.username}>Remove</button></div> `)).join(' ')
let edits = document.querySelectorAll('.edit')
let editsArr = []
editsArr.push(edits)


let userNamesClass = document.querySelector('.userNames')
userNamesClass.addEventListener('click', doThat, false)

function doThat(e){
        let currentEL = e.target.id;
        let index = userNames.indexOf(currentEL);
        let foundItem = document.querySelector('.userNames').children[index]
    if(e.target.className == 'edit'){
        let newItem = prompt('New')
        if(newItem !== '' && newItem !== null){
            userNames[index] = newItem;
            foundItem.innerHTML = `${newItem} <button class=edit id=${userNames[index]}>Edit</button> <button class=remove id=${userNames[index]}>Remove</button>`
            foundItem.id = newItem;
        }
    } if(e.target.className == 'remove'){
        document.querySelector('.userNames').children[userNames[index]].remove()
        userNames.splice(index,1)
        console.log(userNames)
    }
}
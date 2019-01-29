const arrow = document.querySelector('.arrow')
const imagesList = document.querySelectorAll('.slider')
console.log(imagesList.length)

for(let i = 0; i < 5; i++){
    imagesList[i].classList.add("shown");
}

arrow.addEventListener('click', function() {
    for(let i = 0; i < 5; i++){
        imagesList[i].classList.add("hidden");
    }
})
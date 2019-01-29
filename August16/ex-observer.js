function Observer(){
    this.sourceInput = document.querySelector('#subject')

    this.sourseData = [];
    this.listeners = []
}
Observer.prototype.init = function(){
    this.listeners = document.querySelectorAll('.listener')
    this.sourseData.length = this.listeners.length
}

Observer.prototype.update = function(index, func){
    for(let i = 0; i < this.sourseData.length; i++){
        if(this.sourseData[i] != undefined){
            this.listeners[i].innerHTML = this.sourseData[i] || '';
        }
    }
    if(func){
        let currentElement = this.listeners[index]
        func(currentElement)
    }
}

Observer.prototype.add = function(index, func){
    this.sourseData[index] = this.sourceInput.value;
    this.update(index, func)
}

const observer = new Observer();
observer.init()

observer.sourceInput.addEventListener('keyup', () => {
    for(let i = 0; i < observer.listeners.length; i++){
        observer.add(i)
    }
    // observer.add(0)
    observer.add(1, function(index){
        index.style.backgroundColor = 'pink'
    })
    observer.add(2, function(index){
        index.style.backgroundColor = 'gray'
    })
    observer.add(5, function(index){
        index.style.backgroundColor = 'green'
    })
})

button = document.querySelector('#button')
button.addEventListener('click', () => {
    let newBox = document.createElement('div')
    newBox.setAttribute('class', 'listener')
    document.body.appendChild(newBox)
    observer.init()
    // observer.add(observer.listeners.length - 1)
})
let fontSize = document.querySelector('#fontSize')
let content = document.querySelector('#content')
let border = document.querySelector('#border')
let randomColor = document.querySelector('#randomColor')
let back = document.querySelector('#back')
let next = document.querySelector('#next')
let colors = ['pink', 'blue', 'aqua', 'red']

class Inputs {
    constructor(txt){
        this._txt = txt;
    }
    fontSizeFun(size){
        // content.removeAttribute('style');
        return content.style.fontSize = size;
    }
    borderFun(size){
        return content.style.borderWidth = size;
    }
    colorFun(color){
        return content.style.color = color;
    }
}

class Command {
    constructor(obj){
        this._subject = obj;
        this.commandsExecute = []
        this.args = []
        this.redoCommands = []
        this.redoArgs = []
    }
    execute(command, arg){
        this.commandsExecute.push(command)
        this.args.push(arg)
        return this._subject[command](arg)
    }
    undo(){
        content.removeAttribute('style');
       let lastStyle = this.commandsExecute.pop()
       let lastArg = this.args.pop()
       this.redoCommands.push(lastStyle)
       this.redoArgs.push(lastArg)

       let currentStyle = this.commandsExecute[this.commandsExecute.length - 1]
       let currentArg = this.args[this.args.length - 1]
       return this._subject[currentStyle](currentArg)
    }
    redo(){
        let lastStyle = this.redoCommands.pop()
        let lastArg = this.redoArgs.pop()
        this.commandsExecute.push(lastStyle)
        this.args.push(lastArg)
        return this._subject[lastStyle](lastArg)
    }
}


let font = new Command(new Inputs(content))

fontSize.addEventListener('change', function(e){
        let size = fontSize.value
        font.execute('fontSizeFun', size)
})
border.addEventListener('change', function(e){
        let size = border.value
        font.execute('borderFun', size)
})

randomColor.addEventListener('click', function(){
    let random = Math.floor(Math.random() * 4)
    let color = colors[random]
    font.execute('colorFun', color)
})

back.addEventListener('click', function(){
    if(font.commandsExecute.length !== 0){
        font.undo()
    } else {
        alert('Nothing To Undo')
    }
})
next.addEventListener('click', function(){
    if(font.redoCommands.length !== 0){
        font.redo()
    } else {
        alert('Nothing To Redo')
    }
})
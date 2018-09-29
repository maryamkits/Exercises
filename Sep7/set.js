class Set {
    constructor(){
        this.items = []
    }
    add(element){
        for(let item of this.items){
            if(item == element){
                return
            }
        }
        this.items.push(element)
    }
    remove(element){
        for(let item of this.items){
            if(item == element){
               let index = this.items.indexOf(item);
               this.items.splice(index, 1);
            }
        }
    }
    isEmpty(){
        return this.items.lenght == 0;
    }
    has(element){
        return this.items.includes(element)
    }
}
let newSet = new Set()
newSet.add('maryam')
newSet.add('kits')
newSet.add('n')
newSet.remove('kits')
console.log(newSet);
// console.log(newSet.isEmpty())

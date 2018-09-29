///// recursion
function recursiveCount(max, current) {
    if (current > max) {
        return;
    }
    // console.log(current);
    recursiveCount(max, current + 1)
}
recursiveCount(10, 1)

function fibonacci(n){
    if(n <= 2){
        return 1;
    } else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
}
for(let i = 1; i < 12; i++){
    // console.log(`i - ${i}, num - ${fibonacci(i)}`)
}

///////// factorial
function factorial(num) {
    if(num < 2){
        return 1
    } else {
        return num * factorial(num - 1)
    }
}
// console.log(factorial(6))

////////////  Add Numbers
function addNumbers(number){
    if(number === 0) return number;
    else return number + addNumbers(number - 1)
}
addNumbers(3)


function tailAddNumbers(number, sum = 0){
    if(number === 0) return sum;
    else return tailAddNumbers(number - 1, sum + number)
}
// console.log(tailAddNumbers(3))


////// Bubble Sort
function bubbleSort(numbers){
    do {
        var isSorting = false;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] > numbers[i+1]){
                // let t = numbers[i]
                // numbers[i] = numbers[i+1]
                // numbers[i+1] = t;

                ////// დესტრუქტურინგით
                [numbers[i], numbers[i+1]] = [numbers[i+1], numbers[i]]

                isSorting = true;
            }
        }
    }
    while (isSorting)
}
let arr = [-7, 5, 3, 9, 20, 17, 2]
bubbleSort(arr)
// console.log(arr)


//////// Insertion sort
function insertionSort(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < i; j++){
            if(array[i] < array[j]){
                let t = array.splice(i, 1)
                array.splice(j, 0, t[0])
            }
        }
    }
}
// let array = [-7, 5, 3, 9, 20, 17, 2]
// insertionSort(array)
// console.log(array)


////// Merge Sort
function mergeSort(numbers){
    if(numbers.length < 2){
        return numbers
    }
    const middle = Math.floor(numbers.length / 2)
    const left = numbers.slice(0, middle)
    const right = numbers.slice(middle)
    return merge (
        mergeSort(left),
        mergeSort(right)
    )
}
function merge(left, right){
    debugger
    let result = []
    while(left.length && right.length){
        if(left[0] <= right[0]){
            result.push(left.shift())  
        } else { result.push(right.shift()) }
    }
    return result.concat(left, right)
}
let array = [-5, 2, -2, 8, 3]
// console.log(mergeSort(array))


///// Quick Sort
function quickSort(numbers){
    if(numbers.length <= 1) return numbers;
    const pivot = numbers[numbers.length - 1]
    const left = []
    const right = []

    for(let i = 0; i < numbers.length - 1; i++){
        if(numbers[i] < pivot){
            left.push(numbers[i])
        } else {
            right.push(numbers[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
console.log(quickSort(array))



/////////////// SQL ///////
/*
    Table - contacts

    id | first_name | last_name
    1  |  John      | Doe
*/

/// Model
    class Contact {
        constructor(name, last){
            this.name = name;
            this.last = last
        }
    }
/*
    SELECT first_name, last_name FROM contacts;
    SELECT * FROM contacts;  
*/

/*
    INSERT INTO contacts(first_name, last_name) VALUES('Jane', 'Jane')
*/
/*
    Table - contacts

    id | first_name | last_name
    1  |  John      | Doe
    2  |  Jane      | Jane
*/
    // UPDATE contacts SET first_name = 'New name' WHERE id = 2  
    // DELETE  from contacts WHERE id = 2; 
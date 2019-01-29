let text = document.querySelector('#textarea')
let count = document.querySelector('#count')

let letter = /\S/g        // str.match(/[A-z]/g).length
let lines = /\n/g        // str.match(/\n/g).length
let numbers = /\d/g     // str.replace(/[^0-9]/g, "").length
let words = /\s/g      // str.split(' ').length
let sentence = /\./g  // str.split('.').length - 1


count.addEventListener('click', function() {
    let textArea = text.value;
    
    let lettersResult = textArea.match(letter).length
    let linesResult = textArea.match(lines).length
    let numbersResult = textArea.match(numbers).length
    let wordsResult = textArea.match(words).length
    let sentenceResult = textArea.match(sentence).length

    console.log(`Letters: ${lettersResult}, Lines: ${linesResult}, Numbers: ${numbersResult}, Words: ${wordsResult}, Sentence: ${sentenceResult}`)
})
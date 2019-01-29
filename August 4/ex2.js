let numbers = []
let nums = $('#num');
let createNum;


function GenerateNumbers(){
    for(let i = 0; i <= 150; i++){
        numbers.push(i)
    }
}

function CreateNums(arr){
    nums.html('');
    for(let i = 1; i < arr.length; i++){
        createNum = document.createElement('span');
        createNum.textContent = arr[i];
        createNum.style.borderRadius = '10px';
        createNum.style.backgroundColor = 'pink';
        nums.append(createNum);
    }
}

GenerateNumbers()
CreateNums(numbers)

$('#btn1').on('click', function(event){
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i + 1);
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    console.log(numbers)

    CreateNums(numbers);

    $('span').click(function hidden(){
        $( this ).hide();
    })
})


$('#btn2').on('click', function(){
    numbers.sort((a, b) => a - b);
    CreateNums(numbers);

    $('span').click(function hidden(){
        $( this ).hide();
    })
});


$('#btn3').on('click', function(){
    numbers.sort((a, b) => b - a);
    CreateNums(numbers);

    $('span').click(function hidden(){
        $( this ).hide();
    })
});


$('span').click(function hidden(){
    $( this ).hide();
})
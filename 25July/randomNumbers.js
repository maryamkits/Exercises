let numbers = document.querySelector('.numbers').innerText.split(' ');

random.addEventListener('click', function(){
  let x = Math.floor(Math.random() * 20) + 1 ;
  let picked = document.querySelectorAll('.num')[x - 1];
  if(picked.style.backgroundColor == '') {
    picked.style.backgroundColor = 'pink';
  } else if(picked.style.backgroundColor == 'pink'){
    picked.style.backgroundColor = 'red';
  } else if(picked.style.backgroundColor == 'red'){
    picked.style.backgroundColor = 'violet';
  } else if (picked.style.backgroundColor == 'violet'){
    picked.style.backgroundColor = 'blue';
  } else if(picked.style.backgroundColor == 'blue'){
    picked.style.backgroundColor = '';
  }
})

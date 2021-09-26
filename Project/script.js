(()=>{
  // INSTANTIATE VARIABLES AND GRAB HTML ELEMENTS
  const progress = document.querySelector('.progress-bar'),
        prevBtn = document.getElementById('prev'),
        nextBtn = document.getElementById('next'),
        numbers = document.querySelectorAll('.numbers');
let active = 0,
    numbersArr = [];

// ADD EACH NUMBER TO AN ARRAY
numbers.forEach((number)=>{
  numbersArr.push(number);
});

// NEXT BUTTON EVENT LISTENER & FUNCTION
nextBtn.addEventListener('click', (e)=>{
forwardBar(active);
if(active < 3){
active++;
numbersArr[active].classList.add('active');
} 
});
function forwardBar(){
    if(active === 0){
      progress.style.width = '33%';
      prevBtn.disabled = false;
    } else if (active === 1 ){
      progress.style.width = '66%';
    } else if (active === 2 ){
      progress.style.width = '99%';
      nextBtn.disabled = true;
    } 
}

// PREV BUTTON EVENT LISTENER & FUNCTION
prevBtn.addEventListener('click', (e)=>{
backwardBar(active);
if(active > 0){
numbersArr[active].classList.remove('active');
active--;
}
});
function backwardBar(){
  if(active === 1){
    progress.style.width = '0%';
    prevBtn.disabled = true;
  } else if (active === 2 ){
    progress.style.width = '33%';
  } else if (active === 3 ){
    progress.style.width = '66%';
    nextBtn.disabled = false;
  }
}
})();
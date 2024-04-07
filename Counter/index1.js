const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.addEventListener('click', function(){
    number.innerHTML = parseInt(number.innerHTML) + 1;
    console.log('increase 가 클릭됨')
})

decrease.addEventListener('click', function(){
    number.innerHTML = parseInt(number.innerHTML) - 1;
    console.log('decrease 가 클릭됨')
})
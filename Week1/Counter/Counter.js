let number = document.getElementById('number'); /*number를 문자로 받아옴*/
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

increase.onclick = () => {
    console.log('increase가 클릭됨');
    /*문자열을 숫자로 변환 -> 텍스트 내용 변경*/
    const cur = parseInt(number.innerText, 10);
    number.innerText = cur + 1;
}

decrease.onclick = () => {
    console.log('decrease가 클릭됨');
    /*문자열을 숫자로 변환 -> 텍스트 내용 변경*/
    const cur = parseInt(number.innerText, 10);
    number.innerText = cur - 1;
}
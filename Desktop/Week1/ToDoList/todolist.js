const inputBox = document.getElementById('inputField');

/*
 add_div() 
 : Enter 키 누르면 addToDo에 추가될 하나의 div를 생성
 div에 inputBox.value추가, '완료' 버튼 추가
 '완료' 버튼 누르면 moveToDo에 연동
 */

function add_div(){
    const div = document.createElement('div');
    div.textContent = inputBox.value;
    div.classList.add('custom-div');
    const button = document.createElement('button');
    button.textContent = '완료';
    button.addEventListener('click', moveToDo);
    div.appendChild(button);
    document.getElementById('before').appendChild(div);
}

/*
addToDo
: Enter 키 누르면 add_div가 실행될 수 있도록 하는 method
*/

function addToDo(event){
    if (event.key == 'Enter'){
        if (inputBox.value != ""){
            add_div();
            inputBox.value = "";
        }
    }
}

/*
moveToDo
: '완료' 버튼이 눌리면 버튼의 내용을 '삭제'로 바꾸고
해낸 일에 추가되게 하는 method
*/

function moveToDo(event){
    const divToMove = event.target.parentElement;
    const button = divToMove.querySelector('button');
    button.textContent = '삭제';
    button.removeEventListener('click', moveToDo);
    button.addEventListener('click', removeToDo);
    document.getElementById('after').appendChild(divToMove);
}

/*
removeToDo
: 해낸 일에서 '삭제' 버튼을 누르면 완전 삭제되게 하는 method
*/

function removeToDo(event){
    const divToRemove = event.target.parentElement;
    divToRemove.remove();
}
const username = document.getElementById("name");
const email = document.getElementById("email");
const age = document.getElementById("age");
const password = document.getElementById("password");
const chpw = document.getElementById("chpw");
const signup = document.getElementById("signup");
const nameMessage = document.getElementById("nameMessage");
const emailMessage = document.getElementById("emailMessage");
const ageMessage = document.getElementById("ageMessage");
const pwMessage = document.getElementById("pwMessage");
const chpwMessage = document.getElementById("chpwMessage");
var pattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~@#$!%*?&])[a-zA-Z\d~@#$!%*?&]{8,}$/;
let nameValue = false;
let emailValue = false;
let ageValue = false;
let pwValue = false;
let chpwValue = false;

signup.addEventListener("click", function () {
    if (username.value.length < 1) {
        nameMessage.textContent = "필수 입력 항목입니다!";
        nameMessage.style.color = "red";
    } else{
        nameMessage.textContent = "멋진 이름이네요!";
        nameMessage.style.color = "green";
        nameValue = true;
    }

    if (email.value.includes('@')) {
        emailMessage.textContent = "올바른 이메일 형식입니다!";
        emailMessage.style.color = "green";
        emailValue = true;
    } else{
        emailMessage.textContent = "올바른 이메일 형식이 아닙니다!";
        emailMessage.style.color = "red";
    }

    if (isNaN(parseInt(age.value)) == false) {
        if (age.value < 0) {
            ageMessage.textContent = '나이는 음수가 될 수 없습니다!';
            ageMessage.style.color = 'red';
        }
        else {
            if (Number.isInteger(parseInt(age.value))) {
                ageMessage.textContent = '나이는 소수가 될 수 없습니다!';
                ageMessage.style.color = 'red';
            }
            if (age.value < 19) {
                ageMessage.textContent = '미성년자는 가입할 수 없습니다!';
                ageMessage.style.color = 'red';
            }
            else {
                ageMessage.textContent = '올바른 나이 형식입니다!';
                ageMessage.style.color = 'green';
                ageValue = true;
            }
        }

    } else {
        ageMessage.textContent = '나이는 숫자 형식이어야 합니다!'
        ageMessage.style.color = 'red';
    }

    if (password.value.length < 4){
        pwMessage.textContent = '비밀번호는 최소 4자리 이상이어야 합니다.';
        pwMessage.style.color = 'red';
    } else if (password.value.length > 12){
        pwMessage.textContent = '비밀번호는 최대 12자리까지 가능합니다.';
        pwMessage.style.color = 'red';
    } else {
        if ((!/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(password.value) && pattern.test(password.value)) == false) {
            pwMessage.textContent = '올바른 비밀번호 형식이 아닙니다.';
            pwMessage.style.color = 'red';
        }
        else {
            pwMessage.textContent = '올바른 비밀번호 입니다!';
            pwMessage.style.color = 'green';
            pwValue = true;
        }
    }

    if (password.value == chpw.value) {
        chpwMessage.textContent = '비밀번호가 일치합니다.';
        chpwMessage.style.color = 'green';
        chpwValue = true;
    }
    else {
        chpwMessage.textContent = '비밀번호가 일치하지 않습니다.';
        chpwMessage.style.color = 'red';
    }




});

const close = document.getElementById("close");
const modal = document.getElementById("modal-wrapper");

signup.onclick = () => { //Modal 조건
    if (nameValue && emailValue && ageValue && pwValue && chpwValue){
        modal.style.display = "flex";
    }
};

close.onclick = () => {
    modal.style.display = "none";
};

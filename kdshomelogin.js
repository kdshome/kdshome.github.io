const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-form-submit');
const loginErrorMsg = 'ID or PASSWORD error';
/* const loginErrorMsg = document.getElementById('login-error-msg'); */

function disableclick(event) {
  if (event.button == 2) {
    alert(status);
    return false;
  }
}

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === 'kdshome' && password === '0000') {
    alert('KDS HOME 방문을 환영 합니다.');
    location.href = 'https://kdshome.github.io/main01.html';
    /*  location.reload(); */
  } else if (username === 'kds11' && password === 'home11') {
    alert('KDS HOME 방문을 환영 합니다.');
    location.href = 'https://kdshome.github.io/main01.html';
  } else if (username === 'kds22' && password === 'home22') {
    alert('KDS HOME 방문을 환영 합니다.');
    location.href = 'https://kdshome.github.io/main01.html';
  } else {
    alert('아이디와 패스워드 다시 입력 하세요');
    loginErrorMsg.style.opacity = 1;
  }
});

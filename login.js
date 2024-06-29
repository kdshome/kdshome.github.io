const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-form-submit');
const loginErrorMsg = 'ID or PASSWORD error';
/* const loginErrorMsg = document.getElementById('login-error-msg'); */

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === 'kds' && password === 'home') {
    alert('KDS HOME 방문을 환영 합니다.');
    location.href = 'https://kdshome.github.io/main01.html';
    /*  location.reload(); */
  } else if (username === 'kds1' && password === 'home1') {
    alert('KDS HOME 방문을 환영 합니다.');
    location.href = 'https://kdshome.github.io/main01.html';
  } else if (username === 'kds2' && password === 'home2') {
    alert('KDS HOME 방문을 환영 합니다.');
    location.href = 'https://kdshome.github.io/main01.html';
  } else {
    alert('아이디와 패스워드 다시 입력 하세요');
    loginErrorMsg.style.opacity = 1;
  }
});

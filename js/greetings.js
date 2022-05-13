const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector("#login-form"); //브라우저에 해당 이름을 가진 요소 구하기
const loginInput = document.querySelector("#login-form input"); //#일 경우 ID
const greeting = document.querySelector("#greeting"); //.일 경우 class
const username = localStorage.getItem(USERNAME_KEY); //브라우저에서 제공하는 로컬 저장소의 데이터 받아오기

//저장소 데이터 있는지 여부 확인
if (username === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(username);
}

//Login버튼 동작
function onLoginSubmit(event) {
  event.preventDefault(); //브라우저의 기본동작 멈춤
  loginForm.classList.add(HIDDEN_CLASSNAME); //class에 해당 클래스 추가
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); //로컬 저장소에 데이터 저장(변수이름, 변수값)
  paintGreetings(username);
}

//greeting 출력
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

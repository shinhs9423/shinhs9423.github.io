window.addEventListener("load", function() {

  const $join = document.querySelector("#join");
  const $loginForm = document.querySelector("#login-form");
  const $loginInput = $loginForm.querySelector("input");
  
  function changeForm () {
    $join.innerText = `Hello, ${localStorage.getItem("userName")}`;
    // 화면 변경
    $join.classList.remove("hidden"); 
    $loginForm.classList.add("hidden");

    // 로그아웃 버튼 만들기
    $logout = document.createElement("button");
    $logout.innerText = "Logout";
    $join.appendChild($logout);

    $logoutBtn = $join.querySelector("button");
    $logoutBtn.addEventListener("click",logOut);
  }

// 초기화면
  if (localStorage.getItem("userName") != null) {  // 유저 네임 있으면!
    changeForm();
  }


  function loginSubmit (event) {
    event.preventDefault();
    
    // 로컬스토리지에 아이디 저장
    localStorage.setItem("userName",$loginInput.value);
    changeForm();

  }


  function logOut () {

    localStorage.removeItem("userName");
    $loginForm.classList.remove("hidden"); 
    $join.classList.add("hidden");
  }

  $loginForm.addEventListener("submit",loginSubmit);
})
window.addEventListener("load",function(){

  // Element Node 선택
  const toDoList = document.querySelector("#todo-list");
  const toDoForm = document.querySelector("#todo-form");
  const toDoInput = toDoForm.querySelector("input");

  // list 배열 만들기
  let toDos = [];

  // 로컬 스토리지 키 값 변수 설정
  const TODOS_KEY = "todos"

  // 로컬 스토리지에 toDos 배열 저장
  function saveToDos () {
    // 로컬 스토리지는 문자열만 저장할 수 있다... 그래서!!
    // JSON.stringify 와 JSON.parse를 이용한다!!!!!
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
  }
  

  // 버튼 이벤트 함수 만들기
  function deleteTodo (e) {
    // 버튼 부모 태그 찾기
    const li = e.target.parentElement;
    
    // li 삭제하기
    li.remove();

    // .filter를 이용해 선택된 id 제외하기
    toDos = toDos.filter( toDo => toDo.id !== parseInt(li.id) );
    // 선택된 id와 객체 배열의 id를 비교하고, id가 다르면 남겨줘

    // 로컬 스토리지의 배열 할당 호출
    saveToDos();
  }



  function paintToDo (newToDo) {

    // 태그 만들기
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    // li에 id 부여하기
    li.id = newToDo.id;

    // tag > textNode 만들기
    span.textContent = newToDo.text;
    button.textContent = 'X';

    // button Event 만들기
    button.addEventListener("click",deleteTodo);

    // li>tag 만들기
    li.appendChild(button);
    li.appendChild(span);

    // ul > li 추가하기
    toDoList.appendChild(li);
  }

  function handleToDoSubmit (e) {
    e.preventDefault();
    // input 값 받기
    const newToDo = toDoInput.value;
    // input 초기화
    toDoInput.value="";
    
    // 객체 만들기
    const newToDoObj = {
      text: newToDo,
      id: Date.now(),
    };

    // 배열에 값 추가하기
    toDos.push(newToDoObj);
    // li 추가 함수 호출
    paintToDo(newToDoObj);
    // 로컬스토리지 저장 함수 호출
    saveToDos();
  }

  toDoForm.addEventListener("submit",handleToDoSubmit);


  // 로컬 savedToDos를 받는다.
  let savedToDos = localStorage.getItem(TODOS_KEY);

  if (savedToDos !== null) { // 로컬에 savedToDos가 저장됐으면
    // 문자열을 실제 배열로 만든다.
    const parsedTodos = JSON.parse(savedToDos);
    // 변환한 배열을 toDos 배열에 넣는다
    toDos = parsedTodos;
    // 배열 반복문을 통해 화면에 뿌려준다
    parsedTodos.forEach(paintToDo);
  }




})
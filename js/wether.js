function onGeoOk (position) {
  // 변수 생성
  const API_KEY = "78f0c0a4966c785e024de575e089e8dc";
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // 변수 + URL 생성
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  console.log(url);
  //data parsing 이 끝나면(.then) respone의 json을 줘
  fetch(url).then(response => response.json())
  .then(data => {

    // node 선택
    const city = document.querySelector("#weather span.city");
    const max = document.querySelector("#weather span.max");
    const min = document.querySelector("#weather span.min");
    // 변수 만들기
    city.innerText = data.name;
    max.innerText = `max : ${data.main.temp_max}`;
    min.innerText = `min : ${data.main.temp_min}`;

  });
}

function onGeoError() {
  alert("Can't find you. No wether for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//78f0c0a4966c785e024de575e089e8dc

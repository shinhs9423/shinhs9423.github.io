window.addEventListener("load",function(){

  const $clock = document.querySelector("#clock dl");

  function timeReset () {
    const now = new Date();

    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth() + 1;
    const nowDay = now.getDate();
    const nowHour = String(now.getHours()).padStart(2,"0");
    const nowMinute = String(now.getMinutes()).padStart(2,"0");
    const nowSecond = String(now.getSeconds()).padStart(2,"0");

    $clock.innerHTML = `<dt>${nowYear}년 ${nowMonth}월 ${nowDay}일</dt>
    <dd>${nowHour}시 ${nowMinute}분 ${nowSecond}초</dd>`;
  }

  setInterval(timeReset, 1000);

})
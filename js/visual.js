window.addEventListener("load",function(){

  //총 이미지 수
  const images = 3;
  let cnt = 0;

  function resetVisual () {
    const visualBox = document.querySelector(".visual img");
    if (cnt<images-1) {
      cnt++;
    } else {
      cnt = 0;
    }

    visualBox.src = `./images/image_${cnt}.jpg`;

  }

  resetVisual();
  setInterval(resetVisual, 5000);

})
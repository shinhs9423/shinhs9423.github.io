window.addEventListener("load",function(){
  const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];


  let firstNum;
  let secondNum;
  let firstColor;
  let secondColor;

  function changeBackgroundColor() {
    do {
      firstNum = Math.round(Math.random() * colors.length);
      secondNum = Math.round(Math.random() * colors.length);
    } while (firstNum == secondNum);
    firstColor = colors[firstNum];
    secondColor = colors[secondNum];

    document.body.style.background = `linear-gradient(to left,${firstColor},${secondColor}`;
  }
  changeBackgroundColor();
  setInterval(changeBackgroundColor, 5000);

})
function createGhost() {
  const ghostElement = document.createElement("div");
  ghostElement.style.position = "absolute";
  ghostElement.style.top = "0px";

  let randomLeft = randomRange(0, BG_WIDTH - GHOST_WIDTH);
  ghostElement.style.left = randomLeft + "px";
  ghostElement.style.width = GHOST_WIDTH + "px";
  ghostElement.style.height = GHOST_HEIGHT + "px";
  ghostElement.style.background = "url('./images/ghost.png') no-repeat";

  bgElement.appendChild(ghostElement);

  // 이름이 없이 함수를 전달할 땐 function
  setInterval(function () {
    // 1. 고스트 요소 접근
    console.log(ghostElement);
    // 2. top 가져오기, 숫자 추출, 1+ px
    let ghostTopNumb = Number(ghostElement.style.top.split("px")[0]) + 15;

    if (ghostTopNumb > BG_HEIGHT - GHOST_HEIGHT) {
      ghostElement.remove();
      return;
    }
    ghostElement.style.top = ghostTopNumb + "px";
    // 4. 다시 할당
  }, 100);
}

createGhost();

setInterval(createGhost, 3000);

function randomRange(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

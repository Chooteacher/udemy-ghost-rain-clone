function createGhost() {
  const ghostElement = document.createElement("div");
  ghostElement.style.position = "absolute";
  ghostElement.style.top = "0px";

  let randomLeft = randomRange(0, BG_WIDTH - GHOST_WIDTH);
  ghostElement.style.left = randomLeft + "px";
  ghostElement.style.width = GHOST_WIDTH + "px";
  ghostElement.style.height = GHOST_HEIGHT + "px";
  ghostElement.style.background = "url('./images/ghost.png') no-repeat";

  ghostElement.className = "ghost";

  bgElement.appendChild(ghostElement);

  // 이름이 없이 함수를 전달할 땐 function
  setInterval(function () {
    //  top 가져오기, 숫자 추출, 1+ px
    let ghostTopNum = Number(ghostElement.style.top.split("px")[0]) + 13;
    let ghostLeftNum = Number(ghostElement.style.left.split("px")[0]);
    let heroLeftNum = Number(heroElement.style.left.split("px")[0]);

    if (ghostTopNum > BG_HEIGHT - (GHOST_HEIGHT + HERO_WIDTH)) {
      if (
        ghostLeftNum < heroLeftNum &&
        heroLeftNum < ghostLeftNum + GHOST_HEIGHT
      ) {
        killGhost(ghostElement);
        return;
      }
    }

    if (ghostTopNum > BG_HEIGHT - GHOST_HEIGHT) {
      ghostElement.remove();
      return;
    }
    ghostElement.style.top = ghostTopNum + "px";
    // 다시 할당
  }, 100);
}

function killGhost(ghostElement) {
  ghostElement.classList.add("die");
  ghostElement.style.backgroundPosition = "-45px";
  setTimeout(function () {
    ghostElement.remove();
  }, 1000);
}

createGhost();

setInterval(createGhost, 1000);

function randomRange(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function createGhost() {
  const ghostElement = document.createElement("div");

  ghostElement.style.position = "absolute";
  ghostElement.style.top = "0px";

  let randomLeft = randomNumb();
  ghostElement.style.left = randomLeft + "px";
  ghostElement.style.width = GHOST_WIDTH + "px";
  ghostElement.style.height = GHOST_HEIGHT + "px";
  ghostElement.style.background = "url('./images/ghost.png') no-repeat";

  bgElement.appendChild(ghostElement);
}

createGhost();

function randomNumb() {
  let randomNumUnder755 = Math.floor(Math.random() * 720);

  return randomNumUnder755;
}

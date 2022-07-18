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
}

createGhost();

function randomRange(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

// 키 이벤트를 발생
document.addEventListener("keyup", function () {
  heroElement.className = "stop";
});

document.addEventListener("keydown", function (e) {
  console.log(e.keyCode);

  // hero html에 style이 없기때문에 getComputedStyle를 사용
  const heroLeft = getComputedStyle(heroElement).left;
  console.log("용사의 왼쪽 값 => ", heroLeft);

  // split는 문자 변수에서 사용 가능 이 코드에선 "px" 기준으로 나누고 배열을 만들었음
  // heroLeft.split("px")[0] 는 문자열이라 숫자로 바꿔줘야 함 Number()를 사용
  const heroLeftWithoutPx = Number(heroLeft.split("px")[0]);
  console.log(
    "heroLeftWithoutPx => ",
    typeof heroLeftWithoutPx,
    heroLeftWithoutPx
  );

  // 용사의 left가 0보다 작아지거나 or 765(BG_WIDTH - BG_HEIGHT)보다 커질 때
  if (
    (heroLeftWithoutPx < 0 && e.keyCode === 37) ||
    (heroLeftWithoutPx > 718 && e.keyCode === 39)
  ) {
    // return 함수를 종료
    return;
  }

  // 왼쪽 37, 오른쪽 39
  if (e.keyCode === 37) {
    // left 0
    heroElement.style.left = heroLeftWithoutPx - 10 + "px";
    heroElement.className = "left";
  } else if (e.keyCode === 39) {
    heroElement.style.left = heroLeftWithoutPx + 9 + "px";
    heroElement.className = "right";

    // left 720
  }
});

// width: 49px; 가로길이
// height: 57px; 세로길이

// 키 이벤트를 발생
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

  // 왼쪽 37, 오른쪽 39
  if (e.keyCode === 37) {
    // left 0
    heroElement.style.left = heroLeftWithoutPx - 10 + "px";
    // console.log("용사의 왼쪽 값 -1 => ", heroLeftWithoutPx - 1);
  } else if (e.keyCode === 39) {
    heroElement.style.left = heroLeftWithoutPx + 10 + "px";
    // console.log("용사의 왼쪽 값 +1 => ", heroLeftWithoutPx + 1);
    // left 720
  }
});

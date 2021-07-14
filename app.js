const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d"); // 2d로 context 생성

// canvas width, height 지정
canvas.width = 700;
canvas.height = 700;

// 초기 색상, 두께 설정
ctx.storkeStyle = "#2c2c2c"; // 시작색을 첫번째 색으로 지정
ctx.lineWidth = 2.5; // 시작 선두께를 range 기본 값(2.5)로 지정

let painting = false; // painting 상태(여부)

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  // clientX,Y: 윈도우 전체 범위 내 마우스 좌표
  // offsetX,Y: 캔버스 내 마우스 좌표
  const x = event.offsetX;
  const y = event.offsetY;

  // 마우스 누르지 않고 캔버스 내에 움직일 때
  if (!painting) {
    // path = 선
    ctx.beginPath(); //path 생성
    ctx.moveTo(x, y); // (x, y)에서
  } else {
    // 마우스를 누른 상태에서 캔버스 내에 움직일 때
    ctx.lineTo(x, y); // (x,y)까지 직선을 그림
    ctx.stroke(); // 선 그리기(선 종류 지정)
  }
}

function onMouseDown(event) {
  painting = true; // 마우스 click 시작했을 때 paint상태로
}

/*
function onMouseUp(event) {
  stopPainting();
}*/

// 캔버스 존재 여부 검사
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove); // 마우스 컨버스 내 움직일 때
  canvas.addEventListener("mousedown", startPainting); // 마우스를 떼지 않고 클릭할 때
  canvas.addEventListener("mouseup", stopPainting); // 마우스를 떼었을 때
  canvas.addEventListener("mouseleave", stopPainting); // 마우스 캔버스 벗어났을 때
}

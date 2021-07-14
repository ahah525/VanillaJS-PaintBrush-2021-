const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d"); // 2d로 context 생성

const colors = document.getElementsByClassName("jsColor");

// canvas width, height 지정
canvas.width = 700;
canvas.height = 700;

// 캔버스 내 모든 색상, 두께 설정
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
    ctx.moveTo(x, y); // (x, y)로 paht를 옮김
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

function handleColorClick(event) {
  // 버튼 클릭시, 해당 색상으로 변경
  ctx.strokeStyle = event.target.style.backgroundColor;
  //console.log(event);
}

// 캔버스 존재 여부 검사
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove); // 마우스 컨버스 내 움직일 때
  canvas.addEventListener("mousedown", startPainting); // 마우스를 떼지 않고 클릭할 때
  canvas.addEventListener("mouseup", stopPainting); // 마우스를 떼었을 때
  canvas.addEventListener("mouseleave", stopPainting); // 마우스 캔버스 벗어났을 때
}

// Array.from(object): object->Array 생성
//console.log(Array.from(colors));

// 각 색상 버튼 click evnet 설정
Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

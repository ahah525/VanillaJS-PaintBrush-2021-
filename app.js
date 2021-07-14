const canvas = document.getElementById("jsCanvas");
let painting = false; // painting 상태(여부)

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  // clientX,Y: 윈도우 전체 범위 내 마우스 좌표
  // offsetX,Y: 캔버스 내 마우스 좌표
  const x = event.offsetX;
  const y = event.offsetY;
}

function onMouseDown(event) {
  painting = true; // 마우스 click 시작했을 때 paint상태로
}

function onMouseUp(event) {
  stopPainting();
}

// 캔버스 존재 여부 검사
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove); // 마우스 컨버스 내 움직일 때
  canvas.addEventListener("mousedown", onMouseDown); // 마우스를 떼지 않고 클릭할 때
  canvas.addEventListener("mouseup", onMouseUp); // 마우스를 떼었을 때
  canvas.addEventListener("mouseleave", stopPainting); // 마우스 캔버스 벗어났을 때
}

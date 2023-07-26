const el = document.getElementById("status");
el.textContent = "Ready";
// ~~ 개체가 'null'인 것 같습니다.

if (el) {
  el.textContent = "Ready"; //정상 , null 은 제외됩니다.
}
el!.textContent = "Ready"; // 정상, el이 null이 아님을 단언합니다.
// assertion or if 문체크를 해줘야함
// 처음에는 설정하길 권장, 하지만 마이그레이션시 오히려 시간을 잡아먹기에 비 권장

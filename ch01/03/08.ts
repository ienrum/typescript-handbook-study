function setLightSwitch(value: boolean) {
  switch (value) {
    case true:
      turnLightOn();
      break;
    case false:
      turnLightOff();
      break;
    default:
      console.log("실행될까?");
  }
}
// value 는 타입 체크만 하기에 런타임시 어떤 값이들어올지모르기에 오류발생가능하다.

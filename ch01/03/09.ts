interface LightApiResponse {
  lightSwitchValue: boolean;
}
async function setLight() {
  const response = await fetch("light");
  const result: LightApiResponse = await response.json();
  setLightSwitch(result.lightSwitchValue);
}

// LightApiReponse 타입이 오길 바라지만 실제로 뭐가 올지모른다.

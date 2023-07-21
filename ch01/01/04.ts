const states = [
  { name: "Alabama", capitol: "Montgomery" },
  { name: "Alaska", capitol: "Juneau" },
  { name: "Arizona", capitol: "Phoenix" },
  //...
];

for (const state of states) {
  console.log(state.capital);
  // ~~~~~~~ Property 'capital' does not exist on type
  //         Did you mean 'capitol'?
}

// 오류 원인은 추측 가능하지만, 의도한 대로 동작하지 않는다.

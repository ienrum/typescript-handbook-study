interface State {
  name: string;
  capital: string;
}
const states: State[] = [
  { name: "Alabama", capitol: "Montgomery" },
  // ~~~~~~~~~~~~~~
  { name: "Alaska", capitol: "Juneau" },
  // ~~~~~~~~~~~~~~
  { name: "Arizona", capitol: "Phoenix" },
  // ~~~~~~~ Property 'capitol' does not exist on type
  //         Did you mean 'capital'?
  //...
];

for (const state of states) {
  console.log(state.capital);
}

// 오류를 의도에 맞게 잡아낸다. interface로 의도를 명확하게

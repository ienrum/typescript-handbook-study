const states = [
  { name: "Alabama", capital: "Montgomery" },
  { name: "Alaska", capital: "Juneau" },
  { name: "Arizona", capital: "Phoenix" },
  //...
];

for (const state of states) {
  console.log(state.capitol);
  // ~~~~~~~ Property 'capitol' does not exist on type
  //         Did you mean 'capital'?
}

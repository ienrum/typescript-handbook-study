function email(options: { person: Person; subject: string; body: string }) {
  //...
}
// 구조 분해

//js
function email({ person, subject, body }) {
  //...
}

//ts
function email({ person: Person, subjet: string, body: string });
// 이는 값의 관점에 서 해석된다. 즉 Person,string,string 은 값으로 해석된다.

function email({
  person,
  subject,
  body,
}: {
  person: Person;
  subject: string;
  body: string;
}) {
  //...
}

// 그래서 추론 할수있도록 이렇게 변경해줘야한다.

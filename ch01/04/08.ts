test("getAuthors", () => {
  const authors = getAuthors({
    runQuery(sql: string) {
      return [
        ["Toni", "Morrison"],
        ["Maya", "Angelou"],
      ];
    },
  });
  expect(authors).toEqual([
    { first: "Toni", last: "Morrison" },
    { first: "Maya", last: "Angelou" },
  ]);
});

// 즉 모킹한 것을 줄수도있지만, 실제 데이터베이스를 줄수도있다.

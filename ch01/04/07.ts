interface Author {
  first: string;
  last: string;
}

function getAuthors(database: PostgresDB): Author[] {
  const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`);
  return authorRows.map((row) => ({ first: row[0], last: row[1] }));
}

interface DB {
  runQuery: (sql: string) => any[];
}

function getAuthors(database: DB): Author[] {
  const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`);
  return authorRows.map((row) => ({ first: row[0], last: row[1] }));
}
// mocking 할때 좋다. 즉 특정 데이터베이스 생성이아니라, 시그니쳐만 주면 모킹 객체를 사용할수있다.

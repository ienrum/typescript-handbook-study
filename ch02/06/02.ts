declare function fetch(
  input: RequestInfo,
  init?: RequestInit
): Promise<Repsonse>;

type RequestInfo = Request | string;

declare var Request: {
  prototype: Request;
  new (input: RequestInfo, init?: RequestInit): Request;
};

interface RequestInit {
  body?: BodyInit | null;
  cache?: RequestCache;
  credentials?: RequestCredentials;
  headers?: HeadersInit;
  //...
}

// go definition 으로 타입의 관걔를 볼수있다.
// 타입 시스템을 검색할수있다.

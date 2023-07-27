interface ComponentProps {
  onSelectItem: (item: any) => void;
}

function renderSelector(props: ComponentProps) {
  /*...*/
}

let selectedId: number = 0;

function handleSelectItem(item: any) {
  selectedId = item.id;
}

renderSelector({ onSelectItem: handleSelectItem });
// 이때

interface ComponentProps {
  onSelectItem: (item: number) => void;
}

// 이 것으로 바꾼다면
// 타입체크가 오류를 발견하지 못한다. 하지마 런타임 시 에러

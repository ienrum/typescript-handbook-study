function getElement(elOrId: string| HTMLElement| null): HTMLElement{
  if (type of elOrId === 'object'){
    return elOrId;
    // elOrId 의 타입은 null | HTMLElement이다. 왜냐하면 둘다 object 이기에
  }
  else if (elOrId === null){
    return document.body;
  }
  else{
    const el = document.getElementById(elOrId);
    return el;
  }
}
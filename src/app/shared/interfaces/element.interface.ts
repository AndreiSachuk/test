export class Child {
  id: string;
  color: string;

  constructor(id: string, color: string) {
    this.id = id;
    this.color = color;
  }
}

export class Element {
  id: string;
  int: number;
  float: string;
  color: string;
  child: Child;

  constructor(
    id: string,
    int: number,
    float: string,
    color: string,
    child: Child
  ) {
    this.id = id;
    this.int = int;
    this.float = float;
    this.color = color;
    this.child = child;
  }
}

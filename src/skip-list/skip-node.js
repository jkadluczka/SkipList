const DEFAULT_HEIGHT = 10;

export class SkipNode {
  constructor (value, height = DEFAULT_HEIGHT) {
    this.value = value;         //value of node
    this.stack = {};

    for (let h = 0; h < height; h++) {
      this.stack[h + 1] = null;
    }
  }

  get height () {
    return Object.keys(this.stack).length;
  }
}

const DEFAULT_HEIGHT = 10;

export class SkipNode {
  constructor (value, height = DEFAULT_HEIGHT) {
    this.value = value;                     //value of node
    this.stack = {};                        //Poiters declared as objects

    for (let h = 0; h < height; h++) {    //setting all pointers at 'null'
      this.stack[h + 1] = null;
    }
  }

  get height () {
    return Object.keys(this.stack).length;    //height getter
  }
}

export class SkipNode {
  constructor (value, height) {
    this.value = value;         //value of node
    this.maxHeight = height;
    this.height = SkipNode.generateHeight(height); //random height of node
    this.stack = [];              //stack of pointers, includes value of next nodes ( i guess, we will see about that)
  }

  static generateHeight (value) {       //just another RNG
    if (value === undefined) {
      value = 10;
    }
    return Math.floor(Math.random() * (value - 1) + 1);
  }

}

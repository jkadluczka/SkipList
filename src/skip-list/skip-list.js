import { SkipNode } from './skip-node';

export class SkipList {
  constructor () {
    this.head = new SkipNode();               //Generating head of SkipList
    this.head.stack.length = this.head.maxHeight;
  }

  find (node) {
    let index = this.head.stack.length;
    let iterator;

    if (!(node instanceof SkipNode)) {
      node = new SkipNode(node);
    }

    while (this.head.stack[index] === null) {
      index--;
    }

    iterator = this.head.stack[index];

    while (iterator.stack[index] !== null && iterator.stack[index] !== node) {
      if (iterator.stack[index].value < node.value) {
        iterator = iterator.stack[index];
      } else {
        index--;
      }
    }

    return iterator.stack[index];
  }

  add (node) {
    let index = this.head.maxHeight;

    if (!(node instanceof SkipNode)) {
      node = new SkipNode(node);
    }

    if (this.head.stack[0] === null) {   //Case when list is empty
      for (let i = 0; i < node.height; i++) {
        this.head.stack[i] = node.stack[i];
      }
    } else {                                //Looking for node b4 insertion
      while (this.head.stack[index] === null) {
        index--;
      }

      iterator = this.head.stack[index];

      while (iterator.stack[index] !== null && iterator.stack[index] < node &&
      index > 0) {
        if (iterator.stack[index].value !== node.value) {
          iterator = iterator.stack[index];
        } else {
          index--;
        }
      }
      for (let j = 0; j < node.height; j++) {
        node.stack[j] = iterator.stack[j];
      }
      for (let k = 0; k < node.height; k++) {
        iterator.stack[j] = node;
      }
    }

  }

  remove (node) {
    if (!(node instanceof SkipNode)) {
      node = new SkipNode(node);
    }
    if (this.head.stack[0] === null) {   //Case when list is empty
      for (let i = 0; i < node.height; i++) {
        this.head.stack[i] = node.stack[i];
      }
    } else {                                //Looking for node b4 insertion
      while (this.head.stack[index] === null) {
        index--;
      }

      iterator = this.head.stack[index];

      while (iterator.stack[index] !== null && iterator.stack[index] < node &&
      index > 0) {
        if (iterator.stack[index].value !== node.value) {
          iterator = iterator.stack[index];
        } else {
          index--;
        }
      }
      for (let j = 0; j < node.height; j++) {
        iterator.stack[j] = node.stack[j];

      }
    }
  }
}
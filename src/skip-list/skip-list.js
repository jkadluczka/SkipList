import { SkipNode } from './skip-node';

export class SkipList {
  constructor () {
    this.head = new SkipNode(null, 10);               //Generating head of SkipList
  }

  toString () {
    let string = ' ';
    let node = this.head.stack[0];
while(node.stack[0] !==null)
{
  string +=node.value+'('+node.height+')'+' ->';
  node =node.stack[0];
}
    return string;
  }

  generateHeight () {
    return Math.floor(Math.random() * (10+1) -1)+1 ;
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
    let index = this.head.height - 1;
    let iterator = this.head;

    if (!(node instanceof SkipNode)) {
      node = new SkipNode(node, this.generateHeight());
    }
    while (index > 0 && iterator.stack[index] === null) {
      index--;
    }
    while (iterator.stack[index] !== null && index > 0) {
      if (iterator.stack[index].value < node.value) {
        iterator = iterator.stack[index];
      } else {
        index--;
      }
    }
     if (node.height > iterator.height) {
       for (let i = iterator.height; i < node.height; i++) {
         this.head.stack[i] = node.stack[i];
       }
     }

    for (let j = 0; j < node.height; j++) {
      node.stack[j] = iterator.stack[j];
    }
    for (let k = 0; k < node.height; k++) {
      iterator.stack[k] = node;
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
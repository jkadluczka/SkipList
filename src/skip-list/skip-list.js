import { SkipNode } from './skip-node';

export class SkipList {
  constructor () {
    this.head = new SkipNode(null, 10);               //Generating head of SkipList
  }

  toArray () {                                       //Generating string of nodes to print
    let array = [];                                 //Creating empty node b'cuz if empty "undefined" printing always on beggining "might wanna fix that"
    let node = this.head.stack[0];                    //Creating node iterator
    while (node !== null) {
      array.push(node.value + '('+ node.height + ')');
      node = node.stack[0];
    }
    return array;
  }

  toString () {
    return this.toArray().join('->');
  }

  generateHeight () {
    return Math.floor(Math.random() * 10) + 1;
  }


  add (node) {
    let index = this.head.height - 1;     //Iterator for hopping on nodes
    let iterator = this.head;             //node starting whole operation
    let history = [];

    if (!(node instanceof SkipNode)) {
      node = new SkipNode(node, this.generateHeight());   //Generating new instance of node from "node: argument
    }
    while (index >= 0) { //Loop for jumping down
      while (iterator.stack[index] !== null &&
      iterator.stack[index].value < node.value) {      //Loop for jumping right
        iterator = iterator.stack[index];
      }
      history[index] = iterator;
      index--;
    }

    for (let i = 0; i < node.height; i++) {
      node.stack[i] = history[i].stack[i];
    }
    for (let i = 0; i < node.height; i++) {
      history[i].stack[i] = node;
    }
  }
  find(value)
  {

  }

  remove (node) {
    let index = this.head.height - 1;     //Iterator for hopping on nodes
    let iterator = this.head;             //node starting whole operation
    let history = [];

    while (index >= 0) { //Loop for jumping down
      while (iterator.stack[index] !== null &&
      iterator.stack[index].value < node.value) {      //Loop for jumping right
        iterator = iterator.stack[index];
      }
      history[index] = iterator;
      index--;
    }

    for (let i = 0; i < node.height; i++) {
      history[i].stack[i] = node.stack[i];
    }
  }
}
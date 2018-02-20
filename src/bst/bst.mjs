import { Node } from './node';

const COMPARATOR = (a, b) => a > b;
const DEFAULT_ARGS = {
  comparator: COMPARATOR,
};

export class Bst {
  constructor ({comparator} = DEFAULT_ARGS) {
    this.root = null;
    this.compare = comparator;
  }

  add (node) {
    let iterator = this.root;

    if (!(node instanceof Node)) {
      node = new Node(node);
    }
    if (this.root === null) {
      this.root = node;
    } else {

      while (iterator !== null) {
        if (this.compare(node.value, iterator.value)) {
          if (iterator.rightChild !== null) {
            iterator = iterator.rightChild;
          } else {
            iterator.rightChild = node;
            node.parent = iterator;
            break;
          }
        } else if (this.compare(iterator.value, node.value)) {
          if (iterator.leftChild !== null) {
            iterator = iterator.leftChild;
          } else {
            iterator.leftChild = node;
            node.parent = iterator;
            break;
          }
        }

      }
    }
  }

  find (node) {
    let iterator = this.root;

    while (node === null) {
      if (iterator.value === node.value) {
        node = iterator;
        break;
      } else if (node.value > iterator.value) {
        if (iterator.rightChild !== null) {
          iterator = iterator.rightChild;
        } else {
          node = iterator;
          break;
        }
      } else if (node.value < iterator.value) {
        if (iterator.leftChild !== null) {
          iterator = iterator.leftChild;
        } else {
          node = iterator;
          break;
        }
      }
    }

    return node;
  }

  _findSuccessor (node) {
    let iterator = this.find(node);
    if (iterator.rightChild !== null) {

    } else {

    }
  }

  _findPredecessor (node) {
    let iterator = this.find(node);
  }

  toArray () {

  }

  toString () {

  }

  balance () {

  }
}
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

    if (!(node instanceof Node)) {
      node = new Node(node);
    }

    while (node !== iterator) {
      if (this.compare(node.value, iterator.value)) {
        if (iterator.rightChild !== null) {
          iterator = iterator.rightChild;
        } else {
          node = iterator;
          break;
        }
      } else if (this.compare(iterator.value, node.value)) {
        if (iterator.leftChild !== null) {
          iterator = iterator.leftChild;
        } else {
          node = iterator;
          break;
        }
      } else {
        node = iterator;
      }
    }
    return node;
  }

  _findSuccessor (node) {
    let iterator = this.find(node);
    let leftChild;

    if (iterator.rightChild !== null) {
      iterator = iterator.rightChild;
      while (iterator.leftChild !== null) {
        iterator = iterator.leftChild;
      }
      return iterator;
    } else {
      while (iterator.leftChild !== leftChild) {
        leftChild = iterator;
        iterator = iterator.parent;
        if (iterator === null) {
          break;
        }
      }
      if (iterator === null) {
        return 'No predecessor found';
      } else {
        return iterator;
      }
    }
  }

  _findPredecessor (node) {
    let iterator = this.find(node);
    let rightChild;

    if (iterator.leftChild !== null) {
      iterator = iterator.leftChild;
      while (iterator.rightChild !== null) {
        iterator = iterator.rightChild;
      }
      return iterator;
    } else {
      while (iterator.rightChild !== rightChild) {
        rightChild = iterator;
        iterator = iterator.parent;
        if (iterator === null) {
          break;
        }
      }
      if (iterator === null) {
        return 'No predecessor found';
      } else {
        return iterator;
      }
    }
  }

  remove (node) {
    let iterator = this.find(node);
    let successor = this._findSuccessor(iterator);

    if (iterator.leftChild === null && iterator.leftChild === null) {
      if (iterator.parent.leftChild === iterator) {
        iterator = iterator.parent;
        iterator.leftChild = null;
      } else {
        iterator = iterator.parent;
        iterator.rightChild = null;
      }
    } else if ((!(iterator.leftChild === null) && iterator.rightChild ===
        null) ||
      (!(iterator.rightChild === null) && iterator.leftChild === null)) {
      if (iterator.leftChild === null) {
        if (iterator.parent.leftChild === iterator) {
          iterator.parent.leftChild = iterator.rightChild;
          iterator.rightChild.parent = iterator.parent;
        } else {
          iterator.parent.rightChild = iterator.rightChild;
          iterator.rightChild.parent = iterator.parent;
        }
      } else {
        if (iterator.parent.leftChild === iterator) {
          iterator.parent.leftChild = iterator.leftChild;
          iterator.leftChild.parent = iterator.parent;
        } else {
          iterator.parent.rightChild = iterator.leftChild;
          iterator.leftChild.parent = iterator.parent;
        }
      }
    } else {
      iterator.value = successor.value;
      successor = this.find(successor);
      successor.parent = null;
    }

  }

  toArray () {

  }

  toString () {

  }

  balance () {

  }
}
import { Node } from './node';

const COMPARATOR = (a, b) => a - b;   //Comparator used in add method
const DEFAULT_ARGS = {
  comparator: COMPARATOR,
};
const SORT_ASC = 'asc';

export class BST {
  constructor ({comparator} = DEFAULT_ARGS) {
    this.root = null;
    this.compare = comparator;
  }

  findMin (node) {
    while (node.leftChild !== null) {
      node = node.leftChild;
    }

    return node;
  }

  findMax (node) {
    while (node.rightChild !== null) {
      node = node.rightChild;
    }

    return node;
  }

  /**
   * Method adding new nodes to Binary Search Tree.
   * Used custom comparator (line 3)
   * Method is looking for place to insert new node, then connecting it with parent
   * Method is adding new nodes without balancing it, so same nods in different
   * order can give different results.
   * @param node
   */
  add (node) {
    // Creating iterator to move through nodes of tree
    let iterator = this.root;

    // If arg."node" is not instance od Node, it becomes one
    if (!(node instanceof Node)) {
      node = new Node(node);
    }
    // Checking if root is empty so node can be start of tree
    if (this.root === null) {
      this.root = node;

      return this;
    }

    /**
     * Looping actions while we are still on node
     * (which means we are still looking for place)
     */
    while (iterator !== null) {
      /**
       * One of 3 cases = inserted node value is greater than value
       */
      if (this.compare(node.value, iterator.value) > 0) {
        if (iterator.rightChild !== null) {
          iterator = iterator.rightChild;
        } else {
          iterator.rightChild = node;
          node.parent = iterator;

          return this;
        }
      } else if (this.compare(iterator.value, node.value) > 0) {
        if (iterator.leftChild !== null) {
          iterator = iterator.leftChild;
        } else {
          iterator.leftChild = node;
          node.parent = iterator;

          return this;
        }
      }
      else if (this.compare(iterator.value, node.value) === 0) {
        return this;
      }
    }
  }

  find (node) {
    let iterator = this.root;

    if (!(node instanceof Node)) {
      node = new Node(node);
    }

    while (node !== iterator) {
      if (this.compare(node.value, iterator.value) > 0) {
        if (iterator.rightChild !== null) {
          iterator = iterator.rightChild;
        } else {
          node = iterator;
          break;
        }
      } else if (this.compare(iterator.value, node.value) > 0) {
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

  _findSuccessor (iterator) {
    if (iterator.rightChild !== null) {
      iterator = iterator.rightChild;
      iterator = this.findMin(iterator);
      return iterator;
    } else {
      while (iterator.parent.leftChild !== iterator) {
        iterator = iterator.parent;
        if (iterator === null) {
          break;
        }
      }

      return iterator.parent;
    }
  }

  _findPredecessor (iterator) {

    if (iterator.leftChild !== null) {
      iterator = iterator.leftChild;
      iterator = this.findMax(iterator);
      return iterator;
    } else {
      while (iterator.parent.rightChild !== iterator) {
        iterator = iterator.parent;
        if (iterator === null) {
          break;
        }
      }
        return iterator.parent;
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
        if (iterator === this.root) {
          this.root = this.root.leftChild;
        } else {
          if (iterator.parent.leftChild === iterator) {
            iterator.parent.leftChild = iterator.rightChild;
            iterator.rightChild.parent = iterator.parent;
          } else {
            iterator.parent.rightChild = iterator.rightChild;
            iterator.rightChild.parent = iterator.parent;
          }
        }
      } else {
        if (iterator === this.root) {
          this.root = this.root.leftChild;
          this.root.parent = null;
        } else {
          if (iterator.parent.leftChild === iterator) {
            iterator.parent.leftChild = iterator.leftChild;
            iterator.leftChild.parent = iterator.parent;
          } else {
            iterator.parent.rightChild = iterator.leftChild;
            iterator.leftChild.parent = iterator.parent;
          }
        }
      }
    } else {
      iterator.value = successor.value;
      successor = this.find(successor);
      successor.parent = null;
    }

  }

  toArray (sort = SORT_ASC) {
    const array = [];
    const next = sort === SORT_ASC ? this._findSuccessor : this._findPredecessor;
    let iterator = sort === SORT_ASC ? this.findMin(this.root) : this.findMax(this.root);

    while (iterator !== null) {
      array.push(iterator.value);
      iterator = next(iterator);
    }

    return array;
  }

  toString () {
    return this.toArray().join(' ');
  }

  balance () {

  }
}
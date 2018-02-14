import { Node } from './node';

/**
 * Linked list class, defining constructor with add, remove, find, toString and toArray methods
 */
export class List {
  /**
   *Constructor defining root as null and default comparator (possible overwrite by passing an argument)
   * @param comp
   */
  constructor (comp) {
    this.root = null;                   //Constructor is using one node and sets it as root of list
    this.comparator = comp;
    if (this.comparator === undefined) {
      this.comparator = (node1, node2) => {
        if (node1 > node2) {
          return 1;
        }
        else if (node1 < node2) {
          return -1;
        }
        else {
          return 0;
        }
      };
    }

  }

  /**
   * Function looking for matching node using value
   * @param value
   * @returns {Node}
   */
  find (value) {
    if (!(value instanceof Node)) {         //Checking if "value" is instance of Node
      value = new Node(value);            //If not, creating new Node named "value" with .value equals to function argument
    }
    let node = this.root;                   //Creating new Node for operations on list
    while (value.value !== node.value) {    //Looking fot matching values
      node = node.next;                   //If values are not matching its moving on to next node
    }
    return node;
  }

  /**
   * Function adding node to list
   * @param value
   */
  add (value) {
    let node = this.root;               //Creating new Node for operations on list

    if (!(value instanceof Node)) {     //Checking if "value" is instance of Node
      value = new Node(value);        //If not, creating new Node named "value" with .value equals to function argument
    }
    if (this.root === null) {
      this.root = value;
      node = value;
    }
    else {
      if (this.comparator(value, node) === -1) { //Checking if inserted node would not become new root
        value.next = node;                     //If so, "value" node becomes root
        this.root = value;
      }
      else {
        while (node.next !== null &&
        this.comparator(node.next.value, value.value) === -1) { //Navigating to the node which woulde be just right before insertion.
          node = node.next;                                                    //In the same time checking if we didnt get to the end of the list
        }
        value.next = node.next;          //Changing node pointers so insertion would be complete
        node.next = value;
      }
    }

  }

  /**
   * Function deleting particular node
   * @param value
   */
  remove (value) {
    let node = this.root;           //Creating new Node for operations on list

    if (!(value instanceof Node)) { //Checking if "value" is instance of Node
      value = this.find(value);   //If not, creating new Node named "value" with .value equals to function argumen
    }
    if (value === this.root) {      //Checking if node that we want to delete isn't root
      this.root = this.root.next; //If so, reassigning root
    }
    else {
      while (this.comparator(node.next.value, value.value) === -1) {     //Navigating to node right before one to delete
        node = node.next;
      }
      node.next = value.next;                     //Changing node pointer so node deleting is complete
    }
  }

  /**
   * Function converting list to array
   * @returns {Array}
   */
  toArray () {
    let node = this.root;           //Creating new Node for operations on list
    let array = [];                 //Creating array to return

    while (node !== null) {         //While there ase nodes left in list values of nodes are added to array
      array.push(node.value);
      node = node.next;
    }
    return array;
  }

  /**
   * Function converting list to array
   * @returns {string}
   */
  toString () {
    return this.toArray().join(', ');    //Converting array of values to string using join() method
  }
}
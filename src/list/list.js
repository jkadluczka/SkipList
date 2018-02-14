import {Node} from './list/node';

export class List {
    constructor(node) {                 //Constructor is using one node and sets it as root of list
        this.root = node;
    }

    /**
     * Function looking for matching node using value
     * @param value
     * @returns {Node}
     */
    find(value) {
        if (!(value instanceof Node)) { //Checking if "value" is instance of Node
            value = new Node(value);    //If not, creating new Node named "value" with .value equals to function argument
        }
        let node = new Node(0);         //Creating new Node for operations on list
        node = this.root;

        while (value.value !== node.value) {    //looking fot matching values
            node = node.next;                   //if values are not matching its moving on to next node
        }
        return node;
    }

    /**
     * Function adding node to list
     * @param value
     */
    add(value) {
        if (!(value instanceof Node)) { //Checking if "value" is instance of Node
            value = new Node(value);    //If not, creating new Node named "value" with .value equals to function argument
        }
        let node = new Node(0);         //Creating new Node for operations on list
        node = this.root;

        if (value.value < node.value) { //Checking if inserted node would not become new root
            value.next = node;          //if so, "value" node becomes root
            this.root = value
        }
        else {
            while (node.next !== null && node.next.value < value.value) {  //Navigating to the node which woulde be just right before insertion.
                node = node.next;                                          // in the same time checking if we didnt get to the end of the list
            }

            value.next = node.next;      //Changing node pointers so insertion would be complete
            node.next = value;
        }
    }

    /**
     * Function deleting particular node
     * @param value
     */
    delete(value) {

        if (!(value instanceof Node)) { //Checking if "value" is instance of Node
            value = this.find(value);   //If not, creating new Node named "value" with .value equals to function argumen
        }
        let node = new Node(0);         //Creating new Node for operations on list
        node = this.root;

        if (value === this.root) {      //Checking if node that we want to delete isn't root
            this.root = this.root.next; //If so, reassigning root
        }
        else {
            while (node.next.value < value.value) {     //Navigating to node right before one to delete
                node = node.next;
            }
            node.next = value.next;                     //Changing node pointer so node deleting is complete
        }
    }

    /**
     * Function converting list to array
     * @returns {Array}
     */
    toArray() {
        let node = this.root;           //
        let array = [];

        while (node !== null) {
            array.push(node.value);
            node = node.next;
        }
        return array;
    }

    /**
     * Function converting list to array
     * @returns {string}
     */
    toString() {
        return this.toArray().join(', ');
    }
}
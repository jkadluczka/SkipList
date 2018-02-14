import {Node} from './node';

export class List {
    constructor(node) {
        this.root = node;
    }

    /**
     * Function looking for matching node using value
     * @param value
     * @returns {Node}
     */
    find(value) {
        if (!(value instanceof Node)) {
            value = new Node(value);
        }
        let node = new Node(0);
        node = this.root;

        while (value.value !== node.value) {
            node = node.next;
        }
        return node;
    }

    /**
     * Function adding node to list
     * @param value
     */
    add(value) {
        if (!(value instanceof Node)) {
            value = new Node(value);
        }


        let node = new Node(0);
        node = this.root;

        if (value.value < node.value) {
            value.next = node;
            this.root = value
        }
        else {
            while (node.next !== null && node.next.value < value.value) {
                node = node.next;
            }

            value.next = node.next;
            node.next = value;
        }
    }

    /**
     * Function deleting particular node
     * @param value
     */
    delete(value) {

        if (!(value instanceof Node)) {
            value = this.find(value);
        }

        let node = new Node(0);
        node = this.root;

        if (value === this.root) {
            this.root = this.root.next;
        }
        else {
            while (node.next.value < value.value) {
                node = node.next;
            }

            node.next = value.next;
        }

    }

    /**
     * Function converting list to array
     * @returns {Array}
     */
    toArray() {
        let node = this.root;
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
import {Bst,Node} from './src/bst';

let noud = new Node(5);
let bst = new Bst();

bst.add(50);
bst.add(30);
bst.add(70);
bst.add(10);
bst.add(40);
bst.add(60);
bst.add(80);
bst.add(noud);
bst.add(15);
bst.add(35);
bst.add(45);
bst.add(55);
bst.add(65);
bst.add(75);
bst.add(90);

console.log(bst._findSuccessor(noud));
console.log(bst._findPredecessor(60));

bst.remove(90);
bst.remove(80);
bst.remove(50);
console.log("good");
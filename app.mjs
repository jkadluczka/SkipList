import {Bst,Node} from './src/bst/index';

let noud = new Node(6)
let bst = new Bst();

bst.add(10);
bst.add(5);
bst.add(15);
bst.add(12);
bst.add(17);
bst.add(13);
bst.add(1);
bst.add(noud);

console.log(bst.find(noud));
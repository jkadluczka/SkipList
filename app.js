import {Node} from './src/node'
import {List} from './src/list'


let rootNode = new Node(89);
let list = new List(rootNode);

list.add(54);
list.add(2);
list.add(90);
list.add(4);
list.add(1);

console.log(list.toString());

list.delete(4);

console.log(list.toString());

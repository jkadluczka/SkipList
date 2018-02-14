import { List, Node } from './src/list';

let rootNode = new Node(89);
let list = new List();

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

console.log(list.toString());

list.remove(4);

console.log(list.toString());
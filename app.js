import {List, Node} from "./src/list";

let rootNode = new Node(89);
let list = new List(rootNode, function compare(node1,node2) {
    if (node1.value > node2.value)
    {
        return 1;
    }
    else if (node1.value < node2.value)
    {
        return -1
    }
    else
    {
        return 0;
    }
});

list.add(54);
list.add(2);
list.add(90);
list.add(4);
list.add(1);

console.log(list.toString());

list.remove(4);

console.log(list.toString());

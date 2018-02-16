import { SkipNode, SkipList } from './src/skip-list';

let node = new SkipNode(4, 5);
let skipList = new SkipList();

skipList.add(1);
console.log(skipList.toString());
skipList.add(2);
console.log(skipList.toString());
skipList.add(3);
console.log(skipList.toString());
skipList.add(4);
console.log(skipList.toString());
skipList.add(5);
console.log(skipList.toString());
skipList.add(6);
console.log(skipList.toString());
skipList.add(7);
console.log(skipList.toString());
skipList.add(8);
console.log(skipList.toString());
skipList.add(9);
console.log(skipList.toString());


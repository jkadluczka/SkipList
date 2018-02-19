import { SkipNode, SkipList } from './src/skip-list';

//generating test cases
let node = new SkipNode(4, 5);
let skipList = new SkipList();

skipList.add(1);
skipList.add(2);
skipList.add(3);
skipList.add(4);
skipList.add(5);
skipList.add(6);
skipList.add(7);
skipList.add(8);
skipList.add(9);

skipList.remove(7);

console.log(skipList.toArray());
console.log(skipList.toString());


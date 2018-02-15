import { List }     from './src/list';
import { SkipNode, SkipList } from './src/skip-list';
//
// let list = new List();
let node = new SkipNode(4, 5);
let skipList = new SkipList();

// skipList.head
//
// list.add(1).add(2).add(5).remove(1).add(13).toArray();
//
// console.log(list.toString());


skipList.add(5);
skipList.add(91);
skipList.add(7);
skipList.add(33);
skipList.add(1);
skipList.add(23);
skipList.add(8);
skipList.add(13);


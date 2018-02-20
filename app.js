import { BST } from './src/bst';

// Init some constants
const bst = new BST();
const iterations = 50;
const vector = Array.from({length: iterations},
  () => Math.floor(Math.random() * iterations * 2));
// Prepare expected array - should be without duplicates and sorted
const expected = Array.from(new Set(vector)).sort((a, b) => a - b);

console.log('const arr = ', vector);

// Add items to the tree
for (let number of vector) {
   bst.add(number);
}

// Get in-order result as an array
const result = bst.toArray();

// Result array's length doesn't match expected array's length
if (expected.length !== result.length) {
  throw new Error('Fuck!');
}

// Check if every element of the result matches expected
for (let i = 0; i < expected.length; i++) {
  if (expected[i] !== result[i]) {
    throw new Error('Yikes!');
  }
}

// let noud = new Node(5);
// let bst = new BST();
//
// bst.add(80);
// bst.add(40);
// bst.add(60);
// bst.add(35);
// bst.add(noud);
// bst.add(15);
// bst.add(10);
// bst.add(45);
// bst.add(55);
// bst.add(65);
// bst.add(75);
// bst.add(90);
// bst.add(50);
// bst.add(30);
// bst.add(70);
//
//
// console.log(bst.toArray());
// console.log(bst.toString());
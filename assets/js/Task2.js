// 2.1

const collection = new Set([1, 2, 3]);
console.log(collection);

console.log(collection.has(3));
console.log(collection.has(4));

collection.add(2).add(12).add(3).add(7);
console.log(collection);

let sum = 0;
for (const value of collection) {
  console.log(value);
  sum += value;
}
console.log("sum", sum);

collection.delete(2);
console.log(collection);

collection.clear();
console.log(collection);

// 2.2

const arr = [1, 6, 9, 4, 9, 1, 5, 6];

const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

const arr1 = [1, 6, 9, 4, 9, 1, 5, 6];
const arr2 = [5, 10, 11];

const uniqueTwoArr = [...new Set([...arr1, ...arr2])];
console.log(uniqueTwoArr);

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

collection.delete(2)
console.log(collection)

collection.clear();
console.log(collection)
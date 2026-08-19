// 1.1

const arr = [
  [1, "first"],
  [3, "third"],
];

const arrMap = new Map(arr);
console.log(arrMap);
console.log(arrMap.size);

arrMap.set(2, "second");
console.log(arrMap);
arrMap.delete(1);
console.log(arrMap);
console.log(arrMap.get(2));
console.log(arrMap.has(2));

for (const [key, value] of arrMap) {
  console.log(`${key} - ${value}`);
}

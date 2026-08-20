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

// 1.2
arrMap.set(1, "first");
function numToText(text) {
  return text
    .split(" ")
    .map((word) => (arrMap.has(Number(word)) ? arrMap.get(Number(word)) : word))
    .join(" ");
}

const text =
  "This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents.";

console.log(text);
console.log(numToText(text));

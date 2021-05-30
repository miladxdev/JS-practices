// MAP and SET - Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
let john = { name: "John" };

let map = new Map();
map.set('1', 'srt1');
map.set(1, 1234);
map.set(true, 'bool1');
map.set(john, 555); // object as key

// console.log(map.size);
// console.log(map.get(john)); // 555

// Iteration over Map
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',     50]
]);

for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);
}

for (let amount of recipeMap.values()) {
    console.log(amount);
}

for (let entry of recipeMap) {
    console.log(entry);
}
recipeMap.forEach( (value, key, map) => {
  console.log(`${key}: ${value}`); // cucumber: 500 etc
});
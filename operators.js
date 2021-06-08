// Nullish coalescing operator '??'
let name = '';
console.log(name ?? 'Anonymous'); // result = (a !== null && a !== undefined) ? a : b;
console.log(name || 'Anonymous');
 // || returns the first truthy value.


// OR "||" finds the first truthy value
alert(null || undefined || "OK" || true); // OK

alert( undefined || null || 0 ); // 0 : all falsy returns the last value


// Short-circuit evaluation
false || console.log("msg");



// ---- AND “&&” finds the first falsy value
alert(1 && 2 && null && 3); // null
// When all values are truthy, the last value is returned
alert( 1 && 2 && 3 ); // 3, the last one
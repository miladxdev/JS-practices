// recursion and stack
// when a function calls itself

function factoriel(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

// console.log( powLoop(2, 4) );

// function pow(x, n) {
//     if (n == 1) return x;
//     else {
//         return x * pow(x, n-1);
//     }
// }
function pow(x, n) {
  return n == 1 ? x : x * pow(x, n - 1);
}
// pow(2, 4);                   => 16
//   2 * pow(2, 3)            2 * 8
//     2 * pow(2, 2)        2 * 4
//       2 * pow(2, 1) => 2 * 2

console.log(pow(2, 5));

function factoriel(n) {
  if (n == 1 || n == 0) return 1;
  else return n * factoriel(n - 1);
}

console.log(factoriel(4));

// factoriel(4)                    => 24
//   4 * factoriel(3)            4 * 6
    // 3 * factoriel(2)        3 * 2
//       2 * factoriel(1) => 2 * 1

// ----- async functions -----
async function one() {
  // async means function always returns a promise
  return 1;
}

one().then(console.log);

// The keyword [ await ] makes JavaScript wait until that promise settles and returns its result.
async function two() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 2000);
  });

  let response = await promise; // wait until the promise resolves
  console.log(response);
}

two();

// get github users
async function getUsers() {
  // read github users
  let response = await fetch("https://api.github.com/users");
  let users = await response.json();
  // show data
  console.log(users[0]);
}

// getUsers();

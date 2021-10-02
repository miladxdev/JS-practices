function user(fname, lname) {
  console.log(fname, lname, this);
}

user.call(
  {
    age: 27,
  },
  "Milad",
  "Gharibi"
);

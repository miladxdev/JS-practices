let users = {
    name: ['Milad'],
    age: [22]
};

function addUser(name, age) {
    users.name.push(name);
    users.age.push(age);
}
addUser('Jess', 32);
//     users.push(user);
//     addRank();
// }
// function addRank() {
//     users.push(1);
// }
//addUser(users.length+'milad', addRank);
console.log(users);
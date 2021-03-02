users = ['Milad', 'Masoud'];

function addUser(name, callback) {
    users.push(name);
    callback();
}

function printUser() {
    console.log(users);
}

addUser('Ali', printUser);

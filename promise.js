// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if (a == 2) {
//         resolve('success');
//     } else {
//         reject('failed');
//     }
// });

// p.then((message) => {
//     console.log('This is in then ' + message);
// }).catch((message) => {
//     console.log('This is in catch ' + message);
// });


// ES5: Full example

var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'iPhone',
                color: 'gold'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

// 2nd promise
var showOff = function (phone) {
    var message = 'Hey friend, I have a new ' +
        phone.color + ' ' + phone.brand + ' phone';

    return Promise.resolve(message);
};

// call our promise
var askMom = function () {
    willIGetNewPhone.then(showOff) // chain it here
    .then(function (fulfilled) {
            console.log(fulfilled);
            // output: 'Hey friend, I have a new black Samsung phone.'
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
            // output: 'mom is not happy'
        });         
};

askMom();
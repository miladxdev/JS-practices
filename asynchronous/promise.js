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


// ES5: part 1
var isMomHappy = true;

var willIGetPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'apple',
                color: 'gold'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason);
        }
    }
);

// ES5: Part 2
// call our promise
var askMom = function () {
    willIGetPhone.then(function (fulfilled) {
        console.log(fulfilled);

    }).catch(function (error){
        console.log(error.message);
        
    });
};

askMom();
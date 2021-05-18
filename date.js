let now = new Date();
console.log( now );

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
console.log( Jan01_1970 );





let birthDay = new Date(1993, 11, 10, 0, 0, 0, 005);
console.log( birthDay );


console.log( 'Year: ' + now.getFullYear() ); // 4 digit
console.log( 'Month: ' + now.getMonth() ); // 0-11
console.log( 'Date: ' + now.getDate() ); // 1-31
console.log( 'Hours: ' + now.getHours() );
console.log( 'UTC+0 Hours: ' + now.getUTCHours() ); // houre in UTC+0 time zone (london time without daylight savings)
console.log( 'Minutes: ' + now.getMinutes() );
console.log( 'Milliseconds: ' + now.getMilliseconds() );
console.log( 'Day: ' + now.getDay() ); // week -> 0: sunday - 6:saturday

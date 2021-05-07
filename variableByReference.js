// OVERRIDING VALUES
let a = 10;
let b = 0;
let c = 0;

b = a++;
// overdding values
// b = 10;
// a = 11;

b = ++a;
// overdding values
// a = 11;
// b = 11;

b = a++;
c = ++a;
a += a;
// // overdding values
// // a = 11 = 12 = 12+12=24
// // b = 10
// // c= 12

a += a;
b = a++;
c = ++a;
// // overdding values
// // a = 10+10=20 = 21 = 22
// // b = 10
// // c = 22


console.log('a', a);
console.log('b', b);
console.log('c', c);
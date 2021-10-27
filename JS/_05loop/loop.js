// let sum, i;

// sum = 0;
// i = 1;
// while (i <= 100) {
//     sum += i;
//     ++i;
// }
// console.log(sum);

// let num = 0, n, digit;

// n = num;
// digit = 0;
// while (n > 0) {
//     n = Math.floor(n / 10);
//     digit++;
// }
// console.log(digit);

// n = num;
// digit = 0;
// do {
//     n = Math.floor(n / 10);
//     digit++;
// } while (n > 0);
// console.log(digit);

// n = num;
// digit = 1;
// while ((n = Math.floor(n / 10)) > 0) {
//     digit++;
// }
// console.log(digit);

// n = num;
// digit = 1;
// if (num > 0) {
//     digit = 0;
//     while (n > 0) {
//         n = Math.floor(n / 10);
//         digit++;
//     }
// }
// console.log(digit);

// for (i = 1; i <= 100; ++i) {
//     if (i % 3 != 0)
//         continue;
//     console.log(`${i} is a multiple of 3<br>`);
// }

for (i = 1; i <= 20; ++i) {
    let speech = '';
    if (i % 3 === 0)
        speech += 'fizz';
    if (i % 5 === 0)
        speech += 'buzz';
    if (!speech)
        speech += i;
    console.log(speech);
}
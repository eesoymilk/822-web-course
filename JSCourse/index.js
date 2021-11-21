const students = [];
students.push('Wilson');
students.push('Angela');
students.push('Jessica');
students.push('Watson');
students.push('Holmes');
students.push('Ben');
students.push('Cindy');

for (let i = 1; i <= 100; ++i) {
    if (i % 3 !== 0)
        continue;
    document.write(`${i} is a multiple of 3<br>`);
    // continue to here
}
    // break to here

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
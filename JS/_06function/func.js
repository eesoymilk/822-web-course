// const pi = 3.1414926;
// const r1 = 5, r2 = 19; r3 = 37;

// // r1's surface and volume;
// let s1 = 4 * pi * r1**2;
// s1 = s1.toFixed(2);
// let v1 = (3/4) * pi * r1**3;
// v1 = v1.toFixed(2);

// // r2's surface and volume;
// let s2 = 4 * pi * r2**2;
// s2 = s2.toFixed(2);
// let v2 = (3/4) * pi * r2**3;
// v2 = v2.toFixed(2);

// // r3's surface and volume;
// let s3 = 4 * pi * r3**2;
// s3 = s3.toFixed(2);
// let v3 = (3/4) * pi * r3**3;
// v3 = v3.toFixed(2);

// console.log(`r1 = ${r1}, s1 = ${s1}, v1 = ${v1}`);
// console.log(`r2 = ${r2}, s2 = ${s2}, v2 = ${v2}`);
// console.log(`r3 = ${r3}, s3 = ${s3}, v3 = ${v3}`);
// // document.write(`r1 = ${r1}, s1 = ${s1}, v1 = ${v1}`);
// // document.write(`r2 = ${r2}, s2 = ${s2}, v2 = ${v2}`);
// // document.write(`r3 = ${r3}, s3 = ${s3}, v3 = ${v3}`);

// const Sur = r => {
//     return (4 * pi * r**2).toFixed(2);
// }
// const Vol = r => {
//     return (3/4 * pi * r**3).toFixed(2);
// }

// document.write(`r1 = ${r1}, s1 = ${Sur(r1)}, v1 = ${Vol(r1)}`);
// document.write(`r2 = ${r2}, s2 = ${Sur(r2)}, v2 = ${Vol(r2)}`);
// document.write(`r3 = ${r3}, s3 = ${Sur(r3)}, v3 = ${Vol(r3)}`);
// console.log(`r1 = ${r1}, s1 = ${Sur(r1)}, v1 = ${Vol(r1)}`);
// console.log(`r2 = ${r2}, s2 = ${Sur(r2)}, v2 = ${Vol(r2)}`);
// console.log(`r3 = ${r3}, s3 = ${Sur(r3)}, v3 = ${Vol(r3)}`);

function f1(x) {
    const res = 3 * x + 1;
    return res;
}

const f2 = function(x) {
    const res = 3 * x + 1;
    return res;
}

const f3 = (x) => {
    const res = 3 * x + 1;
    return res;
}

const f4 = x => { return 3 * x + 1; }

const f5 = x => 3 * x + 1;

let x;

x = f1(3);
console.log(`x = ${x}<br>`)
x = f2(3);
console.log(`x = ${x}<br>`)
x = f3(3);
console.log(`x = ${x}<br>`)
x = f4(3);
console.log(`x = ${x}<br>`)
x = f5(3);
console.log(`x = ${x}<br>`)

x = f5;
console.log(x);
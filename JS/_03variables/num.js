// I hope you still remember Pythagorean theorem
let a = 3;
let b = 4;
let c_square, c;

c_square = a**2 + b**2;
c = Math.sqrt(c_square);
document.write('a = ' + a + ', b = ' + b + ',<br>');
document.write('c_square = a^2 + b^2 = ' + c_square + ', c = ' + c + '<br/>');

// Random number
let random_num, random_die;
random_num = Math.random();
random_die = Math.floor(Math.random() * 6 + 1);
document.write(`random_num = ${random_num}<br/>`);
document.write(`random_die = ${random_die}<br/>`);
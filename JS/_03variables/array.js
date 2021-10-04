const students = ['Wilson', 'Tony', 'Bruce'];

document.write(students[0] + '<br/>');
students[0] = 'Peter';
document.write(students[0] + '<br/>');
document.write(students + '<br/>');

let l = students.length;
document.write(l+ '<br/>');
students.push('Clint');
students.unshift('Steve');
document.write(students + '<br/>');
l = students.length;
document.write(l+ '<br/>');

students.pop();
students.shift();
document.write(students + '<br/>');

students.sort();
document.write(students + '<br/>');
students.reverse();
document.write(students + '<br/>');
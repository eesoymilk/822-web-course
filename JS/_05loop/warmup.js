const students = [];
students.push('Wilson');
students.push('Angela');
students.push('Jessica');
students.push('Watson');
students.push('Holmes');
students.push('Ben');
students.push('Cindy');

for (let i = 0; i < students.length; i++) {
    document.write(students[i] + ' ');
}

let i = 0;
document.write(`i is now ${i++}`);
document.write(`i is now ${++i}`);
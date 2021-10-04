const my_name = 'Wilson';
const my_age = 20;
const my_hobby = 'coding';
const alphabets_caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// String Template and Interpolation
document.write(`<p>I am ${my_name}.</p><p>I am ${my_age} years old.</p><p>I like ${my_hobby}.</p>`);

// Index of a String
document.write(my_name[0] + `<br>`);
document.write(my_name[1] + `<br>`);
document.write(my_name[2] + `<br>`);
document.write(my_name[3] + `<br>`);
document.write(my_name[4] + `<br>`);
document.write(my_name[5] + `<br>`);
document.write(my_name[6] + `<br>`);    

// Some String Methods
const alphabet_lower = alphabets_caps.toLowerCase();
document.write(alphabet_lower + `<br>`);
document.write(alphabets_caps + `<br>`);
document.write(my_hobby.length + `<br>`);
document.write(alphabets_caps.length + `<br>`);
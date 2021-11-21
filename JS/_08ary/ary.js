const JoJos = ['Jonathan', 'Joseph', 'Jotaro', 'Josuke', 'Gioruno', 'Jolin'];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('normal for:');
for (let i = 0; i < JoJos.length; i++)
console.log(' '+ JoJos[i]);

console.log('for in:');
for (i in JoJos)
console.log(' '+ JoJos[i]);

console.log('for of:');
for (JoJo of JoJos)
	console.log(' '+ JoJo);
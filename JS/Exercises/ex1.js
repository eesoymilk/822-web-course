let a = window.prompt("a =");
let b = window.prompt("b =");
let c;

a = parseFloat(a);
b = parseFloat(b);
c = Math.sqrt(a**2 + b**2);

document.write(`a = ${a} b = ${b} c = ${c}<br/>`)
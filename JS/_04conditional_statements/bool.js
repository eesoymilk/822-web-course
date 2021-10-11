const is_male = true;
const do_drugs = false;
document.write(is_male + '<br/>');
document.write(do_drugs + '<br/><br/>');
if (is_male) {
    document.write(`You've got MALE!<br/>`);
}
if (do_drugs) {
    document.write(`BAD GUY!<br/>`);
}

const result1 = 10 > 8;
const result2 = 2 === 3;
document.write(result1 + '<br/>');
document.write(result2 + '<br/><br/>');

if (312344) {
    document.write(`TRUE!!!<br/>`);
}
if ('Wilson') {
    document.write(`TRUE!!!<br/>`);
}

if (0) {
    document.write(`ZERO IS TRUE??!!<br/>`);
}
if ('') {
    document.write(`EMPTY STRING IS TRUE??!!<br/>`);
}

if (!'Wilson') {
    document.write(`WILSON!!!<br/>`);
}
if (!'') {
    document.write(`???!!!<br/>`);
}
if (!0) {
    document.write(`HUH!!!<br/>`);
}
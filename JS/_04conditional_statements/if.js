const name = 'Vivy';
const age = 100;
const is_female = false;
const purpose = 'bringing joy to people by singing';
const hobby = '';
const grade = 89;

if (age >= 18) {
    document.write(`Oh my god! You're old!<br/>`);
}

if (is_female)
    document.write(`Vivy is a woman.<br/>`);
else
    document.write(`Vivy is a man.<br/>`);

document.write(`Vivy's purpose is ${purpose}.<br/>`);

if (hobby)
    document.write(`Vivy's hobby is ${hobby}.<br/>`);
else
    document.write(`She has no hobbies.<br/>`);

if (grade >= 80)
    document.write(`A<br/>`);
else if (grade >= 70 && grade < 80)
    document.write(`B<br/>`);
else if (grade >= 60 && grade < 70)
    document.write(`C<br/>`);
else
    document.write(`D<br/>`);
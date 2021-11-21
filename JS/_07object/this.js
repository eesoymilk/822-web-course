const person = {
  fName : 'Wilson',
  lName : 'Chang',
  age   : 20,
  job   : ['student', 'tutor'],
  whats_this1: function() {
    return this;
  },
  whats_this2: () => {
    return this;
  },
};

console.log(this);
console.log(person.whats_this1());
console.log(person.whats_this2());
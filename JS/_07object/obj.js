const person = {
  fName : 'Wilson',
  lName : 'Chang',
  age   : 20,
  job   : ['student', 'tutor'],
  friend: [{
    fName : 'Peter',
    lName : 'Parker',
    age   : 19,
    job   : ['Avengers', 'reporter', 'student'],
  }, {
    fName : 'Dio',
    lName : 'Brando',
    age   : 150,
    job   : 'philosopher',
    stand : 'Za Warudo'
  }],
  fullName: () => {
    return `${this.fName} ${this.lName}`;
  }
};

console.log(person.fullName());
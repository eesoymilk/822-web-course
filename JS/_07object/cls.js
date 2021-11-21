class Person {
  constructor(fn, ln, a) {
    this.fname = fn;
    this.lname = ln;
    this.age = a;
  }
  get fullName() {
    return this.fname + ' ' + this.lname;
  }
  greeting() {
    return `Hi, I'm ${this.fullName}, and I'm ${this.age} years old.`;
  }
}

const p1 = new Person('Tony', 'Stank', 50);
console.log(p1);
console.log(p1.fullName);
console.log(p1.greeting());

const p2 = new Person('Peter', 'Parker', 19);
console.log(p2);
console.log(p2.fullName);
console.log(p2.greeting());

class EEstudent extends Person {
  constructor(fn, ln, a, c) {
    super(fn, ln, a)
    this.credit = c;
  }
  greeting() {
    return `I'm an EE student and I have ${this.credit} credits this semester.`;
  }
  whining() {
    return 'Sinals and Systems is so hard...';
  }
}
const p3 = new EEstudent('Wilson', 'Chang', 20, 26);
console.log(p3);
console.log(p3.greeting());
console.log(p3.whining());
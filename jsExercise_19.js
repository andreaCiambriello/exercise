class Person {
    #firstName = "";
    #lastName = "";
    #age = 0;
    constructor(firstName, lastName, age) {
      this.#firstName = firstName;
      this.#lastName = lastName;
      this.#age = age;
    }
    set firstName(newVal) {
      if(typeof(newVal) === "string") {
        this.#firstName = newVal
      } else {
        console.log("error, insert a string")
      }
    }
    set lastName(newVal) {
      if(typeof(newVal) === "string") {
        this.#lastName = newVal
      } else {
        console.log("error, insert a string")
      }
    }
    set age(newVal) {
      if(typeof(newVal) === "number") {
        this.#age = newVal
      } else {
        console.log("error, insert a number")
      }
    }
    get firstName() {
      return this.#firstName
    }
    get lastName() {
      return this.#lastName
    }
    get age() {
      return this.#age
    }
    get fullName() {
      return this.#firstName + " " + this.#lastName
    }
  }
  
  const person = new Person('Mario', 'Rossi', 25);
  console.log(person.fullName);
  
  person.firstName = "Maria";
  person.lastName = 'Verdi';
  console.log(person.fullName);
  
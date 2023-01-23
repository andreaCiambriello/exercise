class Person {
    constructor(id, firstName, lastName, age) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    
    static fromJson(json) {
      let data = JSON.parse(json);
      return new Person(data.id, data.firstName, data.lastName, data.age);
    }
  }
  
  const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
  const developer = Person.fromJson(json);
  console.log(developer);
const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  };
  
  const {id, ...rest} = person;
  const personInfo = {
    firstName: rest.firstName,
    lastName: rest.lastName,
    age: rest.age
  };
  
  console.log(id, personInfo);
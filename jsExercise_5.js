const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
  const person2 = Object.assign({}, person1);
  person2.firstName = "Simon";
  
  console.log(person1);
  console.log(person2);
  
  
  //modificando l'oggetto person2 si modifica anche l'oggetto person1 perchè hanno lo stesso riferimento in memoria
  //questo perchè copiando un oggetto con la stessa metodologia dei primitivi, non si copia l'oggetto ma il suo riferimento 
  //ovvero si creano due variabili che puntano allo stesso oggetto, 
  //per tale motivo modificando una delle due si modifica anche l'oggetto cui fanno riferimento
  //P.S.: spero di aver usato i termini giusti
  
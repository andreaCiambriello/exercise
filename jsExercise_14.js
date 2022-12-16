//per questo esercizio ho trovato 3 soluzioni: 
//  1) un forEach e un if all'interno del filter. 
// Mi stampa solo il nome delle attività non fatte (non mi piaceva l'aggiunta dell'if)
//  2) un forEach e un filter. Mi stampa tutto il todos delle attività non fatte,
// quindi anche id, name e done 
//  3) due forEach e un filter. Mi stampa solo il nome delle attività non fatte

//SOLUZIONE 1
// function uncompletedNotes(notes) {
//   return notes.forEach(el => el.todos.filter(el => {
//     if(el.done === false) {
//       return console.log(el.name)
//     }
//   } 
//   )
//   )
// }

//SOLUZIONE 2
// function uncompletedNotes(notes) {
//   return notes.forEach(el => console.log(el.todos.filter(el => el.done === false)))
// }

// SOLUZIONE 3
function uncompletedNotes(notes) {
    return notes.forEach(el => el.todos.filter(el => el.done === false).
      forEach(el => console.log(el.name)))  
  }
  
  const notes = [
    {
      id: 1,
      description: "Workout program",
      todos: [
        {
          id: 1,
          name: "Push ups - 10 x 3",
          done: false,
        },
        {
          id: 2,
          name: "Abdominals - 20 x 3",
          done: true,
        },
        {
          id: 3,
          name: "Tapis Roulant - 15min",
          done: true,
        },
      ],
    },
    {
      id: 2,
      description: "Front-end Roadmap",
      todos: [
        {
          id: 1,
          name: "Learn HTML",
          done: true,
        },
        {
          id: 2,
          name: "Learn CSS",
          done: true,
        },
        {
          id: 3,
          name: "Learn JavaScript",
          done: true,
        },
        {
          id: 4,
          name: "Learn Angular",
          done: false,
        },
      ],
    },
  ];
  
  uncompletedNotes(notes);
  
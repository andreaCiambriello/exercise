const user = {
    id: 1,
    name: "John",
    age: 25,
  };
  
  function setData() {
    localStorage.user = JSON.stringify(user);
  }
  
  setData();
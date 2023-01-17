const user = {
    id: 1,
    name: "John",
    age: 25,
  };
  
  function setData() {
    localStorage.user = JSON.stringify(user);
  }
  
  function getData() {
    let userInLocal = localStorage.getItem('user');
    console.log(JSON.parse(userInLocal));
  }
  
  setData();
  getData();
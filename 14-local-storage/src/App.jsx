import React from "react";

const App = () => {
  // set any value in local storage
  localStorage.setItem("age", 10);

  // get any value from local storage
  let name = localStorage.getItem("name");

  // delete any specific value
  localStorage.removeItem("age");

  // delete whole values from local storage
  localStorage.clear();

  // for objects
  let details = {
    name: "ajit",
    age: 21,
    role: "Software developer",
  };

  // Stringify object when passing
  localStorage.setItem('details',JSON.stringify(details))

  // parse from String to Object using Parse
  let localDetails = localStorage.getItem('details')
  let localD = JSON.parse(localDetails)
  return <div>{localD.name}</div>;
};

export default App;

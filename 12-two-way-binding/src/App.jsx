import React,{useState} from "react";

const App = () => {
  const [value, setValue] = useState("");

  const printName = (e) => {
    e.preventDefault()
    console.log(value);
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          printName(e);
        }}
      >
        <input type="text" value={value} placeholder="enter name" onChange={(e) => {setValue(e.target.value)}} />
        <button>submit</button>
      </form>
    </div>
  );
};

export default App;

import React from "react";
import { useState } from "react";
const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const deleteHandler = (idx) =>{
    const copyTask = [...task]
    copyTask.splice(idx,1); 
    // last element crop hover on splice to read about it 
    setTask(copyTask)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setTitle("");
    setDetails("");
    let newTask = [...task];
    newTask.push({ title, details });
    setTask(newTask);
    console.log(newTask);
  };

  return (
    <div>
      <div className="Add Notes">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
        >
          <div className="flex gap-4 flex-col w-full sm:w-1/3 px-5 py-10">
            <h1 className="text-white font-medium text-3xl">Add Notes</h1>
            {/* FIRST INPUT */}
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Enter Notes Heading"
              className="text-white outline px-5 rounded"
            />
            {/* SECOND INPUT */}
            <textarea
              placeholder="write details"
              value={details}
              onChange={(e) => {
                setDetails(e.target.value);
              }}
              className="text-white outline rounded flex item-start px-5"
            ></textarea>
            <button className="bg-white active:scale-95 rounded">
              Add Note
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        <h1 className="text-white font-medium text-3xl px-10">Your Notes</h1>
        {/* BOX */}
        <div className="flex gap-5 w-screen flex-wrap pt-10 px-6">
        {task.map(function (elem, idx) {
          return (
            
              <div key={idx} className="bg-black text-white h-60 w-full sm:w-85 rounded-xl px-5 py-5 flex flex-col justify-between">
                <div>
                <h1 className=" text-3xl pb-1 ">{elem.title}</h1>
                <p className=" "> {elem.details} </p>
                </div>
                <button 
                className="bg-red-400 active:scale-95 text-black px-4 rounded w-24"
                onClick={()=>{
                  deleteHandler(idx)
                }}
                >delete</button>
              </div>
          );
        })}
            </div>
      </div>
    </div>
  );
};

export default App;
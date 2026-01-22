import React, { useEffect, useState } from 'react'

const App = () => {

  const [A, setA] = useState(0)
  const [B, setB] = useState(0)
  


  const changeA = function () {
    setA(A+1)
    console.log(A)
  };
  const changeB = function () {
    setB(B-1)
    console.log(B)
  };
  useEffect(()=>{
    console.log('useEffect Triggered')
  },[A])

  return (
    <div className=' h-70 flex flex-col px-10 justify-between '>
      <h1>value A : {A}</h1>
      <h1>value B : {B}</h1>
      <button onClick={changeA} > Increment A</button>
      <button onClick={changeB} > Increment B </button>
    </div>
  )
}

export default App
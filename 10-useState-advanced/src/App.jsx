import React, { useState } from 'react'

const App = () => {
  
  const [Name,setName] = useState({user:'ajit', age:21})
  const [Marks,setMarks] = useState([100,99,100])
  const [Num,setNum] = useState(0)
  const changeN = ()=>{
      let newName={...Name}
      newName.user = 'amar'
      setName(newName)
      setMarks([99,100,99])
  }
  const updateNum = ()=>{
    setNum(prev=>prev+1)
    setNum(prev=>prev+1)
    setNum(prev=>prev+1)
  }

  const changeN2 =()=>{
  setName(prev => ({...prev,age:17}))
  }

  return (
    <>

    <h1>{Name.user} {Name.age} {Marks} {Num}</h1>
    <button onClick={updateNum}>click</button>
    </>
  )
}

export default App
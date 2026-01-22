import React,{useState} from 'react'

const App = () => {

  const[Num,setNum]=useState(0);
  function increaseDecrease(elem){
    if(elem==0){
      setNum(Num-1)
    }
    else if(elem==1){
      setNum(Num+1)
    }
    else if(elem==5){
      setNum(Num+5)
    }else{
      console.log('Nothing')
    }
  }

  return (
    <div>
      <h1>{Num}</h1>
      <button onClick={()=>{
        increaseDecrease(1)
      }} >Increase</button>
      <button onClick={()=>{
        increaseDecrease(0)
      }}>Decrease</button>
      <button onClick={()=>{
        increaseDecrease(5)
      }}>Increase by 5</button>
    </div>
  )
}

export default App
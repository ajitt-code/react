import React from 'react'

const App = () => {
  const printHello =(e)=>{
    e.preventDefault()
    console.log("hello")
  }
  return (
    <div>
      <form onSubmit = {(e)=>{printHello(e)}}>
        <input type="text" placeholder='enter name' />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
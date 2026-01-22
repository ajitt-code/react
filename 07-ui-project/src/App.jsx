import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
const App = () => {
  const users =[
    {
      img: "https://images.unsplash.com/photo-1732209556836-511e26d982da?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, quae?',
      tag:'Satisfied',
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1658506792557-bbd54851721b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, quae?' ,
      tag:'Underserved',
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661765873819-2dd94bd32016?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
      intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, quae?' ,
      tag:'Underbanked',
    },
    
  ]
  return (
   <>
   <Section1 users={users}/>
   <Section2/>
   
   </>
  )
}

export default App


import React from 'react'
import RightCard from './RightCard'

const RightContnet = (props) => {
  return (
    <div id='right' className='h-full flex gap-10 overflow-x-auto flex-nowrap p-6 w-3/4 '>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro}/>
      })}
      
        
    </div>
  )
}

export default RightContnet
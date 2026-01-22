import React from 'react'
import LeftContent from './LeftContent'
import RightContnet from './RightContnet'
const Page1Content = (props) => {
  return (
    <div className='h-[90vh]
    flex items-center gap-10 py-10 px-10'>
    <LeftContent/>
    <RightContnet users={props.users}/>
    </div>
  )
}

export default Page1Content
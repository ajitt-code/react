import React from 'react'
import { useParams } from 'react-router-dom';

const CoursesDetail = () => {

    // How to Take Params 

    let {id} = useParams();
    console.log(id)


  return (
    <div><h1>{id} CoursesDetail</h1></div>
  )
}

export default CoursesDetail
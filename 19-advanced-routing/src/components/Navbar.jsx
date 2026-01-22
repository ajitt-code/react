import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft,ChevronRight } from "lucide-react";

const Navbar = () => {
  // for Navigation in page on buttons click 
  let navigate= useNavigate();

  return (
    <div className="flex justify-between bg-blue-500 px-5 items-center">
      <div className="flex flex-wrap  flex-row gap-3 items-center">
      Navbar
      <div className="flex py-1" >
        <button 
        onClick={()=>{
          // useNavigate call
          navigate(-1)
        }}
        className="rounded-l-lg bg-black border-r-1 border-white active:scale-95 ">
          <ChevronLeft size={24} />
        </button>
        <button 
        onClick={()=>{
          navigate(+1)
        }}
        className="rounded-r-lg bg-black border-l-1 border-white active:scale-95">
          <ChevronRight size={24} />
        </button>
      </div>
      </div>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/product">product</Link>
      </div>
    </div>
  );
};

export default Navbar;

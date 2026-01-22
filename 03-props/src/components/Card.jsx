import React from "react";

const Card = (props) => {
  return (
    <div className="card">
        <img src={props.img} alt="ajit photo" />
      <h1>{props.name} { props.age}</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <button>view profile </button>
    </div>

  );
};

export default Card;

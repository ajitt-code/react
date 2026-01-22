import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 w-80 bg-red-400 relative overflow-hidden rounded-4xl ">
      <img
        className="h-full w-full object-cover"
        src={props.img}
      />
      <RightCardContent id={props.id} img={props.img} tag={props.tag} intro={props.intro} />
    </div>
  );
};

export default RightCard;

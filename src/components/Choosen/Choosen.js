import React from "react";
import './Choosen.css'

const Choosen = (props) => {
    console.log(props.chosen);
  const {image, name} = props.chosen;
  return (
    <div>
      <div className="chosen-one">
        <div className="image-holder">
          <img src={image} alt="" />
        </div>
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default Choosen;

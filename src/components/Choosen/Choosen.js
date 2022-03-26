import React from "react";
import './Choosen.css'

const Choosen = (props) => {
    console.log(props.chosen);
//   const {image, name} = props.choosen;
  return (
    <div>
      {/* <div className="selected-cart">
        <div className="image-holder">
          <img src={image} alt="" />
        </div>
        <p>{name}</p>
        <button>delete</button>
      </div> */}
    </div>
  );
};

export default Choosen;

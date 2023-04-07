import React from "react";
import "../CSS/Home.css";

function Card(props) {
  return (
    <div className="topsection-image" key={props.id}>
      <span>{props.title}</span>
      <a href={props.link}>
        <img src={props.image} alt={props.title} />
      </a>
    </div>
  );
}
export default Card;

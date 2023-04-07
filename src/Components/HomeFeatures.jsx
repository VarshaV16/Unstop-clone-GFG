import React from "react";
import Features from "../Features";

function HomeFeatures() {
  return (
    <div>
      {Features.map((ele) => {
        return (
          <div key={ele.id}>
            <img src={ele.image} alt={ele.title} />
            <h2>{ele.title}</h2>
            <p>{ele.description}</p>
          </div>
        );
      })}
      ;
    </div>
  );
}
export default HomeFeatures;

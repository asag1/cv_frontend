import React from "react";
import "./index.css";

function Item(data) {
  return (
    <div className="Expierence--item">
      <h5 className="Education--item-position">{`Position: ${
        data.position
      }`}</h5>
      <p className="Education--item-employer">{data.employer}</p>
      <p className="Education--item-year">{data.year}</p>
      <p className="Education--item-description">{data.discription}</p>
    </div>
  );
}

function Expierence(props) {
  return (
    <section className="Expierence">
      <h3>EXPIERENCE</h3>
      {props.items.map(Item)}
    </section>
  );
}

export default Expierence;

import React from "react";
import Emoji from "./Emoji";

function Card(props) {
  return (
    <div className="term">
      <dt>
        <Emoji emoji={props.emoji} />
        <span>{props.title}</span>
      </dt>
      <dd>{props.desc}</dd>
    </div>
  );
}

export default Card;

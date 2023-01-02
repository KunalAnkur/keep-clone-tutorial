import React from 'react'
import "./Card.css"
function Card(props) {
  return (
    <div className="card">
      <p>{props.note}</p>
    </div>
  );
}

export default Card
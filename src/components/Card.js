import React from 'react'
import "./Card.css"
function Card(props) {
  console.log(props)
  return (
    <div className="card">
      <h4>{props.title}</h4>
      <p>{props.note}</p>
    </div>
  );
}

export default Card
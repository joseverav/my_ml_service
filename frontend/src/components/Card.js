import React from 'react'
import "../styles/card.css"

function Card({ title, body }) {
    return (
      <div className="card">
        <h3 className="card-title">{title}</h3>
        <p className="card-body">{body}</p>
      </div>
    );
  };
  
  export default Card;
import React from "react";
function Character(props) {
  

  return (
    <div className="karta">
      <p><strong>ID:</strong> {props.id}</p>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Types:</strong> {props.types}</p>
      <img src={props.image} alt={props.name}  />
    </div>
  );
}
export default Character;
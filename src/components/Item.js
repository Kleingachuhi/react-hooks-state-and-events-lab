import React, { useState } from "react";

function Item({ name, category }) {
  const [isAdded, setToAdd] = useState("Add to Cart")
  const [myList, setMyList] = useState('')

  function handleAdding(){
    // setToAdd( prevAdd => 
    //   prevAdd === "Add to Cart" ? "Remove from Cart" : "Add to Cart"
    // )
setMyList( prevList => 
  prevList === '' ? "in-cart" : ''
)

if (myList === "in-cart"){
  setToAdd('Add to Cart')
}
else if (myList === "") {
  setToAdd('Remove From Cart')
}
  }
  return (
    <li className={myList} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdding} >{isAdded}</button>
    </li>
  );
}

export default Item;

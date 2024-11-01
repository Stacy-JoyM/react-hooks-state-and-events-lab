import React , {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(true)
  
  function handleCart(){
    setInCart((prevInCart)=> !prevInCart)
  }

  //conditional for states
  const liClass = inCart ? "" :"in-cart"
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{inCart ? "Add To Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;

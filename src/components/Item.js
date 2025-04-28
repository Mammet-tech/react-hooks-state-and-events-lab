import React, {useState} from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);
  const handleClick = () => {
    setIsInCart((prevState) => !prevState);
  };
  
  const itemClass = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Remove from Cart" : "Add to Cart";


  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;

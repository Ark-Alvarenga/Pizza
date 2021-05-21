import React from "react";
import "../Styles/Pedido.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

function Ingrediente({ title, img, description }) {
  const { items } = useSelector((state) => state);
  const history = useHistory();

  const dispatch = useDispatch();

  const toPizzaItems = () => {
    

    if (items.includes(title)) {
      dispatch({
        type: "REMOVE_ITEM",
        payload: title,
      });
    } else {
       if (items.length >= 5) {
           return alert("Máximo de 5 ingredientes, remova um antes de adicionar outro.")
       } 
      dispatch({
        type: "ADD_ITEM",
        payload: title,
      });
    }
  };

  return (
    
      
      <div className="items">
      <p className="items__title">
        <strong>{title}</strong>
      </p>
        <p>{description}</p>
        {items.includes(title) 
        ?
          <button className="btn red" onClick={toPizzaItems}> Remover {title}</button>
        
        :
            <button className='btn' onClick={toPizzaItems}> Adicionar {title}</button>
        }
        <img src={img} alt="" />
      </div>
    
  );
}

export default Ingrediente;

import React from 'react'
import {  useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import '../Styles/Pedido.css'



function Size({title, img, price, points}) {

    const history = useHistory()

    const dispatch = useDispatch()
    const addToPizzaSize = () => {
        dispatch ({
            type:"SET_PIZZA",
            payload: {
                size: title,
                price,
                points 
                
                
            },
        });
        history.push('/massa')
    };





    return (
        <div className='body'>
            
            
            <div className ='items'>
            <img src={img} alt='' />
            <p><small>Preço : $</small><strong>{price}</strong> </p>
            <strong>Ganhe {points} Stoompoints</strong>
            
            <button className='btn' onClick={addToPizzaSize}>Escolher o tamanho {title}</button>
            
            </div>
            
            

            
            
        </div>
    )
}

export default Size

import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import '../Styles/Pedido.css'
import { getText } from '../utils/functions'



function Checkout() {
    const { size,items, massa, price } = useSelector((state) => state);

    return (
        <div className='body'>
            <h1>Revisar e finalizar o Pedido</h1>
            
            <h3>Você pediu uma pizza de tamanho {size},</h3>
            <h3> com a massa {massa}</h3>
            <h3>e os ingredientes a seguir: {getText(items)}</h3>
           
            
            <h4>Seu pedido vai custar R$ {price}</h4>
            <Link to='/obrigado'>
            <button className='btn'>Finalizar o Pedido</button>
            </Link>
        </div>
    )
}

export default Checkout

import React from 'react'
import { useSelector } from 'react-redux'
import '../Styles/Pedido.css'

function Obrigado() {
    const {points} = useSelector((state) => state)
    
    return (
        <div className='body'>
            <h1>Obrigado por escolher a PizzaStoom</h1>
            <h2>Você ganhou {points} pontos</h2>

        </div>
    )
}

export default Obrigado

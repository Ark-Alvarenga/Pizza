import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import '../Styles/Header.css'

function Header() {
    
    const { points} = useSelector((state) => state)
    const history = useHistory()

    const dispatch = useDispatch()
    const goBack = () => {
        dispatch ({
            type:"EMPTY_PIZZA",
            
        });
        history.push('/')
    };    
    return (
        
        <div>
            <div className="header">
            <h2>PizzaStoom, é pizza sim!</h2>
            <h4>Stoompoints, {points} pontos</h4>
            
            
            <button className='btn' onClick={goBack}>Voltar ao início</button>
            
            
            
            </div>
        </div>
    )
}

export default Header

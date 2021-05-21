import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Pedido.css'
import Ingrediente from './Ingrediente'
import {getPizzaItems} from '../services/api'






function Ingredientes() {

    const [items, setItems] = useState([])
        
    useEffect(() => {
        _getPizzaItems()
    }, [])

    

    
    async function _getPizzaItems() {
        try {            
            const data = await getPizzaItems()

                
            setItems(data)
        } catch (error) {
            console.error(error)
            alert('Ocorreu um erro, por favor tente novamente ou entre em contato com o suporte.')
        }
    }
    
    function renderItems() {
        if(!items.length) return

        
        let render = []
        {items.map(item => {
                render.push(<Ingrediente title={item.name} img={item.img} description={item.description}/>)
                }
            )
        }

        return render
    }



    return (
        <div className= 'body'>
            <h3>Todas as pizzas acompanham azeitonas e orégano</h3>
            <p>Todas as pizzas aceitam somente 5 ingredientes</p>
            {renderItems()}            
            <Link to='/finalizar'>
            <button className='btn'>Verificar o pedido</button>
            </Link>
        </div>
    )
}

export default Ingredientes

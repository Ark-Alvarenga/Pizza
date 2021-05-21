import React, { useEffect, useState } from 'react'
import Size from './Size'
import Pizza_Big from '../assets/Pizza_Big.PNG';
import Pizza_Grande from '../assets/Pizza grande.PNG';
import Pizza_Média from '../assets/pizza média.PNG';
import Pizza_Broto from '../assets/pizza broto.PNG';
import { getPizzaSize } from '../services/api';

function Sizes() {

    const [sizes, setSizes] = useState([])
        
    useEffect(() => {
        _getPizzaSize()
    }, [])

   
    
    async function _getPizzaSize() {
        
        
        try {            
            const data = await getPizzaSize()
            setSizes(data)

        } catch (error) {
            console.error(error)
            alert('Ocorreu um erro, por favor tente novamente ou entre em contato com o suporte.')
        }
    }

    
    
    
    function getImage(name) {
        switch (name) {
            case "Broto":
                return Pizza_Broto
            case "Média":
                return Pizza_Média
            case "Grande":
                return Pizza_Grande
            case "Big":
                return Pizza_Big
            
        
            default:
                break;
        }
    }

    function renderSizes() {
        if(!sizes.length) return

        let render = []
        {sizes.map(size => {
                render.push(<Size title={size.name} img={getImage(size.name)} price={size.price} points={size.points} />)
                }
            )
        }

        return render
    }
    
    return (
        <div>
            {renderSizes()}
        </div>
    )
}

export default Sizes

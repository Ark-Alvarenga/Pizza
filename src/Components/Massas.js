import React, { useEffect, useState } from 'react'
import { getPizzaMassa } from '../services/api';
import Massa from './Massa';




function Massas() {

    const [massas, setMassas] = useState([])
        
    useEffect(() => {
        _getPizzaMassa()
    }, [])

    

    
    async function _getPizzaMassa() {
        
        
        try {            
            const data = await getPizzaMassa()
            setMassas(data)

        } catch (error) {
            console.error(error)
            alert('Ocorreu um erro, por favor tente novamente ou entre em contato com o suporte.')
        }
    }
        
    
    
    
    function renderMassas() {
        if(!massas.length) return

        let render = []
        
        {massas.map(massa => {
                render.push(<Massa title={massa.name} img={massa.img} description={massa.description} />)
                }
            )
        }

        return render
    }


    return (
        <div>
          {renderMassas()}
        </div>
    )
}

export default Massas

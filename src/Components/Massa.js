import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function Massa({title, img, description}) {

    

    const history = useHistory()

    const dispatch = useDispatch()
    const addToPizzaMassa = () => {
        dispatch ({
            type:"SET_PIZZA",
            payload: {
                massa: title,
                               
                
            },
        });
        history.push('/ingredientes')
    };
   
    return (
        
            <div className ='items'>
            <img src={img} alt='' />
            <p><strong>{title}:</strong> <small>{description}</small> </p>
           
            <button className='btn' onClick={addToPizzaMassa}>Escolher a massa {title}</button>
            
            </div>
        
    )
}

export default Massa

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import '../Styles/Home.css'
import { getText } from '../utils/functions'

function Home() {
    const history = useHistory()
    const dispatch = useDispatch()


    const addToOrder = () => {
        dispatch({
            type:"SET_PIZZA",
            payload: {
                size: pizzaOfDay.size,
                massa: pizzaOfDay.massa,
                price: pizzaOfDay.price,
                points: pizzaOfDay.points,
                items: pizzaOfDay.items
                
            },
        });
        history.push('/finalizar')
    };

    const [pizzaOfDay, setPizzaOfDay] = useState([])
        
    useEffect(() => {
        getPizzaDay()
    }, [])

    

    const api_url = "https://run.mocky.io/v3/c22659a8-8bc1-4508-b89b-1a88b2537b9e"
    async function getPizzaDay() {
        const response = await fetch(api_url);
        const data = await response.json();
        
        
        setPizzaOfDay(data)
    }

    
    
    return (
        <div className="home">
            
            <div className="home__body">
            <img src="https://conteudo.imguol.com.br/c/entretenimento/ef/2020/03/20/pizza-napolitana-feita-em-casa-1584714870059_v2_1920x1281.jpg" alt="" />
            
            <div className="home__text">
            <h1>Pizza do Dia</h1>
            <h4>Aproveite a oferta do dia e ganhe <span>{pizzaOfDay.points}</span>  Stoompoints</h4>
            <p><strong>Tamanho: </strong><span>{pizzaOfDay.size}</span> </p>
            <p> <strong>Massa: </strong><span>{pizzaOfDay.massa}</span> </p>
            <p><strong>Ingredientes: </strong> <span>{getText(pizzaOfDay.items)}</span></p>
            <h2> Preço R$ <span>{pizzaOfDay.price}</span> </h2>
            </div>
            
            <button className='btn' onClick={addToOrder}> Eu quero! </button>
            
            </div>
            <Link className='btn1' to='/tamanho'>
            <button > Ou monte sua Pizza Aqui!</button>
            </Link>
            
        </div>

    )
    
}

export default Home

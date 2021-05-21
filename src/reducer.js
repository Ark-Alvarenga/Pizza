export const initialState = {
    size: false,
    massa: false,
    price: 0,
    points: 0,
    items: []
};



const orderState = (state = initialState, action) => {
    
    switch(action.type) {
        case "SET_PIZZA":
            
            return {
                ...state, ...action.payload, points : state.points + (action.payload.points || 0)
            };
        
        case "ITEMS_OF_PIZZA":
            return {
               ...state, pizza: [...state.pizza, action.ingredients],
            };
        case "ADD_ITEM":
            return {
                ...state, items : [action.payload, ...state.items]
            }
        case "REMOVE_ITEM":
            return {
                ...state, items : [...state.items.filter(item => item !== action.payload)]
            }
    
    

        case "EMPTY_PIZZA":
            return {
                ...initialState, points : state.points
                
            };

        
        default:
            return state;

    }
}

export default orderState;



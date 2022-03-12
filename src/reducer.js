export const initialState = {
    //initial state
    basket: [],
    user: null  
};
// Selector
export const getBasketTotal =(basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    // reducer
    switch(action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.bask, action.item]
            };
            default:
                return state;
    }
};

export default reducer;
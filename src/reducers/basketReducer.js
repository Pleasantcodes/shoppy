import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from "../actions/types";



const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        reactVision: {
            name: "React Vision",
            price: 55000.00,
            numbers: 0,
            inCart: false
        },
        
        adaptAutoMax: {
            name: "Nike Adapt Auto Max",
            price: 75000.00,
            numbers: 0,
            inCart: false
        },
        
        airForce1Mid07: {
            name: "Nike Air Force 1 Mid '07",
            price: 65000.00,
            numbers: 0,
            inCart: false
        },

        jordan1LowSE: {
            name: "Air Jordan 1 Low SE",
            price: 75000.00,
            numbers: 0,
            inCart: false
        },

        nikeAirVaporMax: {
            name: "Nike Air VaporMax",
            price: 95000.00,
            numbers: 0,
            inCart: false
        },

        airZoomPegasus37: {
            name: "Air Zoom Pegasus 37",
            price: 75000.00,
            numbers: 0,
            inCart: false
        },

        airJordan1Mid: {
            name: "Air Jordan 1 Mid",
            price: 85000.00,
            numbers: 0,
            inCart: false
        },

        leBron17Graffiti: {
            name: 'LeBron 17 "Graffiti"',
            price: 155000.00,
            numbers: 0,
            inCart: false
        }

    }
}


export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_BASKET: ;
            let addQuantity = { ...state.products[action.payload]}
            addQuantity.numbers += 1;
            addQuantity.inCart = true;
            console.log(addQuantity);

            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: addQuantity
                }
            }
        default:
            case GET_NUMBERS_BASKET:
                return {
                    ...state
                }       
        return state;
    }
}
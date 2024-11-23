import { productType } from "../actions/ActionTypes"


const initialValue = {
    allProducts: [],
    cart:[],
}

// const {ALL_PRODUCTS} = productType
export const ProductReducer = (state=initialValue,{type,payload}) => {
    switch(type){
        case productType.ALL_PRODUCTS:
            return {...state,allProducts:[...state.allProducts,...payload]}

            case productType.CART_PRODUCT:
                return {...state,cart:[...state.cart,payload]}
            case productType.REMOVE_CART_PRODUCT:
                return {...state,cart:[...state.cart.filter((item)=>item.id !== payload.id)]}
            default:
                return state
    }
}
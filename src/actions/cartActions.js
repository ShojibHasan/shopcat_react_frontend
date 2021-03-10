import axios from 'axios'
import { CART_ADD_ITEM } from '../constant/cartConstants'

export const addToCart =(id,qty) => async( dispatch, getState ) => {
    const {data} = await axios.get(`/api/product/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            product: data._id,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem('cartItems', JSON.stringify (getState().cart.cartItems))
}
import toast from "react-hot-toast"

const getCart=()=>{
    const cart = localStorage.getItem('cart-list')
    if(cart){
        const parseCart = JSON.parse(cart)
       return parseCart
    }else{
        return []
    }
}


const addCart=gadget=>{
    const cartList = getCart()
    const isExist = cartList.find(item=> item.product_id == gadget.product_id)
    if(isExist) return toast.error('already added!');
        cartList.push(gadget)
        localStorage.setItem('cart-list',JSON.stringify(cartList))
        toast.success('Added to cart ');
    
    }


    export{addCart ,getCart}
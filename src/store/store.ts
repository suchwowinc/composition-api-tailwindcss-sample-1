import { reactive, computed } from 'vue'

const cart = reactive<string[]>([])

const getCart = computed( () => {
  return cart
})

const resetCart = () => {
  cart.splice(0);
}

const setCart = (item: string ) => {
  cart.push(item);
}

const useCart = () => {
  
  const addToCart = (item: string) => {
    setCart(item);
  }
  
  return {
    getCart,
    addToCart,
    resetCart,
  }
}
export default useCart;

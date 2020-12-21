import { ref, reactive, computed } from 'vue'

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
  
  const getCartCounts = computed( () => {
    return cart.length;
  })
  
  return {
    getCart,
    addToCart,
    resetCart,
    getCartCounts
  }
}

// information
const initialMessage = 'waiting your operation...'
const information = ref(initialMessage);

const getInformation = computed( () => information.value );

const setInformation = (message: string ) => {
  information.value = message;
}

const useInformation = () => {
  const setMessage = (message: string) => {
    setInformation(message)
    setTimeout( () => {
      setInformation(initialMessage)
    },1500)
  }
  
  return {
    setMessage,
    getInformation
  }
}

export {
  useCart,
  useInformation
};

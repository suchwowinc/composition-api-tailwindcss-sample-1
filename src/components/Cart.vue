<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <h1>Cart</h1>
    <button @click="clearCart">clear cart</button>
    <div v-for="item in items" :key="item">
      {{ item }}
    </div>
  </div>
</template>

<script lang="ts">
import useCart  from '@/store/store.ts';

export default {
  setup(){
    const { getCart, resetCart } = useCart();

    const clearCart = () => {
      resetCart();
    }

    return {
      items: getCart,
      clearCart
    }
  }
}
</script>


<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <h1 class="text-6xl text-gray-400 border-b-4 py-4">Cart</h1>
    <div class="cursor-pointer p-4 mt-4 border border-blue-400 text-gray-400 hover:bg-blue-100" @click="clearCart">clear cart</div>
    <template v-if="!!items.length">

    <div class="mt-4" v-for="item in items" :key="item">
      <p>{{ item }}</p>
    </div>
    </template>
    <template v-else>
      <div class="mt-4">add some items to cart, please</div>
    </template>

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


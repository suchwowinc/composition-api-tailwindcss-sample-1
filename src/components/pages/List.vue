<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <h1 class="text-6xl text-gray-400 border-b-4 py-4">List</h1>
    <div class="mt-4">
      <div class="inline-block rounded-lg text-gray-400 hover:bg-indigo-400 hover:text-white mr-4 border border-gray-400 p-2 cursor-pointer" @click="getItem(item)" v-for="item in items" :key="item">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, onMounted } from 'vue'
import { useCart, useInformation }  from '@/store/store.ts';

export default {
  setup() {
    const items = reactive<string[]>([])
    const { addToCart } = useCart()
    const { setMessage } = useInformation()

    onMounted(() => {
      items.push('apple')
      items.push('banana')
      items.push('orange')
    })

    const getItem = (item:string) => {
      addToCart(item);
      setMessage(`You added ${item} in the cart`)
    }

    return {
      items,
      getItem
    }
  }
}
</script>


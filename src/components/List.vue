<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="cursor-pointer" @click="getItem(item)" v-for="item in items" :key="item">
      {{ item }}
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, onMounted } from 'vue'
import useCart  from '@/store/store.ts';

export default {
  setup() {
    const items = reactive<string[]>([])
    const { addToCart } = useCart()

    onMounted(() => {
      items.push('apple')
      items.push('banana')
      items.push('orange')
    })

    const getItem = (item:string) => {
      console.log(item);
      addToCart(item);
    }

    return {
      items,
      getItem
    }
  }
}
</script>


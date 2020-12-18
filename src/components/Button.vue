<template>
  <button @click="click" class="p-4 mt-60 border rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300">
    <slot/>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmit } from "vue"

const props = defineProps({ cookie: String})
const emit = defineEmit(); // this.$emit

const click = () => {
  emit("doge","barking")
}

</script>


<template>
  <div class="absolute left-20 bottom-20">
    <div class="text-4xl rounded-lg border-4 border-indigo-400 bg-indigo-400 text-white p-4 cursor-pointer shadow-xl">{{ message }}</div>
  </div>
</template>

<script lang="ts">
import { useInformation } from "@/store/store";

export default {
  setup(){
    const {getInformation } = useInformation();

    return {
      message: getInformation
    }
  }
}
</script>

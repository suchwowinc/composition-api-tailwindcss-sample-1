<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <h1 class="text-6xl text-gray-400 border-b-4 py-4">Mouse</h1>
    <div class="mt-40">
      <div class="flex ml-40">
        <div class="text-9xl text-gray-300 select-none">
          <div>X: {{ x }}</div>
          <div>Y: {{ y }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useMouse from "@/compositions/mouse";

export default {
  setup(){
    const { x, y } = useMouse()

    return {
      x,
      y
    }
  }
}
</script>

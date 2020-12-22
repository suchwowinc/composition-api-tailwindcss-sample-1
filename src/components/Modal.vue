<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <h1 class="text-6xl text-gray-400 border-b-4 py-4">Modal</h1>
    <div class="mt-4">
      <modal-base/>
    </div>
  </div>
</template>

<script lang="ts">
import ModalBase from '@/components/ModalBase.vue'

export default {
  components: { ModalBase }
}
</script>

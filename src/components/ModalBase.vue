<template>
    <div class="flex justify-center">
      <button class="border rounded-lg border-indigo-400 p-4 hover:bg-indigo-400 hover:text-white" @click="open">Open Me</button>
    </div>
    <teleport to="#app">
      <template v-if="modal">
      <div class="flex justify-center items-center top-0 opacity-40 absolute w-screen h-screen bg-black">
        <button class="rounded-lg p-4 border-grey-400 border text-white text-4xl hover:bg-white hover:text-black" @click="close">Close me</button>
      </div>
      </template>
    </teleport>
</template>

<script lang="ts">
import { ref } from "vue"
import { useInformation } from "@/store/store";

export default {
  setup(){
    const { setMessage } = useInformation();

    const modal = ref(false);

    const open = () => {
      modal.value = true
      setMessage('You opened modal.')
    }

    const close = () => {
      modal.value = false
      setMessage('You closed modal.')
    }

    return {
      open,
      close,
      modal
    }
  }
}
</script>

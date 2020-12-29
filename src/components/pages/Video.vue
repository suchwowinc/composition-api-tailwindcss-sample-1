<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <h1 class="text-6xl text-gray-400 border-b-4 py-4">Video</h1>
    <div class="flex justify-center mt-20">
      <video id="localVideo" autoplay playsinline controls="false" />
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue";
import useDevice from "@/compositions/device";

export default {
  setup() {
    const { openVideo } = useDevice();
    onMounted(async () => {
      await openVideo(true, false, "video#localVideo");
    });
  }
};
</script>

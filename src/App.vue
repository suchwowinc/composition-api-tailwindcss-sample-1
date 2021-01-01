<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div
      class="flex justify-between items-center border-b-2 border-gray-200 py-6"
    >
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <span class="text-2xl text-gray-400"
          >Composition API + Tailwind CSS sample</span
        >
      </div>
    </div>
    <div class="flex py-4">
      <a
        href="#"
        class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
      >
        <router-link to="/">Home</router-link>
      </a>
      <a
        href="#"
        class="ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
      >
        <router-link to="/list">List</router-link>
      </a>
      <a
        href="#"
        class="ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
      >
        <router-link to="/cart">Cart[{{ counts }}]</router-link>
      </a>
      <a
        href="#"
        class="ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
      >
        <router-link to="/modal">Modal</router-link>
      </a>
      <a
        href="#"
        class="ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
      >
        <router-link to="/mouse">Mouse</router-link>
      </a>
      <a
        href="#"
        class="ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
      >
        <router-link to="/chat">Chat</router-link>
      </a>
      <a
        href="#"
        class="ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
      >
        <router-link to="/video">Video</router-link>
      </a>
    </div>
  </div>
  <information-button />
  <router-view />
</template>

<script lang="ts">
import InformationButton from "@/components/InformationButton.vue";
import { useCart } from "@/store/store";

export default {
  components: {
    InformationButton
  },
  setup() {
    const { getCartCounts } = useCart();
    return {
      counts: getCartCounts
    };
  }
};
</script>

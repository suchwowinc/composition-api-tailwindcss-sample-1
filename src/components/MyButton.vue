<template>
  <button @click="click" class="select-none p-4 border rounded-lg cursor-pointer text-gray-500 hover:bg-blue-500 hover:text-white transition duration-300">
    <slot/>
  </button>
</template>
<template>
  <div class="w-9/12 m-auto">
    <p >{{ doge.age }}</p>
    <div class="flex justify-center">
      <Button @doge="getDoge" @click="countUp">Click Me</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Doge {
  name: string;
  age: number;
}


import { ref, reactive, onMounted, computed } from "vue";
import Button from "@/components/Button.vue";

const doge = reactive<Doge>({
  name: 'bob',
  age: 999
})

onMounted( () => {
  doge.age = 100
})

const countUp = () => {
  doge.age++;
}

const getDoge = (v:any) => {
  console.log(v);
}


</script>


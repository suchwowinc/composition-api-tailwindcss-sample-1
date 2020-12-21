<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center border-b-2 border-gray-200 py-6">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <span class="text-2xl text-gray-400">Composition API + Tailwind CSS sample</span>
      </div>
      <div class="md:flex items-center justify-end md:flex-1 lg:w-0">
        <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
          Sign in
        </a>
        <a href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          Sign up
        </a>
      </div>
    </div>
  </div>
  <div class="flex flex-col items-center w-9/12 m-auto mt-6">
    <div class=" text-gray-500">The AMAZING Counter</div>
    <div class="mt-10 text-9xl text-gray-500  p-6 rounded-xl bg-yellow-100">{{ doge.age }}</div>
    <div class="mt-10">
      <MyButton @doge="getDoge" @click="countUp(1)">count up</MyButton>
    </div>
    <div class="mt-4">
      <MyButton @doge="getDoge" @click="countUp(10)">uncommon count up</MyButton>
    </div>
    <div class="mt-4">
      <MyButton @doge="getDoge" @click="countUp(100)">super count up</MyButton>
    </div>
  </div>
</template>

<script lang="ts">
interface Doge {
  name: string;
  age: number;
}

import { ref, reactive, onMounted, computed } from "vue";
import MyButton from "@/components/MyButton.vue";

export default {
  components:{
    MyButton
  },
  setup(){
    const doge = reactive<Doge>({
      name: 'bob',
      age: 0
    })

    // onMounted( () => {
    //   doge.age = 100
    // })

    const countUp = (v:number) => {
      doge.age += v
    }

    const getDoge = (v:any) => {
      console.log(v);
    }

    return {
      doge,
      countUp,
      getDoge
    }
  }
}
</script>


<template>

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


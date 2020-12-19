<template>
  <div class="w-9/12 m-auto">
    <p >{{ doge.age }}</p>
    <div class="flex justify-center">
      <MyButton @doge="getDoge" @click="countUp">Click Me</MyButton>
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

    return {
      doge,
      countUp,
      getDoge
    }
  }
}
</script>


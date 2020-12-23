<template>
  <div class="flex flex-col items-center w-9/12 m-auto mt-6">
    <div class=" text-gray-500">The AMAZING Counter</div>
    <div
      class="mt-10 text-9xl text-gray-500  p-6 rounded-xl bg-yellow-100"
      data-counter-id="counts"
    >
      {{ doge.age }}
    </div>
    <div class="mt-8">
      <iframe
        v-if="over9000"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/PCHxU7witPA?controls=0&amp;start=9&end=12&autoplay=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div class="mt-10" data-counter-id="standard">
      <MyButton @doge="getDoge" @click="countUp(1)">count up</MyButton>
    </div>
    <div class="mt-4" data-counter-id="uncommon">
      <MyButton @doge="getDoge" @click="countUp(10)"
        >uncommon count up</MyButton
      >
    </div>
    <div class="mt-4" data-counter-id="super">
      <MyButton @doge="getDoge" @click="countUp(100)">super count up</MyButton>
    </div>
    <div class="mt-4" data-counter-id="incredible">
      <MyButton @doge="getDoge" @click="countUp(1000)"
        >incredible count up</MyButton
      >
    </div>
  </div>
</template>

<script lang="ts">
interface Doge {
  name: string;
  age: number;
}

import { reactive, computed } from "vue";
import MyButton from "@/components/MyButton.vue";
import { useInformation } from "@/store/store";

export default {
  components: {
    MyButton
  },
  setup() {
    const { setMessage } = useInformation();

    const doge = reactive<Doge>({
      name: "bob",
      age: 0
    });

    const countUp = (v: number) => {
      doge.age += v;
      setMessage(`You add count: ${v} amounts:${doge.age}`);
    };

    const getDoge = (v: any) => {
      console.log(v);
    };

    const over9000 = computed(() => {
      return doge.age >= 9000;
    });

    return {
      doge,
      countUp,
      getDoge,
      over9000
    };
  }
};
</script>

import { ref, computed } from 'vue';
const state = ref({
  doge: {}
})

const getDoge = computed( () => {
  return state.value.doge
})

const setDoge = (doge: any) => {
  state.value.doge = doge;
}

const loadDoge = async (id:any) => {
  const doge = await fetchDoge(id);
  setDoge(doge);
}

const fetchDoge = (id:any) => {
  return new Promise( (resolve) => {
      resolve({
        name: `${id}_bob`,
        age: 100
      })
  })
}

export {
  loadDoge,
  getDoge
}

import { ref, watch } from "vue";

const useMouse = () => {
  const x = ref( 0 );
  const y = ref(0)
  
  if (window) {
    window.addEventListener('mousemove', event => {
      x.value = event.clientX
      y.value = event.clientY
    });
  }
  
  return {
    x,
    y
  }
}

export default useMouse;

<template>
  <h1>{{ msg }}</h1>

  <button 
    @click="increment"
    class="m-8 px-8 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
  >
    count is: {{ count }}
  </button>

  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const count = ref(0);

    const increment = () => count.value++;

    return {
      count,
      increment,
    }
  }
}
</script>

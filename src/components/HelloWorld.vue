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

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  msg: String,
});

const count = ref(0);

const increment = () => count.value++;
</script>

<template>
  <h1 v-text="msg" />

  <button 
    @click="increment"
    class="m-8 px-8 py-2 rounded-md text-white bg-green-500 hover:bg-green-600 transition ease-in-out duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50"
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

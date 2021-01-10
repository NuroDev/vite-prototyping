<template>
  <img class="mx-auto" alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="postcss">
/*! @import */
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  @apply antialiased bg-gray-50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app {
  @apply mt-64 text-center;
  color: #2c3e50;
}
</style>

<script setup>
import FullScreenBanner from '/src/components/FullScreenBanner.vue'
import { inject, onMounted, onUnmounted } from 'vue'

const $store = inject('$store');
const onWidthChange = () => { $store.commit('setWindowWidth', window.innerWidth) }
onMounted(() => { onWidthChange(); window.addEventListener('resize', onWidthChange) })
onUnmounted(() => window.removeEventListener('resize', onWidthChange))
</script>

<template>
  <div id="app">
    <FullScreenBanner />
    <div class="h-screen bg-blue-200"></div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script setup>
import FullScreenBanner from '/src/components/FullScreenBanner.vue'
import BackAnimation from '/src/components/BackAnimation.vue'
import FooterNav from '/src/components/Footer.vue'
import InfoMenu from '/src/components/InfoMenu.vue'
import { inject, onMounted, onUnmounted } from 'vue'

const $store = inject('$store');
const onWidthChange = () => { $store.commit('setWindowWidth', window.innerWidth) }
onMounted(() => { onWidthChange(); window.addEventListener('resize', onWidthChange) })
onUnmounted(() => window.removeEventListener('resize', onWidthChange))
</script>

<template>
  <div id="app">
    <FullScreenBanner />
    <div class="relative h-fit">
      <div class="absolute h-full w-full overflow-hidden -z-10">
        <BackAnimation/>
      </div>
      <div>
        <InfoMenu />
        <router-view class="global-class container mx-auto"/>
      </div>
    </div>
    <FooterNav />
  </div>
</template>

<style>

:root{
  --base-size:16em;
}

.global-class{
  min-height: 90vh;
}
</style>

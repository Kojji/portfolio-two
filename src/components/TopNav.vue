<script setup>
import logo from '/src/assets/logo-white.png'

const language = 'Português';
</script>

<template>
  <header class="topbar w-full">
    <div class="max-w-md md:max-w-7xl mx-auto">
      <div class="flex justify-between" style="min-height: 10vh;">
        <div class="justify-self-start self-center"><img :src="logo" style="width: 5em; height: 5em;" /></div>
        <div class="justify-self-end self-center">
          <button class="rounded-full bg-lime-400" style="width: 9em;height: 3em;"><span class="font-bold text-lg">{{ language }}</span></button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.topbar{
  position: absolute;
}
</style>

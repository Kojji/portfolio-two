<script setup>
import logo from '/src/assets/images/logo-white.png'

const language = 'Português';
</script>

<template>
  <header class="topbar w-full">
    <div class="mx-auto p-10">
      <div class="flex justify-between" style="min-height: 10vh;">
        <div class="justify-self-start self-center md:w-24 md:h-24 w-16 h-16"><img :src="logo" /></div>
        <div class="justify-self-end self-center">
          <button class="rounded-full bg-lime-400 md:w-36 md:h-12 w-24 h-8"><span class="font-bold md:text-lg text-md">{{ language }}</span></button>
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

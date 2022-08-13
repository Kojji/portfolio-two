<script setup>
import { inject, computed } from 'vue'
import ExperienceMDItem from '/src/components/ExperienceMDItem.vue';
import ExperienceSMItem from '/src/components/ExperienceSMItem.vue';
const $store = inject('$store');

let windowWidth = computed(() => $store.getters.getWindowWidth)
</script>

<template>
  <div class="experience">
    <ExperienceMDItem v-if="windowWidth > 1023.98" />
    <ExperienceSMItem v-else />
  </div>
</template>

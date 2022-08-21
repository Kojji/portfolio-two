<script setup>
import { inject, computed } from 'vue'
import EducationMDItem from '/src/components/EducationMDItem.vue';
import EducationSMItem from '/src/components/EducationSMItem.vue';
import { useStore } from 'vuex';
const store = useStore();

let windowWidth = computed(() => store.getters.getWindowWidth)
</script>

<template>
  <div class="education">
    <EducationMDItem v-if="windowWidth > 1023.98" />
    <EducationSMItem v-else />
  </div>
</template>

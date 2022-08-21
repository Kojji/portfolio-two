<script setup>
import FullScreenBanner from '/src/components/FullScreenBanner.vue'
import BackAnimation from '/src/components/BackAnimation.vue'
import FooterNav from '/src/components/Footer.vue'
import InfoMenu from '/src/components/InfoMenu.vue'
import { computed, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex';
import AboutView from '/src/views/About.vue'
import EducationView from '/src/views/Education.vue'
import ExperienceView from '/src/views/Experience.vue'
import SkillView from '/src/views/Skill.vue'
import AnimationView from '/src/views/Animation.vue'
const store = useStore();

const onWidthChange = () => { store.commit('setWindowWidth', window.innerWidth) }
onMounted(() => { onWidthChange(); window.addEventListener('resize', onWidthChange) })
onUnmounted(() => window.removeEventListener('resize', onWidthChange))

let selectedItem = computed(() => store.getters.getSelectedItem)
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
        <div id="router-contents" class="global-class container mx-auto">
          <AboutView v-if="selectedItem === 'about'"/>
          <EducationView v-if="selectedItem === 'education'"/>
          <ExperienceView v-if="selectedItem === 'experience'"/>
          <SkillView v-if="selectedItem === 'skill'"/>
          <AnimationView v-if="selectedItem === 'animation'"/>
        </div>
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

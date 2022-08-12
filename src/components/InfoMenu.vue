<script setup>
import { ref } from 'vue'

const horizontalMenuState = ref('Personal')
</script>

<template>
  <div>
    <div class="w-full inline-flex justify-center">
      <router-link to="/">
        <button id="Personal" class="w-24 rounded-md bg-amber-400 hover:bg-amber-500" :class="{ 'bg-amber-500' : horizontalMenuState == 'Personal' }" @click="horizontalMenuState = 'Personal'" ><a>{{$t('HorizontalMenu.PersonalItem')}}</a></button>
      </router-link>
      <router-link to="/experience">
        <button id="Experience" class="w-24 rounded-md bg-amber-400 hover:bg-amber-500" :class="{ 'bg-amber-500' : horizontalMenuState == 'Experience' }" @click="horizontalMenuState = 'Experience'" ><a>{{$t('HorizontalMenu.ExperienceItem')}}</a></button>
      </router-link>
      <router-link to="/skill">
        <button id="Skill" class="w-24 rounded-md bg-amber-400 hover:bg-amber-500" :class="{ 'bg-amber-500' : horizontalMenuState == 'Skill' }" @click="horizontalMenuState = 'Skill'" ><a>{{$t('HorizontalMenu.SkillItem')}}</a></button>
      </router-link>
      <router-link to="/education">
        <button id="Education" class="w-24 rounded-md bg-amber-400 hover:bg-amber-500" :class="{ 'bg-amber-500' : horizontalMenuState == 'Education' }" @click="horizontalMenuState = 'Education'" ><a>{{$t('HorizontalMenu.EducationItem')}}</a></button>
      </router-link>
      <router-link to="/animation">
        <button id="Animation" class="w-24 rounded-md bg-amber-400 hover:bg-amber-500" :class="{ 'bg-amber-500' : horizontalMenuState == 'Animation' }" @click="horizontalMenuState = 'Animation'" ><a>{{$t('HorizontalMenu.AnimationItem')}}</a></button>
      </router-link>
    </div>
  </div>
</template>
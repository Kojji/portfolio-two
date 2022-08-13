<script setup>
import { inject, reactive } from 'vue'

const $t = inject('$t');

let educationItems = reactive([
  {
    title: $t('InfoCards.Education.Sections[0].title'),
    items: [
      $t('InfoCards.Education.Sections[0].items[0].title'),
      $t('InfoCards.Education.Sections[0].items[1].title')
    ]
  },
  {
    title: $t('InfoCards.Education.Sections[1].title'),
    items: [
      $t('InfoCards.Education.Sections[1].items[0].title'),
      $t('InfoCards.Education.Sections[1].items[1].title'),
      $t('InfoCards.Education.Sections[1].items[2].title')
    ]
  },
])

</script>

<template>
  <div class="px-5 flex flex-col" id="small-education-card" >
    <h2 class="py-4 mx-auto font-bold text-xl">{{$t('InfoCards.Education.PageTitle')}}</h2>
    
    <div v-for="(item, index) in educationItems" :key="index">
      {{item.title}}
      <div v-for="(subItem, subIndex) in item.items" :key="subIndex" >
        {{subItem}}
      </div>
    </div>
  </div>
</template>

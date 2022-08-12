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
  <div>MD education</div>
  <div v-for="(item, index) in educationItems" :key="index">
    {{item}}
    <div v-for="(subItem, subIndex) in item.items" :key="subIndex" >
      {{subItem}}
    </div>
  </div>
</template>

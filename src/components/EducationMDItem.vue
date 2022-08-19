<script setup>
import { inject, reactive, ref } from 'vue'

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

const selected = ref('')
</script>

<template>
  <div class="px-10 flex flex-col" id="big-education-card" >
    <h2 class="py-4 mx-auto font-bold lg:text-3xl text-2xl">{{$t('InfoCards.Education.PageTitle')}}</h2>
    <div class="inline-flex">
      <div class="px-3 py-4 lg:w-96 w-72 h-min bg-purple-100 rounded-md drop-shadow-lg">
        <div v-for="(item, index) in educationItems" :key="index" class="my-3">
          <div class="px-3 bg-gray-100 font-semibold xl:text-lg text-base rounded-t-md uppercase">{{$t(`InfoCards.Education.Sections[${index}].value`)}}</div>
          <div v-for="(subItem, subIndex) in item.items" :key="subIndex" >
            <a :href="'#' + subItem">
              <button class="hover:bg-purple-400 hover:text-zinc-100 w-full flex items-center p-1 rounded-md font-semibold text-lg" :class="{ 'bg-purple-400 text-zinc-100' : selected == $t(`InfoCards.Education.Sections[${index}].items[${subIndex}].title`) }" @click="selected = $t(`InfoCards.Education.Sections[${index}].items[${subIndex}].title`)" >{{$t(`InfoCards.Education.Sections[${index}].items[${subIndex}].valueMenu`)}}</button>
            </a>
          </div>
        </div>
      </div>
      <div class="w-full lg:px-10 px-5">
        <div v-for="(item, index) in educationItems" :key="index">
          <div class="px-3 bg-gray-100 font-semibold text-lg uppercase">{{$t(`InfoCards.Education.Sections[${index}].value`)}}</div>
          <div v-for="(subItem, subIndex) in item.items" :key="subIndex" class="my-10">
            <p :id="subItem" class="font-bold text-xl">{{$t(`InfoCards.Education.Sections[${index}].items[${subIndex}].valueLabel`)}}</p>
            <p class="text-xl" v-html="$t(`InfoCards.Education.Sections[${index}].items[${subIndex}].valueDescription`)"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, reactive } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/solid'

const $t = inject('$t');

let experienceItems = reactive([
  {
    title: $t('InfoCards.Experience.Sections[0].title'),
    items: [
      $t('InfoCards.Experience.Sections[0].items[0].title'),
      $t('InfoCards.Experience.Sections[0].items[1].title'),
      $t('InfoCards.Experience.Sections[0].items[2].title'),
      $t('InfoCards.Experience.Sections[0].items[3].title'),
      $t('InfoCards.Experience.Sections[0].items[4].title')
    ]
  },
  {
    title: $t('InfoCards.Experience.Sections[1].title'),
    items: [
      $t('InfoCards.Experience.Sections[1].items[0].title'),
      $t('InfoCards.Experience.Sections[1].items[1].title'),
      $t('InfoCards.Experience.Sections[1].items[2].title'),
      $t('InfoCards.Experience.Sections[1].items[3].title'),
      $t('InfoCards.Experience.Sections[1].items[4].title'),
      $t('InfoCards.Experience.Sections[1].items[5].title')
    ]
  },
  {
    title: $t('InfoCards.Experience.Sections[2].title'),
    items: [
      $t('InfoCards.Experience.Sections[2].items[0].title'),
      $t('InfoCards.Experience.Sections[2].items[1].title'),
    ]
  },
])

</script>

<template>
  <div class="px-5 flex flex-col" id="small-experience-card" >
    <h2 class="py-4 mx-auto font-bold text-xl">{{$t('InfoCards.Experience.PageTitle')}}</h2>
    <div class="mx-auto w-full rounded-2xl">
      <div v-for="(item, index) in experienceItems" :key="index" class="mb-4">
        <div class="px-3 bg-gray-100 font-semibold rounded-md text-lg uppercase">{{$t(`InfoCards.Experience.Sections[${index}].value`)}}</div>
        <div v-for="(subItem, subIndex) in item.items" :key="subIndex" class="my-1">
          <Disclosure v-slot="{ open }" :defaultOpen="subIndex === 0 && index < 2">
            <DisclosureButton class="flex w-full justify-between rounded-t-md bg-purple-200 px-4 py-2 text-left hover:bg-purple-300">
              <span class="md:text-base text-sm font-bold">{{$t(`InfoCards.Experience.Sections[${index}].items[${subIndex}].valueLabel`)}}</span>
              <ChevronUpIcon
                :class="open ? 'duration-200' : 'duration-200 rotate-180'"
                class="h-5 w-5 text-purple-600"
              />
            </DisclosureButton>
            <DisclosurePanel class="px-4 pt-2 pb-4 bg-purple-100 rounded-b-md">
              <span class="md:text-base text-sm font-semibold text-gray-700">{{$t(`InfoCards.Experience.Sections[${index}].items[${subIndex}].valueDescription`)}}</span>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
    </div>
    
  </div>
</template>

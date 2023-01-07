<script setup>
import { inject, reactive } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/solid'

const $t = inject('$t');

let educationItems = reactive([
  {
    title: $t('InfoCards.Education.Sections[0].title'),
    items: [
      $t('InfoCards.Education.Sections[0].items[0].title'),
      $t('InfoCards.Education.Sections[0].items[1].title'),
      $t('InfoCards.Education.Sections[0].items[2].title'),
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
    <div class="mx-auto w-full rounded-2xl">
      <div v-for="(item, index) in educationItems" :key="index" class="mb-4">
        <div class="px-3 bg-gray-100 font-semibold rounded-md text-lg uppercase">{{$t(`InfoCards.Education.Sections[${index}].value`)}}</div>
        <div v-for="(subItem, subIndex) in item.items" :key="subIndex" class="my-1">
          <Disclosure v-slot="{ open }" :defaultOpen="subIndex === 0">
            <DisclosureButton class="flex w-full justify-between rounded-t-md bg-purple-200 px-4 py-2 text-left hover:bg-purple-300">
              <span class="md:text-base text-sm font-bold">{{$t(`InfoCards.Education.Sections[${index}].items[${subIndex}].valueLabel`)}}</span>
              <ChevronUpIcon
                :class="open ? 'duration-200' : 'duration-200 rotate-180'"
                class="h-5 w-5 text-purple-600"
              />
            </DisclosureButton>
            <DisclosurePanel class="px-4 pt-2 pb-4 bg-purple-100 rounded-b-md">
              <span class="md:text-base text-sm font-semibold text-gray-700">{{$t(`InfoCards.Education.Sections[${index}].items[${subIndex}].valueDescription`)}}</span>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
        <!-- <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-70 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-out"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-70 opacity-0"
        >
          <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
            If you're unhappy with your purchase for any reason, email us within
            90 days and we'll refund you in full, no questions asked.
          </DisclosurePanel>
        </transition> -->
    </div>
    
  </div>
</template>

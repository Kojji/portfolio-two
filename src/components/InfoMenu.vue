<script setup>
import { ref, inject, reactive } from 'vue'
import { useRoute } from 'vue-router';

const $t = inject('$t');

let menuItems = reactive([
  $t('HorizontalMenu[0].route'),
  $t('HorizontalMenu[1].route'),
  $t('HorizontalMenu[2].route'),
  $t('HorizontalMenu[3].route'),
  $t('HorizontalMenu[4].route'),
])

const route = useRoute();
</script>

<template>
  <div>
    <div class="w-full inline-flex justify-center md:my-10 my-5">
      <div v-for="(items, index) in menuItems" :key="items">
        <router-link :to="$t(`HorizontalMenu[${index}].route`)">
          <button :id="$t(`HorizontalMenu[${index}].id`)" class="md:w-28 md:h-12 w-20 h-10 rounded-md md:mx-1 mx-0.5 md:text-lg text-sm text-zinc-100 drop-shadow-xl font-semibold bg-amber-600 hover:bg-amber-700" :class="{ 'bg-amber-700' : route.path == $t(`HorizontalMenu[${index}].route`) }" ><a>{{$t(`HorizontalMenu[${index}].value`)}}</a></button>
        </router-link>
      </div>
    </div>
  </div>
</template>
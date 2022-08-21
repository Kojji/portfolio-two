<script setup>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex';
const store = useStore();
let selectedItem = computed(() => store.getters.getSelectedItem)

let menuItems = reactive([
  'about',
  'education',
  'experience',
  'skill',
  'animation',
])

const changeItem = (newItem) => {
  store.commit('setSelectedItem', newItem)
}
</script>

<template>
  <div>
    <div id="horizontal-menu" class="w-full inline-flex justify-center items-center md:my-10 my-5">
      <div v-for="(items, index) in menuItems" :key="items">
        <router-link :to="$t(`HorizontalMenu[${index}].route`)">
          <button 
            :id="$t(`HorizontalMenu[${index}].id`)"
            class="md:w-28 md:h-12 w-20 h-10 rounded-md md:mx-1 mx-px md:text-lg text-sm text-zinc-100 drop-shadow-xl font-semibold bg-amber-600 hover:bg-amber-700"
            :class="{ 'bg-amber-700' : selectedItem == items }"
            @click="changeItem(items)"
          ><a>{{$t(`HorizontalMenu[${index}].value`)}}</a></button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
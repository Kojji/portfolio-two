<script setup>
import { ref, inject } from 'vue'
import logo from '/src/assets/images/logo-white.png'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import detectLanguage from "/src/assets/languageDetect"

const $i18n = inject('$i18n');
function changeLocale(location) {
  $i18n.locale = location
}

const language = detectLanguage() == 'pt' ? ref('Português') : ref('English');
</script>

<template>
  <header class="topbar w-full">
    <div class="mx-auto p-10">
      <div class="flex justify-between" style="min-height: 10vh;">
        <div class="justify-self-start self-center md:w-24 md:h-24 w-16 h-16"><img :src="logo" /></div>
        <div class="justify-self-end self-center">
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton class="inline-flex rounded-full px-4 py-2 bg-lime-400 hover:bg-lime-500">
                <span class="font-bold md:text-lg text-md">{{ language }}</span>
                <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5 self-center" aria-hidden="true" />
              </MenuButton>
            </div>

            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="py-1">
                  <MenuItem v-slot="{ active }" @click="changeLocale('pt'), language = 'Português'">
                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'font-bold block px-4 py-2 text-sm']">Português</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }" @click="changeLocale('en'), language = 'English'">
                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'font-bold block px-4 py-2 text-sm']">English</a>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.topbar{
  position: absolute;
}
</style>

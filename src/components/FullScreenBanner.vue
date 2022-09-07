<script setup>
import {  computed } from 'vue'
import { useStore } from 'vuex';
import TopNav from '/src/components/TopNav.vue'
import AnimationComp from '/src/components/AnimationComp.vue'
import Curriculo from '/src/assets/Curriculo.pdf'
import Resume from '/src/assets/Resume.pdf'
const store = useStore();

let windowWidth = computed(() => store.getters.getWindowWidth)
</script>

<template>
  <TopNav />
  <section id="hexagon-background" class="md:bg-contain bg-cover bg-center w-full" style="overflow:hidden; z-index:2;">
    <!-- <div class="max-w-7xl mx-auto px-3"> -->
    <div class="mx-auto px-5 container">
      <div class="grid grid-cols-5 grid-flow-col">
        <!-- <div class="bg-gray-600 h-screen"> -->
        <div v-if="windowWidth > 767.98" class="col-span-2 h-screen z-40">
          <div class="h-full w-full flex flex-col justify-center items-end">
            <div class="w-fit h-min">
              <div class="inline-flex mb-2">
                <a href="https://wa.me/+5511934282440" target="_blank" class="mx-1 flex items-center w-10 h-10 rounded-full bg-amber-600 hover:bg-amber-700 place-content-center " style="color:white;">
                  <font-awesome-icon icon="fa-brands fa-whatsapp" size="xl" />
                </a>
                <!-- <a href="mailto:fernandokojidev@gmail.com" target="_blank" class="mx-1 flex items-center w-10 h-10 rounded-full bg-amber-600 hover:bg-amber-700 place-content-center " style="color:white;">
                  <font-awesome-icon icon="fa-solid fa-envelope" size="xl" />
                </a> -->
                <a href="https://github.com/Kojji" target="_blank" class="mx-1 flex items-center w-10 h-10 rounded-full bg-amber-600 hover:bg-amber-700 place-content-center " style="color:white;">
                  <font-awesome-icon icon="fa-brands fa-github" size="xl" />
                </a>
                <a href="https://www.instagram.com/nandokoji/" target="_blank" class="mx-1 flex items-center w-10 h-10 rounded-full bg-amber-600 hover:bg-amber-700 place-content-center " style="color:white;">
                  <font-awesome-icon icon="fa-brands fa-instagram" size="xl" />
                </a>
                <a href="https://www.linkedin.com/in/fernandokojiyama/" target="_blank" class="mx-1 flex items-center w-10 h-10 rounded-full bg-amber-600 hover:bg-amber-700 place-content-center " style="color:white;">
                  <font-awesome-icon icon="fa-brands fa-linkedin" size="xl" />
                </a>
                <a href="https://codepen.io/kojji" target="_blank" class="mx-1 flex items-center w-10 h-10 rounded-full bg-amber-600 hover:bg-amber-700 place-content-center " style="color:white;">
                  <font-awesome-icon icon="fa-brands fa-codepen" size="xl" />
                </a>
              </div>
              <h1 class="text-white font-bold xl:text-5xl text-4xl font-sans">FERNANDO KOJI</h1>
              <p class="text-white font-semibold xl:text-3xl text-2xl">{{$t('HomeBanner.Profession')}}</p>
              <div class=" mt-10 inline-flex">
                <a href="mailto:fernandokojdev@gmail.com" target="_blank">
                  <button type="button" class="flex items-center drop-shadow-xl xl:w-36 w-32 xl:h-12 h-10  rounded-md bg-amber-600 font-semibold text-lg text-zinc-100 hover:bg-amber-700">
                    <font-awesome-icon icon="fa-solid fa-envelope" class="px-3" />
                    <p class="xl:text-base text-sm">{{ $t('HomeBanner.CallToAction') }}</p>
                  </button>
                </a>
                <a :href="$t('HomeBanner.CallToActionResume') === 'Curriculo' ? Curriculo : Resume" target="_blank">
                  <button type="button" class="ml-2 flex items-center drop-shadow-xl xl:w-36 w-32 xl:h-12 h-10  rounded-md bg-amber-600 font-semibold text-lg text-zinc-100 hover:bg-amber-700">
                    <font-awesome-icon icon="fa-solid fa-download" class="px-3" />
                    <p class="xl:text-base text-sm">{{ $t('HomeBanner.CallToActionResume') }}</p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="md:col-span-3 col-span-5 h-screen relative">
          <div v-if="windowWidth <= 768" class="h-full w-full flex flex-col justify-end items-start z-40 absolute pb-10">
            <div class="w-fit h-min bg-purple-700 bg-opacity-50 p-5 rounded-md">
              <h1 class="text-white font-bold text-4xl font-sans">FERNANDO KOJI</h1>
              <p class="text-white font-semibold text-2xl">{{$t('HomeBanner.Profession')}}</p>
              <div class="inline-flex my-2">
                <a href="https://wa.me/+5511934282440" target="_blank" class="mx-1 flex items-center w-8 h-8 rounded-full bg-amber-600 place-content-center " style="color:white;">
                  <font-awesome-icon icon="fa-brands fa-whatsapp" size="lg" />
                </a>
                <a href="mailto:fernandokojidev@gmail.com" target="_blank" class="mx-1 flex items-center w-8 h-8 rounded-full bg-amber-600 place-content-center " style="color:white;">
                  <font-awesome-icon icon="fa-solid fa-envelope" size="lg" />
                </a>
                <a href="https://github.com/Kojji" target="_blank" class="mx-1 flex items-center w-8 h-8 rounded-full bg-amber-600 place-content-center " style="color:white;">
                  <font-awesome-icon icon="fa-brands fa-github" size="lg" />
                </a>
                <a href="https://www.instagram.com/nandokoji/" target="_blank" class="mx-1 flex items-center w-8 h-8 rounded-full bg-amber-600 place-content-center " style="color:white;">
                  <font-awesome-icon icon="fa-brands fa-instagram" size="lg" />
                </a>
                <a href="https://www.linkedin.com/in/fernandokojiyama/" target="_blank" class="mx-1 flex items-center w-8 h-8 rounded-full bg-amber-600 place-content-center " style="color:white;">
                  <font-awesome-icon icon="fa-brands fa-linkedin" size="lg" />
                </a>
                <a href="https://codepen.io/kojji" target="_blank" class="mx-1 flex items-center w-8 h-8 rounded-full bg-amber-600 place-content-center " style="color:white;">
                  <font-awesome-icon icon="fa-brands fa-codepen" size="lg" />
                </a>
              </div>
              <a :href="$t('HomeBanner.CallToActionResume') === 'Curriculo' ? Curriculo : Resume" target="_blank">
                <button type="button" class="flex items-center drop-shadow-xl xl:w-36 w-32 xl:h-12 h-10  rounded-md bg-amber-600 font-semibold text-lg text-zinc-100 hover:bg-amber-700">
                  <font-awesome-icon icon="fa-solid fa-download" class="px-3"/>
                  <p class="xl:text-base text-sm">{{ $t('HomeBanner.CallToActionResume') }}</p>
                </button>
              </a>
            </div>
          </div>
          <AnimationComp />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#animation{
  position: relative;
}
.info-overlay{
  position: absolute;
}
/* .name-grid{
  display: grid;
  align-items: center;
  justify-items: start;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  height: 100%;
  z-index: 99;
} */
.square {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 3em;
  height: 3em;
  border-radius: 10%;
  z-index: 3;
  bottom: 25%;
}
#bottom-hole{
  position: absolute;
  width: 25em;
  height: 3em;
  border-radius: 50%;
  background: black;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: translateY(50%);
  bottom: 30%;
  z-index: 2;
}
#back-hole{
  bottom: 30%;
  position: absolute;
  width: 25em;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: translateY(100%);
  z-index: 4;
  filter: saturate(1.6);
}
#hexagon-background{
  background-image: url('/src/assets/images/hexagonBackground.png');
  background-repeat: no-repeat;
  background-color: #a855f7;
  max-height: 1028px;
}
</style>

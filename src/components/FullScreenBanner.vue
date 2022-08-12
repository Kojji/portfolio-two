<script setup>
import { ref, inject, computed } from 'vue'
import TopNav from '/src/components/TopNav.vue';
// import holeBack from '/src/assets/images/background-hole.png'
import hexagon from '/src/assets/images/hexagon.png'
const $store = inject('$store');

let windowWidth = computed(() => $store.getters.getWindowWidth)
</script>

<template>
  <TopNav />
  <section id="hexagon-background" class="md:bg-contain bg-cover bg-center w-full" style="overflow:hidden; z-index:2;">
    <!-- <div class="max-w-7xl mx-auto px-3"> -->
    <div class="mx-auto px-5">
      <div class="flex">
        <!-- <div class="bg-gray-600 h-screen"> -->
        <div v-if="windowWidth > 991.98" class="flex-1 h-screen">
          <div class="name-grid">
            <div>
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
              <h1 class="text-white font-bold text-5xl font-sans">FERNANDO KOJI</h1>
              <p class="text-white font-semibold text-3xl">{{$t('HomeBanner.Profession')}}</p>
              <a href="mailto:fernandokojdev@gmail.com" target="_blank">
                <button type="button" class="flex items-center drop-shadow-xl justify-center items-center mt-10 w-36 h-12 rounded-md bg-amber-600 font-semibold text-lg text-zinc-100 hover:bg-amber-700">
                  <font-awesome-icon icon="fa-solid fa-envelope" />
                  <p class="pl-2">{{ $t('HomeBanner.CallToAction') }}</p>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="flex-1 h-screen">
          <div class="info-grid">
            
            <!-- <div id="animation">
              <div class="square" style="background: orange;"></div>
              <div class="square" style="background: blue;"></div>
              <div class="square" style="background: green;"></div>
              <div ><img id="back-hole" :src="holeBack" /></div>
              <div id="bottom-hole"></div>
            </div> -->
            {{$t('HomeBanner.CallToAction')}}
          </div>
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
.name-grid{
  display: grid;
  align-items: center;
  justify-items: end;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  height: 100%;
}
.info-grid{
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  height: 100%;
}
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
}
</style>

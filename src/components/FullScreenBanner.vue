<script setup>
import { ref, inject, computed } from 'vue'
import TopNav from './TopNav.vue';
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
          <!-- <div class="info-grid">
            <div class="background-image"><img alt="text-background" class="text-background" src="https://drive.google.com/uc?export=view&id=1OPsCZK9Zpbkfc3U0KY8Fzx0HyhH2jbrS" /></div>
            <div class="text-content row">
              <div class="col-9 offset-2">
                <div class="main-text-slot"> -->
                  <p>Fernando Koji Yamashiro</p>
                  <!-- <p class="role-text text-size-2">{{$t('HomeBanner.Profession')}}</p>
                </div>
                <p class="py-3" style="font-weight: bold;">{{$t('HomeBanner.Text')}}</p>
                <a href="mailto:fernandokojiyama@gmail.com" target="_blank">
                  <button type="button" class="btn color-button">{{$t('HomeBanner.CallToAction')}}</button>
                </a>
              </div>
            </div>
          </div> -->
        </div>
        <div class="flex-1 h-screen">
          <div class="info-grid">

            {{$t('HomeBanner.CallToAction')}}
          </div>
        </div>
        <!-- <div id="animation">
          <div class="square" style="background: orange;"></div>
          <div class="square" style="background: blue;"></div>
          <div class="square" style="background: green;"></div>
          <div ><img id="back-hole" :src="holeBack" /></div>
          <div id="bottom-hole"></div>
        </div> -->
      </div>

      <!-- <div class="flex justify-between" style="min-height: 10%;">
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2" style="min-height: 90%;">
        <div class="bg-gray-600">
          test
        </div>
        <div id="animation">
          <div class="square" style="background: orange;"></div>
          <div class="square" style="background: blue;"></div>
          <div class="square" style="background: green;"></div>
          <div ><img id="back-hole" :src="holeBack" /></div>
          <div id="bottom-hole"></div>

        </div>
      </div> -->
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
.info-grid{
  display: grid;
  align-items: center;
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

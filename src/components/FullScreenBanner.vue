<script setup>
import TopNav from './TopNav.vue';
// import holeBack from '/src/assets/images/background-hole.png'
import hexagon from '/src/assets/images/hexagon.png'
</script>

<template>
  <TopNav />
  <section id="hexagon-background" class="bg-contain bg-center w-full" style="overflow:hidden; z-index:2;">
    <!-- <div class="max-w-7xl mx-auto px-3"> -->
    <div class="mx-auto px-5">
      <div class="flex">
        <!-- <div class="bg-gray-600 h-screen"> -->
        <div class="flex-1 h-screen">
          test
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

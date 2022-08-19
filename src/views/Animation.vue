<script setup>
import beachWavesVideo from "/src/assets/videos/shortVer.mp4"
import cityLightsVideo from "/src/assets/videos/city_lights.mp4"
import surfingPikachu from "/src/assets/videos/surfing.mp4"
import octopiano from "/src/assets/videos/octopiano.mp4"
import squares from "/src/assets/videos/squares.mp4"
import rotating from "/src/assets/videos/rotating.mp4"

function playOnHover(element) {
  element[0].play()
}
function pauseOnLeave(element) {
  element[0].pause()
}
function iconAppear(iconId) {
  let icon = document.getElementById(iconId)
  icon.classList.remove("invisible")
}
function iconDisappear(iconId) {
  let icon = document.getElementById(iconId)
  icon.classList.add("invisible")
}

const animations = [
  {
    name: 'Octopiano',
    component: octopiano,
    reference: 'octopianoVid',
    link: 'https://codepen.io/kojji/full/abVxxOQ',
  },
  {
    name: 'Surfing Pikachu',
    component: surfingPikachu,
    reference: 'surfingPikachuVid',
    link: 'https://codepen.io/kojji/full/poaYvVL',
  },
  {
    name: 'GSAP outlines rotation',
    component: rotating,
    reference: 'rotatingVid',
    link: 'https://codepen.io/kojji/full/LYdgmdg',
  },
  {
    name: 'GSAP Rotating Squares',
    component: squares,
    reference: 'squaresVid',
    link: 'https://codepen.io/kojji/full/poLxrMW',
  },
  {
    name: 'Beach Waves',
    component: beachWavesVideo,
    reference: 'beachVid',
    link: 'https://codepen.io/kojji/full/QWOJJGQ',
  },
  {
    name: 'City Lights',
    component: cityLightsVideo,
    reference: 'cityLightsVid',
    link: 'https://codepen.io/kojji/full/zYPyPJV',
  }
]

</script>

<template>
  <div class="md:px-10 px-5 flex flex-col" id="animation-card" >
    <h2 class="py-4 mx-auto font-bold lg:text-3xl md:text-2xl text-xl">{{$t('InfoCards.Animation.PageTitle')}}</h2>
    <div class="w-full lg:px-10 px-5">
      <div class="animation-text">
        <p class="md:my-6 my-3" v-html="$t('InfoCards.Animation.TextOne')"></p>
      </div>
    </div>
    <div class="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-3 md:gap-2 gap-1">
    <!-- <div class="w-full lg:columns-3 md:columns-2 columns-1 lg:gap-3 md:gap-2 gap-1"> -->
      <div v-for="videos in animations" :key="videos.name" class="rounded-md bg-purple-100 h-min p-2">
        <a :href="videos.link" target="_blank"><span class="font-semibold text-lg hover:text-blue-600" @mouseover="iconAppear(`${videos.reference}Icon`)" @mouseleave="iconDisappear(`${videos.reference}Icon`)">{{videos.name}} <font-awesome-icon :id="`${videos.reference}Icon`" class="invisible" icon="fa-solid fa-arrow-up-right-from-square"/></span></a>
        <video @mouseover="playOnHover($refs[videos.reference])" @mouseleave="pauseOnLeave($refs[videos.reference])" :ref="videos.reference" muted="muted">
          <source :src="videos.component" type="video/mp4">
        </video>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 575.98px) {
  .animation-text p{
    font-size: 14px;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .animation-text p{
    font-size: 16px;
  }
}
@media (min-width: 768px) and (max-width: 991.98px){
  .animation-text p{
    font-size: 18px;
  }
}
@media (min-width: 992px) {
  .animation-text p{
    font-size: 22px;
  }
}

.animation-text p{
  text-align: justify;
  text-justify: inter-word;
}
</style>


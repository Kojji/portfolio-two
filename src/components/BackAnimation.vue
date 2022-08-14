<script setup>
import { Switch } from "@headlessui/vue";
import { gsap } from "gsap";
import { onMounted } from 'vue'
import { ref, inject, computed } from 'vue'
const $store = inject('$store');

let windowWidth = computed(() => $store.getters.getWindowWidth)

let numberOfParticles = 10

if(windowWidth > 768) {
  numberOfParticles = 30
}

let delayCap = 4

function rerun(id) {
  gsap.to( "#" + id, {
    keyframes: [
      {
        opacity: '40%', 
        scale: 'random(0.5, 1, 0.1)',
        duration: 2,
        yoyo: true,
        repeat: 1
      },
      { 
        rotation: "random([-720, 720])",
        duration: 4,
        delay: -4,
      },
    ],
    delay: 'random(0, ' + delayCap + ', 0.1)',
    // repeat: -1,
    backgroundColor: "random(['red', 'blue', 'yellow'])",
    onComplete: function() {
      this.restart(true, false);
    }
  });
}

onMounted(()=>{
  let glitter = document.getElementById('glitter')

  for(let particle = 0; particle < numberOfParticles; particle++) {
    let square = document.createElement('div')
    square.id = 'square' + particle
    square.classList.add("box")
    square.classList.add("rounded-lg")
    square.classList.add("w-32")
    square.classList.add("h-32")
    let randomWidth = (Math.floor(Math.random() * 1050)-50)/10 // random square spawn only on left and right, spawn from -5% to 105%
    // if(randomWidth > 18) randomWidth += 62 // avoid spawn at 19% to 81%

    let randomHeight = Math.floor((Math.random() * 350)-50)/10
    // randomHeight = randomHeight > 20 ? randomHeight + 60 : null

    
    square.style.cssText ='top: '+ randomHeight + '%; left: ' + randomWidth + '%; position:absolute;'
    glitter.appendChild(square)
    gsap.set( "#square" + particle,{ scale: 0.1, opacity:'0%', rotate: "random([15, 30, 45])" });
    rerun('square' + particle)
  }
})

</script>

<template>
  <div id="glitter" style="width: 100vw; height: 100vh; position: relative;"></div>
    <!-- <div id="animation">
      <div class="square" style="background: orange;"></div>
      <div class="square" style="background: blue;"></div>
      <div class="square" style="background: green;"></div>
      <div ><img id="back-hole" :src="holeBack" /></div>
      <div id="bottom-hole"></div>
    </div> -->
</template>

<style scoped>
.box {
  display: block;
}

</style>
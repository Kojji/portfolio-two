<script setup>
import { gsap } from "gsap";
import { onMounted } from 'vue'
import { inject, computed } from 'vue'
const $store = inject('$store');

let windowWidth = computed(() => $store.getters.getWindowWidth)

function runAnimation() {
  gsap.to(".elipse", {
    keyframes: [
      {
        rotationZ: 1440,
        rotationY: 1440,
        duration: 8,
      },
      {
        borderColor: 'orange',
        duration: 4,
        yoyo: true,
        repeat: 1,
        delay: -8,
      }
    ],
    stagger: windowWidth > 767.98 ? 0.1 : 0.2,
    delay: 1.5,
    onComplete: function() {
      this.restart(true, false)
    }
  })
  
  gsap.set(".square", {
    y: '70%'
  })
  gsap.to(".square", {
    keyframes: [
      {
        rotationY: 1440,
        duration: 8,
      },
      {
        borderColor: 'orange',
        duration: 4,
        yoyo: true,
        repeat: 1,
        delay: -8,
      }
    ],
    stagger: windowWidth > 767.98 ? 0.1 : 0.2,
    delay: 1.5,
    onComplete: function() {
      this.restart(true, false)
    }
  })
}

let numberOfParticles = 8
if(windowWidth > 768) {
  numberOfParticles = 15
}

onMounted(()=>{
  runAnimation()
})

</script>

<template>
  <div id="animationLines" class="z-30 relative w-full h-full">
    <div v-for="(line, index) in numberOfParticles" :key="index" class="square md:w-96 md:h-96 w-72 h-72"></div>
    <div v-for="(line, index) in numberOfParticles" :key="index" class="elipse md:w-96 md:h-96 w-72 h-72"></div>
  </div>
</template>

<style scoped>

*{transform-style: preserve-3d;}

#animationLines{
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: calc(var(--base-size) * 2);
}

.elipse{
  position: absolute;
  border-radius: 50%;
  border: solid calc(var(--base-size)/16) white;
  transform: rotateX(60deg) translateY(-60%);
  opacity: 70%;
}

.square{
  position: absolute;
  border-radius: 20%;
  border: solid calc(var(--base-size)/16) white;
  transform: rotateX(60deg) translateY(-50%);
  opacity: 70%;
}

</style>
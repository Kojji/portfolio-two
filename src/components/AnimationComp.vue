<script setup>
import { gsap } from "gsap";
import { onMounted } from 'vue'
import { computed } from 'vue'

function runAnimation() {
  var tl = gsap.timeline({repeat: -1, repeatDelay: 0.5});
  tl.to('.kirby',0.5,{repeat:3,backgroundPosition: "-2048px",ease:"steps(4)"});
  // tl.to('.kirby',0.5,{repeat:2,backgroundPosition: "-2048px",ease:"steps(4)", delay:1.0});

  tl.play()
}

onMounted(()=>{
  runAnimation()
})

</script>

<template>
  <div id="animationLines" class="z-30 relative w-full h-full">
    <div class="circle-background sizing" style="width: 512px; height: 512px;"></div>
    <div class="kirby sizing" style="width: 512px; height: 512px;"></div>
  </div>
</template>

<style scoped>

@media (max-width: 575.98px) {
  .sizing{
    transform: scale(0.8)
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .sizing{
    transform: scale(1)
  }
}
@media (min-width: 768px) and (max-width: 991.98px){
  .sizing{
    transform: scale(1.2)
  }
}
@media (min-width: 992px) and (max-width: 1279.98px){
  .sizing{
    transform: scale(1.4)
  }
}
@media (min-width: 1280px) {
  .sizing{
    transform: scale(1.6)
  }
}

#animationLines{
  /* box-sizing: border-box; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.kirby {
  background: url(https://drive.google.com/uc?export=view&id=1rsvyOC4Kf8MpstZOx-YX-Vp7-l432SSZ);
  position: absolute;
}

.circle-background{
  border: darkorange solid 8px;
  background-color: rgb(243, 178, 152);
  border-radius: 50%;
  transform: skew(15deg, 30deg);
}

</style>
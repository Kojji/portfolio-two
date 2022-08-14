<template>
  <div class="animation-grid h-full">
    <div class="layer circle-background h-1/2 w-full"></div>
    <div class="layer"><img alt="music-background" class="musical-notes musical-background h-full" src="https://drive.google.com/uc?export=view&id=1Nt56CbxsyG-jig3ayLQdc7vFDDI_TNP2" /></div>
    <div class="layer"><img alt="octopus-musical-notes" class="musical-notes h-full" src="https://drive.google.com/uc?export=view&id=1OJ686fSOP8KdXtB99vkgmknfDeqgq52b" /></div>

    <!-- <div id="animation">
      <div class="square" style="background: orange;"></div>
      <div class="square" style="background: blue;"></div>
      <div class="square" style="background: green;"></div>
      <div ><img id="back-hole" :src="holeBack" /></div>
      <div id="bottom-hole"></div>
    </div> -->
  </div>
</template>

<style scoped>
@keyframes color-change {
  0% {
    background: #b2b9ed;
  }
  100% {
    background: #eff0bc;
  }
}
@keyframes musical-notes {
  0%{
    transform: scale(105%, 105%) translate(-2%,-3%);
  }
  50%{
    transform: translate(0%,0%) scale(100%, 100%);
  }
  100%{
    transform: scale(105%, 105%) translate(2%,-3%);
  }
}

.musical-notes{
  animation: musical-notes 0.8s ease-in-out infinite alternate;
}

.musical-background{
  animation-delay: 0.3s
}
.animation-grid{
  overflow: hidden;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
}

.circle-background{
  animation: color-change 3s linear alternate infinite;
  border-radius: 50%;
}

.layer{
  grid-row-start: 1;
  grid-column-start: 1;
  z-index:2;
  /* align-self: flex-end;
  margin-right: 5%; */
}
</style>
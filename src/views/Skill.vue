<script setup>
import awsLogo from '/src/assets/images/amazon-web-services-logo.png'
const skillIcons = [
  {
    name: "Node.js",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "nodejs icon"
  },
  {
    name: "Vue.js",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    alt: "vuejs icon"
  },
  {
    name: "Firebase",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    alt: "firebase icon"
  },
  {
    name: "AWS",
    iconUrl: awsLogo,
    alt: "amazon web services icon"
  },
  {
    name: "Typescript",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "typescript icon"
  },
  {
    name: "Tailwind",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    alt: "tailwind css icon"
  },
  // {
  //   name: "Docker",
  //   iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  //   alt: "docker icon"
  // },
]
</script>

<template>
  <div class="md:px-10 px-5 flex flex-col" id="skill-card" >
    <h2 class="py-4 mx-auto font-bold lg:text-3xl md:text-2xl text-xl">{{$t('InfoCards.Skills.PageTitle')}}</h2>
    <div class="inline-flex">
      <div class="px-3 py-4 lg:w-1/4 w-1/3 h-min bg-purple-100 rounded-md drop-shadow-lg">
        <div class="px-3 bg-gray-100 font-semibold xl:text-lg text-base rounded-t-md uppercase">{{$t('InfoCards.Skills.CardOne')}}</div>
        <div class="grid lg:grid-cols-2 grid-cols-1 items-center">
          <div :key="skill.name" v-for="skill of skillIcons">
            <div class="md:p-3 my-2" >
              <img :src="skill.iconUrl" :class="skill.name === 'AWS' ? 'rounded my-4' : 'rounded'" alt="...">
              <p class="font-semibold">{{skill.name}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:px-10 px-5">
        <div class="skill-text">
          <p class="md:my-6 my-3" v-html="$t('InfoCards.Skills.TextOne')"></p>
          <p class="md:my-6 my-3" v-html="$t('InfoCards.Skills.TextTwo')"></p>
          <p class="md:my-6 my-3" v-html="$t('InfoCards.Skills.TextThree')"></p>
          <p class="md:my-6 my-3" v-html="$t('InfoCards.Skills.TextFour')"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 575.98px) {
  .skill-text p{
    font-size: 14px;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .skill-text p{
    font-size: 16px;
  }
}
@media (min-width: 768px) and (max-width: 991.98px){
  .skill-text p{
    font-size: 18px;
  }
}
@media (min-width: 992px) {
  .skill-text p{
    font-size: 22px;
  }
}

.skill-text p{
  text-align: justify;
  text-justify: inter-word;
}
</style>

<script setup>
import photo from '/src/assets/images/photo.jpg'
</script>

<template>
  <div class="md:px-10 px-5 flex flex-col" id="personal-card" >
    <h2 class="py-4 mx-auto font-bold lg:text-3xl md:text-2xl text-xl">{{$t('InfoCards.Personal.PageTitle')}}</h2>
    <img :src="photo" class="photo-slot md:mb-10 mb-5 mx-auto" alt="...">
    <div class="about-me-text">
      <p class="md:my-6 my-3" v-html="$t('InfoCards.Personal.ParagraphFirst')"></p>
      <p class="md:my-6 my-3" v-html="$t('InfoCards.Personal.ParagraphSecond')"></p>
      <p class="md:my-6 my-3" v-html="$t('InfoCards.Personal.ParagraphThird')"></p>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 575.98px) {
  .photo-slot{
    width: 6rem;
  }
  .about-me-text p{
    font-size: 14px;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .photo-slot{
    width: 6rem;
  }
  .about-me-text p{
    font-size: 16px;
  }
}
@media (min-width: 768px) and (max-width: 991.98px){
  .photo-slot{
    width: 8rem;
  }
  .about-me-text p{
    font-size: 18px;
  }
}
@media (min-width: 992px) {
  .photo-slot{
    width: 10rem;
  }
  .about-me-text p{
    font-size: 22px;
  }
}

.about-me-text p{
  text-align: justify;
  text-justify: inter-word;
}

.photo-slot{
  border-radius: 50%;
}

#personal-card{
  /* margin-bottom: var(--bottom-margin); */
}
</style>
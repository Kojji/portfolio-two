<script setup>
const year = new Date().getFullYear()
</script>


<template>
  <div class="w-full bg-purple-600 flex flex-col">
    <div class="mx-auto my-2">
      <div class="inline-flex mb-2">
        <a href="https://wa.me/+5511934282440" target="_blank" class="mx-1 flex items-center w-10 h-10 rounded-full bg-zinc-100 hover:bg-amber-300 place-content-center" style="color:darkviolet;">
          <font-awesome-icon icon="fa-brands fa-whatsapp" size="xl" />
        </a>
        <a href="mailto:fernandokojidev@gmail.com" target="_blank" class="mx-1 flex items-center w-10 h-10 rounded-full bg-zinc-100 hover:bg-amber-300 place-content-center " style="color:darkviolet;">
          <font-awesome-icon icon="fa-solid fa-envelope" size="xl" />
        </a>
        <a href="https://github.com/Kojji" target="_blank" class="mx-1 flex items-center w-10 h-10 rounded-full bg-zinc-100 hover:bg-amber-300 place-content-center " style="color:darkviolet;">
          <font-awesome-icon icon="fa-brands fa-github" size="xl" />
        </a>
        <a href="https://www.instagram.com/nandokoji/" target="_blank" class="mx-1 flex items-center w-10 h-10 rounded-full bg-zinc-100 hover:bg-amber-300 place-content-center " style="color:darkviolet;">
          <font-awesome-icon icon="fa-brands fa-instagram" size="xl" />
        </a>
        <a href="https://www.linkedin.com/in/fernandokojiyama/" target="_blank" class="mx-1 flex items-center w-10 h-10 rounded-full bg-zinc-100 hover:bg-amber-300 place-content-center " style="color:darkviolet;">
          <font-awesome-icon icon="fa-brands fa-linkedin" size="xl" />
        </a>
        <a href="https://codepen.io/kojji" target="_blank" class="mx-1 flex items-center w-10 h-10 rounded-full bg-zinc-100 hover:bg-amber-300 place-content-center " style="color:darkviolet;">
          <font-awesome-icon icon="fa-brands fa-codepen" size="xl" />
        </a>
      </div>
    </div>
    <p class="text-zinc-100 my-2 mx-auto">{{`@${year} - Fernando Koji Yamashiro`}}</p>
  </div>
</template>
<template>
  <section class="exp" id="experience">
    <div class="exp__wrapper">
      <h1>
        My <b>Experience</b>
      </h1>
<!--      <div class="item" v-for="item in experience?.body">-->
      <div class="item" v-for="item in experience">
        <div class="item__title">
          <h2>{{item?.name}}</h2>
          <span>{{item?.date}}</span>
        </div>
        <p>{{item?.text}}</p>
      </div>
    </div>
  </section>
</template>
y
<script lang="ts" setup>
import type { PropType } from 'vue';
import type { ExperienceResponse } from '~/contracts/experienceResponseType';

// TODO Сделать нормальный nuxt/content, разобраться с SSG, пока отключил
// defineProps({
//   experience: {
//     type: Array as PropType<Array<Experience>>
//   }
// })


//Временно сделал статические данные
interface Experience {
  name: String,
  date: String,
  text: String,
}
const experience:Experience[] = [
  {
    name: 'Media designer',
    date: 'Nove 2023 - Present',
    text: 'Posts and videos for Instagram and other social media. Designed print flyers and 3D, 2D design'
  }, {
    name: 'Freelance',
    date: 'Aug 2022 - Sep 2023',
    text: 'Completed multiple freelance projects with excellent client feedback. Specialized in media design for social media, including photography, video production, retouching, graphic design, animation, and 3D visualization'
  }, {
    name: 'The Center of Electronic Educational Resources',
    date: 'Jan 2021 - Feb 2022',
    text: 'Created 3D-animated videos.. Collaborated with designers and educators to align animations with course objectives and audience needs'
  }
]
</script>

<style lang="scss" scoped>
@use "/assets/scss/app/experience";
</style>
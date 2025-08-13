<script setup lang="ts">

import type {PropType} from "vue";
import type {MyProjectsResponseType} from "~/contracts/MyProjectsResponseType";

// TODO Сделать нормальный nuxt/content, разобраться с SSG
// defineProps({
//   projects: {
//     type: Object as () => MyProjectsResponseType,
//     // type: Array as PropType<Array<MyProjectsResponseType>>
//   }
// })

//Временно сделал статические данные
interface Projects {
  title: string,
  text: string,
  img: string,
  link: string,
  index: string
}
const projects:Projects[] = [
  {
    title: 'Figma Portfolio',
    index: '01',
    text: 'Recently, I began exploring web design through prototyping. I’ve worked on my first interface prototypes, including training projects, using tools like Figma and Adobe XD. These early experiences helped me understand the basics of creating user-friendly layouts and applying fundamental UX/UI principles.',
    img: 'project1',
    link: '/figma'
  },
  {
    title: '3D and 2D design',
    index: '02',
    text: 'I fell in love with 3D in 2019, and since then, I have been creating 3D models, animations, and visualizations using various software. Over time, I’ve had the opportunity to work with tools like Autodesk 3ds Max, Autodesk Maya, Cinema 4D, Blender, ZBrush, Octane Render, Arnold Render, Eevee Render, Marvelous Designer, and more. I’ve completed tasks for advertising, educational content, 3D printing, and personal projects. I’m always excited to work in this field and look forward to new projects where I can bring ideas to life.',
    img: 'project2',
    link: '/designs'
  },
  {
    title: 'Media Designer',
    index: '03',
    text: 'Managing content on social media, developing a unique brand style, and conveying the existing identity are important tasks for a media designer. I am always ready to assist in creating a unique style and design. Also I can prepare materials for printing and create video and photo content for you and your social media!',
    img: 'project3',
    link: '/media-designer'
  },
]


</script>

<template>
  <article class="projects" id="projects">
    <h1 class="article-title">
      My <b>Projects</b>
    </h1>
<!--    <div v-for="project in projects?.body" class="project__item">-->
    <div v-for="project in projects" class="project__item">
      <div class="project__item__image">
        <img :src="`images/projects/${project.img}.jpg`" alt="project-image">
      </div>
      <div class="project__item__text">
        <h2>{{ project.index }}</h2>
        <h2>{{ project.title }}</h2>
        <p>{{ project.text }}</p>
        <nuxt-link :to="`${project.link}`"><img src="/images/linkWhite.svg">Visit project</nuxt-link>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
@use "/assets/scss/app/projects";
</style>
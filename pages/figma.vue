<script setup lang="ts">

// TODO Сделать нормальный nuxt/content, разобраться с SSG
// const {path} = useRoute()
// const route = useRoute()
// const getPath = computed(() => path.split('/').pop())
// const {data: projectContent} = useAsyncData('project-content', () => queryCollection('project').where('slug', '=', getPath.value).first())

// onMounted(()=>{
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
// })

//Временно
// const singleProject = ref('');
// onMounted(() => {
//   singleProject.value = allProjects.find((projectItem) => {
//     return projectItem.slug === getPath.value
//   })
// })

const figmaContent = {
  title: 'Figma portfolio',
  slug: 'figma',
  content:
      [{
        text: 'The work was done for educational purposes, as an announcement of a new feature by the company Cospaces, which provides programming education for children. The colors were chosen to match the company’s style. The fonts are playful and cheerful to attract children.',
        image: 'cospaces.png',
        image_mobile: 'cospaces_mobile.png',
        is_video: false,
        video: '',
        video_mobile: '',
        is_animation: false,
        animation: '',
        animation_mobile: '',
      },
        {
          text: 'Created Amazon product listing for handbags (training project)  Conducted market research to identify popular styles and customer needs. Developed unique selling points focused on eco-friendly materials and versatile design. Designed a compelling product page with optimized images, persuasive copy, and clear value proposition to stand out in a competitive category',
          image: 'amazon.png',
          image_mobile: 'amazon_mobile.png',
          is_video: false,
          video: '',
          video_mobile: '',
          is_animation: false,
          animation: '',
          animation_mobile: '',
        },
        {
          text: "As part of the project, a label design and an animation of the can's movement on the website when hovered over with a mouse were created.",
          image: '',
          image_mobile: '',
          is_video: true,
          video: 'frutti.mp4',
          video_mobile: 'frutti_mobile.mp4',
          is_animation: false,
          animation: '',
          animation_mobile: '',
        }]
}
</script>

<template>
  <section class="project__wrapper">
    <h2>
      {{ figmaContent?.title }}
    </h2>
    <template v-for="project in figmaContent?.content">
      <ProjectsItem :project="project" :projectSlug="figmaContent?.slug"/>
    </template>
  </section>

</template>

<style scoped lang="scss">
@use "assets/scss/slug/slug";
</style>
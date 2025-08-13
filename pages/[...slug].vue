<script setup lang="ts">

// TODO Сделать нормальный nuxt/content, разобраться с SSG
const {path} = useRoute()
// const route = useRoute()
const getPath = computed(() => path.split('/').pop())
// const {data: projectContent} = useAsyncData('project-content', () => queryCollection('project').where('slug', '=', getPath.value).first())

// onMounted(()=>{
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
// })

//Временно
const singleProject = ref('');
onMounted(()=>{
  singleProject.value = allProjects.find((projectItem)=>
  {
    return projectItem.slug === getPath.value
  })
})

const allProjects = [
  {
    title: '3D and 2D Portfolio',
    slug: 'designs',
    content: [
      {
        text: '3D modeling of characters and objects — with the option to collaborate with a character designer if needed Rigging and animation, from simple product rotations to complex character motion Final rendering — high-quality visuals suitable for marketing,  training, or digital platforms',
        image: 'characters.png',
        image_mobile: 'characters_mobile.png',
        is_video: false,
        video: '',
        video_mobile: '',
        is_animation: false,
        animation: '',
        animation_mobile: ''
      },
      {
        text: '3D animation for product design or explanatory purposes. Custom animation for video courses or tutorials, to explain complex ideas in a simple and visually appealing way Motion graphics for product advertisements or startup presentations 3D visuals for UI/UX prototypes and digital interfaces',
        image: '',
        image_mobile: '',
        is_video: true,
        video: '2d.mp4',
        video_mobile: '2d_mobile.mp4',
        is_animation: false,
        animation: '',
        animation_mobile: '',
      },
      {
        text: 'I can create engaging and visually appealing animations in 2D tailored to your needs. This includes: Animated logos and brand identities Promotional videos and advertisements Explainer videos to simplify complex ideas Social media content and motion graphics Character animations and storytelling Title sequences and transitions for videos',
        image: '',
        image_mobile: '',
        is_video: true,
        video: '3d.mp4',
        video_mobile: '3d_mobile.mp4',
        is_animation: false,
        animation: '',
        animation_mobile: '',
      }
    ]
  },
  {
    title: 'Media Designer Portfolio',
    slug: 'media-designer',
    content: [
      {
        text: 'I create social media content that combines smooth animations, engaging text, and thoughtful graphic design to deliver visually compelling messages. These assets are tailored for platforms like Instagram, Facebook, TikTok, and LinkedIn — whether it’s for brand storytelling, product promotion, or educational purposes. The goal is to make your content stand out and connect with your audience through motion, clarity, and consistent visual identity',
        image: '',
        image_mobile: '',
        is_video: true,
        video: 'angebot.mp4',
        video_mobile: 'angebot_mobile.mp4',
        is_animation: false,
        animation: '',
        animation_mobile: '',
      },
      {
        text: 'I offer classic graphic design services, including professional photo retouching and layout development, tailored specifically for product promotion on marketplaces such as Amazon. This includes creating clean, eye-catching visuals that follow platform guidelines and effectively highlight key product features. From infographics and product cards to branded templates, the goal is to build visual content that increases engagement and drives sales.',
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
        text: 'High-end professional photo retouching — including color correction, skin and texture refinement, background cleanup, and preparation for print or digital use AI experiments',
        image: '',
        image_mobile: '',
        is_video: true,
        video: 'ai_mobile.mp4',
        video_mobile: '',
        is_animation: false,
        animation: '',
        animation_mobile: '',
      }]
  },
  {
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
]
</script>

<template>
  <section class="project__wrapper">
    <h2>
      {{ singleProject?.title }}
    </h2>
    <template v-for="project in singleProject?.content">
      <ProjectsItem :project="project" :projectSlug="singleProject?.slug"/>
    </template>
  </section>

</template>

<style scoped lang="scss">
@use "assets/scss/slug/slug";
</style>
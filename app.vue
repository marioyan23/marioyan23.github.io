<script setup>
const router = useRouter()
router.afterEach((to,from,next) => {
  window.scrollTo(0,0)
})
</script>

<template>
    <nuxt-layout>

      <nuxt-page/>
    </nuxt-layout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

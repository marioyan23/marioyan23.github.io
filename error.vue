<script lang="ts" setup>
import type {NuxtError} from '#app'
import type {ModelResponse} from "~/contracts/ModelResponse";

const props = defineProps({
  error: Object as () => NuxtError
})

const errorMessage = computed(() => {
  return props.error?.statusCode === 404 ? 'Page not found' : 'Error 500'
})

</script>

<template>
  <AppHeader/>
  <section class="error">
    <h2>Error {{ error?.statusCode }}<br>{{ errorMessage }}</h2>
    <a href="/">Return to main page</a>
  </section>
  <AppFooter/>
</template>

<style lang="scss" scoped>
.error {
  //margin-top: 100px;
  text-align: center;
  padding: 3rem;

  a {
    padding: 1rem;
    color: black;
    font-size: 2rem;
    font-family: "Sora", serif;
    background: var(--accent-color-blue);
    border-radius: 30px;
  }

  h2 {
    font-family: "Sora", serif;
    font-size: 3rem;
  }

  &__models {
    margin: 3rem 0;

    &__links {
      justify-content: center;
      flex-wrap: wrap;
      display: inline-flex;
      gap: 1rem;

      a {
        min-width: 100px;
      }

    }
  }
}

@media (max-width: 1024px) {
  .error {
    margin-top: 220px;

    h2 {
      font-size: 2rem;
    }
  }
}
</style>
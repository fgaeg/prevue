<template>
  <div class="container bg-yellow-300">
    <div>
      <h1 class="text-bold">
        {{ title }}
      </h1>
      <p>
        Vue with Nuxt.js
      </p>
    </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  asyncData() {
    return {
      title: 'Prevue'
    }
  }
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS */
.container {
  @apply text-red-500;
}
</style>

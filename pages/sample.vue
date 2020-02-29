<template>
  <div class="container">
    <div>
      <h1 class="text-bold">
        {{ title }}
      </h1>
      <p>
        Vue with Nuxt.js.
        <span v-if="buildTime">
          <strong>
            Prerender at
          </strong>
          {{ buildTime }}, before the browser rendering.
        </span>
        <template v-else>
          You're seeing this because you came here from internal route. Try to
          <a href="/sample">reload the browser</a> to see prerendered version.
        </template>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  asyncData() {
    if (!process.client) {
      return {
        title: 'Sample page',
        buildTime: new Date().toString()
      }
    }
  },
  data() {
    return {
      title: 'Sample page',
      loadTime: new Date().toString()
    }
  }
}
</script>

<style></style>

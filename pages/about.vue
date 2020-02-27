<template>
  <div class="container">
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
export default {
  data() {
    return {
      title: 'About page',
      content: 'About sample pre-rendered Vue webpage',
      image: 'https://blue.kumparan.com/image/upload/senpz1uqdsvamsf2n1wb.png'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.content
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.content
        },
        {
          hid: 'og:description',
          property: 'og:image',
          content: this.image
        }
      ]
    }
  }
}
</script>

<style></style>

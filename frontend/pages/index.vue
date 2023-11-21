<template>
  <div class="main">
    <Banner />
    <Partners :about="about2" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',

  data() {
    return {
      baseURL: this.$axios.defaults.baseURL,
      banner: [],
      about: null,
      aboutInfo: {},
      about1: null,
      about2: null,
    }
  },
}
</script>

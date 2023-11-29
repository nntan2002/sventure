<template>
  <div class="main">
    <Banner />
    <Features />
    <About-us />
    <home-page-Services />
    <News />
    <home-page-Building />
    <Partners :about="about2" />
    <home-page-Contact />
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
      about2: [
        {
          image: 'assets/images/AC Logo ngang S.png',
          id: 1
        },
        {
          image: 'assets/images/Assessments 24x7 Logo Vector (1)-01.png',
          id: 2
        },
        {
          image: 'assets/images/CC-Horizontal-WithoutTag-Registered-(Slate-Yellow).png',
          id: 3
        },
        {
          image: 'assets/images/LOGO BNI-01.png',
          id: 4
        },
      ],
    }
  },
}
</script>

<template>
  <div class="main">
    <home-page-Banner :banner="banner" />
    <home-page-Features :features="features" />
    <About-us />
    <home-page-Services />
    <Partners :about="about2" />
    <News />
    <home-page-Building />
    <home-page-Contact />
  </div>
</template>

<script>
const qs = require('qs')
export default {
  name: 'IndexPage',
  layout: 'default',

  data() {
    return {
      baseURL: this.$axios.defaults.baseURL,
      locale: this.$i18n.locale || 'vi',
      banner: [],
      features: [],
      about: null,
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
  mounted() {
    const query = qs.stringify(
      {
        populate: {
          Banners: true,
          Features: {
            populate: {
              Image: true,
            }
          },
          AboutUs: {
            populate: {
              Image: true,
            }
          }
        },
        sort: { publishedAt: 'desc' },
        publicationState: 'live',
        locale: this.$i18n.locale || 'vi',
      },
      {
        encodeValuesOnly: true, // prettify url
      }
    )
    this.getHomePage(query)
  },
  methods: {
    getHomePage(params) {
      this.$api
        .getHomePage(params)
        .then((data) => {
          this.banner = data.data.attributes.Banners.data
          this.features = data.data.attributes.Features
          this.about = data.data.attributes.AboutUs
          console.log(this.about)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

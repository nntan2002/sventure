<template>
  <div class="main">
    <home-page-Banner v-if="banner" :banner="banner" />
    <About-us v-if="about" :about="about" class="mt-5" />
    <home-page-Services v-if="category_services" :category_services="category_services" :title="TitleService" />
    <Partners v-if="about2" :partners="about2" />
    <home-page-News v-if="posts" :posts="posts" :title="TitlePost" />
  </div>
</template>

<script>
const qs = require('qs')
export default {
  name: 'IndexPage',
  layout: 'default',

  head: {
    meta: [
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Sventure',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Tương lai doanh nhân Việt - Giải pháp tổng thể ươm mầm doanh nhân'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/logo-sventure-12.png',
      },
    ]
  },
  data() {
    return {
      baseURL: this.$axios.defaults.baseURL,
      locale: this.$i18n.locale || 'vi',
      banner: [],
      features: [],
      about: null,
      about2: null,
      category_services: null,
      posts: null,
      TitlePost: null,
      TitleService: null,
    }
  },
  beforeDestroy() {
    this.EventBus.$off('display-notification');
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
          },
          category_services: {
            populate: {
              HoverThumbnail: true,
              Thumbnail: true,
            }
          },
          posts: {
            populate: '*',
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

    const query1 = qs.stringify(
      {
        populate: {
          Images: true,
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
    this.getSectionPartners(query1)

  },
  methods: {
    getHomePage(params) {
      this.$api
        .getHomePage(params)
        .then((data) => {
          this.banner = data.data.attributes.Banners.data
          this.features = data.data.attributes.Features
          this.about = data.data.attributes.AboutUs
          this.category_services = data.data.attributes.category_services.data
          this.posts = data.data.attributes.posts.data
          this.TitlePost = data.data.attributes.TitlePost
          this.TitleService = data.data.attributes.TitleService
          console.log(data.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getSectionPartners(params) {
      this.$api
        .getSectionPartners(params)
        .then((data) => {
          this.about2 = data.data.attributes || []
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

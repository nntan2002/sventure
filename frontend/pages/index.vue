<template>
  <div class="main">
    <home-page-Banner :banner="banner" />
    <home-page-Features :features="features" />
    <About-us v-if="about" :about="about" />
    <home-page-Services v-if="category_services" :category_services="category_services" />
    <Partners v-if="about2" :partners="about2" />
    <News />
    <home-page-Building v-if="building" :building="building" />
    <item-Contact v-if="contact" :contact="contact" />
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
      about2: null,
      building: null,
      contact: null,
      category_services: null,
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
          },
          category_services: {
            populate: {
              HoverThumbnail: true,
              Thumbnail: true,
            }
          },
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

    const query2 = qs.stringify(
      {
        populate: {
          BackgroundSection: true,
        },
        sort: { publishedAt: 'desc' },
        publicationState: 'live',
        locale: this.$i18n.locale || 'vi',
      },
      {
        encodeValuesOnly: true, // prettify url
      }
    )

    const query3 = qs.stringify(
      {
        populate: '*',
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
    this.getSectionBuilding(query2)
    this.getSectionContact(query3)
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
          console.log(this.category_services)
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
    getSectionBuilding(params) {
      this.$api
        .getSectionBuilding(params)
        .then((data) => {
          this.building = data.data.attributes || []
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getSectionContact(params) {
      this.$api
        .getSectionContact(params)
        .then((data) => {
          this.contact = data.data.attributes || []
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

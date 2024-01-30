<template>
    <div class="page-wrap">
        <Header />
        <nuxt />
        <home-page-Building v-if="building" :building="building" />
        <Footer />
    </div>
</template>
    
<script>
const qs = require('qs')
export default {
    name: 'IndexPage',
    layout: 'contact',

    data() {
        return {
            baseURL: this.$axios.defaults.baseURL,
            locale: this.$i18n.locale || 'vi',
            building: null,
            contact: null,
        }
    },
    async mounted() {
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

       await this.getSectionBuilding(query2)
    },
    methods: {
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
    },
}
</script>
<style lang="scss" scoped></style>
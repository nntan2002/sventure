<template>
    <div class="page-wrap">
        <Header />
        <nuxt />
        <home-page-Building v-if="building" :building="building" />
        <item-Contact v-if="contact" :contact="contact" />
        <Footer />
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
            building: null,
            contact: null,
        }
    },
    mounted() {
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

        this.getSectionBuilding(query2)
        this.getSectionContact(query3)
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
<style lang="scss" scoped></style>
<template>
    <div>
        <item-Banner v-if="banner" :banner="banner" />
        <About-us v-if="about" :about="about" />
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
            banner: null,
            about: null,
        }
    },
    mounted() {
        const query = qs.stringify(
            {
                populate: {
                    Banner: {
                        populate: {
                            Image: true,
                        },
                    },
                    AboutUs: {
                        populate: {
                            Image: true,
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

        this.getAboutUsPage(query)
    },
    methods: {
        getAboutUsPage(params) {
            this.$api
                .getAboutUsPage(params)
                .then((data) => {
                    this.banner = data.data.attributes.Banner || null
                    this.about = data.data.attributes.AboutUs || null
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>
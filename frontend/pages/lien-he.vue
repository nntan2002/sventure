<template>
    <div class="main">
        <item-Banner :banner="banner" />
        <section class="section-padding">
            <b-container>
                <div class="contact">
                    <b-row class="justify-content-center text-center">
                        <b-col md="8">
                            <div class="mb-2">
                                {{ infor?.SubTitleSection }}
                            </div>
                            <h2 class="title-section mb-4">
                                {{ infor?.TitleSection }}
                            </h2>
                        </b-col>
                    </b-row>
                    <b-row class="justify-content-center">
                        <b-col md="6">

                        </b-col>
                        <b-col md="6">
                            <div class="map" v-html="infor?.IfameMap">
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </section>
    </div>
</template>
  
<script>
const qs = require('qs')
export default {
    name: 'Contact',
    layout: 'default',

    data() {
        return {
            baseURL: this.$axios.defaults.baseURL,
            banner: null,
            infor: null,
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

        this.getContactPage(query)

    },
    methods: {
        getContactPage(params) {
            this.$api
                .getContactPage(params)
                .then((data) => {
                    this.banner = data.data?.attributes?.Banner || null
                    this.infor = data.data.attributes || null
                    console.log(this.infor)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>
  
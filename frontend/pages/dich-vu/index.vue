<template>
    <div class="main">
        <item-Banner v-if="banner" :banner="banner" />
        <section class="section-padding">
            <b-container>
                <div class="service">
                    <b-row class="justify-content-center text-center">
                        <b-col md="8">
                            <h2 class="title-section mb-4">
                                {{ infor?.TitleSection }}
                            </h2>
                            <div class="mb-4">
                                {{ infor?.DescriptionSection }}
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="justify-content-center">
                        <b-col class="mb-4" v-for="item in services" :key="item.id" sm="6" xl="3">
                            <!-- :to="'/dich-vu/' + item.attributes.Slug" -->
                            <nuxt-link to="">
                                <div class="box-services">
                                    <div class="img-box">
                                        <b-img :src="baseURL + item.attributes?.Thumbnail?.data?.attributes?.url"></b-img>
                                        <b-img
                                            :src="baseURL + item.attributes?.HoverThumbnail?.data?.attributes?.url"></b-img>
                                    </div>
                                    <div class="content-box">
                                        <h4 class="title my-4">
                                            {{ item.attributes.Title }}
                                        </h4>
                                        <p>
                                            {{ item.attributes.Description }}
                                        </p>
                                    </div>
                                </div>
                            </nuxt-link>
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
    name: 'Services',
    layout: 'default',

    data() {
        return {
            baseURL: this.$axios.defaults.baseURL,
            banner: null,
            infor: null,
            services: null
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

        const query1 = qs.stringify(
            {
                populate: [
                    'HoverThumbnail',
                    'Thumbnail'
                ],
                sort: { publishedAt: 'desc' },
                publicationState: 'live',
                locale: this.$i18n.locale || 'vi',
            },
            {
                encodeValuesOnly: true, // prettify url
            }
        )

        this.getServicePage(query)
        this.getCategoryService(query1)

    },
    methods: {
        getServicePage(params) {
            this.$api
                .getServicePage(params)
                .then((data) => {
                    this.infor = data.data?.attributes || null
                    this.banner = this.infor?.Banner || null
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        getCategoryService(params) {
            this.$api
                .getCategoryService(params)
                .then((data) => {
                    this.services = data.data || null
                    console.log(data.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>
  
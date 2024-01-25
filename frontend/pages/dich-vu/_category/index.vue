<template>
    <div class="main">
        <item-Banner v-if="banner" :banner="banner" />
        <section class="section-padding">
            <b-container>
                <div class="service">
                    <b-row class="justify-content-center text-center">
                        <b-col md="12">
                            <h2 class="title-section mb-4">
                                SVenture®
                            </h2>
                            <div class="mb-4">
                                {{ infor?.Description }}
                            </div>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col v-for="item in serviceArr" :key="item.id" md="4" class="mb-4">
                            <nuxt-link :to="'/dich-vu/' + infor?.Slug + '/' + item?.attributes.Slug" v-if="item">
                                <div class="box-services">
                                    <div class="img-box">
                                        <b-img :src="baseURL + item?.attributes.Thumbnail?.data?.attributes?.url"></b-img>
                                        <b-img
                                            :src="baseURL + item?.attributes.HoverThumbnail?.data?.attributes?.url"></b-img>
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
    name: 'ServicesCategories',
    layout: 'default',

    data() {
        return {
            baseURL: this.$axios.defaults.baseURL,
            banner: {
                Image: null,
                Title: null,
            },
            infor: null,
            serviceArr: null,
        }
    },
    mounted() {
        console.log(this.$route.params.category)
        const query = qs.stringify(
            {
                populate: '*',
                publicationState: 'live',
                filters: {
                    category_service: {
                        Slug: {
                            $eq: this.$route.params.category,
                        }
                    },
                },
            },
            {
                encodeValuesOnly: true, // prettify url
            }
        )
        const query1 = qs.stringify(
            {
                populate: {
                    Banner: {
                        populate: {
                            Image: true,
                        },
                    },
                },
                publicationState: 'live',
                filters: {
                    Slug: {
                        $eq: this.$route.params.category,
                    }
                },
            },
            {
                encodeValuesOnly: true, // prettify url
            }
        )
        this.getService(query)
        this.getCategoryService(query1)
    },
    methods: {
        getService(params) {
            this.$api
                .getService(params)
                .then((data) => {
                    this.serviceArr = data.data ? data.data : ''
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        getCategoryService(params) {
            this.$api
                .getCategoryService(params)
                .then((data) => {
                    this.banner.Image = data.data ? data.data[0].attributes.Banner.Image : ''
                    this.banner.Title = data.data ? data.data[0].attributes.Title : ''
                    this.infor = data.data[0]?.attributes || null
                    console.log(this.infor)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    }
}
</script>
  
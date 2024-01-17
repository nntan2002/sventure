<template>
    <div class="main">
        <item-Banner v-if="banner" :banner="banner" />
        <section class="section-padding">
            <b-container>
                <div class="news">
                    <b-row class="justify-content-center text-center">
                        <b-col md="8">
                            <h2 class="title-section mb-4"></h2>
                            <div class="mb-4"></div>
                        </b-col>
                    </b-row>
                    <div v-if="dataNews" class="content-section">
                        <b-row>
                            <b-col v-for="item in dataNews" :key="item.id" sm="6" md="4" class="mt-4">
                                <a :href="'tin-tuc/' + item.attributes.Slug">
                                    <div class="box-news">
                                        <div class="img-box">
                                            <img :src="baseURL + item.attributes.Thumbnail.data.attributes.url" alt="">
                                        </div>
                                        <div class="content-box">
                                            <div class="title my-3">
                                                {{ item.attributes.Title }}
                                            </div>
                                            <div class="description mb-4">
                                                {{ item.attributes.Description }}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </b-col>
                        </b-row>
                    </div>
                </div>
            </b-container>
        </section>
    </div>
</template>
  
<script>
const qs = require('qs')

export default {
    name: 'News',
    layout: 'default',

    head: {
        meta: [
            {
                hid: 'og:title',
                property: 'og:title',
                content: 'Sventure - Tin tức',
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'Tương lai của doanh nhân Việt - Giải pháp tổng thể ươm mầm doanh nhân'
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
            banner: [],
            dataNews: null,
        }
    },
    mounted() {
        const query = qs.stringify(
            {
                fields: [
                    'Title',
                    'Slug',
                    'Description',
                ],
                populate: [
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
        const query1 = qs.stringify(
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

        this.getNewsPage(query1)
        this.getPost(query)
    },
    methods: {
        getNewsPage(params) {
            this.$api
                .getNewsPage(params)
                .then((data) => {
                    this.banner = data.data?.attributes?.Banner || null
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        getPost(params) {
            this.$api
                .getPost(params)
                .then((data) => {
                    this.dataNews = data?.data || null
                    console.log(this.dataNews)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>
  
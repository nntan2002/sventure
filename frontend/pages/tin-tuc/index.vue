<template>
    <div class="main">
        <item-Banner title="News" />
        <section class="section-padding">
            <b-container>
                <div class="news">
                    <b-row class="justify-content-center text-center">
                        <b-col md="8">
                            <h2 class="title-section mb-4"></h2>
                            <div class="mb-4"></div>
                        </b-col>
                    </b-row>
                    <div class="content-section" v-if="dataNews">
                        <b-row>
                            <b-col v-for="item in dataNews" :key="item.id" sm="6" md="4" class="mt-4">
                                <a href="#">
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

        this.getPost(query)
    },
    methods: {
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
  
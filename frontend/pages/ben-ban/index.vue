<template>
    <div class="main">
        <section class="sell-section section-padding">
            <b-container>
                <b-row>
                    <b-col lg="3">

                    </b-col>
                    <b-col lg="9">
                        <div class="filter d-flex justify-content-between mb-4 w-100">
                            <div class="count-item">
                                Hiện 9/35600 kết quả
                            </div>
                            <div class="filter-item">
                                <select>
                                    <option disabled selected hidden>Sắp xếp hồ sơ theo</option>
                                    <option value="1">Hồ sơ mới tạo</option>
                                    <option value="2">Cấp độ đánh giá hồ sơ</option>
                                </select>
                                <i class="fas fa-sort-amount-down"></i>
                            </div>
                        </div>
                        <b-row>
                            <b-col lg="4" v-for="i in 9" :key="i" class="mb-4">
                                <item-Box-sell />
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
        </section>
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
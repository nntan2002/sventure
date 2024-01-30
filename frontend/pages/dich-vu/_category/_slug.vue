<template>
    <div class="main">
        <item-banner v-if="banner" :banner="banner" />
        <section class="section-padding">
            <b-container>
                <div class="service">
                    <div class="share-media">
                        <div class="date">
                            {{ formatDate }}
                        </div>
                        <div class="share-icon">
                            <a :href="'https://www.facebook.com/share.php?u=' + banner.urlShare">
                                <img src="~/assets/images/facebook.jpg" alt="">
                            </a>
                            <a href="#">
                                <img src="~/assets/images/instagram.jpg" alt="">
                            </a>
                            <a :href="'https://www.linkedin.com/sharing/share-offsite/?url=' + banner.urlShare">
                                <img src="~/assets/images/linkedIn.jpg" alt="">
                            </a>
                        </div>
                    </div>
                    <div v-if="changed_post_content" class="content-detail mt-4" v-html="changed_post_content">
                    </div>
                </div>
            </b-container>
        </section>
    </div>
</template>
<script>
const qs = require('qs')

export default {
    name: '',
    layout: 'default',

    async asyncData({ app, $axios, redirect, params }) {
        const query = qs.stringify({
            populate: {
                Banner: {
                    populate: '*',
                },
                Thumbnail: {
                    populate: '*',
                },
                Seo: {
                    populate: '*',
                }
            },
            filters: {
                Slug: params.slug,
            },
            publicationState: 'live',
        })

        const response = await fetch(
            $axios.defaults.baseURL + '/api/services?' + query
        )

        if (response.status >= 200 && response.status <= 299) {
            const post = await response.json()
            if (!post.data.length) {
                redirect('/404')
            } else {
                return { post }
            }
        } else {
            redirect('/404')
        }
    },

    data() {
        return {
            baseURL: this.$axios.defaults.baseURL,
            postdetail: null,
            postTitle: null,
            dataNews: null,
            banner: {
                Image: null,
                Title: null,
            },

        }
    },

    head() {
        return {
            title: this.postData.Title + ' - Dịch Vụ' || '',
            meta: [
                {
                    property: 'og:image',
                    content: this.postShareImage
                },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.postData?.Seo?.title || '',
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.postData?.Seo?.description || '',
                },
                {
                    hid: 'og:card',
                    property: 'twitter:card',
                    content: this.postShareImage
                },
                {
                    hid: 'twitter:description',
                    property: 'twitter:description',
                    content: this.postData?.Seo?.description || '',
                },
            ],
        }
    },

    computed: {
        changed_post_content() {
            try {
                const a = this.post?.data[0]?.attributes?.Content
                    .split(this.baseURL).join(``)
                const b = a.split('/uploads/')
                    .join(`${this.baseURL}/uploads/`)
                return b
            } catch (error) {
                console.log(error)
                return ''
            }
        },
        postData() {
            try {
                return this.post ? this.post?.data[0]?.attributes : {}
            } catch (error) {
                console.log(error)
                return {}
            }
        },
        postShareImage() {
            try {
                const url = this.post?.data[0]?.attributes?.Thumbnail?.data
                    ? this.post?.data[0]?.attributes?.Thumbnail?.data?.attributes?.url || ''
                    : ''
                return this.baseURL + url
            } catch (error) {
                console.log(error)
                return ''
            }
        },

        formatDate() {
            try {
                const dl = new Date(this.post?.data[0]?.attributes?.publishedAt)
                const options = {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                }

                return dl.toLocaleDateString('en-GB', options)
            } catch (error) {
                console.log(error)
                return ''
            }

        },
    },
    mounted() {

        if (this.postData) {
            try {
                this.banner.Title = this.postData?.Title || ''
                this.banner.Image = this.postData?.Banner?.Image || ''
                this.banner.urlShare = window.location.href
                this.banner = JSON.parse(JSON.stringify(this.banner))
            } catch (error) { }
        }

    },
    methods: {
    },
}
</script>

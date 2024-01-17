<template>
    <div>
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
            $axios.defaults.baseURL + '/api/posts?' + query
        )

        if (response.status >= 200 && response.status <= 299) {
            const post = await response.json()
            if (!post.data.length) {
                redirect('/404')
            } else {
                console.log(post)
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
            title: this.postData.Title || '',
            meta: [
                {
                    hid: 'og:image',
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
                return this.post?.data[0]?.attributes?.Content
                    .split('/uploads/')
                    .join(`${this.baseURL}/uploads/`)
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
        console.log(this.$route.params.slug)
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
                pagination: {
                    pageSize: 4,
                    page: 1,
                },
                filters: {
                    $not: {
                        Slug: {
                            $eq: this.$route.params.slug,
                        },
                    },
                },
                publicationState: 'live',
            },
            {
                encodeValuesOnly: true, // prettify url
            }
        )

        if (this.postData) {
            try {
                this.banner.Title = this.postData?.Title || ''
                this.banner.Image = this.postData?.Banner?.Image || ''
                this.banner.urlShare = window.location.href
                console.log(this.postData)
                this.banner = JSON.parse(JSON.stringify(this.banner))
            } catch (error) { }
        }

        this.getPost(query)
    },
    methods: {
        getPost(params) {
            this.$api
                .getPost(params)
                .then((data) => {
                    console.log(data.data)
                    this.newsArr = data.data || null
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>
<style lang="scss" scoped>
.post-detail {
    background: #2d2d2e;

    .post-detail-header {
        padding: 75px 0 55px;

        h1 {
            text-align: center;
            color: #fff;
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 25px;
        }

        .breabcrumb {
            margin: 0;
            padding-left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            list-style: none;

            li {
                a {
                    color: #8b8b8b;
                    font-size: 18px;
                }

                span {
                    color: #ffffff;
                    font-size: 18px;
                }

                &::after {
                    display: inline-block;
                    content: '/';
                    color: #8b8b8b;
                    margin: 0 10px;
                }

                &:last-child {
                    &::after {
                        content: none;
                    }
                }
            }
        }
    }

    .post-detail-content {
        background: #fff;
        border-top-left-radius: 60px;
        border-top-right-radius: 60px;
        font-size: 16px;
        color: #000;
        padding: 45px 0;

        @media (max-width: 992px) {
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;
        }

        @media (max-width: 575px) {
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
        }
    }

    .post-detail-bottom {
        background: #fff;
        padding: 25px 0;
        border-top: 1px solid #2d2d2e;

        .arrow-btn {
            font-size: 16px;
            display: flex;
            align-items: center;

            svg {
                display: inline-block;
                width: 17px;
                height: 17px;
                margin-right: 10px;
            }
        }

        .social-share {
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            li {
                a {
                    background: #2d2d2e;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 100%;
                    margin-left: 15px;

                    svg {
                        display: block;
                        width: 20px;
                        height: 20px;
                        fill: #fff;
                    }
                }
            }
        }
    }

    .other-post {
        background: #fff;
        padding: 25px 0 45px;

        .section-title {
            display: block;

            h2 {
                font-size: 48px;
                font-weight: 700;
                text-transform: uppercase;
                text-align: center;
                margin-bottom: 35px;
            }
        }

        @media (max-width: 992px) {
            padding: 25px 15px 45px;

            .section-title {
                h2 {
                    font-size: 36px;
                }
            }
        }

        @media (max-width: 575px) {
            .section-title {
                h2 {
                    font-size: 32px;
                }
            }
        }
    }
}
</style>
<style lang="scss" scoped>
.feature-item {
    margin-bottom: 20px;

    .feature-title {
        font-weight: 700;
    }
}

.product-price {
    padding: 10px 0px;

    .value {
        font-weight: 700;
        font-size: 22px;
    }

    .unit {
        font-weight: 400;
        font-size: 22px;
    }
}

.product-actions {
    padding: 10px 0px;
}
</style>
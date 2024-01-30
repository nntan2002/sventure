<template>
    <section class="section-padding">
        <b-container>
            <div class="news">
                <b-row class="justify-content-center text-center">
                    <b-col md="8">
                        <h2 class="title-section mb-4">
                            {{ title }}
                        </h2>
                        <div class="mb-4"></div>
                    </b-col>
                </b-row>
                <div class="content-section">
                    <b-row>
                        <b-col md="6" class="mt-3">
                            <!-- eslint-disable-next-line -->
                            <a v-for="(item, index) in posts" :key="item.Title" v-if="index === 0"
                                :href="'tin-tuc/' + item.attributes.Slug">
                                <div class="box-news">
                                    <div class="img-box">
                                        <img :src="baseURL + item?.attributes?.Thumbnail?.data?.attributes?.formats?.small?.url"
                                            :alt="item?.attributes?.Thumbnail?.data?.attributes?.name">
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
                        <b-col md="6" class="d-flex flex-column justify-content-between">
                            <!-- eslint-disable-next-line -->
                            <a v-for="(item, index) in posts" :key="item.Title" v-if="index > 0"
                                :href="'tin-tuc/' + item.attributes.Slug" class="mt-3">
                                <div class="box-news" style="height: auto !important">
                                    <b-row>
                                        <b-col cols="4">
                                            <div class="img-box h-100">
                                                <img :src="baseURL + item.attributes?.Thumbnail?.data?.attributes?.formats?.thumbnail?.url"
                                                    :alt="item.attributes.Thumbnail.data.attributes.name"
                                                    style="height: 100%; aspect-ratio: unset;">
                                            </div>
                                        </b-col>
                                        <b-col>
                                            <div class="content-box">
                                                <div class="title  my-3">
                                                    {{ item.attributes.Title }}
                                                </div>
                                                <div class="description mb-4 mb-md-0">
                                                    {{ item.attributes.Description }}
                                                </div>
                                            </div>
                                        </b-col>
                                    </b-row>


                                </div>
                            </a>
                        </b-col>
                    </b-row>
                </div>
                <div class="text-center mt-3 mt-md-5">
                    <a href="/tin-tuc" class="btn-main">
                        <span>
                            Xem tất cả
                            <i class="fas fa-arrow-right"></i>
                        </span>
                    </a>
                </div>
            </div>
        </b-container>
    </section>
</template>
<script>
export default {
    props: {
        posts: {
            type: Array,
            default: () => null,
        },
        title: {
            type: String,
            default: () => null,
        }
    },

    data() {
        return {
            baseURL: this.$axios.defaults.baseURL,
        }
    },

    methods: {
    },
}
</script>
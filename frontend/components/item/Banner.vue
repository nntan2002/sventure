<template>
    <section>
        <div class="banner-pages">
            <div class="img-item">
                <img src="~/assets/images/banner-service.jpeg" alt="">
            </div>
            <div class="content-item">
                <b-container>
                    <b-row class="justify-content-center">
                        <b-col md="8">
                            <h1 class="title-pages">
                                {{ title }}
                            </h1>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'HomeBanner',

    props: {
        banner: {
            type: Array,
            default: () => null,
        },
        title: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            baseURL: this.$axios.defaults.baseURL,
            bannerList: [],
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>

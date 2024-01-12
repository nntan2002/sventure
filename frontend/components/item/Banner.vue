<template>
    <section>
        <div class="banner-pages">
            <div class="img-item">
                <img v-if="banner.Image" :src="baseURL + banner?.Image?.data?.attributes?.url" alt="">
            </div>
            <div class="content-item">
                <b-container>
                    <b-row class="justify-content-center">
                        <b-col md="8">
                            <h1 class="title-pages">
                                {{ banner?.Title }}
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
            type: Object,
            default: () => null,
        },
    },
    data() {
        return {
            baseURL: this.$axios.defaults.baseURL,
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>

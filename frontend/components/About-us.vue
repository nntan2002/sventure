<template>
    <section>
        <div class="aboutus">
            <div class="container">
                <div class="title-section">
                    {{ about.TitleSection }}
                </div>
                <b-row>
                    <b-col md="7">
                        <div class="title-aboutus">
                            <div class="sub-title">
                                {{ about.SubTitleContent }}
                            </div>
                            <div class="title">
                                {{ about.TitleContent }}
                            </div>
                        </div>
                        <div class="content-aboutus mb-4" v-html="about.Content" >
                        </div>
                    </b-col>
                    <b-col md="5">
                        <div class="image-aboutus">
                            <img :src="baseURL + about.Image.data.attributes.url" alt="">
                        </div>
                    </b-col>
                </b-row>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        about: {
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
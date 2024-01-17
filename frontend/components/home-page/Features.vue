<template>
    <section>
        <div class="features">
            <div class="container">
                <b-row class="justify-content-center">
                    <b-col v-for="(item, index) in features" :key="index" sm="6" md="3">
                        <div class="box-features justify-content-md-center justify-content-start">
                            <div class="box-icon">
                                <img :src="baseURL + item?.Image?.data?.attributes?.url" :alt=" item?.Image?.data?.attributes?.name">
                            </div>
                            <div class="box-title text-white">
                               {{ item.Title }}
                            </div>
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
        features: {
            type: Array,
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
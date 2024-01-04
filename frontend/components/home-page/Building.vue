<template>
    <section>
        <div class="building section-padding" :style="'background-image: url(' + baseURL + building?.BackgroundSection.data.attributes.url + ');'">
            <div class="container">
                <div class="content-section">
                    <div class="content-item">
                        <div class="title-section text-white">
                            {{ building.TitleSection }}
                        </div>
                        <p class="text-white">
                            {{ building.DescriptionSection }}
                        </p>
                    </div>
                    <a :href="building.SlugButton" class="btn-main">
                        <span>
                            {{ building.TitleButton }}
                            <i class="fas fa-search"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        building: {
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
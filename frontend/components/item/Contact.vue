<template>
    <section>
        <div class="contact-home">
            <b-container>
                <div class="content-section">
                    <div class="content-item">
                        <div class="title-section">
                            {{ contact.TitleSection }}
                        </div>
                        <p>
                            {{ contact.DescriptionSection }}
                        </p>
                    </div>
                    <a :href="contact.SlugButton" class="btn-main">
                        <span>
                            {{ contact.TitleButton }}
                            <i class="fas fa-arrow-right"></i>
                        </span>
                    </a>
                </div>
            </b-container>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        contact: {
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
<template>
    <section>
        <div class="banner">
            <swiper ref="bannerSwiper" :options="swiperOptions" class="swiper-banner">
                <swiper-slide v-for="(item, index) in banner" :key="index">
                    <div class="banner-item" v-if="item.attributes.mime === 'image/jpeg'">
                        <img :src="baseURL + item.attributes.url" :alt="item.attributes.name" />
                    </div>
                    <div class="banner-item" v-else>
                        <video :src="baseURL + item.attributes.url" :alt="item.attributes.name" autoplay muted loop>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </swiper-slide>
            </swiper>
            <div slot="pagination" class="swiper-pagination bannerslide-pagination" v-if="banner.length > 1"></div>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

// import swiper module styles
import 'swiper/css/swiper.css'

export default {
    name: 'HomeBanner',
    components: {
        Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
    },
    props: {
        banner: {
            type: Array,
            default: () => null,
        },
    },
    data() {
        return {
            baseURL: this.$axios.defaults.baseURL,
            bannerList: [],
            swiperOptions: {
                loop: true,
                grabCursor: false,
                centeredSlides: true,
                speed: 1000,
                slidesPerView: 1,
                pauseOnMouseEnter: true,
                pagination: {
                    el: ".bannerslide-pagination",
                    type: "bullets",
                    clickable: true,
                },
                autoplay: {
                    delay: 60000,
                    disableOnInteraction: true,
                },

            },


        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>

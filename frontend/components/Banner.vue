<template>
    <section class="banner">
        <swiper ref="bannerSwiper" :options="swiperOptions">
            <swiper-slide>
                <div class="banner-item">
                    <img src="~/assets/images/logo-footer.png" alt="item.attributes.alternativeText" autoplay muted />
                </div>
            </swiper-slide>
        </swiper>
        <div class="swiper-pagination bannerslide-pagination" slot="pagination"></div>
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
                autoHeight: true,
                pauseOnMouseEnter: true,

                pagination: {
                    el: ".bannerslide-pagination",
                    type: "bullets",
                    clickable: true,
                },
                autoplay: {
                    delay: 3000,
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

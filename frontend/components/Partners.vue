<template>
    <section v-if="about" class="mb-5">
        <b-container class="position-relative">
            <div class="about-info text-center">
                <h2 class="title mb-4">
                    {{ about.title || '' }}
                </h2>
                <div class="mb-4" v-html="about.subTitle || ''"></div>
            </div>

            <swiper class="swiper123" v-if="about.items && about.items.length" :options="swiperOptions">
                <swiper-slide v-for="item in about.items" :key="item.index">
                    <div class="box-img">
                        <b-img :src="baseURL + item.image.data.attributes.url" class="w-100"></b-img>
                    </div>
                </swiper-slide>
            </swiper>
        </b-container>
    </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        about: {
            type: Object,
            default: () => null,
        },
    },

    data() {
        return {
            baseURL: this.$axios.defaults.baseURL,
            count: 1,
            swiperOptions: {
                loop: true,
                grabCursor: false,
                slidesPerView: 2,
                spaceBetween: 40,
                allowTouchMove: true,
                speed: 3000,
                breakpoints: {
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                },
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                },
            },
        }
    },
}
</script>
  
<style lang="scss" scoped>
.swiper-button-prev:after,
.swiper-button-next:after {
    color: #000;
    font-weight: 00;
}

.swiper-button-prev {
    left: -50px;
}

.swiper-button-next {
    right: -50px;
}

.swiper-button-prev,
.swiper-button-next {
    top: 50%;
}
</style>
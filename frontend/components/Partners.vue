<template>
    <section>
        <div class="partners section-padding">
            <b-container class="position-relative">
                <b-row>
                    <b-col md="12">
                        <div class="about-info text-center">
                            <h2 class="title-section mb-4">
                                Our partner
                            </h2>
                            <div class="mb-5">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iste adipisci dignissimos
                                    natus, libero, assumenda labore eaque corporis temporibus facilis rem explicabo dicta
                                    pariatur, necessitatibus aspernatur aliquid animi cupiditate molestiae.
                                </p>
                            </div>
                        </div>
                    </b-col>
                    <b-col md="12">
                        <swiper v-if="about && about.length" :options="swiperOptions" class="swiper123">
                            <swiper-slide v-for="item in about" :key="item.index">
                                <div class="box-img">
                                    <b-img :src="item.image" class="w-100"></b-img>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </b-col>
                </b-row>
            </b-container>
        </div>
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
            type: Array,
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

    mounted() {
    }
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
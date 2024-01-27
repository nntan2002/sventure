<template>
    <section class="section-padding">
        <b-container>
            <div class="service">
                <b-row class="justify-content-center text-center">
                    <b-col md="8">
                        <h2 class="title-section mb-4">
                            {{ title }}
                        </h2>
                        <div class="mb-4"></div>
                    </b-col>
                </b-row>
                <div class="content-section">
                    <swiper ref="productSwiper" :options="swiperOptions2">
                        <swiper-slide v-for="item in category_services" :key="item.attributes.Title">
                            <nuxt-link :to="'/dich-vu/' + item.attributes.Slug">
                                <div class="box-services">
                                    <div class="img-box">
                                        <b-img :src="baseURL + item?.attributes?.Thumbnail?.data?.attributes?.url"></b-img>
                                        <b-img :src="baseURL + item?.attributes?.HoverThumbnail?.data?.attributes?.url"></b-img>
                                    </div>
                                    <div class="content-box">
                                        <h4 class="title my-4">
                                            {{ item.attributes.Title }}
                                        </h4>
                                        <p>
                                            {{ item.attributes.Description }}
                                        </p>
                                    </div>
                                </div>
                            </nuxt-link>
                        </swiper-slide>
                    </swiper>
                    <div slot="button-prev" class="swiper-button swiper-button-prev swiper-button-prev1">
                        <i class="fas fa-chevron-left"></i>
                    </div>
                    <div slot="button-next" class="swiper-button swiper-button-next swiper-button-next1">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        </b-container>
    </section>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
// import swiper module styles
import 'swiper/css/swiper.css'
export default {
    components: {
        Swiper,
        SwiperSlide
    },

    directives: {
        swiper: directive
    },

    props: {
        category_services: {
            type: Array,
            default: () => null,
        },
        title: {
            type: String,
            default: () => null,
        }
    },

    data() {
        return {
            baseURL: this.$axios.defaults.baseURL,
            swiperOptions2: {
                grabCursor: false,
                centeredSlides: false,
                // speed: 1000,
                slidesPerView: 1,
                autoHeight: true,
                spaceBetween: 20,
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                },
                navigation: {
                    nextEl: '.swiper-button-next1',
                    prevEl: '.swiper-button-prev1',
                    disabledClass: 'my-button-disabled',
                },
            },
        }
    },

    methods: {
    },
}
</script>
<template>
    <section class="section-padding">
        <b-container>
            <div class="service">
                <b-row class="justify-content-center text-center">
                    <b-col md="8">
                        <h2 class="title-section mb-4">Services</h2>
                        <div class="mb-4"></div>
                    </b-col>
                </b-row>
                <div class="content-section">
                    <swiper ref="productSwiper" :options="swiperOptions2">
                        <swiper-slide>
                            <nuxt-link to="">
                                <div class="box-services">
                                    <div class="img-box">
                                        <b-img src="~/assets/images/services1.jpg"></b-img>
                                        <b-img src="~/assets/images/services2.jpg"></b-img>
                                    </div>
                                    <div class="content-box">
                                        <h4 class="title my-4">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic suscipit eos quae,
                                            nesciunt beatae fuga a necessitatibus eius vitae culpa molestiae iusto atque
                                            est, illum labore, dolor magnam et id.
                                        </p>
                                    </div>
                                </div>
                            </nuxt-link>
                        </swiper-slide>
                        <swiper-slide v-for="item in 10" :key="item">
                            <nuxt-link to="">
                                <div class="box-services">
                                    <div class="img-box">
                                        <b-img src="~/assets/images/services1.jpg"></b-img>
                                        <b-img src="~/assets/images/services2.jpg"></b-img>
                                    </div>
                                    <div class="content-box">
                                        <h4 class="title my-4">
                                            Service {{ item }}
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic suscipit eos quae,
                                            nesciunt beatae fuga a necessitatibus eius vitae culpa molestiae iusto atque
                                            est, illum labore, dolor magnam et id.
                                        </p>
                                    </div>
                                </div>
                            </nuxt-link>
                        </swiper-slide>
                    </swiper>
                    <div slot="pagination" class="swiper-pagination productslide-pagination2 text-center mt-2">
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
    props: {
        info: {
            type: Object,
            default: () => { },
        },
    },
    components: {
        Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
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
                pagination: {
                    el: ".productslide-pagination2",
                    type: "bullets",
                    clickable: true,
                },
                // autoplay: {
                //     delay: 10000,
                //     disableOnInteraction: false,
                // },

            },
        }
    },

    methods: {
        getFeatureImage(cate) {
            let imageUrl = ''
            try {
                imageUrl = cate.attributes.featureProductImage.data.attributes.url
            } catch (error) {
                imageUrl = ''
            }

            return this.baseURL + imageUrl
        },

        getCateImage(cate) {
            let imageUrl = ''
            try {
                imageUrl = cate.attributes.image.data.attributes.url
            } catch (error) {
                imageUrl = ''
            }

            return this.baseURL + imageUrl
        },
    },
}
</script>
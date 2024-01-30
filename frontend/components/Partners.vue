<template>
    <section>
        <div class="partners section-padding">
            <b-container>

                <div class="about-info text-center">
                    <h2 class="title-section mb-4">
                        {{ partners.TitleSection }}
                    </h2>
                    <div class="mb-5">
                        <p>
                            {{ partners.DescriptionSection }}
                        </p>
                    </div>
                </div>

                <swiper v-if="partners.Images.data && partners.Images.data.length" :options="swiperOptions"
                    class="swiper123">
                    <swiper-slide v-for="item in partners.Images.data" :key="item.index">
                        <div class="box-img" v-if="item.attributes.url">
                            <b-img :src="baseURL + item?.attributes?.formats?.thumbnail?.url" class="w-100"
                                :alt="item.attributes.name"></b-img>
                        </div>
                    </swiper-slide>
                </swiper>
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
        partners: {
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
                // grabCursor: false,
                slidesPerView: 2,
                spaceBetween: 10,
                // allowTouchMove: true,
                speed: 3000,
                breakpoints: {
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30,
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
<template>
    <div class="main">
        <item-Banner title="News" />
        <section class="section-padding">
            <b-container>
                <div class="news">
                    <b-row class="justify-content-center text-center">
                        <b-col md="8">
                            <h2 class="title-section mb-4"></h2>
                            <div class="mb-4"></div>
                        </b-col>
                    </b-row>
                    <div class="content-section">
                        <b-row>
                            <b-col v-for="i in 6" :key="i" md="4" class="mt-3">
                                <a href="#">
                                    <div class="box-news">
                                        <div class="img-box">
                                            <img src="~/assets/images/news1.jpg" alt="">
                                        </div>
                                        <div class="content-box">
                                            <div class="title my-3">
                                                Title News 0{{ i }}
                                            </div>
                                            <div class="description mb-4">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus perferendis
                                                architecto earum, fugit nemo autem consequatur sint exercitationem odio
                                                doloribus
                                                facilis praesentium ea commodi cupiditate. Eligendi ea ratione et? Porro?
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </b-col>
                        </b-row>
                    </div>
                </div>
            </b-container>
        </section>
    </div>
</template>
  
<script>
export default {
    name: 'News',
    layout: 'default',

    data() {
        return {
            baseURL: this.$axios.defaults.baseURL,
            banner: [],
        }
    },
}
</script>
  
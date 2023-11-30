<template>
    <section class="section-padding">
        <b-container>
            <div class="news">
                <b-row class="justify-content-center text-center">
                    <b-col md="8">
                        <h2 class="title-section mb-4">Latest News</h2>
                        <div class="mb-4"></div>
                    </b-col>
                </b-row>
                <div class="content-section">
                    <b-row>
                        <b-col md="6" class="mt-3">
                            <a v-for="i in 1" :key="i" href="#">
                                <div class="box-news">
                                    <div class="img-box">
                                        <img src="~/assets/images/news1.jpg" alt="">
                                    </div>
                                    <div class="content-box">
                                        <div class="title my-3">
                                            Title Main News 0{{ i }}
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
                        <b-col md="6" class="d-flex flex-column justify-content-between">
                            <a v-for="i in 3" :key="i" href="#" class="mt-3">
                                <div class="box-news" style="height: auto !important">
                                    <b-row>
                                        <b-col cols="4">
                                            <div class="img-box h-100">
                                                <img src="~/assets/images/news1.jpg" alt="" style="height: 100%; aspect-ratio: unset;">
                                            </div>
                                        </b-col>
                                        <b-col>
                                            <div class="content-box">
                                                <div class="title  my-3">
                                                    Title Sub News 0{{ i }}
                                                </div>
                                                <div class="description mb-4 mb-md-0">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                                                    perferendis
                                                    architecto earum, fugit nemo autem consequatur sint exercitationem odio
                                                    doloribus
                                                    facilis praesentium ea commodi cupiditate. Eligendi ea ratione et?
                                                    Porro?
                                                </div>
                                            </div>
                                        </b-col>
                                    </b-row>


                                </div>
                            </a>
                        </b-col>
                    </b-row>
                </div>
                <div class="text-center mt-3 mt-md-5">
                    <a href="/tin-tuc" class="btn-main">
                        <span>
                            Read more
                            <i class="fas fa-arrow-right"></i>
                        </span>
                    </a>
                </div>
            </div>
        </b-container>
    </section>
</template>
<script>
</script>
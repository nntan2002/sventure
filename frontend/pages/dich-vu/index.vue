<template>
    <div class="main">
        <item-Banner title="Services" />
        <section class="section-padding">
            <b-container>
                <div class="service">
                    <b-row class="justify-content-center text-center">
                        <b-col md="8">
                            <h2 class="title-section mb-4">Sventure</h2>
                            <div class="mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dignissimos voluptates
                                placeat rem iusto velit animi reiciendis aperiam consectetur est maxime unde doloribus
                                laboriosam, sit ipsum repellendus vitae ad delectus!
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="justify-content-center">
                        <b-col v-for="item in 2" :key="item" md="4">
                            <nuxt-link to="/dich-vu/abc">
                                <div class="box-services">
                                    <div class="img-box">
                                        <b-img src="~/assets/images/services1.jpg"></b-img>
                                        <b-img src="~/assets/images/services2.jpg"></b-img>
                                    </div>
                                    <div class="content-box">
                                        <h4 class="title my-4">
                                            {{ item === 2 ? 'Office Services' : 'Business Services' }}
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic suscipit eos quae,
                                            nesciunt beatae fuga a necessitatibus eius vitae culpa molestiae iusto atque
                                            est, illum labore, dolor magnam et id.
                                        </p>
                                    </div>
                                </div>
                            </nuxt-link>
                        </b-col>
                        <b-col md="4">
                            <a href="https://sventure.cls.vn" target="_blank">
                                <div class="box-services">
                                    <div class="img-box">
                                        <b-img src="~/assets/images/services1.jpg"></b-img>
                                        <b-img src="~/assets/images/services2.jpg"></b-img>
                                    </div>
                                    <div class="content-box">
                                        <h4 class="title my-4">
                                            Elearning Sventure
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic suscipit eos quae,
                                            nesciunt beatae fuga a necessitatibus eius vitae culpa molestiae iusto atque
                                            est, illum labore, dolor magnam et id.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </section>
        <home-page-Building />
        <home-page-Contact />
    </div>
</template>
  
<script>
export default {
    name: 'Services',
    layout: 'default',

    data() {
        return {
            baseURL: this.$axios.defaults.baseURL,
            banner: [],
        }
    },
}
</script>
  
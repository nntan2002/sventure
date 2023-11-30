<template>
    <div class="main">
        <item-Banner title="Contact" />
        <section class="section-padding">
            <b-container>
                <div class="contact">
                    <b-row class="justify-content-center text-center">
                        <b-col md="8">
                            <div class="mb-2">
                                Please leave your information
                            </div>
                            <h2 class="title-section mb-4">STARBALM® WILL CONNECT WITH YOU</h2>
                        </b-col>
                    </b-row>
                    <b-row class="justify-content-center">
                        
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
    name: 'Contact',
    layout: 'default',

    data() {
        return {
            baseURL: this.$axios.defaults.baseURL,
            banner: [],
        }
    },
}
</script>
  
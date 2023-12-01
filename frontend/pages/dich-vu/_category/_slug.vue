<template>
    <div class="main">
        <item-Banner title="Detail Service" />
        <section class="section-padding">
            <b-container>
                <div class="service">
                    <div class="share-media">
                        <div class="date">
                            29/05/2023 11:24:28 AM
                        </div>
                        <div class="share-icon">
                            <a href="#">
                                <img src="~/assets/images/facebook.jpg" alt="">
                            </a>
                            <a href="#">
                                <img src="~/assets/images/instagram.jpg" alt="">
                            </a>
                            <a href="#">
                                <img src="~/assets/images/linkedIn.jpg" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="content-detail mt-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sapiente ratione reprehenderit
                            expedita illo. Adipisci, odio eius pariatur inventore repudiandae dolorum ut nesciunt beatae
                            aspernatur, nemo neque obcaecati eos? Cum. Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corporis sapiente ratione reprehenderit
                            expedita illo. Adipisci, odio eius pariatur inventore repudiandae dolorum ut nesciunt beatae
                            aspernatur, nemo neque obcaecati eos? Cum. Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corporis sapiente ratione reprehenderit
                            expedita illo. Adipisci, odio eius pariatur inventore repudiandae dolorum ut nesciunt beatae
                            aspernatur, nemo neque obcaecati eos? Cum. Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corporis sapiente ratione reprehenderit
                            expedita illo. Adipisci, odio eius pariatur inventore repudiandae dolorum ut nesciunt beatae
                            aspernatur, nemo neque obcaecati eos? Cum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sapiente ratione reprehenderit
                            expedita illo. Adipisci, odio eius pariatur inventore repudiandae dolorum ut nesciunt beatae
                            aspernatur, nemo neque obcaecati eos? Cum. Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corporis sapiente ratione reprehenderit
                            expedita illo. Adipisci, odio eius pariatur inventore repudiandae dolorum ut nesciunt beatae
                            aspernatur, nemo neque obcaecati eos? Cum. Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corporis sapiente ratione reprehenderit
                            expedita illo. Adipisci, odio eius pariatur inventore repudiandae dolorum ut nesciunt beatae
                            aspernatur, nemo neque obcaecati eos? Cum. Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corporis sapiente ratione reprehenderit
                            expedita illo. Adipisci, odio eius pariatur inventore repudiandae dolorum ut nesciunt beatae
                            aspernatur, nemo neque obcaecati eos? Cum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sapiente ratione reprehenderit
                            expedita illo. Adipisci, odio eius pariatur inventore repudiandae dolorum ut nesciunt beatae
                            aspernatur, nemo neque obcaecati eos? Cum. Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corporis sapiente ratione reprehenderit
                            expedita illo. Adipisci, odio eius pariatur inventore repudiandae dolorum ut nesciunt beatae
                            aspernatur, nemo neque obcaecati eos? Cum. Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corporis sapiente ratione reprehenderit
                            expedita illo. Adipisci, odio eius pariatur inventore repudiandae dolorum ut nesciunt beatae
                            aspernatur, nemo neque obcaecati eos? Cum. Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corporis sapiente ratione reprehenderit
                            expedita illo. Adipisci, odio eius pariatur inventore repudiandae dolorum ut nesciunt beatae
                            aspernatur, nemo neque obcaecati eos? Cum.
                        </p>
                    </div>
                </div>
            </b-container>
        </section>
        <home-page-Building />
        <home-page-Contact />
    </div>
</template>
  
<script>
export default {
    name: 'ServicesCategories',
    layout: 'default',

    data() {
        return {
            baseURL: this.$axios.defaults.baseURL,
            banner: [],
        }
    },
}
</script>
  
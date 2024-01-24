<template>
    <a :href="'/ben-ban/' + data.attributes.Slug" class="box-sell">
        <div class="title-box">
            <div class="image">
                <img :src="baseURL + data.attributes.Imagethumbnail.data.attributes.url" alt="">
            </div>
            <div class="title">
                {{ data.attributes.Title }}
            </div>
        </div>
        <div class="content-box">
            <div class="item-content">
                <div class="title-item">
                    Thông tin cơ bản
                </div>
                <div class="content-item" v-html="data.attributes.Description">
                </div>
            </div>
            <div class="item-content">
                <div class="title-item">
                    Ngành nghề chính
                </div>
                <div class="content-item">
                    {{ data.attributes.MainJob }}
                </div>
            </div>
        </div>
        <div class="star-box d-flex">
            <div v-for="item in 5" :key="item">
                <i class="fas fa-star active" v-if="item <= data.attributes.ChatLuong"></i>
                <i class="fas fa-star" v-else></i>
            </div>
        </div>
        <div class="price-box">
            <div class="price-item">
                <div class="title-item">
                    Giá trị cần bán
                </div>
                <div class="content-item">
                    {{ data.attributes.Price }}
                </div>
            </div>
            <div class="price-item">
                <div class="circle">
                    <i class="fas fa-caret-right"></i>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => null,
        },
    },
    data() {
        return {
            baseURL: this.$axios.defaults.baseURL,
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>
<template>
    <div class="main">
        <section class="section-padding">
            <div class="sell-section">
                <b-container>
                    <b-row>
                        <b-col lg="3">
                            <div class="box-filter position-sticky" style="top: 120px">
                                <div class="title-box">

                                </div>
                                <div class="content-box" v-if="tagsellArr">
                                    <div class="title-content mb-3">
                                        Phân loại giao dịch
                                    </div>
                                    <div class="item">
                                        <input type="radio" name="filter" :value="null" v-model="filterRadio">
                                        <label for="filter">Tất cả các giao dịch</label>
                                    </div>
                                    <div class="item" v-for="item in tagsellArr" :key="item.id">
                                        <input type="radio" name="filter" :value="item.attributes.TitleTag"
                                            v-model="filterRadio">
                                        <label for="filter">{{ item.attributes.TitleTag }}</label>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <b-col lg="9">
                            <div class="filter-name mb-4" v-if="filterRadio">
                                <div class="item">{{ filterRadio }}</div>
                            </div>
                            <div class="filter d-flex justify-content-between mb-4 w-100">
                                <div class="count-item" v-if="sellArr">
                                    Hiện {{ sellArr.length + '/' + totalsell }} kết quả
                                </div>
                                <div class="filter-item">
                                    <select>
                                        <option disabled selected hidden>Sắp xếp hồ sơ theo</option>
                                        <option value="1">Hồ sơ mới tạo</option>
                                        <option value="2">Cấp độ đánh giá hồ sơ</option>
                                    </select>
                                    <i class="fas fa-sort-amount-down"></i>
                                </div>
                            </div>
                            <b-row>
                                <b-col v-for="item in sellArr" :key="item.id" sm="6" lg="4" class="mb-4">
                                    <item-Box-sell :data="item" />
                                </b-col>
                            </b-row>
                            <div class="pagination justify-content-center mt-5">
                                <div class="pagination-item active">
                                    1
                                </div>
                                <div class="pagination-item">
                                    2
                                </div>
                                <div class="pagination-item">
                                    3
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </div>

        </section>
    </div>
</template>
<script>

const qs = require('qs')
export default {
    name: 'IndexPage',
    layout: 'default',

    head: {
        meta: [
            {
                hid: 'og:title',
                property: 'og:title',
                content: 'Sventure',
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'Tương lai doanh nhân Việt - Giải pháp tổng thể ươm mầm doanh nhân'
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: '/logo-sventure-12.png',
            },
        ]
    },
    data() {
        return {
            baseURL: this.$axios.defaults.baseURL,
            locale: this.$i18n.locale || 'vi',
            tagsellArr: null,
            sellArr: null,
            totalsell: 0,
            filterRadio: null,
        }
    },
    mounted() {

        const query = qs.stringify(
            {
                fields: [
                    'Title',
                    'Slug',
                    'ChatLuong',
                    'Price',
                    'MainJob',
                    'Description',
                ],
                populate: [
                    'Imagethumbnail'
                ],
                sort: { publishedAt: 'desc' },
                publicationState: 'live',
                pagination: {
                    page: 1,
                    pageSize: 9,
                },
                locale: this.$i18n.locale || 'vi',
            },
            {
                encodeValuesOnly: true, // prettify url
            }
        )

        const query1 = qs.stringify(
            {
                populate: '*',
                sort: { publishedAt: 'desc' },
                publicationState: 'live',
                locale: this.$i18n.locale || 'vi',
            },
            {
                encodeValuesOnly: true, // prettify url
            }
        )

        this.getSell(query)
        this.getTagSell(query1)

    },
    methods: {
        getTagSell(params) {
            this.$api
                .getTagSell(params)
                .then((data) => {
                    this.tagsellArr = data.data || null
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        getSell(params) {
            this.$api
                .getSell(params)
                .then((data) => {
                    this.sellArr = data.data || null
                    this.totalsell = data.meta.pagination.total
                    console.log(data)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>
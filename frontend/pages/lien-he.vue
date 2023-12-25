<template>
    <div class="main">
        <item-Banner :banner="banner" />
        <section class="section-padding">
            <b-container>
                <div class="contact">
                    <b-row class="justify-content-center text-center">
                        <b-col md="8">
                            <div class="mb-2">
                                {{ infor?.SubTitleSection }}
                            </div>
                            <h2 class="title-section mb-4">
                                {{ infor?.TitleSection }}
                            </h2>
                        </b-col>
                    </b-row>
                    <b-row class="justify-content-center ">
                        <b-col md="6" class="mb-4">
                            <div class="group">
                                <input v-model="form.FullName" type="text" required>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Họ và tên *</label>
                                <div v-if="errors.FullName" class="form-item">
                                    <div class="luuy red-text">
                                        {{ errors.FullName }}
                                    </div>
                                </div>
                            </div>
                            <div class="group">
                                <input v-model="form.Email" type="text" required>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Email *</label>
                                <div v-if="errors.Email" class="form-item">
                                    <div class="luuy red-text">
                                        {{ errors.Email }}
                                    </div>
                                </div>
                            </div>
                            <div class="group">
                                <input v-model="form.Phone" type="text" required>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Số điện thoại *</label>
                                <div v-if="errors.Phone" class="form-item">
                                    <div class="luuy red-text">
                                        {{ errors.Phone }}
                                    </div>
                                </div>
                            </div>
                            <div class="group">
                                <input v-model="form.YourCompanyName" type="text" required>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Tên công ty</label>
                                <div v-if="errors.YourCompanyName" class="form-item">
                                    <div class="luuy red-text">
                                        {{ errors.YourCompanyName }}
                                    </div>
                                </div>
                            </div>
                            <div class="group">
                                <input v-model="form.Message" type="text" required>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Nội dung</label>
                            </div>

                            <div class="submit">
                                <button @click="submitForm">
                                    GỬI NỘI DUNG
                                </button>
                            </div>
                        </b-col>
                        <b-col md="6" class="mb-4">
                            <div class="map" v-html="infor?.IfameMap">
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </section>
    </div>
</template>
  
<script>
const qs = require('qs')
export default {
    name: 'Contact',
    layout: 'contact',

    data() {
        return {
            baseURL: this.$axios.defaults.baseURL,
            banner: null,
            infor: null,
            form: {
                FullName: '',
                Email: '',
                Phone: '',
                YourCompanyName: '',
                Message: null,
            },
            errors: {},
            fileSizeError: true,
            filename: 'Tài liệu đính kèm (nếu có)',
            Show: null,
            class1: null,
        }
    },
    mounted() {
        const query = qs.stringify(
            {
                populate: {
                    Banner: {
                        populate: {
                            Image: true,
                        },
                    }
                },
                sort: { publishedAt: 'desc' },
                publicationState: 'live',
                locale: this.$i18n.locale || 'vi',
            },
            {
                encodeValuesOnly: true, // prettify url
            }
        )

        this.getContactPage(query)

    },
    methods: {
        getContactPage(params) {
            this.$api
                .getContactPage(params)
                .then((data) => {
                    this.banner = data.data?.attributes?.Banner || null
                    this.infor = data.data.attributes || null
                    console.log(this.infor)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        submitForm() {
            this.errors = {}; // Đặt lại biến errors thành đối tượng rỗng
            this.Show = null;
            this.class1 = null
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const regex = /^[0-9]+$/; // chỉ cho phép chữ số từ 0-9

            // Kiểm tra lỗi
            if (this.form.YourCompanyName === '') {
                this.errors.YourCompanyName = 'Vui lòng nhập trường này';
            }

            if (!regex.test(this.form.Phone)) {
                this.errors.Phone = 'Vui lòng nhập số';
            }

            if (!emailRegex.test(this.form.Email)) {
                this.errors.Email = 'Nhập đúng định dạng email';
            }

            if (this.form.FullName === '') {
                this.errors.FullName = 'Vui lòng nhập trường này';
            }

            if (Object.keys(this.errors).length === 0) {
                this.errors.YourCompanyName = '';
                this.errors.FullName = '';
                this.errors.Phone = '';
                this.errors.Email = '';

                console.log(this.form)


                const data = this.form
                const formData = new FormData()

                formData.append('data', JSON.stringify(data))

                this.$api
                    .createContact(formData)
                    .then((data) => {
                        this.Show = 'Thông Tin Đã Được Gửi Đi'
                        this.class1 = 'text-success'
                        this.clearForm()
                    })
                    .catch((error) => {
                        console.log(error)
                        this.Show = 'Đã Xảy Ra Lỗi Vui Lòng Gửi Lại'
                        this.class1 = 'red-text'
                    })
            }
        },

        clearForm() {
            this.form = {
                Email: null,
                FullName: null,
                Phone: null,
                Message: null,
                YourCompanyName: null,
            }
        },
    },
}
</script>
  
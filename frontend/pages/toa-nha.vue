<template>
    <div class="main">
        <item-Banner v-if="banner" :banner="banner" />
        <section class="section-padding">
            <b-container>
                <div class="filter mb-5">
                    <b-row>
                        <b-col md="10">
                            <b-row cols="1" cols-md="3">
                                <b-col>
                                    <div class="box-filter">
                                        <div class="title-item">
                                            Tìm kiếm cửa hàng
                                        </div>
                                        <div class="content-item">
                                            <input type="text" name="" id="" placeholder="Tên cửa hàng, địa chỉ...">
                                        </div>
                                    </div>
                                </b-col>
                                <b-col>
                                    <div class="box-filter">
                                        <div class="title-item">
                                            Tỉnh/thành phố
                                        </div>
                                        <div class="content-item">
                                            <b-form-select @change="changeLocation" v-model="selectedTinh"
                                                :options="arrTinh" class="mb-3" value-field="id_tinh" text-field="name_tinh"
                                                disabled-field="notEnabled">
                                                <template #first>
                                                    <option :value="null">
                                                        Tất cả
                                                    </option>
                                                </template>
                                            </b-form-select>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col>
                                    <div class="box-filter">
                                        <div class="title-item">
                                            Quận/huyện
                                        </div>
                                        <div class="content-item">
                                            <b-form-select v-model="nameHuyen" :options="showHuyen" class="mb-3"
                                                value-field="name_huyen" text-field="name_huyen"
                                                disabled-field="notEnabled">
                                                <template #first>
                                                    <option :value="null">
                                                        Tất cả
                                                    </option>
                                                </template>
                                            </b-form-select>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col md="2">
                            <div class="btn-filter">
                                <button @click="showCuahang" class="mb-3">
                                    Tìm ngay
                                </button>
                            </div>
                        </b-col>
                    </b-row>
                </div>
                <!-- <div class="danhsachcuahang">
                    <b-row cols="1" cols-md="2">
                        <b-col>
                            <div class="danhsach">
                                <div class="title-danhsach">
                                    <div class="title">Hiển thị tất cả</div>
                                    <div class="sub-title" v-if="storearr">{{ storearr.length }} cửa hàng</div>
                                </div>
                                <div class="content-danhsach" v-if="storearr">
                                    <div class="box-danhsach" v-for="(item, index) in storearr" :key="index"
                                        @click="changeMap(item.attributes.map)">
                                        <strong>{{ item.attributes.name }}</strong><br />
                                        {{ item.attributes.street }}, {{ item.attributes.district }}, {{
                                            item.attributes.city }}
                                        <br />
                                        <strong> Điện thoại: </strong>{{ item.attributes.phone }}<br />
                                        <strong>Email:</strong> {{ item.attributes.email }}<br />
                                        <strong> Giờ hoạt động:</strong> {{ item.attributes.activeTime }}
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <b-col class="">
                            <div class="map" v-html="map">
                            </div>
                        </b-col>
                    </b-row>
                </div> -->
            </b-container>
        </section>
    </div>
</template>
<script>
const qs = require('qs');
export default {
    layout: 'building',
    data() {
        return {
            selectedTinh: null,
            nameTinh: null,
            nameHuyen: null,
            showHuyen: null,
            showTinh: null,
            map: null,
            arrhuyen: [
                {
                    "id_tinh": "01",
                    "id_huyen": "001",
                    "name_huyen": "Quận Ba Đình"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": "002",
                    "name_huyen": "Quận Hoàn Kiếm"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": "003",
                    "name_huyen": "Quận Tây Hồ"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": "004",
                    "name_huyen": "Quận Long Biên"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": "005",
                    "name_huyen": "Quận Cầu Giấy"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": "006",
                    "name_huyen": "Quận Đống Đa"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": "007",
                    "name_huyen": "Quận Hai Bà Trưng"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": "008",
                    "name_huyen": "Quận Hoàng Mai"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": "009",
                    "name_huyen": "Quận Thanh Xuân"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": "016",
                    "name_huyen": "Huyện Sóc Sơn"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": "017",
                    "name_huyen": "Huyện Đông Anh"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": "018",
                    "name_huyen": "Huyện Gia Lâm"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": "019",
                    "name_huyen": "Quận Nam Từ Liêm"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": "020",
                    "name_huyen": "Huyện Thanh Trì"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": "021",
                    "name_huyen": "Quận Bắc Từ Liêm"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": 250,
                    "name_huyen": "Huyện Mê Linh"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": 268,
                    "name_huyen": "Quận Hà Đông"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": 269,
                    "name_huyen": "Thị xã Sơn Tây"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": 271,
                    "name_huyen": "Huyện Ba Vì"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": 272,
                    "name_huyen": "Huyện Phúc Thọ"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": 273,
                    "name_huyen": "Huyện Đan Phượng"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": 274,
                    "name_huyen": "Huyện Hoài Đức"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": 275,
                    "name_huyen": "Huyện Quốc Oai"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": 276,
                    "name_huyen": "Huyện Thạch Thất"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": 277,
                    "name_huyen": "Huyện Chương Mỹ"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": 278,
                    "name_huyen": "Huyện Thanh Oai"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": 279,
                    "name_huyen": "Huyện Thường Tín"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": 280,
                    "name_huyen": "Huyện Phú Xuyên"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": 281,
                    "name_huyen": "Huyện Ứng Hòa"
                },
                {
                    "id_tinh": "01",
                    "id_huyen": 282,
                    "name_huyen": "Huyện Mỹ Đức"
                },
                {
                    "id_tinh": "02",
                    "id_huyen": "024",
                    "name_huyen": "Thành phố Hà Giang"
                },
                {
                    "id_tinh": "02",
                    "id_huyen": "026",
                    "name_huyen": "Huyện Đồng Văn"
                },
                {
                    "id_tinh": "02",
                    "id_huyen": "027",
                    "name_huyen": "Huyện Mèo Vạc"
                },
                {
                    "id_tinh": "02",
                    "id_huyen": "028",
                    "name_huyen": "Huyện Yên Minh"
                },
                {
                    "id_tinh": "02",
                    "id_huyen": "029",
                    "name_huyen": "Huyện Quản Bạ"
                },
                {
                    "id_tinh": "02",
                    "id_huyen": "030",
                    "name_huyen": "Huyện Vị Xuyên"
                },
                {
                    "id_tinh": "02",
                    "id_huyen": "031",
                    "name_huyen": "Huyện Bắc Mê"
                },
                {
                    "id_tinh": "02",
                    "id_huyen": "032",
                    "name_huyen": "Huyện Hoàng Su Phì"
                },
                {
                    "id_tinh": "02",
                    "id_huyen": "033",
                    "name_huyen": "Huyện Xín Mần"
                },
                {
                    "id_tinh": "02",
                    "id_huyen": "034",
                    "name_huyen": "Huyện Bắc Quang"
                },
                {
                    "id_tinh": "02",
                    "id_huyen": "035",
                    "name_huyen": "Huyện Quang Bình"
                },
                {
                    "id_tinh": "04",
                    "id_huyen": "040",
                    "name_huyen": "Thành phố Cao Bằng"
                },
                {
                    "id_tinh": "04",
                    "id_huyen": "042",
                    "name_huyen": "Huyện Bảo Lâm"
                },
                {
                    "id_tinh": "04",
                    "id_huyen": "043",
                    "name_huyen": "Huyện Bảo Lạc"
                },
                {
                    "id_tinh": "04",
                    "id_huyen": "045",
                    "name_huyen": "Huyện Hà Quảng"
                },
                {
                    "id_tinh": "04",
                    "id_huyen": "047",
                    "name_huyen": "Huyện Trùng Khánh"
                },
                {
                    "id_tinh": "04",
                    "id_huyen": "048",
                    "name_huyen": "Huyện Hạ Lang"
                },
                {
                    "id_tinh": "04",
                    "id_huyen": "049",
                    "name_huyen": "Huyện Quảng Hòa"
                },
                {
                    "id_tinh": "04",
                    "id_huyen": "051",
                    "name_huyen": "Huyện Hoà An"
                },
                {
                    "id_tinh": "04",
                    "id_huyen": "052",
                    "name_huyen": "Huyện Nguyên Bình"
                },
                {
                    "id_tinh": "04",
                    "id_huyen": "053",
                    "name_huyen": "Huyện Thạch An"
                },
                {
                    "id_tinh": "06",
                    "id_huyen": "058",
                    "name_huyen": "Thành Phố Bắc Kạn"
                },
                {
                    "id_tinh": "06",
                    "id_huyen": "060",
                    "name_huyen": "Huyện Pác Nặm"
                },
                {
                    "id_tinh": "06",
                    "id_huyen": "061",
                    "name_huyen": "Huyện Ba Bể"
                },
                {
                    "id_tinh": "06",
                    "id_huyen": "062",
                    "name_huyen": "Huyện Ngân Sơn"
                },
                {
                    "id_tinh": "06",
                    "id_huyen": "063",
                    "name_huyen": "Huyện Bạch Thông"
                },
                {
                    "id_tinh": "06",
                    "id_huyen": "064",
                    "name_huyen": "Huyện Chợ Đồn"
                },
                {
                    "id_tinh": "06",
                    "id_huyen": "065",
                    "name_huyen": "Huyện Chợ Mới"
                },
                {
                    "id_tinh": "06",
                    "id_huyen": "066",
                    "name_huyen": "Huyện Na Rì"
                },
                {
                    "id_tinh": "08",
                    "id_huyen": "070",
                    "name_huyen": "Thành phố Tuyên Quang"
                },
                {
                    "id_tinh": "08",
                    "id_huyen": "071",
                    "name_huyen": "Huyện Lâm Bình"
                },
                {
                    "id_tinh": "08",
                    "id_huyen": "072",
                    "name_huyen": "Huyện Na Hang"
                },
                {
                    "id_tinh": "08",
                    "id_huyen": "073",
                    "name_huyen": "Huyện Chiêm Hóa"
                },
                {
                    "id_tinh": "08",
                    "id_huyen": "074",
                    "name_huyen": "Huyện Hàm Yên"
                },
                {
                    "id_tinh": "08",
                    "id_huyen": "075",
                    "name_huyen": "Huyện Yên Sơn"
                },
                {
                    "id_tinh": "08",
                    "id_huyen": "076",
                    "name_huyen": "Huyện Sơn Dương"
                },
                {
                    "id_tinh": 10,
                    "id_huyen": "080",
                    "name_huyen": "Thành phố Lào Cai"
                },
                {
                    "id_tinh": 10,
                    "id_huyen": "082",
                    "name_huyen": "Huyện Bát Xát"
                },
                {
                    "id_tinh": 10,
                    "id_huyen": "083",
                    "name_huyen": "Huyện Mường Khương"
                },
                {
                    "id_tinh": 10,
                    "id_huyen": "084",
                    "name_huyen": "Huyện Si Ma Cai"
                },
                {
                    "id_tinh": 10,
                    "id_huyen": "085",
                    "name_huyen": "Huyện Bắc Hà"
                },
                {
                    "id_tinh": 10,
                    "id_huyen": "086",
                    "name_huyen": "Huyện Bảo Thắng"
                },
                {
                    "id_tinh": 10,
                    "id_huyen": "087",
                    "name_huyen": "Huyện Bảo Yên"
                },
                {
                    "id_tinh": 10,
                    "id_huyen": "088",
                    "name_huyen": "Thị xã Sa Pa"
                },
                {
                    "id_tinh": 10,
                    "id_huyen": "089",
                    "name_huyen": "Huyện Văn Bàn"
                },
                {
                    "id_tinh": 11,
                    "id_huyen": "094",
                    "name_huyen": "Thành phố Điện Biên Phủ"
                },
                {
                    "id_tinh": 11,
                    "id_huyen": "095",
                    "name_huyen": "Thị Xã Mường Lay"
                },
                {
                    "id_tinh": 11,
                    "id_huyen": "096",
                    "name_huyen": "Huyện Mường Nhé"
                },
                {
                    "id_tinh": 11,
                    "id_huyen": "097",
                    "name_huyen": "Huyện Mường Chà"
                },
                {
                    "id_tinh": 11,
                    "id_huyen": "098",
                    "name_huyen": "Huyện Tủa Chùa"
                },
                {
                    "id_tinh": 11,
                    "id_huyen": "099",
                    "name_huyen": "Huyện Tuần Giáo"
                },
                {
                    "id_tinh": 11,
                    "id_huyen": 100,
                    "name_huyen": "Huyện Điện Biên"
                },
                {
                    "id_tinh": 11,
                    "id_huyen": 101,
                    "name_huyen": "Huyện Điện Biên Đông"
                },
                {
                    "id_tinh": 11,
                    "id_huyen": 102,
                    "name_huyen": "Huyện Mường Ảng"
                },
                {
                    "id_tinh": 11,
                    "id_huyen": 103,
                    "name_huyen": "Huyện Nậm Pồ"
                },
                {
                    "id_tinh": 12,
                    "id_huyen": 105,
                    "name_huyen": "Thành phố Lai Châu"
                },
                {
                    "id_tinh": 12,
                    "id_huyen": 106,
                    "name_huyen": "Huyện Tam Đường"
                },
                {
                    "id_tinh": 12,
                    "id_huyen": 107,
                    "name_huyen": "Huyện Mường Tè"
                },
                {
                    "id_tinh": 12,
                    "id_huyen": 108,
                    "name_huyen": "Huyện Sìn Hồ"
                },
                {
                    "id_tinh": 12,
                    "id_huyen": 109,
                    "name_huyen": "Huyện Phong Thổ"
                },
                {
                    "id_tinh": 12,
                    "id_huyen": 110,
                    "name_huyen": "Huyện Than Uyên"
                },
                {
                    "id_tinh": 12,
                    "id_huyen": 111,
                    "name_huyen": "Huyện Tân Uyên"
                },
                {
                    "id_tinh": 12,
                    "id_huyen": 112,
                    "name_huyen": "Huyện Nậm Nhùn"
                },
                {
                    "id_tinh": 14,
                    "id_huyen": 116,
                    "name_huyen": "Thành phố Sơn La"
                },
                {
                    "id_tinh": 14,
                    "id_huyen": 118,
                    "name_huyen": "Huyện Quỳnh Nhai"
                },
                {
                    "id_tinh": 14,
                    "id_huyen": 119,
                    "name_huyen": "Huyện Thuận Châu"
                },
                {
                    "id_tinh": 14,
                    "id_huyen": 120,
                    "name_huyen": "Huyện Mường La"
                },
                {
                    "id_tinh": 14,
                    "id_huyen": 121,
                    "name_huyen": "Huyện Bắc Yên"
                },
                {
                    "id_tinh": 14,
                    "id_huyen": 122,
                    "name_huyen": "Huyện Phù Yên"
                },
                {
                    "id_tinh": 14,
                    "id_huyen": 123,
                    "name_huyen": "Huyện Mộc Châu"
                },
                {
                    "id_tinh": 14,
                    "id_huyen": 124,
                    "name_huyen": "Huyện Yên Châu"
                },
                {
                    "id_tinh": 14,
                    "id_huyen": 125,
                    "name_huyen": "Huyện Mai Sơn"
                },
                {
                    "id_tinh": 14,
                    "id_huyen": 126,
                    "name_huyen": "Huyện Sông Mã"
                },
                {
                    "id_tinh": 14,
                    "id_huyen": 127,
                    "name_huyen": "Huyện Sốp Cộp"
                },
                {
                    "id_tinh": 14,
                    "id_huyen": 128,
                    "name_huyen": "Huyện Vân Hồ"
                },
                {
                    "id_tinh": 15,
                    "id_huyen": 132,
                    "name_huyen": "Thành phố Yên Bái"
                },
                {
                    "id_tinh": 15,
                    "id_huyen": 133,
                    "name_huyen": "Thị xã Nghĩa Lộ"
                },
                {
                    "id_tinh": 15,
                    "id_huyen": 135,
                    "name_huyen": "Huyện Lục Yên"
                },
                {
                    "id_tinh": 15,
                    "id_huyen": 136,
                    "name_huyen": "Huyện Văn Yên"
                },
                {
                    "id_tinh": 15,
                    "id_huyen": 137,
                    "name_huyen": "Huyện Mù Căng Chải"
                },
                {
                    "id_tinh": 15,
                    "id_huyen": 138,
                    "name_huyen": "Huyện Trấn Yên"
                },
                {
                    "id_tinh": 15,
                    "id_huyen": 139,
                    "name_huyen": "Huyện Trạm Tấu"
                },
                {
                    "id_tinh": 15,
                    "id_huyen": 140,
                    "name_huyen": "Huyện Văn Chấn"
                },
                {
                    "id_tinh": 15,
                    "id_huyen": 141,
                    "name_huyen": "Huyện Yên Bình"
                },
                {
                    "id_tinh": 17,
                    "id_huyen": 148,
                    "name_huyen": "Thành phố Hòa Bình"
                },
                {
                    "id_tinh": 17,
                    "id_huyen": 150,
                    "name_huyen": "Huyện Đà Bắc"
                },
                {
                    "id_tinh": 17,
                    "id_huyen": 152,
                    "name_huyen": "Huyện Lương Sơn"
                },
                {
                    "id_tinh": 17,
                    "id_huyen": 153,
                    "name_huyen": "Huyện Kim Bôi"
                },
                {
                    "id_tinh": 17,
                    "id_huyen": 154,
                    "name_huyen": "Huyện Cao Phong"
                },
                {
                    "id_tinh": 17,
                    "id_huyen": 155,
                    "name_huyen": "Huyện Tân Lạc"
                },
                {
                    "id_tinh": 17,
                    "id_huyen": 156,
                    "name_huyen": "Huyện Mai Châu"
                },
                {
                    "id_tinh": 17,
                    "id_huyen": 157,
                    "name_huyen": "Huyện Lạc Sơn"
                },
                {
                    "id_tinh": 17,
                    "id_huyen": 158,
                    "name_huyen": "Huyện Yên Thủy"
                },
                {
                    "id_tinh": 17,
                    "id_huyen": 159,
                    "name_huyen": "Huyện Lạc Thủy"
                },
                {
                    "id_tinh": 19,
                    "id_huyen": 164,
                    "name_huyen": "Thành phố Thái Nguyên"
                },
                {
                    "id_tinh": 19,
                    "id_huyen": 165,
                    "name_huyen": "Thành phố Sông Công"
                },
                {
                    "id_tinh": 19,
                    "id_huyen": 167,
                    "name_huyen": "Huyện Định Hóa"
                },
                {
                    "id_tinh": 19,
                    "id_huyen": 168,
                    "name_huyen": "Huyện Phú Lương"
                },
                {
                    "id_tinh": 19,
                    "id_huyen": 169,
                    "name_huyen": "Huyện Đồng Hỷ"
                },
                {
                    "id_tinh": 19,
                    "id_huyen": 170,
                    "name_huyen": "Huyện Võ Nhai"
                },
                {
                    "id_tinh": 19,
                    "id_huyen": 171,
                    "name_huyen": "Huyện Đại Từ"
                },
                {
                    "id_tinh": 19,
                    "id_huyen": 172,
                    "name_huyen": "Thành phố Phổ Yên"
                },
                {
                    "id_tinh": 19,
                    "id_huyen": 173,
                    "name_huyen": "Huyện Phú Bình"
                },
                {
                    "id_tinh": 20,
                    "id_huyen": 178,
                    "name_huyen": "Thành phố Lạng Sơn"
                },
                {
                    "id_tinh": 20,
                    "id_huyen": 180,
                    "name_huyen": "Huyện Tràng Định"
                },
                {
                    "id_tinh": 20,
                    "id_huyen": 181,
                    "name_huyen": "Huyện Bình Gia"
                },
                {
                    "id_tinh": 20,
                    "id_huyen": 182,
                    "name_huyen": "Huyện Văn Lãng"
                },
                {
                    "id_tinh": 20,
                    "id_huyen": 183,
                    "name_huyen": "Huyện Cao Lộc"
                },
                {
                    "id_tinh": 20,
                    "id_huyen": 184,
                    "name_huyen": "Huyện Văn Quan"
                },
                {
                    "id_tinh": 20,
                    "id_huyen": 185,
                    "name_huyen": "Huyện Bắc Sơn"
                },
                {
                    "id_tinh": 20,
                    "id_huyen": 186,
                    "name_huyen": "Huyện Hữu Lũng"
                },
                {
                    "id_tinh": 20,
                    "id_huyen": 187,
                    "name_huyen": "Huyện Chi Lăng"
                },
                {
                    "id_tinh": 20,
                    "id_huyen": 188,
                    "name_huyen": "Huyện Lộc Bình"
                },
                {
                    "id_tinh": 20,
                    "id_huyen": 189,
                    "name_huyen": "Huyện Đình Lập"
                },
                {
                    "id_tinh": 22,
                    "id_huyen": 193,
                    "name_huyen": "Thành phố Hạ Long"
                },
                {
                    "id_tinh": 22,
                    "id_huyen": 194,
                    "name_huyen": "Thành phố Móng Cái"
                },
                {
                    "id_tinh": 22,
                    "id_huyen": 195,
                    "name_huyen": "Thành phố Cẩm Phả"
                },
                {
                    "id_tinh": 22,
                    "id_huyen": 196,
                    "name_huyen": "Thành phố Uông Bí"
                },
                {
                    "id_tinh": 22,
                    "id_huyen": 198,
                    "name_huyen": "Huyện Bình Liêu"
                },
                {
                    "id_tinh": 22,
                    "id_huyen": 199,
                    "name_huyen": "Huyện Tiên Yên"
                },
                {
                    "id_tinh": 22,
                    "id_huyen": 200,
                    "name_huyen": "Huyện Đầm Hà"
                },
                {
                    "id_tinh": 22,
                    "id_huyen": 201,
                    "name_huyen": "Huyện Hải Hà"
                },
                {
                    "id_tinh": 22,
                    "id_huyen": 202,
                    "name_huyen": "Huyện Ba Chẽ"
                },
                {
                    "id_tinh": 22,
                    "id_huyen": 203,
                    "name_huyen": "Huyện Vân Đồn"
                },
                {
                    "id_tinh": 22,
                    "id_huyen": 205,
                    "name_huyen": "Thị xã Đông Triều"
                },
                {
                    "id_tinh": 22,
                    "id_huyen": 206,
                    "name_huyen": "Thị xã Quảng Yên"
                },
                {
                    "id_tinh": 22,
                    "id_huyen": 207,
                    "name_huyen": "Huyện Cô Tô"
                },
                {
                    "id_tinh": 24,
                    "id_huyen": 213,
                    "name_huyen": "Thành phố Bắc Giang"
                },
                {
                    "id_tinh": 24,
                    "id_huyen": 215,
                    "name_huyen": "Huyện Yên Thế"
                },
                {
                    "id_tinh": 24,
                    "id_huyen": 216,
                    "name_huyen": "Huyện Tân Yên"
                },
                {
                    "id_tinh": 24,
                    "id_huyen": 217,
                    "name_huyen": "Huyện Lạng Giang"
                },
                {
                    "id_tinh": 24,
                    "id_huyen": 218,
                    "name_huyen": "Huyện Lục Nam"
                },
                {
                    "id_tinh": 24,
                    "id_huyen": 219,
                    "name_huyen": "Huyện Lục Ngạn"
                },
                {
                    "id_tinh": 24,
                    "id_huyen": 220,
                    "name_huyen": "Huyện Sơn Động"
                },
                {
                    "id_tinh": 24,
                    "id_huyen": 221,
                    "name_huyen": "Huyện Yên Dũng"
                },
                {
                    "id_tinh": 24,
                    "id_huyen": 222,
                    "name_huyen": "Huyện Việt Yên"
                },
                {
                    "id_tinh": 24,
                    "id_huyen": 223,
                    "name_huyen": "Huyện Hiệp Hòa"
                },
                {
                    "id_tinh": 25,
                    "id_huyen": 227,
                    "name_huyen": "Thành phố Việt Trì"
                },
                {
                    "id_tinh": 25,
                    "id_huyen": 228,
                    "name_huyen": "Thị xã Phú Thọ"
                },
                {
                    "id_tinh": 25,
                    "id_huyen": 230,
                    "name_huyen": "Huyện Đoan Hùng"
                },
                {
                    "id_tinh": 25,
                    "id_huyen": 231,
                    "name_huyen": "Huyện Hạ Hoà"
                },
                {
                    "id_tinh": 25,
                    "id_huyen": 232,
                    "name_huyen": "Huyện Thanh Ba"
                },
                {
                    "id_tinh": 25,
                    "id_huyen": 233,
                    "name_huyen": "Huyện Phù Ninh"
                },
                {
                    "id_tinh": 25,
                    "id_huyen": 234,
                    "name_huyen": "Huyện Yên Lập"
                },
                {
                    "id_tinh": 25,
                    "id_huyen": 235,
                    "name_huyen": "Huyện Cẩm Khê"
                },
                {
                    "id_tinh": 25,
                    "id_huyen": 236,
                    "name_huyen": "Huyện Tam Nông"
                },
                {
                    "id_tinh": 25,
                    "id_huyen": 237,
                    "name_huyen": "Huyện Lâm Thao"
                },
                {
                    "id_tinh": 25,
                    "id_huyen": 238,
                    "name_huyen": "Huyện Thanh Sơn"
                },
                {
                    "id_tinh": 25,
                    "id_huyen": 239,
                    "name_huyen": "Huyện Thanh Thuỷ"
                },
                {
                    "id_tinh": 25,
                    "id_huyen": 240,
                    "name_huyen": "Huyện Tân Sơn"
                },
                {
                    "id_tinh": 26,
                    "id_huyen": 243,
                    "name_huyen": "Thành phố Vĩnh Yên"
                },
                {
                    "id_tinh": 26,
                    "id_huyen": 244,
                    "name_huyen": "Thành phố Phúc Yên"
                },
                {
                    "id_tinh": 26,
                    "id_huyen": 246,
                    "name_huyen": "Huyện Lập Thạch"
                },
                {
                    "id_tinh": 26,
                    "id_huyen": 247,
                    "name_huyen": "Huyện Tam Dương"
                },
                {
                    "id_tinh": 26,
                    "id_huyen": 248,
                    "name_huyen": "Huyện Tam Đảo"
                },
                {
                    "id_tinh": 26,
                    "id_huyen": 249,
                    "name_huyen": "Huyện Bình Xuyên"
                },
                {
                    "id_tinh": 26,
                    "id_huyen": 251,
                    "name_huyen": "Huyện Yên Lạc"
                },
                {
                    "id_tinh": 26,
                    "id_huyen": 252,
                    "name_huyen": "Huyện Vĩnh Tường"
                },
                {
                    "id_tinh": 26,
                    "id_huyen": 253,
                    "name_huyen": "Huyện Sông Lô"
                },
                {
                    "id_tinh": 27,
                    "id_huyen": 256,
                    "name_huyen": "Thành phố Bắc Ninh"
                },
                {
                    "id_tinh": 27,
                    "id_huyen": 258,
                    "name_huyen": "Huyện Yên Phong"
                },
                {
                    "id_tinh": 27,
                    "id_huyen": 259,
                    "name_huyen": "Huyện Quế Võ"
                },
                {
                    "id_tinh": 27,
                    "id_huyen": 260,
                    "name_huyen": "Huyện Tiên Du"
                },
                {
                    "id_tinh": 27,
                    "id_huyen": 261,
                    "name_huyen": "Thành phố Từ Sơn"
                },
                {
                    "id_tinh": 27,
                    "id_huyen": 262,
                    "name_huyen": "Huyện Thuận Thành"
                },
                {
                    "id_tinh": 27,
                    "id_huyen": 263,
                    "name_huyen": "Huyện Gia Bình"
                },
                {
                    "id_tinh": 27,
                    "id_huyen": 264,
                    "name_huyen": "Huyện Lương Tài"
                },
                {
                    "id_tinh": 30,
                    "id_huyen": 288,
                    "name_huyen": "Thành phố Hải Dương"
                },
                {
                    "id_tinh": 30,
                    "id_huyen": 290,
                    "name_huyen": "Thành phố Chí Linh"
                },
                {
                    "id_tinh": 30,
                    "id_huyen": 291,
                    "name_huyen": "Huyện Nam Sách"
                },
                {
                    "id_tinh": 30,
                    "id_huyen": 292,
                    "name_huyen": "Thị xã Kinh Môn"
                },
                {
                    "id_tinh": 30,
                    "id_huyen": 293,
                    "name_huyen": "Huyện Kim Thành"
                },
                {
                    "id_tinh": 30,
                    "id_huyen": 294,
                    "name_huyen": "Huyện Thanh Hà"
                },
                {
                    "id_tinh": 30,
                    "id_huyen": 295,
                    "name_huyen": "Huyện Cẩm Giàng"
                },
                {
                    "id_tinh": 30,
                    "id_huyen": 296,
                    "name_huyen": "Huyện Bình Giang"
                },
                {
                    "id_tinh": 30,
                    "id_huyen": 297,
                    "name_huyen": "Huyện Gia Lộc"
                },
                {
                    "id_tinh": 30,
                    "id_huyen": 298,
                    "name_huyen": "Huyện Tứ Kỳ"
                },
                {
                    "id_tinh": 30,
                    "id_huyen": 299,
                    "name_huyen": "Huyện Ninh Giang"
                },
                {
                    "id_tinh": 30,
                    "id_huyen": 300,
                    "name_huyen": "Huyện Thanh Miện"
                },
                {
                    "id_tinh": 31,
                    "id_huyen": 303,
                    "name_huyen": "Quận Hồng Bàng"
                },
                {
                    "id_tinh": 31,
                    "id_huyen": 304,
                    "name_huyen": "Quận Ngô Quyền"
                },
                {
                    "id_tinh": 31,
                    "id_huyen": 305,
                    "name_huyen": "Quận Lê Chân"
                },
                {
                    "id_tinh": 31,
                    "id_huyen": 306,
                    "name_huyen": "Quận Hải An"
                },
                {
                    "id_tinh": 31,
                    "id_huyen": 307,
                    "name_huyen": "Quận Kiến An"
                },
                {
                    "id_tinh": 31,
                    "id_huyen": 308,
                    "name_huyen": "Quận Đồ Sơn"
                },
                {
                    "id_tinh": 31,
                    "id_huyen": 309,
                    "name_huyen": "Quận Dương Kinh"
                },
                {
                    "id_tinh": 31,
                    "id_huyen": 311,
                    "name_huyen": "Huyện Thuỷ Nguyên"
                },
                {
                    "id_tinh": 31,
                    "id_huyen": 312,
                    "name_huyen": "Huyện An Dương"
                },
                {
                    "id_tinh": 31,
                    "id_huyen": 313,
                    "name_huyen": "Huyện An Lão"
                },
                {
                    "id_tinh": 31,
                    "id_huyen": 314,
                    "name_huyen": "Huyện Kiến Thuỵ"
                },
                {
                    "id_tinh": 31,
                    "id_huyen": 315,
                    "name_huyen": "Huyện Tiên Lãng"
                },
                {
                    "id_tinh": 31,
                    "id_huyen": 316,
                    "name_huyen": "Huyện Vĩnh Bảo"
                },
                {
                    "id_tinh": 31,
                    "id_huyen": 317,
                    "name_huyen": "Huyện Cát Hải"
                },
                {
                    "id_tinh": 31,
                    "id_huyen": 318,
                    "name_huyen": "Huyện Bạch Long Vĩ"
                },
                {
                    "id_tinh": 33,
                    "id_huyen": 323,
                    "name_huyen": "Thành phố Hưng Yên"
                },
                {
                    "id_tinh": 33,
                    "id_huyen": 325,
                    "name_huyen": "Huyện Văn Lâm"
                },
                {
                    "id_tinh": 33,
                    "id_huyen": 326,
                    "name_huyen": "Huyện Văn Giang"
                },
                {
                    "id_tinh": 33,
                    "id_huyen": 327,
                    "name_huyen": "Huyện Yên Mỹ"
                },
                {
                    "id_tinh": 33,
                    "id_huyen": 328,
                    "name_huyen": "Thị xã Mỹ Hào"
                },
                {
                    "id_tinh": 33,
                    "id_huyen": 329,
                    "name_huyen": "Huyện Ân Thi"
                },
                {
                    "id_tinh": 33,
                    "id_huyen": 330,
                    "name_huyen": "Huyện Khoái Châu"
                },
                {
                    "id_tinh": 33,
                    "id_huyen": 331,
                    "name_huyen": "Huyện Kim Động"
                },
                {
                    "id_tinh": 33,
                    "id_huyen": 332,
                    "name_huyen": "Huyện Tiên Lữ"
                },
                {
                    "id_tinh": 33,
                    "id_huyen": 333,
                    "name_huyen": "Huyện Phù Cừ"
                },
                {
                    "id_tinh": 34,
                    "id_huyen": 336,
                    "name_huyen": "Thành phố Thái Bình"
                },
                {
                    "id_tinh": 34,
                    "id_huyen": 338,
                    "name_huyen": "Huyện Quỳnh Phụ"
                },
                {
                    "id_tinh": 34,
                    "id_huyen": 339,
                    "name_huyen": "Huyện Hưng Hà"
                },
                {
                    "id_tinh": 34,
                    "id_huyen": 340,
                    "name_huyen": "Huyện Đông Hưng"
                },
                {
                    "id_tinh": 34,
                    "id_huyen": 341,
                    "name_huyen": "Huyện Thái Thụy"
                },
                {
                    "id_tinh": 34,
                    "id_huyen": 342,
                    "name_huyen": "Huyện Tiền Hải"
                },
                {
                    "id_tinh": 34,
                    "id_huyen": 343,
                    "name_huyen": "Huyện Kiến Xương"
                },
                {
                    "id_tinh": 34,
                    "id_huyen": 344,
                    "name_huyen": "Huyện Vũ Thư"
                },
                {
                    "id_tinh": 35,
                    "id_huyen": 347,
                    "name_huyen": "Thành phố Phủ Lý"
                },
                {
                    "id_tinh": 35,
                    "id_huyen": 349,
                    "name_huyen": "Thị xã Duy Tiên"
                },
                {
                    "id_tinh": 35,
                    "id_huyen": 350,
                    "name_huyen": "Huyện Kim Bảng"
                },
                {
                    "id_tinh": 35,
                    "id_huyen": 351,
                    "name_huyen": "Huyện Thanh Liêm"
                },
                {
                    "id_tinh": 35,
                    "id_huyen": 352,
                    "name_huyen": "Huyện Bình Lục"
                },
                {
                    "id_tinh": 35,
                    "id_huyen": 353,
                    "name_huyen": "Huyện Lý Nhân"
                },
                {
                    "id_tinh": 36,
                    "id_huyen": 356,
                    "name_huyen": "Thành phố Nam Định"
                },
                {
                    "id_tinh": 36,
                    "id_huyen": 358,
                    "name_huyen": "Huyện Mỹ Lộc"
                },
                {
                    "id_tinh": 36,
                    "id_huyen": 359,
                    "name_huyen": "Huyện Vụ Bản"
                },
                {
                    "id_tinh": 36,
                    "id_huyen": 360,
                    "name_huyen": "Huyện Ý Yên"
                },
                {
                    "id_tinh": 36,
                    "id_huyen": 361,
                    "name_huyen": "Huyện Nghĩa Hưng"
                },
                {
                    "id_tinh": 36,
                    "id_huyen": 362,
                    "name_huyen": "Huyện Nam Trực"
                },
                {
                    "id_tinh": 36,
                    "id_huyen": 363,
                    "name_huyen": "Huyện Trực Ninh"
                },
                {
                    "id_tinh": 36,
                    "id_huyen": 364,
                    "name_huyen": "Huyện Xuân Trường"
                },
                {
                    "id_tinh": 36,
                    "id_huyen": 365,
                    "name_huyen": "Huyện Giao Thủy"
                },
                {
                    "id_tinh": 36,
                    "id_huyen": 366,
                    "name_huyen": "Huyện Hải Hậu"
                },
                {
                    "id_tinh": 37,
                    "id_huyen": 369,
                    "name_huyen": "Thành phố Ninh Bình"
                },
                {
                    "id_tinh": 37,
                    "id_huyen": 370,
                    "name_huyen": "Thành phố Tam Điệp"
                },
                {
                    "id_tinh": 37,
                    "id_huyen": 372,
                    "name_huyen": "Huyện Nho Quan"
                },
                {
                    "id_tinh": 37,
                    "id_huyen": 373,
                    "name_huyen": "Huyện Gia Viễn"
                },
                {
                    "id_tinh": 37,
                    "id_huyen": 374,
                    "name_huyen": "Huyện Hoa Lư"
                },
                {
                    "id_tinh": 37,
                    "id_huyen": 375,
                    "name_huyen": "Huyện Yên Khánh"
                },
                {
                    "id_tinh": 37,
                    "id_huyen": 376,
                    "name_huyen": "Huyện Kim Sơn"
                },
                {
                    "id_tinh": 37,
                    "id_huyen": 377,
                    "name_huyen": "Huyện Yên Mô"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 380,
                    "name_huyen": "Thành phố Thanh Hóa"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 381,
                    "name_huyen": "Thị xã Bỉm Sơn"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 382,
                    "name_huyen": "Thành phố Sầm Sơn"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 384,
                    "name_huyen": "Huyện Mường Lát"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 385,
                    "name_huyen": "Huyện Quan Hóa"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 386,
                    "name_huyen": "Huyện Bá Thước"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 387,
                    "name_huyen": "Huyện Quan Sơn"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 388,
                    "name_huyen": "Huyện Lang Chánh"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 389,
                    "name_huyen": "Huyện Ngọc Lặc"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 390,
                    "name_huyen": "Huyện Cẩm Thủy"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 391,
                    "name_huyen": "Huyện Thạch Thành"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 392,
                    "name_huyen": "Huyện Hà Trung"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 393,
                    "name_huyen": "Huyện Vĩnh Lộc"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 394,
                    "name_huyen": "Huyện Yên Định"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 395,
                    "name_huyen": "Huyện Thọ Xuân"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 396,
                    "name_huyen": "Huyện Thường Xuân"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 397,
                    "name_huyen": "Huyện Triệu Sơn"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 398,
                    "name_huyen": "Huyện Thiệu Hóa"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 399,
                    "name_huyen": "Huyện Hoằng Hóa"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 400,
                    "name_huyen": "Huyện Hậu Lộc"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 401,
                    "name_huyen": "Huyện Nga Sơn"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 402,
                    "name_huyen": "Huyện Như Xuân"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 403,
                    "name_huyen": "Huyện Như Thanh"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 404,
                    "name_huyen": "Huyện Nông Cống"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 405,
                    "name_huyen": "Huyện Đông Sơn"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 406,
                    "name_huyen": "Huyện Quảng Xương"
                },
                {
                    "id_tinh": 38,
                    "id_huyen": 407,
                    "name_huyen": "Thị xã Nghi Sơn"
                },
                {
                    "id_tinh": 40,
                    "id_huyen": 412,
                    "name_huyen": "Thành phố Vinh"
                },
                {
                    "id_tinh": 40,
                    "id_huyen": 413,
                    "name_huyen": "Thị xã Cửa Lò"
                },
                {
                    "id_tinh": 40,
                    "id_huyen": 414,
                    "name_huyen": "Thị xã Thái Hoà"
                },
                {
                    "id_tinh": 40,
                    "id_huyen": 415,
                    "name_huyen": "Huyện Quế Phong"
                },
                {
                    "id_tinh": 40,
                    "id_huyen": 416,
                    "name_huyen": "Huyện Quỳ Châu"
                },
                {
                    "id_tinh": 40,
                    "id_huyen": 417,
                    "name_huyen": "Huyện Kỳ Sơn"
                },
                {
                    "id_tinh": 40,
                    "id_huyen": 418,
                    "name_huyen": "Huyện Tương Dương"
                },
                {
                    "id_tinh": 40,
                    "id_huyen": 419,
                    "name_huyen": "Huyện Nghĩa Đàn"
                },
                {
                    "id_tinh": 40,
                    "id_huyen": 420,
                    "name_huyen": "Huyện Quỳ Hợp"
                },
                {
                    "id_tinh": 40,
                    "id_huyen": 421,
                    "name_huyen": "Huyện Quỳnh Lưu"
                },
                {
                    "id_tinh": 40,
                    "id_huyen": 422,
                    "name_huyen": "Huyện Con Cuông"
                },
                {
                    "id_tinh": 40,
                    "id_huyen": 423,
                    "name_huyen": "Huyện Tân Kỳ"
                },
                {
                    "id_tinh": 40,
                    "id_huyen": 424,
                    "name_huyen": "Huyện Anh Sơn"
                },
                {
                    "id_tinh": 40,
                    "id_huyen": 425,
                    "name_huyen": "Huyện Diễn Châu"
                },
                {
                    "id_tinh": 40,
                    "id_huyen": 426,
                    "name_huyen": "Huyện Yên Thành"
                },
                {
                    "id_tinh": 40,
                    "id_huyen": 427,
                    "name_huyen": "Huyện Đô Lương"
                },
                {
                    "id_tinh": 40,
                    "id_huyen": 428,
                    "name_huyen": "Huyện Thanh Chương"
                },
                {
                    "id_tinh": 40,
                    "id_huyen": 429,
                    "name_huyen": "Huyện Nghi Lộc"
                },
                {
                    "id_tinh": 40,
                    "id_huyen": 430,
                    "name_huyen": "Huyện Nam Đàn"
                },
                {
                    "id_tinh": 40,
                    "id_huyen": 431,
                    "name_huyen": "Huyện Hưng Nguyên"
                },
                {
                    "id_tinh": 40,
                    "id_huyen": 432,
                    "name_huyen": "Thị xã Hoàng Mai"
                },
                {
                    "id_tinh": 42,
                    "id_huyen": 436,
                    "name_huyen": "Thành phố Hà Tĩnh"
                },
                {
                    "id_tinh": 42,
                    "id_huyen": 437,
                    "name_huyen": "Thị xã Hồng Lĩnh"
                },
                {
                    "id_tinh": 42,
                    "id_huyen": 439,
                    "name_huyen": "Huyện Hương Sơn"
                },
                {
                    "id_tinh": 42,
                    "id_huyen": 440,
                    "name_huyen": "Huyện Đức Thọ"
                },
                {
                    "id_tinh": 42,
                    "id_huyen": 441,
                    "name_huyen": "Huyện Vũ Quang"
                },
                {
                    "id_tinh": 42,
                    "id_huyen": 442,
                    "name_huyen": "Huyện Nghi Xuân"
                },
                {
                    "id_tinh": 42,
                    "id_huyen": 443,
                    "name_huyen": "Huyện Can Lộc"
                },
                {
                    "id_tinh": 42,
                    "id_huyen": 444,
                    "name_huyen": "Huyện Hương Khê"
                },
                {
                    "id_tinh": 42,
                    "id_huyen": 445,
                    "name_huyen": "Huyện Thạch Hà"
                },
                {
                    "id_tinh": 42,
                    "id_huyen": 446,
                    "name_huyen": "Huyện Cẩm Xuyên"
                },
                {
                    "id_tinh": 42,
                    "id_huyen": 447,
                    "name_huyen": "Huyện Kỳ Anh"
                },
                {
                    "id_tinh": 42,
                    "id_huyen": 448,
                    "name_huyen": "Huyện Lộc Hà"
                },
                {
                    "id_tinh": 42,
                    "id_huyen": 449,
                    "name_huyen": "Thị xã Kỳ Anh"
                },
                {
                    "id_tinh": 44,
                    "id_huyen": 450,
                    "name_huyen": "Thành Phố Đồng Hới"
                },
                {
                    "id_tinh": 44,
                    "id_huyen": 452,
                    "name_huyen": "Huyện Minh Hóa"
                },
                {
                    "id_tinh": 44,
                    "id_huyen": 453,
                    "name_huyen": "Huyện Tuyên Hóa"
                },
                {
                    "id_tinh": 44,
                    "id_huyen": 454,
                    "name_huyen": "Huyện Quảng Trạch"
                },
                {
                    "id_tinh": 44,
                    "id_huyen": 455,
                    "name_huyen": "Huyện Bố Trạch"
                },
                {
                    "id_tinh": 44,
                    "id_huyen": 456,
                    "name_huyen": "Huyện Quảng Ninh"
                },
                {
                    "id_tinh": 44,
                    "id_huyen": 457,
                    "name_huyen": "Huyện Lệ Thủy"
                },
                {
                    "id_tinh": 44,
                    "id_huyen": 458,
                    "name_huyen": "Thị xã Ba Đồn"
                },
                {
                    "id_tinh": 45,
                    "id_huyen": 461,
                    "name_huyen": "Thành phố Đông Hà"
                },
                {
                    "id_tinh": 45,
                    "id_huyen": 462,
                    "name_huyen": "Thị xã Quảng Trị"
                },
                {
                    "id_tinh": 45,
                    "id_huyen": 464,
                    "name_huyen": "Huyện Vĩnh Linh"
                },
                {
                    "id_tinh": 45,
                    "id_huyen": 465,
                    "name_huyen": "Huyện Hướng Hóa"
                },
                {
                    "id_tinh": 45,
                    "id_huyen": 466,
                    "name_huyen": "Huyện Gio Linh"
                },
                {
                    "id_tinh": 45,
                    "id_huyen": 467,
                    "name_huyen": "Huyện Đa Krông"
                },
                {
                    "id_tinh": 45,
                    "id_huyen": 468,
                    "name_huyen": "Huyện Cam Lộ"
                },
                {
                    "id_tinh": 45,
                    "id_huyen": 469,
                    "name_huyen": "Huyện Triệu Phong"
                },
                {
                    "id_tinh": 45,
                    "id_huyen": 470,
                    "name_huyen": "Huyện Hải Lăng"
                },
                {
                    "id_tinh": 45,
                    "id_huyen": 471,
                    "name_huyen": "Huyện Cồn Cỏ"
                },
                {
                    "id_tinh": 46,
                    "id_huyen": 474,
                    "name_huyen": "Thành phố Huế"
                },
                {
                    "id_tinh": 46,
                    "id_huyen": 476,
                    "name_huyen": "Huyện Phong Điền"
                },
                {
                    "id_tinh": 46,
                    "id_huyen": 477,
                    "name_huyen": "Huyện Quảng Điền"
                },
                {
                    "id_tinh": 46,
                    "id_huyen": 478,
                    "name_huyen": "Huyện Phú Vang"
                },
                {
                    "id_tinh": 46,
                    "id_huyen": 479,
                    "name_huyen": "Thị xã Hương Thủy"
                },
                {
                    "id_tinh": 46,
                    "id_huyen": 480,
                    "name_huyen": "Thị xã Hương Trà"
                },
                {
                    "id_tinh": 46,
                    "id_huyen": 481,
                    "name_huyen": "Huyện A Lưới"
                },
                {
                    "id_tinh": 46,
                    "id_huyen": 482,
                    "name_huyen": "Huyện Phú Lộc"
                },
                {
                    "id_tinh": 46,
                    "id_huyen": 483,
                    "name_huyen": "Huyện Nam Đông"
                },
                {
                    "id_tinh": 48,
                    "id_huyen": 490,
                    "name_huyen": "Quận Liên Chiểu"
                },
                {
                    "id_tinh": 48,
                    "id_huyen": 491,
                    "name_huyen": "Quận Thanh Khê"
                },
                {
                    "id_tinh": 48,
                    "id_huyen": 492,
                    "name_huyen": "Quận Hải Châu"
                },
                {
                    "id_tinh": 48,
                    "id_huyen": 493,
                    "name_huyen": "Quận Sơn Trà"
                },
                {
                    "id_tinh": 48,
                    "id_huyen": 494,
                    "name_huyen": "Quận Ngũ Hành Sơn"
                },
                {
                    "id_tinh": 48,
                    "id_huyen": 495,
                    "name_huyen": "Quận Cẩm Lệ"
                },
                {
                    "id_tinh": 48,
                    "id_huyen": 497,
                    "name_huyen": "Huyện Hòa Vang"
                },
                {
                    "id_tinh": 48,
                    "id_huyen": 498,
                    "name_huyen": "Huyện Hoàng Sa"
                },
                {
                    "id_tinh": 49,
                    "id_huyen": 502,
                    "name_huyen": "Thành phố Tam Kỳ"
                },
                {
                    "id_tinh": 49,
                    "id_huyen": 503,
                    "name_huyen": "Thành phố Hội An"
                },
                {
                    "id_tinh": 49,
                    "id_huyen": 504,
                    "name_huyen": "Huyện Tây Giang"
                },
                {
                    "id_tinh": 49,
                    "id_huyen": 505,
                    "name_huyen": "Huyện Đông Giang"
                },
                {
                    "id_tinh": 49,
                    "id_huyen": 506,
                    "name_huyen": "Huyện Đại Lộc"
                },
                {
                    "id_tinh": 49,
                    "id_huyen": 507,
                    "name_huyen": "Thị xã Điện Bàn"
                },
                {
                    "id_tinh": 49,
                    "id_huyen": 508,
                    "name_huyen": "Huyện Duy Xuyên"
                },
                {
                    "id_tinh": 49,
                    "id_huyen": 509,
                    "name_huyen": "Huyện Quế Sơn"
                },
                {
                    "id_tinh": 49,
                    "id_huyen": 510,
                    "name_huyen": "Huyện Nam Giang"
                },
                {
                    "id_tinh": 49,
                    "id_huyen": 511,
                    "name_huyen": "Huyện Phước Sơn"
                },
                {
                    "id_tinh": 49,
                    "id_huyen": 512,
                    "name_huyen": "Huyện Hiệp Đức"
                },
                {
                    "id_tinh": 49,
                    "id_huyen": 513,
                    "name_huyen": "Huyện Thăng Bình"
                },
                {
                    "id_tinh": 49,
                    "id_huyen": 514,
                    "name_huyen": "Huyện Tiên Phước"
                },
                {
                    "id_tinh": 49,
                    "id_huyen": 515,
                    "name_huyen": "Huyện Bắc Trà My"
                },
                {
                    "id_tinh": 49,
                    "id_huyen": 516,
                    "name_huyen": "Huyện Nam Trà My"
                },
                {
                    "id_tinh": 49,
                    "id_huyen": 517,
                    "name_huyen": "Huyện Núi Thành"
                },
                {
                    "id_tinh": 49,
                    "id_huyen": 518,
                    "name_huyen": "Huyện Phú Ninh"
                },
                {
                    "id_tinh": 49,
                    "id_huyen": 519,
                    "name_huyen": "Huyện Nông Sơn"
                },
                {
                    "id_tinh": 51,
                    "id_huyen": 522,
                    "name_huyen": "Thành phố Quảng Ngãi"
                },
                {
                    "id_tinh": 51,
                    "id_huyen": 524,
                    "name_huyen": "Huyện Bình Sơn"
                },
                {
                    "id_tinh": 51,
                    "id_huyen": 525,
                    "name_huyen": "Huyện Trà Bồng"
                },
                {
                    "id_tinh": 51,
                    "id_huyen": 527,
                    "name_huyen": "Huyện Sơn Tịnh"
                },
                {
                    "id_tinh": 51,
                    "id_huyen": 528,
                    "name_huyen": "Huyện Tư Nghĩa"
                },
                {
                    "id_tinh": 51,
                    "id_huyen": 529,
                    "name_huyen": "Huyện Sơn Hà"
                },
                {
                    "id_tinh": 51,
                    "id_huyen": 530,
                    "name_huyen": "Huyện Sơn Tây"
                },
                {
                    "id_tinh": 51,
                    "id_huyen": 531,
                    "name_huyen": "Huyện Minh Long"
                },
                {
                    "id_tinh": 51,
                    "id_huyen": 532,
                    "name_huyen": "Huyện Nghĩa Hành"
                },
                {
                    "id_tinh": 51,
                    "id_huyen": 533,
                    "name_huyen": "Huyện Mộ Đức"
                },
                {
                    "id_tinh": 51,
                    "id_huyen": 534,
                    "name_huyen": "Thị xã Đức Phổ"
                },
                {
                    "id_tinh": 51,
                    "id_huyen": 535,
                    "name_huyen": "Huyện Ba Tơ"
                },
                {
                    "id_tinh": 51,
                    "id_huyen": 536,
                    "name_huyen": "Huyện Lý Sơn"
                },
                {
                    "id_tinh": 52,
                    "id_huyen": 540,
                    "name_huyen": "Thành phố Quy Nhơn"
                },
                {
                    "id_tinh": 52,
                    "id_huyen": 542,
                    "name_huyen": "Huyện An Lão"
                },
                {
                    "id_tinh": 52,
                    "id_huyen": 543,
                    "name_huyen": "Thị xã Hoài Nhơn"
                },
                {
                    "id_tinh": 52,
                    "id_huyen": 544,
                    "name_huyen": "Huyện Hoài Ân"
                },
                {
                    "id_tinh": 52,
                    "id_huyen": 545,
                    "name_huyen": "Huyện Phù Mỹ"
                },
                {
                    "id_tinh": 52,
                    "id_huyen": 546,
                    "name_huyen": "Huyện Vĩnh Thạnh"
                },
                {
                    "id_tinh": 52,
                    "id_huyen": 547,
                    "name_huyen": "Huyện Tây Sơn"
                },
                {
                    "id_tinh": 52,
                    "id_huyen": 548,
                    "name_huyen": "Huyện Phù Cát"
                },
                {
                    "id_tinh": 52,
                    "id_huyen": 549,
                    "name_huyen": "Thị xã An Nhơn"
                },
                {
                    "id_tinh": 52,
                    "id_huyen": 550,
                    "name_huyen": "Huyện Tuy Phước"
                },
                {
                    "id_tinh": 52,
                    "id_huyen": 551,
                    "name_huyen": "Huyện Vân Canh"
                },
                {
                    "id_tinh": 54,
                    "id_huyen": 555,
                    "name_huyen": "Thành phố Tuy Hoà"
                },
                {
                    "id_tinh": 54,
                    "id_huyen": 557,
                    "name_huyen": "Thị xã Sông Cầu"
                },
                {
                    "id_tinh": 54,
                    "id_huyen": 558,
                    "name_huyen": "Huyện Đồng Xuân"
                },
                {
                    "id_tinh": 54,
                    "id_huyen": 559,
                    "name_huyen": "Huyện Tuy An"
                },
                {
                    "id_tinh": 54,
                    "id_huyen": 560,
                    "name_huyen": "Huyện Sơn Hòa"
                },
                {
                    "id_tinh": 54,
                    "id_huyen": 561,
                    "name_huyen": "Huyện Sông Hinh"
                },
                {
                    "id_tinh": 54,
                    "id_huyen": 562,
                    "name_huyen": "Huyện Tây Hoà"
                },
                {
                    "id_tinh": 54,
                    "id_huyen": 563,
                    "name_huyen": "Huyện Phú Hoà"
                },
                {
                    "id_tinh": 54,
                    "id_huyen": 564,
                    "name_huyen": "Thị xã Đông Hòa"
                },
                {
                    "id_tinh": 56,
                    "id_huyen": 568,
                    "name_huyen": "Thành phố Nha Trang"
                },
                {
                    "id_tinh": 56,
                    "id_huyen": 569,
                    "name_huyen": "Thành phố Cam Ranh"
                },
                {
                    "id_tinh": 56,
                    "id_huyen": 570,
                    "name_huyen": "Huyện Cam Lâm"
                },
                {
                    "id_tinh": 56,
                    "id_huyen": 571,
                    "name_huyen": "Huyện Vạn Ninh"
                },
                {
                    "id_tinh": 56,
                    "id_huyen": 572,
                    "name_huyen": "Thị xã Ninh Hòa"
                },
                {
                    "id_tinh": 56,
                    "id_huyen": 573,
                    "name_huyen": "Huyện Khánh Vĩnh"
                },
                {
                    "id_tinh": 56,
                    "id_huyen": 574,
                    "name_huyen": "Huyện Diên Khánh"
                },
                {
                    "id_tinh": 56,
                    "id_huyen": 575,
                    "name_huyen": "Huyện Khánh Sơn"
                },
                {
                    "id_tinh": 56,
                    "id_huyen": 576,
                    "name_huyen": "Huyện Trường Sa"
                },
                {
                    "id_tinh": 58,
                    "id_huyen": 582,
                    "name_huyen": "Thành phố Phan Rang-Tháp Chàm"
                },
                {
                    "id_tinh": 58,
                    "id_huyen": 584,
                    "name_huyen": "Huyện Bác Ái"
                },
                {
                    "id_tinh": 58,
                    "id_huyen": 585,
                    "name_huyen": "Huyện Ninh Sơn"
                },
                {
                    "id_tinh": 58,
                    "id_huyen": 586,
                    "name_huyen": "Huyện Ninh Hải"
                },
                {
                    "id_tinh": 58,
                    "id_huyen": 587,
                    "name_huyen": "Huyện Ninh Phước"
                },
                {
                    "id_tinh": 58,
                    "id_huyen": 588,
                    "name_huyen": "Huyện Thuận Bắc"
                },
                {
                    "id_tinh": 58,
                    "id_huyen": 589,
                    "name_huyen": "Huyện Thuận Nam"
                },
                {
                    "id_tinh": 60,
                    "id_huyen": 593,
                    "name_huyen": "Thành phố Phan Thiết"
                },
                {
                    "id_tinh": 60,
                    "id_huyen": 594,
                    "name_huyen": "Thị xã La Gi"
                },
                {
                    "id_tinh": 60,
                    "id_huyen": 595,
                    "name_huyen": "Huyện Tuy Phong"
                },
                {
                    "id_tinh": 60,
                    "id_huyen": 596,
                    "name_huyen": "Huyện Bắc Bình"
                },
                {
                    "id_tinh": 60,
                    "id_huyen": 597,
                    "name_huyen": "Huyện Hàm Thuận Bắc"
                },
                {
                    "id_tinh": 60,
                    "id_huyen": 598,
                    "name_huyen": "Huyện Hàm Thuận Nam"
                },
                {
                    "id_tinh": 60,
                    "id_huyen": 599,
                    "name_huyen": "Huyện Tánh Linh"
                },
                {
                    "id_tinh": 60,
                    "id_huyen": 600,
                    "name_huyen": "Huyện Đức Linh"
                },
                {
                    "id_tinh": 60,
                    "id_huyen": 601,
                    "name_huyen": "Huyện Hàm Tân"
                },
                {
                    "id_tinh": 60,
                    "id_huyen": 602,
                    "name_huyen": "Huyện Phú Quí"
                },
                {
                    "id_tinh": 62,
                    "id_huyen": 608,
                    "name_huyen": "Thành phố Kon Tum"
                },
                {
                    "id_tinh": 62,
                    "id_huyen": 610,
                    "name_huyen": "Huyện Đắk Glei"
                },
                {
                    "id_tinh": 62,
                    "id_huyen": 611,
                    "name_huyen": "Huyện Ngọc Hồi"
                },
                {
                    "id_tinh": 62,
                    "id_huyen": 612,
                    "name_huyen": "Huyện Đắk Tô"
                },
                {
                    "id_tinh": 62,
                    "id_huyen": 613,
                    "name_huyen": "Huyện Kon Plông"
                },
                {
                    "id_tinh": 62,
                    "id_huyen": 614,
                    "name_huyen": "Huyện Kon Rẫy"
                },
                {
                    "id_tinh": 62,
                    "id_huyen": 615,
                    "name_huyen": "Huyện Đắk Hà"
                },
                {
                    "id_tinh": 62,
                    "id_huyen": 616,
                    "name_huyen": "Huyện Sa Thầy"
                },
                {
                    "id_tinh": 62,
                    "id_huyen": 617,
                    "name_huyen": "Huyện Tu Mơ Rông"
                },
                {
                    "id_tinh": 62,
                    "id_huyen": 618,
                    "name_huyen": "Huyện Ia H' Drai"
                },
                {
                    "id_tinh": 64,
                    "id_huyen": 622,
                    "name_huyen": "Thành phố Pleiku"
                },
                {
                    "id_tinh": 64,
                    "id_huyen": 623,
                    "name_huyen": "Thị xã An Khê"
                },
                {
                    "id_tinh": 64,
                    "id_huyen": 624,
                    "name_huyen": "Thị xã Ayun Pa"
                },
                {
                    "id_tinh": 64,
                    "id_huyen": 625,
                    "name_huyen": "Huyện KBang"
                },
                {
                    "id_tinh": 64,
                    "id_huyen": 626,
                    "name_huyen": "Huyện Đăk Đoa"
                },
                {
                    "id_tinh": 64,
                    "id_huyen": 627,
                    "name_huyen": "Huyện Chư Păh"
                },
                {
                    "id_tinh": 64,
                    "id_huyen": 628,
                    "name_huyen": "Huyện Ia Grai"
                },
                {
                    "id_tinh": 64,
                    "id_huyen": 629,
                    "name_huyen": "Huyện Mang Yang"
                },
                {
                    "id_tinh": 64,
                    "id_huyen": 630,
                    "name_huyen": "Huyện Kông Chro"
                },
                {
                    "id_tinh": 64,
                    "id_huyen": 631,
                    "name_huyen": "Huyện Đức Cơ"
                },
                {
                    "id_tinh": 64,
                    "id_huyen": 632,
                    "name_huyen": "Huyện Chư Prông"
                },
                {
                    "id_tinh": 64,
                    "id_huyen": 633,
                    "name_huyen": "Huyện Chư Sê"
                },
                {
                    "id_tinh": 64,
                    "id_huyen": 634,
                    "name_huyen": "Huyện Đăk Pơ"
                },
                {
                    "id_tinh": 64,
                    "id_huyen": 635,
                    "name_huyen": "Huyện Ia Pa"
                },
                {
                    "id_tinh": 64,
                    "id_huyen": 637,
                    "name_huyen": "Huyện Krông Pa"
                },
                {
                    "id_tinh": 64,
                    "id_huyen": 638,
                    "name_huyen": "Huyện Phú Thiện"
                },
                {
                    "id_tinh": 64,
                    "id_huyen": 639,
                    "name_huyen": "Huyện Chư Pưh"
                },
                {
                    "id_tinh": 66,
                    "id_huyen": 643,
                    "name_huyen": "Thành phố Buôn Ma Thuột"
                },
                {
                    "id_tinh": 66,
                    "id_huyen": 644,
                    "name_huyen": "Thị Xã Buôn Hồ"
                },
                {
                    "id_tinh": 66,
                    "id_huyen": 645,
                    "name_huyen": "Huyện Ea H'leo"
                },
                {
                    "id_tinh": 66,
                    "id_huyen": 646,
                    "name_huyen": "Huyện Ea Súp"
                },
                {
                    "id_tinh": 66,
                    "id_huyen": 647,
                    "name_huyen": "Huyện Buôn Đôn"
                },
                {
                    "id_tinh": 66,
                    "id_huyen": 648,
                    "name_huyen": "Huyện Cư M'gar"
                },
                {
                    "id_tinh": 66,
                    "id_huyen": 649,
                    "name_huyen": "Huyện Krông Búk"
                },
                {
                    "id_tinh": 66,
                    "id_huyen": 650,
                    "name_huyen": "Huyện Krông Năng"
                },
                {
                    "id_tinh": 66,
                    "id_huyen": 651,
                    "name_huyen": "Huyện Ea Kar"
                },
                {
                    "id_tinh": 66,
                    "id_huyen": 652,
                    "name_huyen": "Huyện M'Đrắk"
                },
                {
                    "id_tinh": 66,
                    "id_huyen": 653,
                    "name_huyen": "Huyện Krông Bông"
                },
                {
                    "id_tinh": 66,
                    "id_huyen": 654,
                    "name_huyen": "Huyện Krông Pắc"
                },
                {
                    "id_tinh": 66,
                    "id_huyen": 655,
                    "name_huyen": "Huyện Krông A Na"
                },
                {
                    "id_tinh": 66,
                    "id_huyen": 656,
                    "name_huyen": "Huyện Lắk"
                },
                {
                    "id_tinh": 66,
                    "id_huyen": 657,
                    "name_huyen": "Huyện Cư Kuin"
                },
                {
                    "id_tinh": 67,
                    "id_huyen": 660,
                    "name_huyen": "Thành phố Gia Nghĩa"
                },
                {
                    "id_tinh": 67,
                    "id_huyen": 661,
                    "name_huyen": "Huyện Đăk Glong"
                },
                {
                    "id_tinh": 67,
                    "id_huyen": 662,
                    "name_huyen": "Huyện Cư Jút"
                },
                {
                    "id_tinh": 67,
                    "id_huyen": 663,
                    "name_huyen": "Huyện Đắk Mil"
                },
                {
                    "id_tinh": 67,
                    "id_huyen": 664,
                    "name_huyen": "Huyện Krông Nô"
                },
                {
                    "id_tinh": 67,
                    "id_huyen": 665,
                    "name_huyen": "Huyện Đắk Song"
                },
                {
                    "id_tinh": 67,
                    "id_huyen": 666,
                    "name_huyen": "Huyện Đắk R'Lấp"
                },
                {
                    "id_tinh": 67,
                    "id_huyen": 667,
                    "name_huyen": "Huyện Tuy Đức"
                },
                {
                    "id_tinh": 68,
                    "id_huyen": 672,
                    "name_huyen": "Thành phố Đà Lạt"
                },
                {
                    "id_tinh": 68,
                    "id_huyen": 673,
                    "name_huyen": "Thành phố Bảo Lộc"
                },
                {
                    "id_tinh": 68,
                    "id_huyen": 674,
                    "name_huyen": "Huyện Đam Rông"
                },
                {
                    "id_tinh": 68,
                    "id_huyen": 675,
                    "name_huyen": "Huyện Lạc Dương"
                },
                {
                    "id_tinh": 68,
                    "id_huyen": 676,
                    "name_huyen": "Huyện Lâm Hà"
                },
                {
                    "id_tinh": 68,
                    "id_huyen": 677,
                    "name_huyen": "Huyện Đơn Dương"
                },
                {
                    "id_tinh": 68,
                    "id_huyen": 678,
                    "name_huyen": "Huyện Đức Trọng"
                },
                {
                    "id_tinh": 68,
                    "id_huyen": 679,
                    "name_huyen": "Huyện Di Linh"
                },
                {
                    "id_tinh": 68,
                    "id_huyen": 680,
                    "name_huyen": "Huyện Bảo Lâm"
                },
                {
                    "id_tinh": 68,
                    "id_huyen": 681,
                    "name_huyen": "Huyện Đạ Huoai"
                },
                {
                    "id_tinh": 68,
                    "id_huyen": 682,
                    "name_huyen": "Huyện Đạ Tẻh"
                },
                {
                    "id_tinh": 68,
                    "id_huyen": 683,
                    "name_huyen": "Huyện Cát Tiên"
                },
                {
                    "id_tinh": 70,
                    "id_huyen": 688,
                    "name_huyen": "Thị xã Phước Long"
                },
                {
                    "id_tinh": 70,
                    "id_huyen": 689,
                    "name_huyen": "Thành phố Đồng Xoài"
                },
                {
                    "id_tinh": 70,
                    "id_huyen": 690,
                    "name_huyen": "Thị xã Bình Long"
                },
                {
                    "id_tinh": 70,
                    "id_huyen": 691,
                    "name_huyen": "Huyện Bù Gia Mập"
                },
                {
                    "id_tinh": 70,
                    "id_huyen": 692,
                    "name_huyen": "Huyện Lộc Ninh"
                },
                {
                    "id_tinh": 70,
                    "id_huyen": 693,
                    "name_huyen": "Huyện Bù Đốp"
                },
                {
                    "id_tinh": 70,
                    "id_huyen": 694,
                    "name_huyen": "Huyện Hớn Quản"
                },
                {
                    "id_tinh": 70,
                    "id_huyen": 695,
                    "name_huyen": "Huyện Đồng Phú"
                },
                {
                    "id_tinh": 70,
                    "id_huyen": 696,
                    "name_huyen": "Huyện Bù Đăng"
                },
                {
                    "id_tinh": 70,
                    "id_huyen": 697,
                    "name_huyen": "Huyện Chơn Thành"
                },
                {
                    "id_tinh": 70,
                    "id_huyen": 698,
                    "name_huyen": "Huyện Phú Riềng"
                },
                {
                    "id_tinh": 72,
                    "id_huyen": 703,
                    "name_huyen": "Thành phố Tây Ninh"
                },
                {
                    "id_tinh": 72,
                    "id_huyen": 705,
                    "name_huyen": "Huyện Tân Biên"
                },
                {
                    "id_tinh": 72,
                    "id_huyen": 706,
                    "name_huyen": "Huyện Tân Châu"
                },
                {
                    "id_tinh": 72,
                    "id_huyen": 707,
                    "name_huyen": "Huyện Dương Minh Châu"
                },
                {
                    "id_tinh": 72,
                    "id_huyen": 708,
                    "name_huyen": "Huyện Châu Thành"
                },
                {
                    "id_tinh": 72,
                    "id_huyen": 709,
                    "name_huyen": "Thị xã Hòa Thành"
                },
                {
                    "id_tinh": 72,
                    "id_huyen": 710,
                    "name_huyen": "Huyện Gò Dầu"
                },
                {
                    "id_tinh": 72,
                    "id_huyen": 711,
                    "name_huyen": "Huyện Bến Cầu"
                },
                {
                    "id_tinh": 72,
                    "id_huyen": 712,
                    "name_huyen": "Thị xã Trảng Bàng"
                },
                {
                    "id_tinh": 74,
                    "id_huyen": 718,
                    "name_huyen": "Thành phố Thủ Dầu Một"
                },
                {
                    "id_tinh": 74,
                    "id_huyen": 719,
                    "name_huyen": "Huyện Bàu Bàng"
                },
                {
                    "id_tinh": 74,
                    "id_huyen": 720,
                    "name_huyen": "Huyện Dầu Tiếng"
                },
                {
                    "id_tinh": 74,
                    "id_huyen": 721,
                    "name_huyen": "Thị xã Bến Cát"
                },
                {
                    "id_tinh": 74,
                    "id_huyen": 722,
                    "name_huyen": "Huyện Phú Giáo"
                },
                {
                    "id_tinh": 74,
                    "id_huyen": 723,
                    "name_huyen": "Thị xã Tân Uyên"
                },
                {
                    "id_tinh": 74,
                    "id_huyen": 724,
                    "name_huyen": "Thành phố Dĩ An"
                },
                {
                    "id_tinh": 74,
                    "id_huyen": 725,
                    "name_huyen": "Thành phố Thuận An"
                },
                {
                    "id_tinh": 74,
                    "id_huyen": 726,
                    "name_huyen": "Huyện Bắc Tân Uyên"
                },
                {
                    "id_tinh": 75,
                    "id_huyen": 731,
                    "name_huyen": "Thành phố Biên Hòa"
                },
                {
                    "id_tinh": 75,
                    "id_huyen": 732,
                    "name_huyen": "Thành phố Long Khánh"
                },
                {
                    "id_tinh": 75,
                    "id_huyen": 734,
                    "name_huyen": "Huyện Tân Phú"
                },
                {
                    "id_tinh": 75,
                    "id_huyen": 735,
                    "name_huyen": "Huyện Vĩnh Cửu"
                },
                {
                    "id_tinh": 75,
                    "id_huyen": 736,
                    "name_huyen": "Huyện Định Quán"
                },
                {
                    "id_tinh": 75,
                    "id_huyen": 737,
                    "name_huyen": "Huyện Trảng Bom"
                },
                {
                    "id_tinh": 75,
                    "id_huyen": 738,
                    "name_huyen": "Huyện Thống Nhất"
                },
                {
                    "id_tinh": 75,
                    "id_huyen": 739,
                    "name_huyen": "Huyện Cẩm Mỹ"
                },
                {
                    "id_tinh": 75,
                    "id_huyen": 740,
                    "name_huyen": "Huyện Long Thành"
                },
                {
                    "id_tinh": 75,
                    "id_huyen": 741,
                    "name_huyen": "Huyện Xuân Lộc"
                },
                {
                    "id_tinh": 75,
                    "id_huyen": 742,
                    "name_huyen": "Huyện Nhơn Trạch"
                },
                {
                    "id_tinh": 77,
                    "id_huyen": 747,
                    "name_huyen": "Thành phố Vũng Tàu"
                },
                {
                    "id_tinh": 77,
                    "id_huyen": 748,
                    "name_huyen": "Thành phố Bà Rịa"
                },
                {
                    "id_tinh": 77,
                    "id_huyen": 750,
                    "name_huyen": "Huyện Châu Đức"
                },
                {
                    "id_tinh": 77,
                    "id_huyen": 751,
                    "name_huyen": "Huyện Xuyên Mộc"
                },
                {
                    "id_tinh": 77,
                    "id_huyen": 752,
                    "name_huyen": "Huyện Long Điền"
                },
                {
                    "id_tinh": 77,
                    "id_huyen": 753,
                    "name_huyen": "Huyện Đất Đỏ"
                },
                {
                    "id_tinh": 77,
                    "id_huyen": 754,
                    "name_huyen": "Thị xã Phú Mỹ"
                },
                {
                    "id_tinh": 77,
                    "id_huyen": 755,
                    "name_huyen": "Huyện Côn Đảo"
                },
                {
                    "id_tinh": 79,
                    "id_huyen": 760,
                    "name_huyen": "Quận 1"
                },
                {
                    "id_tinh": 79,
                    "id_huyen": 761,
                    "name_huyen": "Quận 12"
                },
                {
                    "id_tinh": 79,
                    "id_huyen": 764,
                    "name_huyen": "Quận Gò Vấp"
                },
                {
                    "id_tinh": 79,
                    "id_huyen": 765,
                    "name_huyen": "Quận Bình Thạnh"
                },
                {
                    "id_tinh": 79,
                    "id_huyen": 766,
                    "name_huyen": "Quận Tân Bình"
                },
                {
                    "id_tinh": 79,
                    "id_huyen": 767,
                    "name_huyen": "Quận Tân Phú"
                },
                {
                    "id_tinh": 79,
                    "id_huyen": 768,
                    "name_huyen": "Quận Phú Nhuận"
                },
                {
                    "id_tinh": 79,
                    "id_huyen": 769,
                    "name_huyen": "Thành phố Thủ Đức"
                },
                {
                    "id_tinh": 79,
                    "id_huyen": 770,
                    "name_huyen": "Quận 3"
                },
                {
                    "id_tinh": 79,
                    "id_huyen": 771,
                    "name_huyen": "Quận 10"
                },
                {
                    "id_tinh": 79,
                    "id_huyen": 772,
                    "name_huyen": "Quận 11"
                },
                {
                    "id_tinh": 79,
                    "id_huyen": 773,
                    "name_huyen": "Quận 4"
                },
                {
                    "id_tinh": 79,
                    "id_huyen": 774,
                    "name_huyen": "Quận 5"
                },
                {
                    "id_tinh": 79,
                    "id_huyen": 775,
                    "name_huyen": "Quận 6"
                },
                {
                    "id_tinh": 79,
                    "id_huyen": 776,
                    "name_huyen": "Quận 8"
                },
                {
                    "id_tinh": 79,
                    "id_huyen": 777,
                    "name_huyen": "Quận Bình Tân"
                },
                {
                    "id_tinh": 79,
                    "id_huyen": 778,
                    "name_huyen": "Quận 7"
                },
                {
                    "id_tinh": 79,
                    "id_huyen": 783,
                    "name_huyen": "Huyện Củ Chi"
                },
                {
                    "id_tinh": 79,
                    "id_huyen": 784,
                    "name_huyen": "Huyện Hóc Môn"
                },
                {
                    "id_tinh": 79,
                    "id_huyen": 785,
                    "name_huyen": "Huyện Bình Chánh"
                },
                {
                    "id_tinh": 79,
                    "id_huyen": 786,
                    "name_huyen": "Huyện Nhà Bè"
                },
                {
                    "id_tinh": 79,
                    "id_huyen": 787,
                    "name_huyen": "Huyện Cần Giờ"
                },
                {
                    "id_tinh": 80,
                    "id_huyen": 794,
                    "name_huyen": "Thành phố Tân An"
                },
                {
                    "id_tinh": 80,
                    "id_huyen": 795,
                    "name_huyen": "Thị xã Kiến Tường"
                },
                {
                    "id_tinh": 80,
                    "id_huyen": 796,
                    "name_huyen": "Huyện Tân Hưng"
                },
                {
                    "id_tinh": 80,
                    "id_huyen": 797,
                    "name_huyen": "Huyện Vĩnh Hưng"
                },
                {
                    "id_tinh": 80,
                    "id_huyen": 798,
                    "name_huyen": "Huyện Mộc Hóa"
                },
                {
                    "id_tinh": 80,
                    "id_huyen": 799,
                    "name_huyen": "Huyện Tân Thạnh"
                },
                {
                    "id_tinh": 80,
                    "id_huyen": 800,
                    "name_huyen": "Huyện Thạnh Hóa"
                },
                {
                    "id_tinh": 80,
                    "id_huyen": 801,
                    "name_huyen": "Huyện Đức Huệ"
                },
                {
                    "id_tinh": 80,
                    "id_huyen": 802,
                    "name_huyen": "Huyện Đức Hòa"
                },
                {
                    "id_tinh": 80,
                    "id_huyen": 803,
                    "name_huyen": "Huyện Bến Lức"
                },
                {
                    "id_tinh": 80,
                    "id_huyen": 804,
                    "name_huyen": "Huyện Thủ Thừa"
                },
                {
                    "id_tinh": 80,
                    "id_huyen": 805,
                    "name_huyen": "Huyện Tân Trụ"
                },
                {
                    "id_tinh": 80,
                    "id_huyen": 806,
                    "name_huyen": "Huyện Cần Đước"
                },
                {
                    "id_tinh": 80,
                    "id_huyen": 807,
                    "name_huyen": "Huyện Cần Giuộc"
                },
                {
                    "id_tinh": 80,
                    "id_huyen": 808,
                    "name_huyen": "Huyện Châu Thành"
                },
                {
                    "id_tinh": 82,
                    "id_huyen": 815,
                    "name_huyen": "Thành phố Mỹ Tho"
                },
                {
                    "id_tinh": 82,
                    "id_huyen": 816,
                    "name_huyen": "Thị xã Gò Công"
                },
                {
                    "id_tinh": 82,
                    "id_huyen": 817,
                    "name_huyen": "Thị xã Cai Lậy"
                },
                {
                    "id_tinh": 82,
                    "id_huyen": 818,
                    "name_huyen": "Huyện Tân Phước"
                },
                {
                    "id_tinh": 82,
                    "id_huyen": 819,
                    "name_huyen": "Huyện Cái Bè"
                },
                {
                    "id_tinh": 82,
                    "id_huyen": 820,
                    "name_huyen": "Huyện Cai Lậy"
                },
                {
                    "id_tinh": 82,
                    "id_huyen": 821,
                    "name_huyen": "Huyện Châu Thành"
                },
                {
                    "id_tinh": 82,
                    "id_huyen": 822,
                    "name_huyen": "Huyện Chợ Gạo"
                },
                {
                    "id_tinh": 82,
                    "id_huyen": 823,
                    "name_huyen": "Huyện Gò Công Tây"
                },
                {
                    "id_tinh": 82,
                    "id_huyen": 824,
                    "name_huyen": "Huyện Gò Công Đông"
                },
                {
                    "id_tinh": 82,
                    "id_huyen": 825,
                    "name_huyen": "Huyện Tân Phú Đông"
                },
                {
                    "id_tinh": 83,
                    "id_huyen": 829,
                    "name_huyen": "Thành phố Bến Tre"
                },
                {
                    "id_tinh": 83,
                    "id_huyen": 831,
                    "name_huyen": "Huyện Châu Thành"
                },
                {
                    "id_tinh": 83,
                    "id_huyen": 832,
                    "name_huyen": "Huyện Chợ Lách"
                },
                {
                    "id_tinh": 83,
                    "id_huyen": 833,
                    "name_huyen": "Huyện Mỏ Cày Nam"
                },
                {
                    "id_tinh": 83,
                    "id_huyen": 834,
                    "name_huyen": "Huyện Giồng Trôm"
                },
                {
                    "id_tinh": 83,
                    "id_huyen": 835,
                    "name_huyen": "Huyện Bình Đại"
                },
                {
                    "id_tinh": 83,
                    "id_huyen": 836,
                    "name_huyen": "Huyện Ba Tri"
                },
                {
                    "id_tinh": 83,
                    "id_huyen": 837,
                    "name_huyen": "Huyện Thạnh Phú"
                },
                {
                    "id_tinh": 83,
                    "id_huyen": 838,
                    "name_huyen": "Huyện Mỏ Cày Bắc"
                },
                {
                    "id_tinh": 84,
                    "id_huyen": 842,
                    "name_huyen": "Thành phố Trà Vinh"
                },
                {
                    "id_tinh": 84,
                    "id_huyen": 844,
                    "name_huyen": "Huyện Càng Long"
                },
                {
                    "id_tinh": 84,
                    "id_huyen": 845,
                    "name_huyen": "Huyện Cầu Kè"
                },
                {
                    "id_tinh": 84,
                    "id_huyen": 846,
                    "name_huyen": "Huyện Tiểu Cần"
                },
                {
                    "id_tinh": 84,
                    "id_huyen": 847,
                    "name_huyen": "Huyện Châu Thành"
                },
                {
                    "id_tinh": 84,
                    "id_huyen": 848,
                    "name_huyen": "Huyện Cầu Ngang"
                },
                {
                    "id_tinh": 84,
                    "id_huyen": 849,
                    "name_huyen": "Huyện Trà Cú"
                },
                {
                    "id_tinh": 84,
                    "id_huyen": 850,
                    "name_huyen": "Huyện Duyên Hải"
                },
                {
                    "id_tinh": 84,
                    "id_huyen": 851,
                    "name_huyen": "Thị xã Duyên Hải"
                },
                {
                    "id_tinh": 86,
                    "id_huyen": 855,
                    "name_huyen": "Thành phố Vĩnh Long"
                },
                {
                    "id_tinh": 86,
                    "id_huyen": 857,
                    "name_huyen": "Huyện Long Hồ"
                },
                {
                    "id_tinh": 86,
                    "id_huyen": 858,
                    "name_huyen": "Huyện Mang Thít"
                },
                {
                    "id_tinh": 86,
                    "id_huyen": 859,
                    "name_huyen": "Huyện Vũng Liêm"
                },
                {
                    "id_tinh": 86,
                    "id_huyen": 860,
                    "name_huyen": "Huyện Tam Bình"
                },
                {
                    "id_tinh": 86,
                    "id_huyen": 861,
                    "name_huyen": "Thị xã Bình Minh"
                },
                {
                    "id_tinh": 86,
                    "id_huyen": 862,
                    "name_huyen": "Huyện Trà Ôn"
                },
                {
                    "id_tinh": 86,
                    "id_huyen": 863,
                    "name_huyen": "Huyện Bình Tân"
                },
                {
                    "id_tinh": 87,
                    "id_huyen": 866,
                    "name_huyen": "Thành phố Cao Lãnh"
                },
                {
                    "id_tinh": 87,
                    "id_huyen": 867,
                    "name_huyen": "Thành phố Sa Đéc"
                },
                {
                    "id_tinh": 87,
                    "id_huyen": 868,
                    "name_huyen": "Thành phố Hồng Ngự"
                },
                {
                    "id_tinh": 87,
                    "id_huyen": 869,
                    "name_huyen": "Huyện Tân Hồng"
                },
                {
                    "id_tinh": 87,
                    "id_huyen": 870,
                    "name_huyen": "Huyện Hồng Ngự"
                },
                {
                    "id_tinh": 87,
                    "id_huyen": 871,
                    "name_huyen": "Huyện Tam Nông"
                },
                {
                    "id_tinh": 87,
                    "id_huyen": 872,
                    "name_huyen": "Huyện Tháp Mười"
                },
                {
                    "id_tinh": 87,
                    "id_huyen": 873,
                    "name_huyen": "Huyện Cao Lãnh"
                },
                {
                    "id_tinh": 87,
                    "id_huyen": 874,
                    "name_huyen": "Huyện Thanh Bình"
                },
                {
                    "id_tinh": 87,
                    "id_huyen": 875,
                    "name_huyen": "Huyện Lấp Vò"
                },
                {
                    "id_tinh": 87,
                    "id_huyen": 876,
                    "name_huyen": "Huyện Lai Vung"
                },
                {
                    "id_tinh": 87,
                    "id_huyen": 877,
                    "name_huyen": "Huyện Châu Thành"
                },
                {
                    "id_tinh": 89,
                    "id_huyen": 883,
                    "name_huyen": "Thành phố Long Xuyên"
                },
                {
                    "id_tinh": 89,
                    "id_huyen": 884,
                    "name_huyen": "Thành phố Châu Đốc"
                },
                {
                    "id_tinh": 89,
                    "id_huyen": 886,
                    "name_huyen": "Huyện An Phú"
                },
                {
                    "id_tinh": 89,
                    "id_huyen": 887,
                    "name_huyen": "Thị xã Tân Châu"
                },
                {
                    "id_tinh": 89,
                    "id_huyen": 888,
                    "name_huyen": "Huyện Phú Tân"
                },
                {
                    "id_tinh": 89,
                    "id_huyen": 889,
                    "name_huyen": "Huyện Châu Phú"
                },
                {
                    "id_tinh": 89,
                    "id_huyen": 890,
                    "name_huyen": "Huyện Tịnh Biên"
                },
                {
                    "id_tinh": 89,
                    "id_huyen": 891,
                    "name_huyen": "Huyện Tri Tôn"
                },
                {
                    "id_tinh": 89,
                    "id_huyen": 892,
                    "name_huyen": "Huyện Châu Thành"
                },
                {
                    "id_tinh": 89,
                    "id_huyen": 893,
                    "name_huyen": "Huyện Chợ Mới"
                },
                {
                    "id_tinh": 89,
                    "id_huyen": 894,
                    "name_huyen": "Huyện Thoại Sơn"
                },
                {
                    "id_tinh": 91,
                    "id_huyen": 899,
                    "name_huyen": "Thành phố Rạch Giá"
                },
                {
                    "id_tinh": 91,
                    "id_huyen": 900,
                    "name_huyen": "Thành phố Hà Tiên"
                },
                {
                    "id_tinh": 91,
                    "id_huyen": 902,
                    "name_huyen": "Huyện Kiên Lương"
                },
                {
                    "id_tinh": 91,
                    "id_huyen": 903,
                    "name_huyen": "Huyện Hòn Đất"
                },
                {
                    "id_tinh": 91,
                    "id_huyen": 904,
                    "name_huyen": "Huyện Tân Hiệp"
                },
                {
                    "id_tinh": 91,
                    "id_huyen": 905,
                    "name_huyen": "Huyện Châu Thành"
                },
                {
                    "id_tinh": 91,
                    "id_huyen": 906,
                    "name_huyen": "Huyện Giồng Riềng"
                },
                {
                    "id_tinh": 91,
                    "id_huyen": 907,
                    "name_huyen": "Huyện Gò Quao"
                },
                {
                    "id_tinh": 91,
                    "id_huyen": 908,
                    "name_huyen": "Huyện An Biên"
                },
                {
                    "id_tinh": 91,
                    "id_huyen": 909,
                    "name_huyen": "Huyện An Minh"
                },
                {
                    "id_tinh": 91,
                    "id_huyen": 910,
                    "name_huyen": "Huyện Vĩnh Thuận"
                },
                {
                    "id_tinh": 91,
                    "id_huyen": 911,
                    "name_huyen": "Thành phố Phú Quốc"
                },
                {
                    "id_tinh": 91,
                    "id_huyen": 912,
                    "name_huyen": "Huyện Kiên Hải"
                },
                {
                    "id_tinh": 91,
                    "id_huyen": 913,
                    "name_huyen": "Huyện U Minh Thượng"
                },
                {
                    "id_tinh": 91,
                    "id_huyen": 914,
                    "name_huyen": "Huyện Giang Thành"
                },
                {
                    "id_tinh": 92,
                    "id_huyen": 916,
                    "name_huyen": "Quận Ninh Kiều"
                },
                {
                    "id_tinh": 92,
                    "id_huyen": 917,
                    "name_huyen": "Quận Ô Môn"
                },
                {
                    "id_tinh": 92,
                    "id_huyen": 918,
                    "name_huyen": "Quận Bình Thuỷ"
                },
                {
                    "id_tinh": 92,
                    "id_huyen": 919,
                    "name_huyen": "Quận Cái Răng"
                },
                {
                    "id_tinh": 92,
                    "id_huyen": 923,
                    "name_huyen": "Quận Thốt Nốt"
                },
                {
                    "id_tinh": 92,
                    "id_huyen": 924,
                    "name_huyen": "Huyện Vĩnh Thạnh"
                },
                {
                    "id_tinh": 92,
                    "id_huyen": 925,
                    "name_huyen": "Huyện Cờ Đỏ"
                },
                {
                    "id_tinh": 92,
                    "id_huyen": 926,
                    "name_huyen": "Huyện Phong Điền"
                },
                {
                    "id_tinh": 92,
                    "id_huyen": 927,
                    "name_huyen": "Huyện Thới Lai"
                },
                {
                    "id_tinh": 93,
                    "id_huyen": 930,
                    "name_huyen": "Thành phố Vị Thanh"
                },
                {
                    "id_tinh": 93,
                    "id_huyen": 931,
                    "name_huyen": "Thành phố Ngã Bảy"
                },
                {
                    "id_tinh": 93,
                    "id_huyen": 932,
                    "name_huyen": "Huyện Châu Thành A"
                },
                {
                    "id_tinh": 93,
                    "id_huyen": 933,
                    "name_huyen": "Huyện Châu Thành"
                },
                {
                    "id_tinh": 93,
                    "id_huyen": 934,
                    "name_huyen": "Huyện Phụng Hiệp"
                },
                {
                    "id_tinh": 93,
                    "id_huyen": 935,
                    "name_huyen": "Huyện Vị Thuỷ"
                },
                {
                    "id_tinh": 93,
                    "id_huyen": 936,
                    "name_huyen": "Huyện Long Mỹ"
                },
                {
                    "id_tinh": 93,
                    "id_huyen": 937,
                    "name_huyen": "Thị xã Long Mỹ"
                },
                {
                    "id_tinh": 94,
                    "id_huyen": 941,
                    "name_huyen": "Thành phố Sóc Trăng"
                },
                {
                    "id_tinh": 94,
                    "id_huyen": 942,
                    "name_huyen": "Huyện Châu Thành"
                },
                {
                    "id_tinh": 94,
                    "id_huyen": 943,
                    "name_huyen": "Huyện Kế Sách"
                },
                {
                    "id_tinh": 94,
                    "id_huyen": 944,
                    "name_huyen": "Huyện Mỹ Tú"
                },
                {
                    "id_tinh": 94,
                    "id_huyen": 945,
                    "name_huyen": "Huyện Cù Lao Dung"
                },
                {
                    "id_tinh": 94,
                    "id_huyen": 946,
                    "name_huyen": "Huyện Long Phú"
                },
                {
                    "id_tinh": 94,
                    "id_huyen": 947,
                    "name_huyen": "Huyện Mỹ Xuyên"
                },
                {
                    "id_tinh": 94,
                    "id_huyen": 948,
                    "name_huyen": "Thị xã Ngã Năm"
                },
                {
                    "id_tinh": 94,
                    "id_huyen": 949,
                    "name_huyen": "Huyện Thạnh Trị"
                },
                {
                    "id_tinh": 94,
                    "id_huyen": 950,
                    "name_huyen": "Thị xã Vĩnh Châu"
                },
                {
                    "id_tinh": 94,
                    "id_huyen": 951,
                    "name_huyen": "Huyện Trần Đề"
                },
                {
                    "id_tinh": 95,
                    "id_huyen": 954,
                    "name_huyen": "Thành phố Bạc Liêu"
                },
                {
                    "id_tinh": 95,
                    "id_huyen": 956,
                    "name_huyen": "Huyện Hồng Dân"
                },
                {
                    "id_tinh": 95,
                    "id_huyen": 957,
                    "name_huyen": "Huyện Phước Long"
                },
                {
                    "id_tinh": 95,
                    "id_huyen": 958,
                    "name_huyen": "Huyện Vĩnh Lợi"
                },
                {
                    "id_tinh": 95,
                    "id_huyen": 959,
                    "name_huyen": "Thị xã Giá Rai"
                },
                {
                    "id_tinh": 95,
                    "id_huyen": 960,
                    "name_huyen": "Huyện Đông Hải"
                },
                {
                    "id_tinh": 95,
                    "id_huyen": 961,
                    "name_huyen": "Huyện Hoà Bình"
                },
                {
                    "id_tinh": 96,
                    "id_huyen": 964,
                    "name_huyen": "Thành phố Cà Mau"
                },
                {
                    "id_tinh": 96,
                    "id_huyen": 966,
                    "name_huyen": "Huyện U Minh"
                },
                {
                    "id_tinh": 96,
                    "id_huyen": 967,
                    "name_huyen": "Huyện Thới Bình"
                },
                {
                    "id_tinh": 96,
                    "id_huyen": 968,
                    "name_huyen": "Huyện Trần Văn Thời"
                },
                {
                    "id_tinh": 96,
                    "id_huyen": 969,
                    "name_huyen": "Huyện Cái Nước"
                },
                {
                    "id_tinh": 96,
                    "id_huyen": 970,
                    "name_huyen": "Huyện Đầm Dơi"
                },
                {
                    "id_tinh": 96,
                    "id_huyen": 971,
                    "name_huyen": "Huyện Năm Căn"
                },
                {
                    "id_tinh": 96,
                    "id_huyen": 972,
                    "name_huyen": "Huyện Phú Tân"
                },
                {
                    "id_tinh": 96,
                    "id_huyen": 973,
                    "name_huyen": "Huyện Ngọc Hiển"
                }
            ],
            arrTinh: [
                {
                    "id_tinh": "01",
                    "name_tinh": "Hà Nội"
                },
                {
                    "id_tinh": "02",
                    "name_tinh": "Hà Giang"
                },
                {
                    "id_tinh": "04",
                    "name_tinh": "Cao Bằng"
                },
                {
                    "id_tinh": "06",
                    "name_tinh": "Bắc Kạn"
                },
                {
                    "id_tinh": "08",
                    "name_tinh": "Tuyên Quang"
                },
                {
                    "id_tinh": 10,
                    "name_tinh": "Lào Cai"
                },
                {
                    "id_tinh": 11,
                    "name_tinh": "Điện Biên"
                },
                {
                    "id_tinh": 12,
                    "name_tinh": "Lai Châu"
                },
                {
                    "id_tinh": 14,
                    "name_tinh": "Sơn La"
                },
                {
                    "id_tinh": 15,
                    "name_tinh": "Yên Bái"
                },
                {
                    "id_tinh": 17,
                    "name_tinh": "Hòa Bình"
                },
                {
                    "id_tinh": 19,
                    "name_tinh": "Thái Nguyên"
                },
                {
                    "id_tinh": 20,
                    "name_tinh": "Lạng Sơn"
                },
                {
                    "id_tinh": 22,
                    "name_tinh": "Quảng Ninh"
                },
                {
                    "id_tinh": 24,
                    "name_tinh": "Bắc Giang"
                },
                {
                    "id_tinh": 25,
                    "name_tinh": "Phú Thọ"
                },
                {
                    "id_tinh": 26,
                    "name_tinh": "Vĩnh Phúc"
                },
                {
                    "id_tinh": 27,
                    "name_tinh": "Bắc Ninh"
                },
                {
                    "id_tinh": 30,
                    "name_tinh": "Hải Dương"
                },
                {
                    "id_tinh": 31,
                    "name_tinh": "Hải Phòng"
                },
                {
                    "id_tinh": 33,
                    "name_tinh": "Hưng Yên"
                },
                {
                    "id_tinh": 34,
                    "name_tinh": "Thái Bình"
                },
                {
                    "id_tinh": 35,
                    "name_tinh": "Hà Nam"
                },
                {
                    "id_tinh": 36,
                    "name_tinh": "Nam Định"
                },
                {
                    "id_tinh": 37,
                    "name_tinh": "Ninh Bình"
                },
                {
                    "id_tinh": 38,
                    "name_tinh": "Thanh Hóa"
                },
                {
                    "id_tinh": 40,
                    "name_tinh": "Nghệ An"
                },
                {
                    "id_tinh": 42,
                    "name_tinh": "Hà Tĩnh"
                },
                {
                    "id_tinh": 44,
                    "name_tinh": "Quảng Bình"
                },
                {
                    "id_tinh": 45,
                    "name_tinh": "Quảng Trị"
                },
                {
                    "id_tinh": 46,
                    "name_tinh": "Thừa Thiên-Huế"
                },
                {
                    "id_tinh": 48,
                    "name_tinh": "Đà Nẵng"
                },
                {
                    "id_tinh": 49,
                    "name_tinh": "Quảng Nam"
                },
                {
                    "id_tinh": 51,
                    "name_tinh": "Quảng Ngãi"
                },
                {
                    "id_tinh": 52,
                    "name_tinh": "Bình Định"
                },
                {
                    "id_tinh": 54,
                    "name_tinh": "Phú Yên"
                },
                {
                    "id_tinh": 56,
                    "name_tinh": "Khánh Hòa"
                },
                {
                    "id_tinh": 58,
                    "name_tinh": "Ninh Thuận"
                },
                {
                    "id_tinh": 60,
                    "name_tinh": "Bình Thuận"
                },
                {
                    "id_tinh": 62,
                    "name_tinh": "Kon Tum"
                },
                {
                    "id_tinh": 64,
                    "name_tinh": "Gia Lai"
                },
                {
                    "id_tinh": 66,
                    "name_tinh": "Đắk Lắk"
                },
                {
                    "id_tinh": 67,
                    "name_tinh": "Đắk Nông"
                },
                {
                    "id_tinh": 68,
                    "name_tinh": "Lâm Đồng"
                },
                {
                    "id_tinh": 70,
                    "name_tinh": "Bình Phước"
                },
                {
                    "id_tinh": 72,
                    "name_tinh": "Tây Ninh"
                },
                {
                    "id_tinh": 74,
                    "name_tinh": "Bình Dương"
                },
                {
                    "id_tinh": 75,
                    "name_tinh": "Đồng Nai"
                },
                {
                    "id_tinh": 77,
                    "name_tinh": "Bà Rịa-Vũng Tàu"
                },
                {
                    "id_tinh": 79,
                    "name_tinh": "Hồ Chí Minh"
                },
                {
                    "id_tinh": 80,
                    "name_tinh": "Long An"
                },
                {
                    "id_tinh": 82,
                    "name_tinh": "Tiền Giang"
                },
                {
                    "id_tinh": 83,
                    "name_tinh": "Bến Tre"
                },
                {
                    "id_tinh": 84,
                    "name_tinh": "Trà Vinh"
                },
                {
                    "id_tinh": 86,
                    "name_tinh": "Vĩnh Long"
                },
                {
                    "id_tinh": 87,
                    "name_tinh": "Đồng Tháp"
                },
                {
                    "id_tinh": 89,
                    "name_tinh": "An Giang"
                },
                {
                    "id_tinh": 91,
                    "name_tinh": "Kiên Giang"
                },
                {
                    "id_tinh": 92,
                    "name_tinh": "Cần Thơ"
                },
                {
                    "id_tinh": 93,
                    "name_tinh": "Hậu Giang"
                },
                {
                    "id_tinh": 94,
                    "name_tinh": "Sóc Trăng"
                },
                {
                    "id_tinh": 95,
                    "name_tinh": "Bạc Liêu"
                },
                {
                    "id_tinh": 96,
                    "name_tinh": "Cà Mau"
                }
            ],
            storearr: null,
            banner: null,
        }
    },
    mounted() {
        const query = qs.stringify({
            populate: [
                '*',
            ],
            sort: { publishedAt: 'desc' },
            publicationState: 'live',
        },
            {
                encodeValuesOnly: true, // prettify url
            })

        this.getHomepage(query)
    },
    methods: {
        changeLocation() {
            const a = this.selectedTinh
            this.showHuyen = this.arrhuyen.filter(function (freelancer) {
                return freelancer.id_tinh === a
            });

            this.nameHuyen = null

            this.showTinh = this.arrTinh.filter(function (freelancer) {
                return freelancer.id_tinh === a
            });
        },
        showCuahang() {
            let query = ''
            console.log(this.nameHuyen)
            console.log(this.showTinh)
            if (this.nameHuyen === null && this.showTinh != null) {
                this.nameTinh = this.showTinh[0]?.name_tinh
                query = qs.stringify({
                    populate: [
                        '*',
                    ],
                    filters: {
                        city: {
                            $eq: this.nameTinh
                        },
                    },
                    sort: { publishedAt: 'desc' },
                    publicationState: 'live',
                },
                    {
                        encodeValuesOnly: true, // prettify url
                    })
            } else if (this.nameHuyen != null && this.showTinh != null) {
                this.nameTinh = this.showTinh[0]?.name_tinh
                query = qs.stringify({
                    populate: [
                        '*',
                    ],
                    filters: {
                        city: {
                            $eq: this.nameTinh
                        },
                        district: {
                            $eq: this.nameHuyen
                        },
                    },
                    sort: { publishedAt: 'desc' },
                    publicationState: 'live',
                })
            } else if (this.nameHuyen === null && this.showTinh === null) {
                query = qs.stringify({
                    populate: [
                        '*',
                    ],
                    sort: { publishedAt: 'desc' },
                    publicationState: 'live',
                })
            } else if (this.nameHuyen === null && this.showTinh.length === 0) {
                query = qs.stringify({
                    populate: [
                        '*',
                    ],
                    sort: { publishedAt: 'desc' },
                    publicationState: 'live',
                })
            }

            this.getStores(query)

        },
        getHomepage() { },
        getStores() { },
    }
}

</script>
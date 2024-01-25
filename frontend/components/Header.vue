<template>
    <div>
        <header>
            <b-container>
                <div class="header-item">
                    <div class="logo-header">
                        <nuxt-link to="/">
                            <img src="~/assets/images/logo-sventure-01.png" alt="">
                        </nuxt-link>
                    </div>
                    <div class="menu d-xl-flex d-none">
                        <div class="search">
                            <form action="/tim-kiem">
                                <input type="text" placeholder="Search.." name="search" required>
                                <button type="submit"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                        <div class="language">
                            <a href="#">VN</a>
                            /
                            <a href="#">EN</a>
                        </div>
                    </div>
                    <div class="user d-xl-flex d-none">
                        <div class="user-item">
                            <a href="/coming-soon" class="login">
                                <i class="fas fa-user"></i>
                                <span>
                                    Đăng Nhập
                                </span>
                            </a>
                        </div>
                        <div class="user-item">
                            <a href="/coming-soon" class="signup">
                                <i class="fas fa-user-plus"></i>
                                <span>
                                    Đăng Ký
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="bars-icon d-xl-none" @click="active_siderbar = true">
                        <i class="fas fa-bars"></i>
                    </div>
                </div>
                <div class="menu-item menu d-xl-block d-none">
                    <div class="nav">
                        <ul v-if="menu" class="menu1">
                            <li v-for="item in menu" :key="item.title"
                                :class="item.attributes.children.data.length > 0 ? 'has-child-menu-item' : ''">
                                <a :href="item.attributes.url" :target="item.attributes.target">
                                    {{ item.attributes.title }}
                                </a>
                                <ul v-if="item.attributes.children.data.length > 0" class="sub-menu">
                                    <li v-for="item1 in item.attributes.children.data" :key="item1.title"
                                        :class="item1.attributes.children.data.length > 0 ? 'has-child-menu-item' : ''">
                                        <a :href="item1.attributes.url" :target="item1.attributes.target">
                                            {{ item1.attributes.title }}
                                        </a>
                                        <ul v-if="item1.attributes.children.data.length > 0" class="sub-menu2">
                                            <li v-for="item2 in item1.attributes.children.data" :key="item2.title"
                                                :class="item1.attributes.children.data.length > 0 ? 'has-child-menu-item' : ''">
                                                <a :href="item2.attributes.url" :target="item2.attributes.target">
                                                    {{ item2.attributes.title }}
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </b-container>
        </header>

        <div class="menu-mobile" :class="{ 'active-menu': active_siderbar }">
            <div class="menu-mobile-item">
                <div class="top-menu-mobile">
                    <div class="logo">
                        <img src="~/assets/images/logo-sventure-01.png" />
                    </div>
                    <div class="btn-close" @click="active_siderbar = false">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
                <div class="bottom-menu-mobile">
                    <ul v-if="menu" class="menu1">
                        <li v-for="item in menu" :key="item.title"
                            :class="item.attributes.children.data.length > 0 ? 'has-child-menu-item' : ''">
                            <a :href="item.attributes.url" :target="item.attributes.target">
                                {{ item.attributes.title }}
                                <span v-if="item.attributes.children.data.length > 0" @click="clickspan($event)">
                                    ✚
                                </span>
                            </a>
                            <ul v-if="item.attributes.children.data.length > 0" class="sub-menu">
                                <li v-for="item1 in item.attributes.children.data" :key="item1.title"
                                    :class="item1.attributes.children.data.length > 0 ? 'has-child-menu-item' : ''">
                                    <a :href="item1.attributes.url" :target="item1.attributes.target">
                                        {{ item1.attributes.title }}
                                        <span v-if="item1.attributes.children.data.length > 0" @click="clickspan($event)">
                                            ✚
                                        </span>
                                    </a>
                                    <ul v-if="item1.attributes.children.data.length > 0" class="sub-menu">
                                        <li v-for="item2 in item1.attributes.children.data" :key="item2.title"
                                            :class="item2.attributes.children.data.length > 0 ? 'has-child-menu-item' : ''">
                                            <a :href="item2.attributes.url" :target="item2.attributes.target">
                                                {{ item2.attributes.title }}
                                                <span v-if="item2.attributes.children.data.length > 0"
                                                    @click="clickspan($event)">
                                                    ✚
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div class="language">
                                <a href="#">VN</a>
                                /
                                <a href="#">EN</a>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="user d-flex">
                    <div class="user-item mr-3">
                        <a href="#" class="login">
                            <i class="fas fa-user"></i>
                            <span>
                                Đăng Nhập
                            </span>
                        </a>
                    </div>
                    <div class="user-item">
                        <a href="#" class="signup">
                            <i class="fas fa-user-plus"></i>
                            <span>
                                Đăng Ký
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const qs = require('qs')

export default {
    data() {
        return {
            active_siderbar: false,
            menu: null,
        }
    },
    mounted() {
        console.log(this.$i18n.locale);
        if (this.$i18n.locale === 'vi') {
            const query = qs.stringify(
                {
                    populate: '*',
                    filters: {
                        slug: 'menu-vi',
                    },
                    nested: true,
                    publicationState: 'live',
                },
                {
                    encodeValuesOnly: true, // prettify url
                }
            )
            this.getMenu(query)

        } else {
            const query = qs.stringify(
                {
                    populate: '*',
                    filters: {
                        slug: 'menu-en',
                    },
                    nested: true,
                    publicationState: 'live',
                },
                {
                    encodeValuesOnly: true, // prettify url
                }
            )
            this.getMenu(query)
        }
    },
    methods: {
        clickspan(e) {
            event.preventDefault()
            e.target.parentElement.parentElement.classList.toggle('sub-menu-active')
        },

        getMenu(params) {
            this.$api
                .getMenu(params)
                .then((data) => {
                    this.menu = data.data[0].attributes.items.data
                    // console.log(this.menu)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    }
}
</script>

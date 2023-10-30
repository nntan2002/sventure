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
                    <div class="menu">
                        <div class="menu-item">
                            <div class="icon">
                                <svg width="25px" height="25px" viewBox="0 0 18 18" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g stroke="none" stroke-width="1" fill-rule="evenodd">
                                        <path
                                            d="M2,14 C3.1045695,14 4,14.8954305 4,16 C4,17.1045695 3.1045695,18 2,18 C0.8954305,18 0,17.1045695 0,16 C0,14.8954305 0.8954305,14 2,14 Z M9,14 C10.1045695,14 11,14.8954305 11,16 C11,17.1045695 10.1045695,18 9,18 C7.8954305,18 7,17.1045695 7,16 C7,14.8954305 7.8954305,14 9,14 Z M16,14 C17.1045695,14 18,14.8954305 18,16 C18,17.1045695 17.1045695,18 16,18 C14.8954305,18 14,17.1045695 14,16 C14,14.8954305 14.8954305,14 16,14 Z M2,7 C3.1045695,7 4,7.8954305 4,9 C4,10.1045695 3.1045695,11 2,11 C0.8954305,11 0,10.1045695 0,9 C0,7.8954305 0.8954305,7 2,7 Z M9,7 C10.1045695,7 11,7.8954305 11,9 C11,10.1045695 10.1045695,11 9,11 C7.8954305,11 7,10.1045695 7,9 C7,7.8954305 7.8954305,7 9,7 Z M16,7 C17.1045695,7 18,7.8954305 18,9 C18,10.1045695 17.1045695,11 16,11 C14.8954305,11 14,10.1045695 14,9 C14,7.8954305 14.8954305,7 16,7 Z M2,0 C3.1045695,0 4,0.8954305 4,2 C4,3.1045695 3.1045695,4 2,4 C0.8954305,4 0,3.1045695 0,2 C0,0.8954305 0.8954305,0 2,0 Z M9,0 C10.1045695,0 11,0.8954305 11,2 C11,3.1045695 10.1045695,4 9,4 C7.8954305,4 7,3.1045695 7,2 C7,0.8954305 7.8954305,0 9,0 Z M16,0 C17.1045695,0 18,0.8954305 18,2 C18,3.1045695 17.1045695,4 16,4 C14.8954305,4 14,3.1045695 14,2 C14,0.8954305 14.8954305,0 16,0 Z">
                                        </path>
                                    </g>
                                </svg>
                                <span>Categarory</span>
                            </div>
                            <div class="nav">
                                <ul class="menu1">
                                    <li>
                                        <nuxt-link to="#">
                                            Home
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="#">
                                            About Us
                                        </nuxt-link>
                                    </li>
                                    <li class="has-child-menu-item">
                                        <nuxt-link to="#">
                                            Categories
                                        </nuxt-link>
                                        <ul class="sub-menu">
                                            <li class="has-child-menu-item">
                                                <nuxt-link to="#">
                                                    Category 1
                                                </nuxt-link>
                                                <ul class="sub-menu">
                                                    <li>
                                                        <nuxt-link to="#">
                                                            Category 1
                                                        </nuxt-link>
                                                    </li>
                                                    <li>
                                                        <nuxt-link to="#">
                                                            Category 2
                                                        </nuxt-link>
                                                    </li>
                                                    <li>
                                                        <nuxt-link to="#">
                                                            Category 3
                                                        </nuxt-link>
                                                    </li>
                                                    <li>
                                                        <nuxt-link to="#">
                                                            Category 4
                                                        </nuxt-link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <nuxt-link to="#">
                                                    Category 2
                                                </nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="#">
                                                    Category 3
                                                </nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="#">
                                                    Category 4
                                                </nuxt-link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <nuxt-link to="#">
                                            Contact
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="search">
                            <form action="/search">
                                <input type="text" placeholder="Search.." name="search" required>
                                <button type="submit"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                    <div class="user">
                        <div class="user-item">
                            <a href="#" class="btn-main login">
                                <i class="fas fa-user"></i> Log In
                            </a>
                        </div>
                        <div class="user-item">
                            <a href="#" class="btn-main signup">
                                <i class="fas fa-user-plus"></i> Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </b-container>
        </header>
    </div>
</template>

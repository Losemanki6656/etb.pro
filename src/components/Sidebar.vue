<template>
    <div class="sidebar py-2 py-md-3">
        <div class="d-flex flex-column h-100">

            <div class="user-details mb-4 px-4">
                <div class="d-flex align-items-start justify-content-center">
                    <div>
                        <img class="avatar lg rounded-circle" :src="user.photo" alt="avatar lg" title="">
                    </div>
                    <div class="media-body text-light ms-3">
                        <small>{{ user.phone }} </small>
                        <h6 class="mb-0">{{ user.name }}</h6>
                        <ul class="social mb-0 list-inline mt-3">
                            <li class="list-inline-item"><a href="" class="pe-2 text-secondary">
                                <i class="fa-brands fa-instagram"></i></a>
                            </li>
                            <li class="list-inline-item"><a href="" class="pe-2 text-secondary">
                                <i class="fa-brands fa-telegram"></i></a>
                            </li>
                            <li class="list-inline-item"><a href="" class="pe-2 text-secondary">
                                <i class="fa-brands fa-facebook"></i>
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Menu: main ul -->
            <ul class="menu-list flex-grow-1 mt-1 px-4">
                <li class="divider py-2 border-top"><small>MAIN</small></li>
                <li>
                    <a @click="goPush('dashboard')" class="m-link cursor-pointer"><i
                            class="fa fa-chart-pie"></i><span>Statistika</span></a>
                </li>

                <li class="collapsed">
                    <a class="m-link" data-bs-toggle="collapse" data-bs-target="#menu-Pages" href="#"><i
                            class="fa fa-users"></i>
                        <span>Xodimlar</span> <span class="arrow fa fa-angle-right ms-auto text-end"></span></a>

                    <!-- Menu: Sub menu ul -->
                    <ul class="sub-menu collapse" id="menu-Pages">
                        <li><router-link class="ms-link" active-class="active" :to="{name : 'cadries'}" > Xodimlar </router-link></li>
                    </ul>
                </li>

                <!-- <li class="collapsed">
                    <a class="m-link" data-bs-toggle="collapse" data-bs-target="#menu-Authentication" href="#"><i
                            class="fa fa-lock"></i> <span>Authentication</span> <span
                            class="arrow fa fa-angle-right ms-auto text-end"></span></a>
                    <ul class="sub-menu collapse" id="menu-Authentication">
                        <li><a class="ms-link" href="auth-signin.html">Sign in</a></li>
                        <li><a class="ms-link" href="auth-signup.html">Sign up</a></li>
                        <li><a class="ms-link" href="auth-password-reset.html">Password reset</a></li>
                        <li><a class="ms-link" href="auth-two-step.html">2-Step Authentication</a></li>
                        <li><a class="ms-link" href="auth-404.html">404</a></li>
                    </ul>
                </li> -->
            </ul>

            <!-- Menu: menu collepce btn -->
            <button type="button" class="btn btn-link sidebar-mini-btn text-light">
                <span><i class="fa fa-arrow-left"></i></span>
            </button>
        </div>
    </div>
</template>


<script>

export default {
    data() {
        return {
            user: JSON.parse(localStorage.getItem('user'))
        }
    },
    methods: {
        sidebar() {
            "use strict";
            let root = document.documentElement;

            // input date picker
            //$('.DatePicker').datepicker({
            //todayHighlight: true,
            //});

            // main sidebar toggle js
            $('.menu-toggle').on('click', function () {
                $('.sidebar').toggleClass('open');
                $('#layout-l .menu').toggleClass('open');
            });

            $('.megamenu-toggle').on('click', function () {
                $('.menu').toggleClass('open');
            });

            // layout a sidebar mini version
            $('.sidebar-mini-btn').on('click', function () {
                $('.sidebar').toggleClass('sidebar-mini');
            });

            // chat page chatlist toggle js
            $('.chatlist-toggle').on('click', function () {
                $('.card-chat').toggleClass('open');
            });

            // LTR/RTL active js
            $('.theme-rtl input:checkbox').on('click', function () {
                if ($(this).is(":checked")) {
                    $('body').addClass("rtl_mode");
                } else {
                    $('body').removeClass("rtl_mode");
                }
            });

            // search result div show/hide
            $(".main-search input").on("focus", function () {
                $('.search-result').addClass("show");
            });
            $(".main-search input").on("blur", function () {
                $('.search-result').removeClass("show");
            });

            // google font setting
            $('.font_setting input:radio').on('click', function () {
                var others = $("[name='" + this.name + "']").map(function () {
                    return this.value
                }).get().join(" ")
                console.log(others)
                $('body').removeClass(others).addClass(this.value)
            });

            // Prevents menu from closing when clicked inside header menu
            if (document.getElementById("NotificationsDiv")) {
                document.getElementById("NotificationsDiv").addEventListener('click', function (event) {
                    event.stopPropagation();
                });
            }

            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
            })

        },
        goPush(link) {
            this.$router.push({ name: link })
        }
    },
    create() {
    },
    mounted() {
        this.sidebar();
    }
}

</script>
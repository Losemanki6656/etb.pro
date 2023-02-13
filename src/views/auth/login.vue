<template>
    <div id="layout-a" class="theme-blue">
        <div class="main auth-div p-2 py-3 p-xl-5">
            <div class="body d-flex p-0 p-xl-5">
                <div class="container-fluid">

                    <div class="row g-0">
                        <div
                            class="col-lg-6 d-none d-lg-flex justify-content-center align-items-center rounded-lg auth-h100">
                            <div style="max-width: 25rem;">
                                <div class="text-center mb-5">

                                    <i class="fa-solid fa-helmet-safety fs-1 text-primary"></i>

                                </div>

                                <div class="mb-5">
                                    <h2 class="color-900 text-center fw-bold">Mehnat muhofazasi</h2>
                                </div>

                                <!-- List Checked -->
                                <ul class="mb-5">
                                    <li class="mb-4">
                                        <span class="d-block fw-bold mb-1">
                                            O'ZBEKISTON TEMIR YO'LLARI
                                        </span>
                                        <span class="text-muted">
                                            AKSIYADORLIK JAMIYATI
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div
                            class="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100">
                            <div class="w-100 p-4 p-md-5 card border-0" style="max-width: 32rem;">
                                <form @submit.prevent="submit" id="loginForm"
                                    class="row g-1 p-0 p-md-4 needs-validation" novalidate>
                                    <div class="col-12 text-center mb-5">
                                        <h1 class="fw-bold">Kirish</h1>
                                        <span>Login va parolni kiriting!</span>
                                    </div>
                                    <div class="col-12">
                                        <div class="mb-2">
                                            <label class="form-label fw-bold">Login</label>
                                            <input type="email" class="form-control form-control-lg"
                                                placeholder="name@example.com" v-model="authData.email" required>
                                            <div class="text-danger valid-feedback" v-if="error">{{ errors.email }}
                                            </div>
                                            <div class="invalid-feedback">
                                                Elektron manzil ko'rinishida kiriting
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="mb-2">
                                            <div class="form-label">
                                                <span class="d-flex justify-content-between align-items-center fw-bold">
                                                    Parol
                                                    <a class="text-primary" href="">Parolni unutdingizmi ?</a>
                                                </span>
                                            </div>
                                            <input type="password" class="form-control form-control-lg"
                                                placeholder="***************" v-model="authData.password" required>
                                            <!-- <div class="invalid-feedback">
                                                {{ errors.password }}
                                            </div> -->
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault">
                                            <label class="form-check-label fw-bold" for="flexCheckDefault">
                                                Eslab qolish
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-12 text-center mt-4">
                                        <button class="btn btn-primary btn-lg btn-block" type="submit"
                                            style="width: 100%;">
                                            <span class="spinner-border spinner-border-sm" v-if="loading" role="status"
                                                aria-hidden="true"></span>
                                            <span class="visually-hidden"></span> Kirish
                                        </button>
                                    </div>
                                </form>
                                <!-- End Form -->
                            </div>
                        </div>
                    </div> <!-- End Row -->

                </div>
            </div>

            <div class="animate_lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>

        </div>
    </div>

</template>

<style lang="scss">

</style>
<script>
export default {
    name: "login",
    components: {},
    data() {
        return {
            authData: {
                email: null,
                password: null
            },

            errors: {
                email: null,
                password: null,
                error: null
            },
            loading: false,
            error: false
        }
    },
    methods: {
        submit() {
            this.loading = true;

            $axios.post('/auth/login', this.authData).then(response => {
                let { data } = response;
                localStorage.setItem('access_token', data.access_token);

                $axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

                $axios.get('/profile').then(response => {
                    let { data } = response;

                    const user = JSON.stringify(data);
                    
                    localStorage.setItem('user', user);

                }).catch(error => {

                }).finally(() => {
                })

                this.$router.push({ name: 'main' });
            }).catch(error => {
                this.error = true;
                this.errors.email = "Login yoki parol noto'gri..";
            }).finally(() => {
                this.loading = false
            })
        },
        validate() {
            'use strict';
            window.addEventListener('load', function () {
                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                var forms = document.getElementsByClassName('needs-validation');
                // Loop over them and prevent submission
                var validation = Array.prototype.filter.call(forms, function (form) {
                    form.addEventListener('submit', function (event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            }, false);
        }
    },
    mounted() {
        this.validate();
    }
};
</script>
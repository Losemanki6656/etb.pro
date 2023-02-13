<template>
    <div class="navigation navbar px-lg-3 px-2 py-lg-3 py-2">

        <!-- Brand -->
        <a @click="goPush('main')" class="brand-icon cursor-pointer d-flex align-items-center">
            <i class="fa-solid fa-helmet-safety fs-3 me-3"></i>
            <span class="fw-bold fs-4 mb-0 ml-4"> E-TB </span>
        </a>

        <!-- Menu: icon -->
        <ul class="nav navbar-nav flex-row flex-grow-1 justify-content-end">
            <!-- <li class="nav-item flex-grow-1 d-flex align-items-center ps-lg-5 ps-3 main-search">
                <input class="form-control" type="text" placeholder="Enter your search key word">
                <div class="card shadow rounded-3 search-result slidedown">
                    <div class="card-body text-start">

                        <small class="dropdown-header">Recent searches</small>
                        <div class="dropdown-item bg-transparent text-wrap my-2">
                            <span><a class="btn btn-sm btn-dark" href="#">Github <i
                                        class="fa fa-search ms-1"></i></a></span>
                            <span><a class="btn btn-sm btn-dark" href="#">Notification panel <i
                                        class="fa fa-search ms-1"></i></a></span>
                            <span><a class="btn btn-sm btn-dark" href="#">New project <i
                                        class="fa fa-search ms-1"></i></a></span>
                        </div>

                        <div class="dropdown-divider my-3"></div>

                        <small class="dropdown-header">Tutorials</small>
                        <a class="dropdown-item py-2" href="#">
                            <div class="d-flex align-items-center">
                                <span class="avatar sm no-thumbnail me-2"><i class="fa fa-github"></i></span>
                                <div class="text-truncate">
                                    <span>How to set up Github?</span>
                                </div>
                            </div>
                        </a>
                        <a class="dropdown-item py-2" href="#">
                            <div class="d-flex align-items-center">
                                <span class="avatar sm no-thumbnail me-2"><i class="fa fa-paint-brush"></i></span>
                                <div class="text-truncate">
                                    <span>How to change theme color?</span>
                                </div>
                            </div>
                        </a>

                        <small class="dropdown-header">Members</small>
                        <a class="dropdown-item py-2" href="#">
                            <div class="d-flex align-items-center">
                                <img class="avatar sm rounded-circle" src="@/assets/images/xs/avatar1.jpg" alt="">
                                <div class="text-truncate ms-2">
                                    <span>Robert Hammer <i class="fa fa-check-circle text-primary"
                                            data-bs-toggle="tooltip" data-placement="top" title=""
                                            data-original-title="Top endorsed"></i></span>
                                </div>
                            </div>
                        </a>
                        <a class="dropdown-item py-2" href="#">
                            <div class="d-flex align-items-center">
                                <img class="avatar sm rounded-circle" src="@/assets/images/xs/avatar2.jpg" alt="">
                                <div class="text-truncate ms-2">
                                    <span>Orlando Lentz</span>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
            </li> -->
            <li class="nav-item">
                <div class="position-relative">
                    <a class="nav-link dropdown-toggle pulse py-2 px-2 px-lg-3" href="#" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-bell"></i>
                    </a>
                    <div id="NotificationsDiv"
                        class="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end position-absolute p-0 m-0">
                        <div class="card border-0 w380">
                            <div class="card-header border-0 p-3 pb-0">
                                <h5 class="d-flex justify-content-between">
                                    <span>Notifications Center</span>
                                    <span class="badge text-muted">14</span>
                                </h5>
                                <ul class="nav nav-tabs tab-card d-flex justify-content-between text-center"
                                    role="tablist">
                                    <li class="nav-item flex-fill"><a class="nav-link text-muted active"
                                            data-bs-toggle="tab" href="#Noti-tab-Message" role="tab">Message</a></li>
                                    <li class="nav-item flex-fill"><a class="nav-link text-muted" data-bs-toggle="tab"
                                            href="#Noti-tab-Events" role="tab">Events</a></li>
                                    <li class="nav-item flex-fill"><a class="nav-link text-muted" data-bs-toggle="tab"
                                            href="#Noti-tab-Logs" role="tab">Logs</a></li>
                                </ul>
                            </div>
                            <div class="card-body tab-content custom_scroll" style="height: 300px;">
                                <div class="tab-pane fade show active" id="Noti-tab-Message" role="tabpanel">
                                    <ul class="list-unstyled list mb-0">
                                        <li class="py-2 mb-1 border-bottom">
                                            <a href="javascript:void(0);" class="d-flex">
                                                <img class="avatar rounded-circle" src="@/assets/images/xs/avatar1.jpg"
                                                    alt="">
                                                <div class="flex-fill ms-3">
                                                    <p class="d-flex justify-content-between mb-0 text-muted"><span
                                                            class="fw-bold">Chris
                                                            Morise</span> <small>2MIN</small></p>
                                                    <span class="text-muted">changed an issue from "In Progress" to
                                                        <span class="badge bg-success">Review</span></span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="Noti-tab-Events" role="tabpanel">
                                    <ul class="list-unstyled list mb-0">
                                        <li class="py-2 mb-1 border-bottom">
                                            <a href="javascript:void(0);" class="d-flex">
                                                <div class="avatar rounded no-thumbnail"><i
                                                        class="fa fa-info-circle fa-lg"></i></div>
                                                <div class="flex-fill ms-3">
                                                    <p class="mb-0 text-muted">Campaign <strong
                                                            class="text-primary">Holiday Sale</strong> is
                                                        nearly reach budget limit.</p>
                                                    <small class="text-muted">10:00 AM Today</small>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="py-2 mb-1 border-bottom">
                                            <a href="javascript:void(0);" class="d-flex">
                                                <div class="avatar rounded no-thumbnail"><i
                                                        class="fa fa-thumbs-up fa-lg"></i></div>
                                                <div class="flex-fill ms-3">
                                                    <p class="mb-0 text-muted">Your New Campaign <strong
                                                            class="text-primary">Holiday
                                                            Sale</strong> is approved.</p>
                                                    <small class="text-muted">11:30 AM Today</small>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="py-2 mb-1 border-bottom">
                                            <a href="javascript:void(0);" class="d-flex">
                                                <div class="avatar rounded no-thumbnail"><i
                                                        class="fa fa-pie-chart fa-lg"></i></div>
                                                <div class="flex-fill ms-3">
                                                    <p class="mb-0 text-muted">Website visits from Twitter is
                                                        <strong class="text-danger">27% higher</strong> than last week.
                                                    </p>
                                                    <small class="text-muted">04:00 PM Today</small>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="py-2 mb-1 border-bottom">
                                            <a href="javascript:void(0);" class="d-flex">
                                                <div class="avatar rounded no-thumbnail"><i
                                                        class="fa fa-warning fa-lg"></i></div>
                                                <div class="flex-fill ms-3">
                                                    <p class="mb-0 text-muted"><strong
                                                            class="text-warning">Error</strong> on website analytics
                                                        configurations</p>
                                                    <small class="text-muted">Yesterday</small>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="py-2 mb-1 border-bottom">
                                            <a href="javascript:void(0);" class="d-flex">
                                                <div class="avatar rounded no-thumbnail"><i
                                                        class="fa fa-thumbs-up fa-lg"></i></div>
                                                <div class="flex-fill ms-3">
                                                    <p class="mb-0 text-muted">Your New Campaign <strong
                                                            class="text-primary">Holiday
                                                            Sale</strong> is approved.</p>
                                                    <small class="text-muted">11:30 AM Today</small>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="Noti-tab-Logs" role="tabpanel">
                                    <h4>No Logs right now!</h4>
                                </div>
                            </div>
                            <a class="card-footer text-center border-top-0" href="#"> View all notifications</a>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <div class="Language position-relative">
                    <a class="nav-link dropdown-toggle pulse py-2 px-2 px-lg-3" href="#" role="button"
                        data-bs-toggle="dropdown">
                        <i class="fa fa-language"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end rounded-4 shadow border-0 p-0 mt-2 position-absolute"
                        data-bs-popper="none">
                        <div class="card border-0">
                            <div class="list-group list-group-custom" style="width: 200px;">
                                <a href="#" class="list-group-item">
                                    <span class="flag-icon flag-icon-gb me-2"></span>UK English
                                </a>
                                <a href="#" class="list-group-item">
                                    <span class="flag-icon flag-icon-us me-2"></span>US English
                                </a>
                                <a href="#" class="list-group-item">
                                    <span class="flag-icon flag-icon-de me-2"></span>Germany
                                </a>
                                <a href="#" class="list-group-item">
                                    <span class="flag-icon flag-icon-in me-2"></span>Hindi
                                </a>
                                <a href="#" class="list-group-item">
                                    <span class="flag-icon flag-icon-sa me-2"></span>Saudi Arabia
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav-item"><a class="nav-link py-2 px-2 px-lg-3" href="#" data-bs-toggle="modal"
                    data-bs-target="#LayoutModal"><i class="fa fa-sliders"></i></a></li>
            <li class="nav-item d-none d-sm-block"><a class="nav-link py-2 px-2 px-lg-3" href="#"><i
                        class="fa fa-comments-o"></i></a></li>
            <li class="nav-item d-none d-sm-block"><a class="nav-link py-2 px-2 px-lg-3" href="#"><i
                        class="fa fa-calendar"></i></a></li>

            <!-- Menu collapse -->
            <li class="nav-item"><a class="nav-link py-2 px-2 px-lg-3" href="#" title="Settings" data-bs-toggle="modal"
                    data-bs-target="#SettingsModal"><i class="fa fa-gear"></i></a></li>
            <li class="nav-item"><a class="nav-link py-2 px-2 px-lg-3 d-block d-xl-none menu-toggle me-2 me-lg-0"
                    href="#"><i class="fa fa-bars"></i></a></li>
        </ul>

    </div>
</template>

<script>

export default {
    data() {
        return {
        }
    },
    methods: {

        goPush(link){
            this.$router.push({ name : link})
        }
    },
    create() {
    },
    mounted() {
    }
}

</script>
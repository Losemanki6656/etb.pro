<template>

  <div id="layout-k" class="theme-blue">
    <Navbar></Navbar>
    <Sidebar></Sidebar>

    <div class="main px-lg-4 px-1">


      <div class="body-header border-bottom d-flex py-3">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col">
              <!-- Pretitle -->
              <small class="text-muted">Welcome to back.</small>
              <h1 class="h4 mt-1">Dashboard</h1>
            </div>
            <div class="col-auto">
              <a href="https://themeforest.net/user/wrraptheme" title="Download" target="_blank"
                class="btn btn-white border lift">Download</a>
              <button type="button" class="btn btn-dark lift">Generate Report</button>
            </div>
          </div>
          <!-- Row end  -->
        </div>
      </div>

      <div class="body d-flex py-lg-4 py-3">
        <div class="container-fluid">



        </div>
      </div>

      <Footer></Footer>
    </div>

  </div>




</template>

<script>


import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'HomeView',
  components: {
    Navbar, Sidebar, Footer
  }
}
</script>

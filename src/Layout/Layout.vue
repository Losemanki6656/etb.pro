<template>

    <div id="layout-k" class="theme-blue">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
  
      <div class="main px-lg-4 px-1">
        <router-view></router-view>
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
  
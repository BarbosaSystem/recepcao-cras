<script>
import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters(["getLogo"])
    },
    methods: {
      abrir (){
            this.$store.commit("setChangeLog", [])
            this.$store.dispatch("Action_LoadChangeLog")
            this.$Utils.openDialog("atendimentoModalChangeLog")
      }
    }
  }
</script>
<template>
    <header id="header" class="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
      <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#"><img class="img-fluid" width="24px" :src="getLogo" /> Recepção CRAS</a>
      <ul class="navbar-nav flex-row d-none d-md-block">
        <li class="nav-item text-nowrap">
          <button class="nav-link px-3 text-white collapsed" type="button" @click="abrir">
            <i class="fa-solid fa-flag"></i>
          </button>
        </li>
      </ul>
      <ul class="navbar-nav flex-row d-md-none">
        <li class="nav-item text-nowrap">
          <button class="nav-link px-3 text-white collapsed" type="button" @click="abrir">
            <i class="fa-solid fa-flag fa-1x"></i>
          </button>
        </li>
        <li class="nav-item text-nowrap">
          <button class="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars fa-1x"></i>
          </button> 
        </li>
      </ul>

      <!--<div id="navbarSearch" class="navbar-search w-100 collapse" style="">
        <input class="form-control w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search">
      </div> -->
    </header>
</template>

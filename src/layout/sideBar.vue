<script>
import { mapGetters } from 'vuex';
import menuLink from '../components/menuLink.vue';
  export default {
    components: {
      menuLink
    },
    computed: {
      ...mapGetters(["getLogo"])
    },
    methods:{
      mudar(item){
        router.push({name: item})
      }
    }
  }
</script>

<template>
  <div class="sidebar  border border-right col-md-3 col-lg-2
              p-0
              bg-body-tertiary
            ">
          <nav class="offcanvas-md offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu"
            aria-labelledby="sidebarMenuLabel">
            <div class="offcanvas-header">
                <img class="img-fluid rounded" width="48px" :src="getLogo" />
                <h5 class="offcanvas-title" id="sidebarMenuLabel">
                CRAS TREVO
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
            </div>
            <div class="
                  offcanvas-body
                  d-md-flex
                  flex-column
                  p-0
                  pt-lg-3
                  overflow-y-auto
                ">
              <ul class="nav flex-column">
                <menuLink :info="{route: '/', label: 'ATENDIMENTOS'}" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close" />
                <menuLink :info="{route: '/historico', label: 'HISTÓRICO'}" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close" />
                <menuLink :info="{route: '/cejusc', label: 'CEJUSC'}" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close" />
              </ul>
            </div>
          </nav>
        </div>
</template>


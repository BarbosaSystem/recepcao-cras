<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

 const store = useStore()

 const getLogo = computed(() => store.getters.getLogo)
</script>

<template>
   <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" style="position: relative; height: calc(100vh - 50px);">
        <!-- <toast-el></toast-el> -->
        <router-view></router-view>
    </main>
</template>


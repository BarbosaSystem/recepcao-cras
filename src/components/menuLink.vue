<script setup>

defineProps({
  info: Object,
})

</script>

<template>
    <li class="nav-item"  >
        <router-link class="nav-link d-flex align-items-center gap-2" aria-current="page" router-link-active exact :to="info.route" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close">
            {{info.label}}
        </router-link>
    </li>
</template>

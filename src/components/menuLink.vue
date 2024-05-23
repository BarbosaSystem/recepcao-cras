<script setup>

defineProps({
  info: Object,
})

</script>

<template>
    <li class="nav-item" >
        <router-link 
            class="nav-link d-flex align-items-center gap-2"
            :to="info.route"
        >
            {{ info.label }}
        </router-link>
    </li>
</template>

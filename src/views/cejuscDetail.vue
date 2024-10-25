<script>
    export default {
        beforeRouteEnter(to, from, next) {
            next(vm => {
                // access to component instance via `vm`
                console.log(vm.$route.params.id)
            });
        },
    }
</script>
<template>
    <h3>Detail View</h3>
</template>
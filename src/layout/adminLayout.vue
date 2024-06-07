<script>
export default {

}
</script>
<template>
     <HeaderBar />
  <div class="container-fluid">
    <div class="row">
    <div class="progress" style="height: 3px; margin: 0 -15px;"  v-if="$store.getters.GetLoading">
        <div class="progress-bar bg-white progress-bar-striped progress-bar-animated" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        </div>
    </div>
    <SideBar />
    <ContentBar />
  </div>
  </div>
  <modal-changelog />
</template>
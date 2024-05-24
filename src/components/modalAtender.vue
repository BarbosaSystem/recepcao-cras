<script>
  export default{
    props: {
      model: Object
    },
    computed:{
      validate(){
        if(this.model.id.value != '')
          return true
        else return false
      }
      
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        return value.toUpperCase()
      }
    },
  }
</script>

<template>
  <div class="modal fade" id="modalAtender" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="modalAtenderLabel" aria-hidden="true">
      <div class="modal-dialog">
        <form class="needs-validation" novalidate="" @submit.prevent="$emit('iniciar')" autocomplete="off">
          <div class="modal-content">
            <div class="modal-header bg-success text-white">
              <h1 class="modal-title fs-5" id="modalAtenderLabel">
                Chamar Usuário
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row g-3">
                <div class="col-md-2 text-success" style="text-align: center;vertical-align: middle;    display: flex; flex-direction: column; align-items: center; justify-content: center;  font-size: 3rem;">
                  <i class="fa-solid fa-circle-check"></i>   
                </div>
                <div class="col-md-10">
                  <h3>Chamar {{this.model.nome.value}}  para atendimento.</h3>
                  <small class="text-success text-right"> Está ação não poderá ser desfeita</small>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" :disabled="!validate || $store.getters.getLoading" class="btn btn-success">
              <i v-if="$store.getters.getLoading" class="fa-solid fa-spinner fa-spin"></i> Liberar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
</template>
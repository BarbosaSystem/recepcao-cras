<script>
  export default {
    props: {
      model: Object
    },
    
    computed:{
      validate(){
        if(this.model.id.value != '')
          return true
        else return false
      },
    },
  }
</script>
<template>
  <div ref="atendimentoDelete" class="modal fade" id="atendimentoModalDelete" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="atendimentoModalDeleteLabel" aria-hidden="true">
      <div class="modal-dialog">
        <form class="needs-validation" novalidate="" @submit.prevent="$emit('deleteForm')" autocomplete="off">
          <div class="modal-content">
            <div class="modal-header bg-danger text-white">
              <h1 class="modal-title fs-5" id="atendimentoModalDeleteLabel">
                Deletar Registro
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

                <div class="col-md-2 text-danger" style="text-align: center;vertical-align: middle;    display: flex; flex-direction: column; align-items: center; justify-content: center;  font-size: 3rem;">
                  <i class="fa-solid fa-circle-exclamation"></i>   
                </div>
                <div class="col-md-10">
                  <h3>Tem certeza que deseja remover este registro?</h3>
                  <small class="text-danger text-right"> Está ação não poderá ser desfeita</small>
                </div>
              </div>
            </div>
            <div class="modal-footer">
<!-- /*               <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button> */ -->
              <button type="submit" :disabled="!validate || $store.getters.getLoading" class="btn btn-danger">
              <i v-if="$store.getters.getLoading" class="fa-solid fa-spinner fa-spin"></i> Excluir</button>
            </div>
          </div>
        </form>
      </div>
    </div>
</template>
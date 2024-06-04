<script>
import { mapGetters } from 'vuex';


export default {
    computed: {
        ...mapGetters(["getChangeLog"])
    },
    methods: {
      concatenar(caracter, item){
        return caracter+'collapse'+item   
      },
      
      ConvertData(dateString){
          return this.$Utils.ConvertData(dateString)
      },
    },
}

</script>
<template>
    <div class="modal fade" id="atendimentoModalChangeLog" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="atendimentoModalChangeLogLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-dark text-white">
              <h1 class="modal-title fs-5" id="atendimentoModalChangeLogLabel">
                Notas de Atualização
              </h1>
              <button
                type="button"
                class="btn-close text-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="d-flex justify-content-center align-items-center" v-if="$store.getters.getLoadingChangeLog">
                <div class="spinner-border text-dark" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
              <div class="accordion" id="accordionExample" v-else>
                <div class="accordion-item" v-for="(item, index) in getChangeLog" :key="index">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="concatenar('#',item.id)" aria-expanded="true" :aria-controls="concatenar('',item.id)">
                      <strong>{{ConvertData(item.data)}}</strong>
                    </button>
                  </h2>
                  <div :id="concatenar('',item.id)" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      {{item.descricao}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Cancelar
              </button>
            </div>
        </div>
      </div>
    </div>
</template>
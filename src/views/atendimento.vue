<script>
import ModalAtender from '../components/modalAtender.vue';
import ModalExcluir from '../components/modalExcluir.vue';
import Pagination from '../components/pagination.vue';
import myMixin from '../mixin/mixinAtendimento'

export default {
    beforeRouteEnter(to, from, next) {
        next(vm => {
            // access to component instance via `vm`
            vm.$store.dispatch("Action_LoadAtendimentos", { currentPage: 1, status: false });
        });
    },
    computed: {
        orderAtendimentos() {
            const itens = this.getAtendimentos.filter(elemento => elemento.status === false);
            const prioridade = this.getAtendimentos.find(elemento => elemento.prioridade === true);
            console.log(prioridade);
            if ((prioridade === null) || (prioridade === undefined)) {
                return itens.sort((a, b) => {
                    if (a.id > b.id) {
                        return 1;
                    }
                    if (a.id < b.id) {
                        return -1;
                    }
                    return 0;
                });
            }
            else {
                return itens.sort(function (a, b) {
                    // Primeiro, ordena por status
                    if (a.prioridade !== b.prioridade) {
                        // Se a.status for true, ordena antes de b.status (ou seja, "ativo" vem antes de "inativo")
                        return a.prioridade ? -1 : 1;
                    }
                    // Se os status forem iguais, ordena por ID
                    return a.id - b.id;
                });
            }
        }
    },
    mixins: [myMixin],
    methods: {
        nextPage() {
            this.$store.commit('setCurrentPage', this.getCurrentPage + 1);
        },
        prevPage() {
            this.$store.commit('setCurrentPage', this.getCurrentPage - 1);
        },
        onPageChange(page) {
            this.$store.dispatch("Action_LoadAtendimentos", { currentPage: page, status: false });
        },
        buscarPessoa(item) {
            if (item.params == "") {
            }
            this.$store.dispatch("Action_LoadAtendimento_ByParameter", item);
        }
    },
    components: { ModalAtender, ModalExcluir }
}
</script>
<template>
  <div class="h-100 d-flex flex-column">
    <modalAtendimento :modulo="mode" @enviarForm="submit" :model="atendimentoFormulario" />
    <ModalAtender :modulo="mode" @enviarForm="submit" :model="atendimentoFormulario" />
    <ModalExcluir @deleteForm="deleteRegistro" :model="atendimentoFormulario" />
    <div class="cabecalho">
      <h1 class="h2">{{ $route.meta.title }}</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary" @click="showCreateForm('Create')">
            <i class="fa-solid fa-circle-plus"></i> Adicionar
          </button>
          <button class="btn btn-dark" alt="Recarregar Página" :disabled="$store.getters.getLoading"
            @click="onPageChange(1)"><i class="fa-solid fa-rotate"
              :class="{ 'fa-spin': $store.getters.getLoading }"></i></button>
          <!-- <button-alert /> -->
        </div>
      </div>
    </div>
    <search-bar @buscaPessoa="buscarPessoa" label="Buscar..."
        :optionsList="[{ label: 'Nome', value: 'nome' }, { label: 'Nº doc', value: 'documento' }]"></search-bar>
    

    <div class="card-group mt-3 d-flex flex-column gap-1">
      <AtendimentoCard v-for="(item, index) in orderAtendimentos" :key="index"
          :item="item"
          @showAtendimentoForm="showAtendimentoForm"
          @showEditForm="showEditForm"
          @showDeleteForm="showDeleteForm"
          @showInfoForm="showInfoForm"
      />
    </div>
    <div class="d-flex justify-content-between mt-auto align-items-center">
      <div class="accordion-body d-flex gap-2">
          <span class="prio bg-danger"></span> Atendimento Prioritário
          <span class="prio bg-success"></span> Atendimento Comum
      </div>
      <Pagination v-if="orderAtendimentos.length > 0" :disableButton:="$store.getters.getLoading"
        :total-pages="$store.getters.getPages" :per-page="$store.getters.GetPageSize"
        :current-page="$store.getters.getCurrentPage" @pagechanged="onPageChange" />
      </div>
  </div>
</template>
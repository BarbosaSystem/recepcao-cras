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
            const itens = this.getAtendimentos;
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
  <div>
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
    <div class="row col">
      <search-bar @buscaPessoa="buscarPessoa" label="Buscar..."
        :optionsList="[{ label: 'Nome', value: 'nome' }, { label: 'Nº doc', value: 'documento' }]"></search-bar>
    </div>
    <modalAtendimento :modulo="mode" @enviarForm="submit" :model="atendimentoFormulario" />
    <ModalAtender :modulo="mode" @enviarForm="submit" :model="atendimentoFormulario" />
    <ModalExcluir @deleteForm="deleteRegistro" :model="atendimentoFormulario" />
    <div class="loading">

      <table-loading v-if="$store.getters.getLoading"> </table-loading>

      <table class="table table-striped table-hover table-sm" v-else="$store.getters.getLoading">
        <thead>
          <tr>
            <th class="text-center"></th>
            <th>Data</th>

            <th>Nome</th>
            <th class="d-none d-sm-table-cell">Tipo Doc </th>
            <th class="d-none d-sm-table-cell">Documento</th>
            <th>Tipo de Servico</th>
            <th class="text-center">Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in orderAtendimentos" :key="index" style="vertical-align: middle; cursor: pointer">
            <td style="text-align: center;"><span class="prio"
                :class="{ 'bg-danger': item.prioridade, 'bg-success': !item.prioridade }"></span></td>
            <td>{{ ConvertData(item.data) }}</td>

            <td>{{ item.nome.toUpperCase() }}</td>
            <td class="d-none d-sm-table-cell ">{{ item.tipo_doc }}</td>
            <td class="d-none d-sm-table-cell ">{{ docLength(item.documento) }}</td>
            <td>{{ item.tipo_atendimento }}</td>
            <td class="text-center">
              <div class="dropdown">
                <button :class="{ 'btn-dark': item.status }" class="btn btn-default btn-sm dropdown-toggle" type="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Opções
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li>
                    <button type="button" class="btn btn-success dropdown-item" v-if="!item.status" title="Atender"
                      @click="showAtendimentoForm(item)"><i class="fa-solid fa-circle-check"></i> Atender
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn btn-secondary dropdown-item" v-if="!item.status" title="Editar"
                      @click="showEditForm(item)">
                      <i class="fa-solid fa-pen-to-square"></i> Editar
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn btn-secondary dropdown-item" v-if="!item.status" title="Cancelar"
                      @click="showDeleteForm(item)">
                      <i class="fa-solid fa-circle-xmark"></i> Excluir
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn btn-secondary dropdown-item" v-if="item.status"
                      title="Mais Informações" @click="showInfoForm(item)">
                      <i class="fa-regular fa-circle-question"></i> Detalhes
                    </button>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr class="text-center" v-if="$store.getters.getAtendimentos == 0">
            <td colspan=7> <label>Nenhum Registro Encontrado </label> </td>
          </tr>

        </tbody>
      </table>
      <Pagination v-if="orderAtendimentos.length > 0" :disableButton:="$store.getters.getLoading"
        :total-pages="$store.getters.getPages" :per-page="$store.getters.GetPageSize"
        :current-page="$store.getters.getCurrentPage" @pagechanged="onPageChange" />
      <div class="accordion-body">
        <span class="prio bg-danger"></span> Atendimento Prioritário
        <span class="prio bg-success"></span> Atendimento Comum
    </div>
  </div>

</div></template>
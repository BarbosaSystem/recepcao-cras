<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

    const store = useStore();
    const docLength = (texto) =>{
        return texto.toString().length === 10 ? "0" + texto : texto;
    }
    const nextPage = () =>{
          this.$store.commit('setCurrentPage', this.getCurrentPage + 1);
    }
    const prevPage = () => {
          this.$store.commit('setCurrentPage', this.getCurrentPage - 1);
    }
    const onPageChange = (page) => {
        this.$store.dispatch("Action_LoadAtendimentos", { currentPage : page, status : true });
    }
    const buscarPessoa = (item) => {
        if (item.params !== "") {
            this.$store.dispatch("Action_LoadAtendimento_ByParameter", item);
        }
    }

    const ConvertData = (dateString) =>{
        try {
            var parts = dateString.split("-");
            var year = parseInt(parts[0]);
            var month = parseInt(parts[1]);
            var day = parseInt(parts[2]);
            // Cria um objeto de data com a data fornecida
            var date = new Date(year, month - 1, day);
            // Adiciona um dia à data
            date.setDate(date.getDate());
            // Obtém os componentes de dia, mês e ano da nova data
            var newDay = date.getDate();
            var newMonth = date.getMonth() + 1;
            var newYear = date.getFullYear();
            // Formata a data no formato desejado (dd/mm/yyyy)
            var formattedDate =
            ("0" + newDay).slice(-2) +
            "/" +
            ("0" + newMonth).slice(-2) +
            "/" +
            newYear;
            return formattedDate;
        } catch (error) {
            return dateString
        }
    }
    const getLoading = computed(() => store.getters.getLoading)
    const getAtendimentos = computed(() => store.getters.getAtendimentos)
</script>
<template>
    <div>
        <div class="cabecalho">
            <h1 class="h2">{{$route.meta.title}}</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group">
                    <button class="btn btn-dark" alt="Recarregar Página" :disabled="getLoading" @click="onPageChange(1)"><i class="fa-solid fa-rotate" :class="{ 'fa-spin' : getLoading }"></i></button>
                </div>
            </div>
        </div>
        <div class="row col col-md-6">
            <!-- <search-bar @buscaPessoa="buscarPessoa" label="Buscar..." :optionsList="[{ label: 'Nome', value: 'nome'}, { label: 'Nº doc', value: 'documento'}]"></search-bar> -->
        </div>
        <!--<modal-atendimento :modulo="mode" @enviarForm="submit" :model="atendimentoFormulario" ></modal-atendimento> -->
        <div class="table-responsive loading">
            <!-- <table-loading v-if="$store.getters.getLoading"> </table-loading>
            <table class="table table-striped table-hover table-sm" v-else="$store.getters.getLoading">
            -->
            <table class="table table-striped table-hover table-sm">
                <thead>
                    <tr>
                    <th>Data</th>
                    <th>Nome</th>
                    <th class="d-none d-sm-table-cell">Tipo Doc </th>
                    <th class="d-none d-sm-table-cell">Documento</th>
                    <th>Tipo de Servico</th>
                    <th class="text-center">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  v-for="(item, index) in getAtendimentos" :key="index" style="vertical-align: middle; cursor: pointer"  >
                    <td>{{ConvertData(item.data)}}</td>
                    <td>{{item.nome}}</td>
                    <td class="d-none d-sm-table-cell ">{{item.tipo_doc}}</td>
                    <td class="d-none d-sm-table-cell ">{{docLength(item.documento)}}</td>
                    <td>{{item.tipo_atendimento}}</td>
                    <td class="text-center">
                        <div class="dropdown">
                            <button :class="{ 'btn-dark' : item.status }" class="btn btn-default btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Opções
                            </button>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <!--  <li>
                                <button type="button" class="btn btn-success dropdown-item" v-if="!item.status" title="Atender"                      
                                    @click="showAtendimentoForm(item)"><i class="fa-solid fa-circle-check"></i> Atender
                                </button>
                                </li>
                                <li>
                                <button type="button" class="btn btn-secondary dropdown-item"v-if="!item.status"  title="Editar" @click="showEditForm(item)">
                                <i class="fa-solid fa-pen-to-square"></i> Editar
                                </button>
                                </li>
                                <li>
                                <button type="button" class="btn btn-secondary dropdown-item" v-if="!item.status" title="Cancelar" @click="showDeleteForm(item)">
                                <i class="fa-solid fa-circle-xmark"></i> Excluir
                                </button>
                                </li>
                                <li>
                                <button type="button" class="btn btn-secondary dropdown-item" v-if="item.status" title="Mais Informações" @click="showInfoForm(item)">
                                <i class="fa-regular fa-circle-question"></i> Detalhes
                                </button> 
                                </li> -->
                            </ul>
                        </div>
                    </td>
                    </tr>
                </tbody>
            </table>
            <!-- <pagina v-if="getAtendimentos.length > 0" :disableButton:="$store.getters.getLoading" :total-pages="$store.getters.getPages" :per-page="$store.getters.GetPageSize" :current-page="$store.getters.getCurrentPage" @pagechanged="onPageChange" /> -->
        </div>
    </div>
</template>
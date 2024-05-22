<script>
import SearchBar from '../components/searchBar.vue';
import TableLoading from '../components/tableLoading.vue' ;
import myMixin from '../mixin/mixinAtendimento.js'

export default {
    components: {
        /*'modal-atendimento' : modalAtendimento,*/
        SearchBar,
        TableLoading
    },
    mixins: [myMixin],
    beforeRouteEnter (to, from, next) {
        next(vm => {
            // access to component instance via `vm`
            vm.$store.dispatch("Action_LoadAtendimentos", { currentPage : 1, status: true });
        })
    },
    methods: {
        nextPage(){
        this.$store.commit('setCurrentPage', this.getCurrentPage + 1);
        },
        prevPage(){
        this.$store.commit('setCurrentPage', this.getCurrentPage - 1);
        },
        onPageChange(page) {
        this.$store.dispatch("Action_LoadAtendimentos", { currentPage : page, status : true });
        },
        buscarPessoa(item){
        if(item.params == ""){
        }
        this.$store.dispatch("Action_LoadAtendimento_ByParameter", item)
        }
    },
}
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
        <div class="row col">
            <SearchBar @buscaPessoa="buscarPessoa" :optionsList="[{ label: 'Nome', value: 'nome'}, { label: 'Nº doc', value: 'documento'}]" />
        </div>
        <!--<modal-atendimento :modulo="mode" @enviarForm="submit" :model="atendimentoFormulario" ></modal-atendimento> -->
        <div class="table-responsive loading">
            <TableLoading v-if="$store.getters.getLoading" />
                <table class="table table-striped table-hover table-sm" v-else="$store.getters.getLoading">
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
                               <li>
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
                                </li>
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
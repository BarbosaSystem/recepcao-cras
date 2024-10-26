<script>
import myMixin from '../mixin/mixinAtendimento.js'


export default {
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
    <div class="h-100 d-flex flex-column">
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
        <div class="card-group mt-3 d-flex flex-column gap-1">
            
            <AtendimentoCard v-for="(item, index) in getAtendimentos" :key="index"
                :item="item"
                @showAtendimentoForm="()=>{}"
                @showEditForm="()=>{}"
                @showDeleteForm="()=>{}"
                @showInfoForm="showInfoForm"
            />
            <Pagination v-if="getAtendimentos.length > 0" :disableButton:="$store.getters.getLoading" :total-pages="$store.getters.getPages" :per-page="$store.getters.GetPageSize" :current-page="$store.getters.getCurrentPage" @pagechanged="onPageChange" />
        </div>
        <modalAtendimento :modulo="mode" @enviarForm="submit" :model="atendimentoFormulario" />
    </div>
</template>
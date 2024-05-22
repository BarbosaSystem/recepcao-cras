<script>
import vInput from './vInput.vue'
    export default{
        components: {
            'v-input' : vInput
        },
        props: {
            model: Object,
            modulo: String
        },
        computed:{
            outro_tip_atendimento(){
              if(this.model.tipo_atendimento.value == 'Outros')
                return true
              else return false
            },
            validate(){
              if( (this.model.nome.value != '') && (this.model.documento.value != '') && (this.model.tipo_atendimento.value != ''))
                return true
              else return false
            },
            
        },
        methods: {
            updateClipBoard(){
                navigator.clipboard.readText().then((text) => {
                if(validarTextoClipboard(JSON.stringify(separarNomeECPF(text)))){
                    let objeto = separarNomeECPF(text); 
                    this.model.nome.value = objeto.nome
                    this.model.documento.value = objeto.cpf
                    Utils.toast(JSON.stringify({ message: 'Dados "colados com sucesso".', status: 'success' }))
                    } else {
                    Utils.toast(JSON.stringify({ message: 'Error ao processar a solicitação.', status: 'danger' }))
                    }
                })
                navigator.clipboard.writeText('')
            },
            headerTitle(valor){
                if(valor == "Create")
                return "Novo Registro"
                if(valor == "Update")
                return "Editar Registro"
                if(valor == "Info")
                return "Visualizar Registro"
            },
            async myMethod(){
                    if(this.atendimento){
                        console.log(this.atendimento.documentvo.toString())
                        const result = await Utils.request("createAtendimento", this.atendimento);
                    }
            }
        },
    }
</script>
<template>
<div ref="atendimento" class="modal fade" id="atendimentoModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="atendimentoLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <form class="needs-validation" novalidate="" @submit.prevent="$emit('enviarForm')" autocomplete="off">
          <div class="modal-content">
            <div class="modal-header bg-dark" data-bs-theme="dark">
            <h1 class="modal-title fs-5" id="atendimentoLabel">
                {{headerTitle(modulo)}}
            </h1>
            <button
                type="button"
                class="btn-close text-white"
                data-bs-dismiss="modal"
                aria-label="Close"
            ></button>
            </div>
            <div class="modal-body">

            <div class="row g-3">
                <div class="col-4" v-if="model.data">
                <v-input :item="model.data" />
                </div>
                <div class="col-4" v-if="model.prioridade">
                <v-input :item="model.prioridade" />
                </div>
                <div class="col-4" v-if="modulo == 'Create' " >
                <div class="form-group" style="height: 100%; display: flex; flex-direction: column; justify-content: flex-end; align-items: flex-end">
                    
                <button @click="updateClipBoard" class="btn btn-danger text-white" style="width: 48px" title="Colar dados da área de transferência" v-if="updateClipBoard" type="button" id="button-addon1"><i class="fa-solid fa-copy"></i></button>
                </div>
                
                </div>
                <div class="col-6" v-if="model.data_in_atendimento.value != '' && model.data_in_atendimento.value != 'Invalid Date'">
                <v-input :item="model.data_in_atendimento" />
                </div>
                <div class="col-12">
                <v-input :item="model.nome" />
                </div>
                <div class="col-4">
                <v-input :item="model.tipo_doc" :options_list="[{id: 0, nome: 'NIS'}, {id: 1, nome: 'CPF'} ]" />
                
                </div>
                <div class="col-8">
                <v-input :item="model.documento" />
                </div>
                <div class="col-md-6">
                <v-input :item="model.tipo_atendimento" :options_list="[{id: 0, nome: 'Atualização CadÚnico'}, {id: 1, nome: 'Atendimento Técnico'}, {id: 2, nome: 'Atualização CadÚnico e Atendimento Técnico'}, {id: 23, nome: 'Agendamento CEJUSC'}, {id: 4, nome: 'Outros'}  ]" />
                </div>
                <div class="col-md-6" v-if="outro_tip_atendimento">
                <v-input :item="model.outro_tipo" />
                </div>
                <div class="col-12">
                <v-input :item="model.observacao" />
                </div>
                
            </div>

            </div>
            <div class="modal-footer" v-if="modulo != 'Info' ">
            <button type="submit" :disabled="!validate || $store.getters.getLoading" class="btn btn-dark">
            <i v-if="$store.getters.getLoading" class="fa-solid fa-spinner fa-spin"></i>
            Salvar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
</template>
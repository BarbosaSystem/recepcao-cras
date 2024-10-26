<template>
    <div class="card data-item border" :key="item.id">
      <div class="card-body gap-1 p-2 d-flex align-items-center">
        <span class="prio ms-3" :class="{ 'bg-danger': item.prioridade, 'bg-success': !item.prioridade }"></span>
  
        <div class="data-info d-flex ms-3 gap-1 flex-column flex-fill">
          <h4 class="m-0 fw-bold">{{ item.nome }}</h4>
          <p class="m-0">{{ item.tipo_atendimento }}</p>
        </div>
  
        <div class="dropdown">
          <button :class="{ 'btn-dark': item.status }" class="btn btn-default btn-sm dropdown-toggle" type="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
            Opções
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li>
              <button type="button" class="btn btn-success dropdown-item" v-if="!item.status" title="Atender"
                      @click="showAtendimentoForm(item)">
                <i class="fa-solid fa-circle-check"></i> Atender
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
              <button type="button" class="btn btn-secondary dropdown-item" v-if="item.status" title="Mais Informações"
                      @click="showInfoForm(item)">
                <i class="fa-regular fa-circle-question"></i> Detalhes
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    methods: {
      showAtendimentoForm(item) {
        this.$emit('showAtendimentoForm', item);
      },
      showEditForm(item) {
        this.$emit('showEditForm', item);
      },
      showDeleteForm(item) {
        this.$emit('showDeleteForm', item);
      },
      showInfoForm(item) {
        this.$emit('showInfoForm', item);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Estilos personalizados para o componente */
  </style>
  
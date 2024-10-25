<script>
    export default {

    }
</script>
<template>
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
    <div class="card">
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th class="text-end">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01/01/2021</td>
                        <td  class="text-end">
                            <a href="/cejusc/20062024">
                                <i class="fa-solid fa-circle-arrow-right"></i>
                            </a>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
    const store = useStore();
    defineProps({
        optionsList: Array
    })
    const optionSelect = ref("");
    const isSearchActive = ref(false)
    const searchValue = ref("")
    const onChange = (event) => {
        console.log(optionSelect)
        searchValue.value = ""
    }
    const getLoading = computed(() => store.getters.getLoading)
    const search = () => {
        // Aqui você pode adicionar a lógica para lidar com a pesquisa quando a tecla Enter é pressionada
        const request = { key : optionSelect, params: searchValue }
        console.log("Pesquisando por:", request.params.value);
        //Envio dos parametros para busca no componente pai
        //this.$emit('buscaPessoa', request)
    }
    /*const toggleSearch = () => {
       isSearchActive = !isSearchActive
         if (this.isSearchActive) {
          this.$refs.searchInput.focus();
        } else {
          this.$refs.searchInput.blur();
        }
    }*/
</script>
<template>
    <div class="search-container">
          <select v-model="optionSelect" @change="onChange($event)" id="atendimento_tipo" class="select-input w-100" :class="{ active: isSearchActive }">
           <option value="" disabled selected>Selecione</option>
            <option v-for="(item, index) in optionsList" :value="item.value"> {{item.label}} </option>
          </select>
          
          <input data-bs-toggle="tooltip" 
            data-bs-placement="top" 
            title="Para carregar toda a listagem, deixe o campo em branco e clique na lupa." 
            type="text" id="search-input" @keyup.enter="search" v-model="searchValue" class="search-input" 
            placeholder="Buscar..." ref="searchInput" :class="{ active: isSearchActive }">
          <button class="search-icon btn btn-sm btn-dark" id="search-icon" @click="search" :disabled="getLoading">
            <i class="fas fa-search"></i>
          </button>
      </div>
</template>

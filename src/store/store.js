import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      logomarca: "https://imbuia.sc.gov.br/uploads/sites/391/2021/12/3117802.jpg",
      loading: false,
      Atendimentos: [],
      mensagem: '',
      listaEspera: [],
      listaConcluido : [],
      pages: 1, 
      pageSize: 10, 
      currentPage: 1,
      grafico: [],
      changeLog: [],
      loadingChangeLog: false,
    };
  },
  mutations: {
    setChangeLog(state, payload){
      state.changeLog = payload
    },
    setGrafico(state, payload){
      state.grafico = payload
    },
    setCurrentPage(state, payload){
      state.currentPage = payload
    },
    setPages(state, payload){
      state.pages = payload
    },
    setPageSize(state, payload){
      state.pageSize = payload
    },
    setLoadingChangeLog(state, payload) {
      state.loadingChangeLog = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setListAtendimento(state, payload) {
      state.Atendimentos = payload;
    },
    setMensagem(state, payload){
      state.mensagem = payload
    },
    setEspera(state, payload){
      state.listaEspera = payload
    },
    setConcluido(state, payload){
      state.listaConcluido = payload
    }
  },
  actions: {
    async Action_Grafico({commit}){
      commit("setLoading", true);
      try {
        const result = await Utils.request("unicos");
        commit("setGrafico", result);
      } catch (error) {
      } finally {
        commit("setLoading", false);
      }
    },
    async Action_Load_Espera({commit}){
      commit("setLoading", true);
      try {
        const result = await Utils.request("loadFalse");
        commit("setGrafico", result);
      } catch (error) {
      } finally {
        commit("setLoading", false);
      }
    },
    async Action_Load_Concluido({commit}){
      commit("setLoading", true);
      try {
        const result = await Utils.request("loadTrue");
        commit("setConcluido", result);
      } catch (error) {
      } finally {
        commit("setLoading", false);
      }
    },
    async Action_LoadAtendimentos({ commit, state }, payload) {
      commit("setLoading", true);
      try {
        commit("setCurrentPage", payload.currentPage)
        const result = await Utils.request("getItems", {
          sheetName: "atendimento",
          pageSize: state.pageSize,
          page: payload.currentPage,
          status: payload.status
        });
        commit("setPages", result.pages)
        commit("setCurrentPage", result.page)
        commit("setListAtendimento", result.items);
      } catch (error) {
      } finally {
        commit("setLoading", false);
      }
    },
    async Action_LoadChangeLog({commit}){
      commit("setLoadingChangeLog", true);
      try {
        const result = await Utils.request("getItems", {
          sheetName: "changelog",
          pageSize: 10,
          page: 1,
        });
        commit("setChangeLog", result.items);
      } catch (error) {
      } finally {
        commit("setLoadingChangeLog", false);
      }
    },
    async Action_LoadAtendimento_ByParameter({commit, state }, payload){
      commit("setLoading", true);
      try {
        commit("setCurrentPage", payload.currentPage)
        const result = await Utils.request("getItemsByName", {
          sheetName: "atendimento",
          pageSize: state.pageSize,
          page: 1,
          parametro: payload.params,
          key: payload.key
        });
        commit("setPages", result.pages)
        commit("setCurrentPage", result.page)
        commit("setListAtendimento", result.items);
        
      } catch (error) {
      } finally {
        commit("setLoading", false);
      }
    },
    async Action_CreateAtendimento({commit, dispatch}, payload){
      commit("setLoading", true);
      try {
        const result = await Utils.request("createAtendimento", payload);
        await Utils.toast(result)
        await dispatch("Action_LoadAtendimentos", { currentPage : 1, status: false })
      } catch (error) {
      } finally {
        commit("setLoading", false);
      }
    },
    async Action_Liberar_Atendimento({commit, dispatch}, payload){
      commit("setLoading", true);
      try{
        const result = await Utils.request("liberarAtendimento", { 
          sheetName: "atendimento", 
          jsonData: payload.id
        })
        await Utils.toast(result)
      }finally {
        await dispatch("Action_LoadAtendimentos", { currentPage : 1, status: false })
        commit("setLoading", false);
      }
    },
    async Action_UpdateItem({commit, dispatch}, payload){
      commit("setLoading", true);
      const result = await Utils.request("updateItem", { 
        sheetName: "atendimento", 
        jsonData: JSON.stringify(payload)
      })
      await Utils.toast(result)
      await dispatch("Action_LoadAtendimentos", { currentPage : 1, status: false })
      commit("setLoading", false);
    },
    async Action_DeleteAtendimento({dispatch, commit}, payload){
      commit("setLoading", true);
      const result = await Utils.request("deleteItem", { 
        sheetName: "atendimento", 
        jsonData: JSON.stringify(payload)
      })
      commit("setMensagem", result)
      await Utils.toast(result)
      await dispatch("Action_LoadAtendimentos", { currentPage : 1, status: false })
      commit("setLoading", false);
    }
  },
  getters: {
    getChangeLog: (state) => {
      return state.changeLog
    },
    getLogo: (state) => {
      return state.logomarca
    },
    getGrafico: (state) => {
      return state.grafico
    },
    getCurrentPage: (state) => {
      return state.currentPage
    },
    getPages: (state) => {
      return state.pages
    },
    getPageSize: (state) => {
      return state.pageSize
    },
    getLoading: (state) => {
      return state.loading
    },
    getLoadingChangeLog: (state) => {
      return state.loadingChangeLog
    },
    isAuth: (state) => {
      return state.user ? true : false;
    },
    getEspera(state){
      return state.listaEspera
    },
    getConcluido(state){
      return state.listaConcluido
    },
    getAtendimentos(state) {
      const items = [...state.Atendimentos].sort((a, b) => {
            if(a.id > b.id){return 1}
            if(a.id < b.id){return -1}
            return 0
          })
      return state.Atendimentos
    },
    getAtendimentostrue(state){
      const items = [...state.Atendimentos].sort((a, b) => {
            if(a.id > b.id){return 1}
            if(a.id < b.id){return -1}
            return 0
          })
      return items.reverse().filter((x) => x.status === true)
    },
    getAtendimentosfalse(state){
      const items = [...state.Atendimentos].sort((a, b) => {
            if(a.id > b.id){return 1}
            if(a.id < b.id){return -1}
            return 0
          })
      return items.reverse().filter((x) => x.status === false)
    },
    getMensagem(state){
      return state.mensagem
    },
    getAtendimentofilter: (state) => (pesquisa) => {
     if(pesquisa == "Todos"){
      return state.listaConcluido.filter((x)=> x.status === true)
     } else {
       return state.listaConcluido.filter((usuario) => {
        return usuario.tipo_atendimento.toLowerCase().includes(pesquisa.toLowerCase())
      }).reverse();
     }
    },
  }
});

export default store;

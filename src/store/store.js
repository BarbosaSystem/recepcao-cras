import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      logomarca: "https://imbuia.sc.gov.br/uploads/sites/391/2021/12/3117802.jpg",
      loading: false,
      Atendimentos: [
        {
          "_id": "664b54b02cf6e594ca1f1a4c",
          "index": 0,
          "data": "14/06/1994",
          "nome": "Beatrice Townsend",
          "documento": 79957663162,
          "tipo_doc": "NIS",
          "observacao": "Culpa duis deserunt consectetur commodo. Ad laborum dolore veniam proident id nisi laboris dolor consectetur. Ad sunt officia voluptate sint quis velit nostrud excepteur ad sint nostrud. Magna tempor cillum enim et et ut. Do reprehenderit sunt sint velit eu.\r\n",
          "tipo_atendimento": "Atendimento Técnico",
          "outro_tipo": "",
          "status": true,
          "data_atendimento": "22/10/1994",
          "prioridade": false
        },
        {
          "_id": "664b54b0f79b4271cd201700",
          "index": 1,
          "data": "22/04/1990",
          "nome": "Horton Wynn",
          "documento": 72390887904,
          "tipo_doc": "NIS",
          "observacao": "Excepteur eu irure cillum cillum Lorem aliquip ex culpa aute. Aliqua officia sit occaecat Lorem tempor magna velit deserunt nulla enim commodo esse. Eiusmod ut anim sint magna proident do sunt ad nostrud veniam cupidatat id exercitation officia. Esse id magna est id magna in. Exercitation amet laboris magna ex duis eiusmod quis enim ea elit. Officia magna aute duis commodo occaecat esse duis non.\r\n",
          "tipo_atendimento": "Atendimento Técnico",
          "outro_tipo": "",
          "status": true,
          "data_atendimento": "24/12/2014",
          "prioridade": false
        },
        {
          "_id": "664b54b07980dc308480f81e",
          "index": 2,
          "data": "11/10/1980",
          "nome": "Moon Stevenson",
          "documento": 32859071465,
          "tipo_doc": "NIS",
          "observacao": "Ad do culpa ex anim voluptate irure ad ullamco in culpa ea nostrud. Commodo dolore nisi consectetur sunt occaecat ullamco aute commodo exercitation id. Veniam consectetur occaecat sunt officia consectetur adipisicing adipisicing dolore fugiat mollit amet irure commodo. Enim dolore cupidatat deserunt labore excepteur nisi sit id nostrud reprehenderit proident ipsum. Dolore duis Lorem laboris ex ea proident aliqua est.\r\n",
          "tipo_atendimento": "Atualização CadÚnico",
          "outro_tipo": "",
          "status": true,
          "data_atendimento": "04/12/1974",
          "prioridade": false
        },
        {
          "_id": "664b54b075638e52bee2bfd1",
          "index": 3,
          "data": "18/02/1986",
          "nome": "Beasley Cole",
          "documento": 95223666431,
          "tipo_doc": "CPF",
          "observacao": "Culpa ea amet irure cupidatat sit. Adipisicing eiusmod cillum aliqua cillum incididunt. Minim esse esse consequat incididunt voluptate laborum laborum labore occaecat. Nisi exercitation voluptate consequat ut cupidatat veniam magna adipisicing duis eiusmod id exercitation adipisicing ipsum.\r\n",
          "tipo_atendimento": "Atualização CadÚnico",
          "outro_tipo": "",
          "status": false,
          "data_atendimento": "20/11/2004",
          "prioridade": false
        },
        {
          "_id": "664b54b013d45dd50f3e48a3",
          "index": 4,
          "data": "21/10/2011",
          "nome": "Joy Herman",
          "documento": 33770732336,
          "tipo_doc": "CPF",
          "observacao": "Deserunt voluptate eiusmod ex sit enim ut eu magna qui nulla ipsum. Magna ipsum consequat labore commodo. Veniam magna mollit minim in. Velit aliqua veniam Lorem nulla exercitation laborum culpa incididunt eiusmod laboris culpa tempor eiusmod.\r\n",
          "tipo_atendimento": "Atendimento Técnico",
          "outro_tipo": "",
          "status": false,
          "data_atendimento": "15/08/2021",
          "prioridade": false
        },
        {
          "_id": "664b54b09614b71c4da4e448",
          "index": 5,
          "data": "20/12/1980",
          "nome": "Sharp Howe",
          "documento": 44493624825,
          "tipo_doc": "NIS",
          "observacao": "Culpa esse mollit nostrud aliquip laborum ex. Exercitation Lorem veniam et nisi do reprehenderit laboris ullamco do adipisicing. Dolore esse ad irure do ipsum incididunt laborum sint ut pariatur officia ullamco et cillum.\r\n",
          "tipo_atendimento": "Atendimento Técnico",
          "outro_tipo": "",
          "status": true,
          "data_atendimento": "24/12/1988",
          "prioridade": false
        }
      ],
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
          sheetnome: "atendimento",
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
          sheetnome: "changelog",
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
        const result = await Utils.request("getItemsBynome", {
          sheetnome: "atendimento",
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
          sheetnome: "atendimento", 
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
        sheetnome: "atendimento", 
        jsonData: JSON.stringify(payload)
      })
      await Utils.toast(result)
      await dispatch("Action_LoadAtendimentos", { currentPage : 1, status: false })
      commit("setLoading", false);
    },
    async Action_DeleteAtendimento({dispatch, commit}, payload){
      commit("setLoading", true);
      const result = await Utils.request("deleteItem", { 
        sheetnome: "atendimento", 
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

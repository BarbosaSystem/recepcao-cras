import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      logomarca: "https://imbuia.sc.gov.br/uploads/sites/391/2021/12/3117802.jpg",
      loading: false,
      Atendimentos: [
        {
          "id": "664e03482484a97583cea54d",
          "index": 0,
          "data": "2003-08-21T02:56:48.434Z",
          "nome": "Joanne Andrews",
          "documento": 38245879507,
          "tipo_doc": "NIS",
          "observacao": "Officia non ut aliqua amet sunt enim incididunt adipisicing fugiat ut. Aliquip deserunt aliquip proident proident Lorem ut culpa fugiat labore proident officia nulla mollit. In magna eu anim anim irure dolor Lorem non mollit nisi. Duis officia eiusmod ipsum aute. Sint consectetur eiusmod ipsum eiusmod occaecat ea anim voluptate cillum cupidatat et duis duis.\r\n",
          "tipo_atendimento": "Atualização CadÚnico",
          "outro_tipo": "",
          "status": true,
          "data_atendimento": "29/10/1992",
          "prioridade": false
        },
        {
          "id": "664e0348cb1098aacdc6c531",
          "index": 1,
          "data": "1972-10-11T09:31:48.740Z",
          "nome": "Henderson Tyler",
          "documento": 18421498774,
          "tipo_doc": "NIS",
          "observacao": "Eu dolor ipsum aliquip in laborum ipsum in velit cupidatat amet laboris velit. Aliquip incididunt elit id magna laborum. Labore consectetur qui eiusmod eiusmod qui reprehenderit pariatur nulla. Irure dolore est elit duis esse adipisicing irure laboris adipisicing veniam enim est. Fugiat ut tempor incididunt adipisicing minim magna est officia voluptate laboris ex.\r\n",
          "tipo_atendimento": "Atualização CadÚnico",
          "outro_tipo": "",
          "status": true,
          "data_atendimento": "09/07/2016",
          "prioridade": false
        },
        {
          "id": "664e0348e92d10c83ef64f47",
          "index": 2,
          "data": "2004-11-15T04:43:26.604Z",
          "nome": "Dorthy Underwood",
          "documento": 58357966061,
          "tipo_doc": "CPF",
          "observacao": "Sit et tempor elit enim voluptate magna non labore eiusmod sit deserunt qui fugiat. Ex reprehenderit excepteur est deserunt cillum proident mollit voluptate minim mollit commodo in amet. Nostrud aute fugiat eu tempor consequat aliqua do ipsum.\r\n",
          "tipo_atendimento": "Atendimento Técnico",
          "outro_tipo": "",
          "status": false,
          "data_atendimento": "15/05/2016",
          "prioridade": false
        },
        {
          "id": "664e0348b4ab4cefa518fc93",
          "index": 3,
          "data": "1990-11-27T19:10:26.523Z",
          "nome": "Downs Parsons",
          "documento": 60591196941,
          "tipo_doc": "NIS",
          "observacao": "In non non aliquip labore excepteur id excepteur. Cupidatat veniam dolor duis et nisi. Pariatur voluptate magna laboris elit nulla. Quis quis deserunt qui tempor incididunt velit adipisicing ipsum eu excepteur. Voluptate in minim exercitation aliqua tempor id ea amet occaecat id nisi. Aute ipsum ipsum aliqua elit pariatur amet exercitation.\r\n",
          "tipo_atendimento": "Atualização CadÚnico",
          "outro_tipo": "",
          "status": false,
          "data_atendimento": "26/01/2001",
          "prioridade": false
        },
        {
          "id": "664e0348929a97c6e933508d",
          "index": 4,
          "data": "2012-08-15T01:03:32.157Z",
          "nome": "Dominique Riley",
          "documento": 64086157260,
          "tipo_doc": "NIS",
          "observacao": "Deserunt duis nostrud sit irure sit laboris et. Ipsum excepteur nisi sunt esse non labore eiusmod commodo esse do consequat ex sint. Mollit laboris ut aute occaecat laborum non cupidatat voluptate incididunt. Mollit laborum duis qui adipisicing irure adipisicing laboris ex reprehenderit ex est. Aliqua irure tempor duis excepteur eu magna ut labore. Sit in pariatur laboris sunt ex fugiat elit.\r\n",
          "tipo_atendimento": "Atendimento Técnico",
          "outro_tipo": "",
          "status": false,
          "data_atendimento": "28/08/2017",
          "prioridade": false
        },
        {
          "id": "664e034853ee5ec1fcef30be",
          "index": 5,
          "data": "1997-05-25T09:43:24.915Z",
          "nome": "Adele Navarro",
          "documento": 71724509332,
          "tipo_doc": "CPF",
          "observacao": "Id est velit aliqua sint in Lorem sint in minim. Id ut ad ipsum id elit. Sint nisi veniam minim cupidatat magna tempor minim non duis laboris esse. Est sint aliqua id duis ullamco et ad ea nostrud aliquip aute dolore. Eu proident officia tempor reprehenderit fugiat.\r\n",
          "tipo_atendimento": "Atendimento Técnico",
          "outro_tipo": "",
          "status": true,
          "data_atendimento": "06/10/1985",
          "prioridade": false
        },
        {
          "id": "664e0348665e7c85f6f51b96",
          "index": 6,
          "data": "1991-02-07T12:08:44.491Z",
          "nome": "Watson Valentine",
          "documento": 58092547826,
          "tipo_doc": "CPF",
          "observacao": "Laboris nostrud et nisi amet nisi mollit magna voluptate adipisicing et aute. Nostrud irure esse quis esse qui velit cupidatat elit voluptate. Quis incididunt officia tempor officia qui. Ut aute fugiat ad incididunt non. Incididunt ullamco ut nostrud nostrud labore culpa. Exercitation et culpa quis nulla labore ipsum occaecat nisi qui.\r\n",
          "tipo_atendimento": "Atendimento Técnico",
          "outro_tipo": "",
          "status": false,
          "data_atendimento": "07/11/1977",
          "prioridade": false
        },
        {
          "id": "664e0348d430b98218cfa338",
          "index": 7,
          "data": "1971-09-05T01:18:19.202Z",
          "nome": "Eunice Burks",
          "documento": 91608780255,
          "tipo_doc": "NIS",
          "observacao": "Elit duis irure culpa est dolor magna. Exercitation dolor Lorem incididunt aute esse nostrud ex irure amet dolore nisi nostrud est nostrud. Non nisi ut quis in eiusmod duis fugiat nostrud duis occaecat sunt. Mollit duis enim adipisicing elit est ex laboris mollit aliqua ea esse aute est. Eu et eu quis deserunt Lorem non velit tempor eiusmod. Veniam deserunt sint ex nulla non occaecat qui nisi.\r\n",
          "tipo_atendimento": "Atualização CadÚnico",
          "outro_tipo": "",
          "status": true,
          "data_atendimento": "20/02/2023",
          "prioridade": false
        },
        {
          "id": "664e0348f9d1232c53f8a6ba",
          "index": 8,
          "data": "1982-04-22T19:03:29.480Z",
          "nome": "Ilene Castaneda",
          "documento": 91436896769,
          "tipo_doc": "CPF",
          "observacao": "Deserunt deserunt sint fugiat irure tempor quis. Dolore in cillum non id deserunt consectetur aliqua fugiat. Lorem Lorem labore reprehenderit qui aliqua dolore id veniam. Occaecat nulla do ex sint cupidatat esse in mollit pariatur culpa aliqua commodo qui. Cupidatat ea exercitation quis pariatur elit non aute ea adipisicing non enim Lorem ea. Cupidatat nulla cillum in voluptate deserunt.\r\n",
          "tipo_atendimento": "Atualização CadÚnico",
          "outro_tipo": "",
          "status": true,
          "data_atendimento": "22/06/2020",
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

import { mapGetters } from "vuex"
import SearchBar from '../components/searchBar.vue';
import TableLoading from '../components/tableLoading.vue' ;
import Pagination from '../components/pagination.vue';
import modalAtendimento from '../components/modalAtendimento.vue';

export default {
    components:{
      SearchBar,
      TableLoading,
      Pagination,
      modalAtendimento
    },
    computed: {
        ...mapGetters(["getAtendimentos", "getCurrentPage", "getPages", "getGrafico", "getLoading"]),
        getAtendimentoCadUnico(){
          return this.getAtendimentos.filter((x) => x.tipo_atendimento === "Atualização CadÚnico")
        },
        getAtendimentoTecnico(){
          return this.getAtendimentos.filter((x) => x.tipo_atendimento === "Atendimento Técnico")
        }
    },
    data() {
        return {
          mode: 'Info',
          atendimentoFormulario: this.$Utils.copyObject(this.$Utils.atendimentoModel()),
          filtro: '',
        }
    },
    methods: {
      
      showCreateForm(){
          this.mode = "Create"
          this.atendimentoFormulario = this.$Utils.copyObject(this.$Utils.atendimentoModel())
          var myModal = new bootstrap.Modal(document.getElementById("atendimentoModal"), {
            keyboard: false,
          });
          myModal.show();
          //openDialog("atendimentoModal")
        },
        showEditForm(item){
          this.mode = "Update"
          this.atendimentoFormulario = this.$Utils.copyObject(this.$Utils.atendimentoModel()),
          Object.keys(this.atendimentoFormulario).forEach((key) => {
            if (item.hasOwnProperty(key))
              this.atendimentoFormulario[key].value = item[key];
          });
          var myModal = new bootstrap.Modal(document.getElementById("atendimentoModal"), {
            keyboard: false,
          });
          myModal.show();
         //openDialog("atendimentoModal")
        },
        /* showInfoForm(item){
          this.mode = "Info"
          Object.keys(this.atendimentoFormulario).forEach((key) => {
              if (item.hasOwnProperty(key))
                this.atendimentoFormulario[key].value = item[key];
              if (!item.status)
                this.atendimentoFormulario[key].disabled = true;
          })
          var myModal = new bootstrap.Modal(document.getElementById("atendimentoModal"), {
            keyboard: false,
          });
          myModal.show();
          //openDialog("atendimentoModal")
        },*/
        showDeleteForm(item){
            this.mode = "Delete"
            this.atendimentoFormulario = this.$Utils.copyObject(this.$Utils.atendimentoModel())
            Object.keys(this.atendimentoFormulario).forEach(key => {
              if (item.hasOwnProperty(key)) this.atendimentoFormulario[key].value = item[key]
              this.atendimentoFormulario[key].disabled = true
            })
           // openDialog("atendimentoModalDelete")
        },
        showAtendimentoForm(item){
          this.atendimentoFormulario = this.$Utils.copyObject(this.$Utils.atendimentoModel())
          Object.keys(this.atendimentoFormulario).forEach(key => {
            if (item.hasOwnProperty(key)) this.atendimentoFormulario[key].value = item[key]
            this.atendimentoFormulario[key].disabled = true
          })
          //openDialog("modalAtender")
        },
        async deleteRegistro(){
          const data = {};
          Object.entries(this.atendimentoFormulario).forEach(([key, item]) => {
            data[key] = item.value.toString();
          });
          const formulario = {id: data.id}
          await this.$store.dispatch("Action_DeleteAtendimento", formulario);
          closeDialog("atendimentoModalDelete")
        },
        async changeStatus(){
          const data = {};
          Object.entries(this.atendimentoFormulario).forEach(([key, item]) => {
            data[key] = item.value.toString();
          });
          await this.$store.dispatch("Action_Liberar_Atendimento", { id: data.id })
          //closeDialog("modalAtender")
        },
      async submit(){
          const data = {};
          Object.entries(this.atendimentoFormulario).forEach(([key, item]) => {
            data[key] = item.value.toString();
          });
          switch (this.mode){
            case "Create" : 
              await this.$store.dispatch("Action_CreateAtendimento", data);
              break;
            case "Update":
              await this.$store.dispatch("Action_UpdateItem", data)
              break;
          }
          //closeDialog("atendimentoModal")
        },
        showInfoForm(item){
          this.mode = "Info"
          Object.keys(this.atendimentoFormulario).forEach((key) => {
              if (item.hasOwnProperty(key))
                this.atendimentoFormulario[key].value = item[key];
              if(key == 'data_in_atendimento'){
                let options = {
                    timeZone: 'America/Sao_Paulo', // Lista de Timezones no fim do artigo
                    hour12: false, // Alterna entre a mostragem dos horários em 24 horas, ou então AM/PM
                }
                var hora = new Date(item.data_in_atendimento).toLocaleString('pt-br', options).substr(0,17)
                this.atendimentoFormulario[key].value = hora
              }
              this.atendimentoFormulario[key].disabled = true;
          })
          var myModal = new bootstrap.Modal(document.getElementById("atendimentoModal"), {
            keyboard: false,
          });
          myModal.show();
          //openDialog("atendimentoModal")
        },
        docLength(texto){
          if(texto.toString().length == 10)
            return "0"+texto
          else 
            return texto
        },
        ConvertData(dateString){
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
        },
    }
}
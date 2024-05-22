import { mapGetters } from "vuex"

export default {
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
          this.atendimentoFormulario = this.$Utils.copyObject(this.$Utils.atendimentoModel()),
          this.$Utils.openDialog("atendimentoModal")
        },
        showEditForm(item){
          this.mode = "Update"
          this.atendimentoFormulario = this.$Utils.copyObject(this.$Utils.atendimentoModel()),
          Object.keys(this.atendimentoFormulario).forEach((key) => {
            if (item.hasOwnProperty(key))
              this.atendimentoFormulario[key].value = item[key];
          });
          this.$Utils.openDialog("atendimentoModal")
        },
        showInfoForm(item){
          this.mode = "Info"
          Object.keys(this.atendimentoFormulario).forEach((key) => {
              if (item.hasOwnProperty(key))
                this.atendimentoFormulario[key].value = item[key];
              if (!item.status)
                this.atendimentoFormulario[key].disabled = true;
          })
          this.$Utils.openDialog("atendimentoModal")
        },
        showDeleteForm(item){
            this.mode = "Delete"
            this.atendimentoFormulario = this.$Utils.copyObject(this.$Utils.atendimentoModel())
            Object.keys(this.atendimentoFormulario).forEach(key => {
              if (item.hasOwnProperty(key)) this.atendimentoFormulario[key].value = item[key]
              this.atendimentoFormulario[key].disabled = true
            })
            this.$Utils.openDialog("atendimentoModalDelete")
        },
        showAtendimentoForm(item){
          this.atendimentoFormulario = this.$Utils.copyObject(this.$Utils.atendimentoModel())
          Object.keys(this.atendimentoFormulario).forEach(key => {
            if (item.hasOwnProperty(key)) this.atendimentoFormulario[key].value = item[key]
            this.atendimentoFormulario[key].disabled = true
          })
          this.$Utils.openDialog("modalAtender")
        },
        async deleteRegistro(){
          const data = {};
          Object.entries(this.atendimentoFormulario).forEach(([key, item]) => {
            data[key] = item.value.toString();
          });
          const formulario = {id: data.id}
          await this.$store.dispatch("Action_DeleteAtendimento", formulario);
          this.$Utils.closeDialog("atendimentoModalDelete")
        },
        async changeStatus(){
          const data = {};
          Object.entries(this.atendimentoFormulario).forEach(([key, item]) => {
            data[key] = item.value.toString();
          });
          await this.$store.dispatch("Action_Liberar_Atendimento", { id: data.id })
          this.$Utils.closeDialog("modalAtender")
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
          this.$Utils.closeDialog("atendimentoModal")
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
          this.$Utils.openDialog("atendimentoModal")
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
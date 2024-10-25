import cejuscModel from "./cejuscModel.js";

export const MeuPlugin = {
    install(app) {
      // Adicione métodos, diretivas, componentes, etc. ao Vue
      app.config.globalProperties.$Utils = {
          ...cejuscModel,
          atendimentoModel (){
            return { id: {
              id: "atendimento_id",
              label: "ID",
              type: "text",
              value: "",
              disabled: true,
            },
            data: {
              id: 'atendimento_data',
              label: 'Data',
              type: 'date',
              value: new Date().toISOString().substr(0, 10),
              disabled: true,
            },
            nome: {
              id: "atendimento_nome",
              label: "Nome",
              type: "text",
              value: "",
              disabled: false,
            },
            documento: {
              id: "atendimento_documento",
              label: "Documento",
              type: "text",
              value: "",
              disabled: false,
            },
            tipo_doc: {
              id: "atendimento_tipo_doc",
              label: "Tipo de Documento",
              type: "select",
              value: "",
              options: [{ id: 0, nome: 'CPF' }, { id: 1, nome: 'NIS' }],
              disabled: false,
            },
            data_atenidmento: {
              id: "atendimento_data",
              label: "Data de Atendimento",
              type: "text",
              value: new Date().toISOString().substr(0, 10),
              disabled: false,
            },
            observacao: {
              id: "atendimento_observacao",
              label: "Observação",
              type: "textarea",
              value: "",
              disabled: false,
            },
            tipo_atendimento: {
              id: "atendimento_tipo",
              label: "Tipo de Atendimento",
              type: "select",
              value: "",
              disabled: false,
            },
            outro_tipo: {
              id: "atendimento_outro_tipo",
              label: "Informar tipo",
              type: "text",
              value: "",
              disabled: false,
            },
            data_in_atendimento: {
              id: "atendimento_data_inic",
              label: "Início do Atendimento",
              type: "text",
              value: '',
              disabled: false,
            },
            status: {
              id: "atendimento_status",
              label: "Status do Atendimento",
              type: "text",
              value: false,
              disabled: false,
            },
            prioridade: {
              id: "antendimento_prioridade",
              label: "Atenidmento Prioritário",
              type: "Boolean",
              value: false,
              disabled: false
            }}
          },
          copyObject(obj) {
            return JSON.parse(JSON.stringify(obj));
          },
          closeOffcanvas() {
            
          },
          closeDialog(id) {
            const dialog = document.getElementById(id);
            bootstrap.Modal.getInstance(dialog).hide();
          },
          openDialog(id) {
            var myModal = new bootstrap.Modal(document.getElementById(id), {
              keyboard: false,
            });
            myModal.show();
          },
          toast(message) {
            const result = JSON.parse(message);
            var conteudo = document.querySelector('.toast-body');
            conteudo.innerHTML = result.message;
        
            var status = document.querySelector('.toast-header');
            for (let className of [...status.classList]) {
              if (className.startsWith('text-')) {
                status.classList.remove(className);
              }
            }
            status.classList.add(`text-bg-${result.status}`);
        
            setTimeout(() => {
              var myAlert = document.getElementById('toastNotice');
              var bsAlert = new bootstrap.Toast(myAlert);
              bsAlert.show();
            }, 500);
          },
          ConverterData(dateString) {
            var parts = dateString.split("-");
            var year = parseInt(parts[0]);
            var month = parseInt(parts[1]);
            var day = parseInt(parts[2]);
            var date = new Date(year, month - 1, day);
            date.setDate(date.getDate());
            var newDay = date.getDate();
            var newMonth = date.getMonth() + 1;
            var newYear = date.getFullYear();
            var formattedDate =
              ("0" + newDay).slice(-2) +
              "/" +
              ("0" + newMonth).slice(-2) +
              "/" +
              newYear;
            return formattedDate;
          },
          request: async (functionName, params = {}) => {
            params = JSON.stringify(params);
            return new Promise((resolve, reject) => {
              google.script.run
                .withSuccessHandler((response) => resolve(JSON.parse(response)))
                .withFailureHandler((err) => reject(err))
                [functionName](params);
            });
          },
          setToken(token) {
            if (typeof token === "object") token = JSON.stringify(token);
            try {
              localStorage.setItem(this.KEY.TOKEN, token);
            } catch (err) {
              // pass
            }
          },
          getToken() {
            try {
              return localStorage.getItem(this.KEY.TOKEN);
            } catch (err) {
              // pass
            }
          },
          showAlert(mensagem, type) {
            const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
            const appendAlert = (message, type) => {
              const wrapper = document.createElement("div");
              wrapper.innerHTML = [
                `<div id="alerta" class="alert alert-${type} alert-dismissible" role="alert">`,
                `   <div class="fw-bold">${message}</div>`,
                '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                "</div>",
              ].join("");
        
              alertPlaceholder.append(wrapper);
            };
            appendAlert(mensagem, type);
            setTimeout(function () {
              const alert = bootstrap.Alert.getOrCreateInstance("#alerta");
              alert.close();
            }, 3000);
          },
          respostaAlert(status, mensagem) {
            switch (status) {
              case 200:
                Utils.showAlert(mensagem, "success");
                break;
              case 404:
                Utils.showAlert(mensagem, "danger");
                break;
              case 401:
                Utils.showAlert(mensagem, "warning");
                break;
            }
          },
          ChangeStatusObject(objeto, value) {
            Object.keys(objeto).forEach((key) => {
              objeto[key].disabled = value;
            });
          },
          IsJsonValid(jsonSobjetotring) {
            try {
              JSON.parse(jsonSobjetotring);
              return true;
            } catch (error) {
              return false;
            }
          },
          separarNomeECPF(texto) {
            // Implementation,
          },
          mphone(v) {
            var r = v.replace(/\D/g, "");
            r = r.replace(/^0/, "");
            if (r.length > 10) {
              r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
            } else if (r.length > 5) {
              r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
            } else if (r.length > 2) {
              r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
            } else {
              r = r.replace(/^(\d*)/, "($1");
            }
            return r;
          },
          mask(o, f) {
            setTimeout(function () {
              var v = mphone(o.value);
              if (v != o.value) {
                o.value = v;
              }
            }, 1);
          },
          validarTextoClipboard(texto) {
            try {
              // Tentar fazer o parsing do texto como JSON
              var objeto = JSON.parse(texto);
        
              // Verificar se o objeto possui as chaves "nome" e "cpf"
              if (objeto && objeto.nome && objeto.cpf) {
                  return true;
              } else {
                  return false;
              }
          } catch (error) {
              // Se houver um erro ao fazer o parsing do JSON, retornar falso
              return false;
          }
          }
      }
  
      // Você também pode adicionar diretivas, componentes, etc.
    },
  };
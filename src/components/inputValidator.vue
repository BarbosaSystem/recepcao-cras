<template>
    <div>
        <input :name="name" v-if="tipo === 'texto'" type="text" v-model="valor" @input="validarTexto" class="form-control"
            :class="{ 'input-invalido': !valido, 'input-valido': valido }" :placeholder="placeholder" autocomplete="off"/>
        <input :name="name" v-else-if="tipo === 'email'" type="email" v-model="valor" @input="validarEmail" class="form-control"
            :class="{ 'input-invalido': !valido }" :placeholder="placeholder"  autocomplete="off" />
        <input :name="name" v-else-if="tipo === 'password'" type="password" v-model="valor" @input="validatorPassword" class="form-control"
            :class="{ 'input-invalido': !valido }" :placeholder="placeholder" />
    </div>
</template>
  
  <script>
  export default {
    props: {
       name: {
        type: String,
        required: true
      },
      tipo: {
        type: String,
        required: true
      },
      classe: {
        type: String,
        required: false
      },
      placeholder: {
        type:String,
        required: false
      },
      id:{
        type:String,
        required: true
      }
    },
    data() {
      return {
        valor: '',
        valido: false
      };
    },
    methods: {
      validarTexto() {
        // Expressão regular para validar texto
        const regex = /^[a-zA-Z0-9 ]*$/;
        // Testar se o texto atende à regex
        this.valido = regex.test(this.valor);
      },
      validarEmail() {
        // Expressão regular para validar email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Testar se o email atende à regex
        this.valido = regex.test(this.valor);
      },
      validatorPassword(){
        console.log('teste')
        if(this.valor.length >= 5){
            this.valido = true
        } else {
            this.valido = false
        }
      }
    }
  };
  </script>
  
  <style scoped>
    .input-invalido {
        border: 2px solid red;
    }
    .input-valido {
        border: 2px solid green;
    }
    .login_wrapper .form-control {
        height: 53px;
        padding: 15px 20px;
        font-size: 18px;
        line-height: 24px;
        border: 1px solid rgba(0, 0, 0, 1);
        border-radius: 3px;
        box-shadow: none;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
        background-color: #fafafa;
    }

    .login_wrapper .form-control:focus {
        background-color: fafafa;
        border: 1px solid #4285f4 !important;
    }
  </style>
  
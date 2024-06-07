<script>
import imagemLogo from '../javascript/constantes.js'
import inputValidator from '../components/inputValidator.vue'

export default {
    components:{
        inputValidator
    },
    data(){
        return {
            imagemBase64 : imagemLogo
        }
    },
    methods:{
        enviar(){
            const {email, password} = event.target
            console.log(email.value)
            console.log(password.value)
            
        }
    }
}
</script>
<template>
    <div class="login_form_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2 ">
                    <!-- login_wrapper -->
                    <form class="login_wrapper" @submit.prevent="enviar(e)">
                        <div class="row">
                            <img class="imagem-logo mx-auto" :src="imagemBase64" alt="">
                            <h2>Atendimentos</h2>
                            <!--<div class="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                                <a href="#" class="btn btn-primary facebook"> <span>Login with Facebook</span> <i
                                        class="fa fa-facebook"></i> </a>
                            </div>
                            <div class="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                                <a href="#" class="btn btn-primary google-plus"> Login with Google <i
                                        class="fa fa-google-plus"></i> </a>
                            </div>-->
                        </div>
                        <div class="formsix-pos">
                            <div class="form-group i-email">
                                <inputValidator name="email" tipo="email" id="email2"
                                    placeholder="Email"/>
                            </div>
                        </div>
                        <div class="formsix-e">
                            <div class="form-group i-password">
                                <inputValidator name="password" tipo="password" id="password2"
                                    placeholder="Senha..."/>
                            </div>
                        </div>
                        <!--<div class="login_remember_box">
                            <label class="control control--checkbox">Remember me
                                <input type="checkbox">
                                <span class="control__indicator"></span>
                            </label>
                            <a href="#" class="forget_password" >
                                Forgot Password
                            </a>
                        </div>-->
                        <div class="login_btn_wrapper ">
                            <button type="submit" class="btn login_btn"> Login </button>
                        </div>
                        <div class="login_message">
                            <p>{{ new Date().getFullYear() }}</p>
                        </div>
                    </form>
                    <!-- /.login_wrapper-->
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.login_form_wrapper {
    float: left;
    width: 100%;
    height: 100vh;
    background-color: grey;
    display: flex;
    align-items: center;
}
.login_wrapper img{
    height: 32px;
    width: 48px;
}
.login_wrapper {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e4e4e4;
    float: left;
    width: 100%;
    background: #fff;
    padding: 50px;
}

.login_wrapper button.btn {
    color: black;
    width: 100%;
    height: 50px;
    padding: 6px 25px;
    line-height: 36px;
    margin-bottom: 20px;
    text-align: left;
    border-radius: 5px;
    background: white;
    font-size: 16px;
    border: 1px solid black;
}


.login_wrapper a i {
    float: right;
    margin: 0;
    line-height: 35px;
}

.login_wrapper a.google-plus {
    background: #db4c3e;
    border: 1px solid #db4c3e;
}

.login_wrapper h2 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
    color: #111;
    line-height: 20px;
    text-transform: uppercase;
    text-align: center;
    position: relative;
}

.login_wrapper .formsix-pos,
.formsix-e {
    position: relative;
}

.form-group {
    margin-bottom: 15px;
}



.login_remember_box {
    margin-top: 30px;
    margin-bottom: 30px;
    color: #999;
}

.login_remember_box .control {
    position: relative;
    padding-left: 20px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    margin: 0;
}

.login_remember_box .control input {
    position: absolute;
    z-index: -1;
    opacity: 0;
}

.login_remember_box .control__indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    background: #fff;
    border: 1px solid #999;
}

.login_remember_box .forget_password {
    float: right;
    color: #db4c3e;
    line-height: 12px;
    text-decoration: underline;
}

.login_btn_wrapper {
    border-bottom: 1px solid #e4e4e4;
}

.login_btn_wrapper button.login_btn {
    text-align: center;
    text-transform: uppercase;
}

.login_message p {
    text-align: center;
    font-size: 16px;
    margin: 0;
}

p {
    color: #999999;
    font-size: 14px;
    line-height: 24px;
}

.login_wrapper button.login_btn:hover {
    background-color: black;
    border-color: #2c6ad4;
}

.login_wrapper button.btn:hover {
    background-color: black;
    border-color: black;
    color: white;
}

.login_wrapper a.google-plus:hover {
    background: #bd4033;
    border-color: #bd4033;
}

</style>
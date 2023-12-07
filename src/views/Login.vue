<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        data() {
            return {
                login: '',
                senha: '',
                loading: false,
                erro: '',
                inputLoginFocus: false,
                inputSenhaFocus: false,
            }
        },
        methods: {
            efetuarLogin() {
                if(!this.login && !this.senha){
                    this.erro = 'Favor preencher o formulário';
                    return;
                }

                alert('Login efetuado' + this.login + ', ' + this.senha);
            },
            setFocusLogin(v :boolean) {
                this.inputLoginFocus = v;
            },

            setFocusSenha(v :boolean) {
                this.inputSenhaFocus = v;
            }
        }
    });
</script>

<template>
    <div class="container-publico">
        <img src="../assets/imagens/logo.svg" alt="Logo Devagram" class="logo" />
        <form>
            <p v-if="erro" class="erro">{{ erro }}</p>
            <div class="input" :class="{focus : inputLoginFocus}">
                <img src="../assets/imagens/envelope.svg" alt="Insira o login" />
                <input type="text" v-model="login" placeholder="E-mail"
                    @focus="setFocusLogin(true)"
                    @blur="setFocusLogin(false)"
                />
            </div>
            <div class="input" :class="{focus : inputSenhaFocus}">
                <img src="../assets/imagens/chave.svg" alt="Informe a senha" />
                <input type="password" v-model="senha" placeholder="Senha"
                    @focus="setFocusSenha(true)"
                    @blur="setFocusSenha(false)"
                />
            </div>
            <button @click.enter.prevent="efetuarLogin">Login</button>
            <div class="link">
                <p>Não possuí uma conta?</p>
                <a>Faça seu cadastro agora!</a>
            </div>
        </form>
    </div>
</template>

<style lang="scss" src="@/assets/styles/paginaPublica.scss" />
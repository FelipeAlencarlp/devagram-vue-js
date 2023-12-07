<script lang="ts">
    import InputPublico from '@/components/InputPublico.vue';
    import { defineComponent } from 'vue';
    import iconeLogin from '../assets/imagens/envelope.svg';
    import iconeSenha from '../assets/imagens/chave.svg';

    export default defineComponent({
        setup() {
            return {
                iconeLogin,
                iconeSenha
            }
        },
        data() {
            return {
                login: '',
                senha: '',
                loading: false,
                erro: '',
            };
        },
        methods: {
            efetuarLogin() {
                if (!this.login && !this.senha) {
                    this.erro = 'Favor preencher o formulário';
                    return;
                }
                alert('Login efetuado' + this.login + ', ' + this.senha);
            },
            setLogin(v : any) {
                this.login = v;
            },
            setSenha(v : any) {
                this.senha = v;
            },
        },
        components: { InputPublico }
    });
</script>

<template>
    <div class="container-publico">
        <img src="../assets/imagens/logo.svg" alt="Logo Devagram" class="logo" />
        <form>
            <p v-if="erro" class="erro">{{ erro }}</p>
            
            <InputPublico :icone="iconeLogin" alt="Insira o login" tipo="text"
                    placeholder="E-mail" :modelValue="login" @setInput="setLogin" />

            <InputPublico :icone="iconeSenha" alt="Insira a senha" tipo="password"
                    placeholder="Senha" :modelValue="senha" @setInput="setSenha" />

            <button @click.enter.prevent="efetuarLogin">Login</button>
            <div class="link">
                <p>Não possuí uma conta?</p>
                <a>Faça seu cadastro agora!</a>
            </div>
        </form>
    </div>
</template>

<style lang="scss" src="@/assets/styles/paginaPublica.scss" />
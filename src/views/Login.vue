<script lang="ts">
    import InputPublico from '@/components/InputPublico.vue';
    import { defineComponent } from 'vue';
    import iconeLogin from '../assets/imagens/envelope.svg';
    import iconeSenha from '../assets/imagens/chave.svg';
    import { LoginService } from '@/services/LoginService';
    import router from '../router';

    const loginService = new LoginService();

    export default defineComponent({
        setup() {
            return {
                iconeLogin,
                iconeSenha,
                loginService
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
            async efetuarLogin() {
                try {
                    if (!this.login && !this.login.trim()
                        && !this.senha && !this.senha.trim()) {
                        this.erro = 'Favor preencher o formulário';
                        return;
                    }
                    this.loading = true;
                    await loginService.login({login : this.login, senha : this.senha});
                    router.push({name : 'home'});
                } catch (erro : any) {
                    console.log(erro);
                    if(erro?.response?.data?.erro) {
                        this.erro = erro?.response?.data?.erro;
                    } else {
                        this.erro = 'Não foi possível efetuar o login, tente novamente!';
                    }
                }
                this.loading = false;
            },
            setLogin(v : any) {
                this.login = v;
            },
            setSenha(v : any) {
                this.senha = v;
            },
        },
        computed: {
            buttonText() {
                return this.loading ? '... Carregando' : 'Login';
            }
        },
        components: { InputPublico }
    });
</script>

<template>
    <div class="container-publico">
        <img src="../assets/imagens/logo.svg" alt="Logo Devagram" class="logo" />
        <form>
            <p v-if="erro" class="erro">{{ erro }}</p>
            <p v-if="$route.query.cadastroComSucesso" class="sucesso">Cadastro efetuado com sucesso, faça o login.</p>
            
            <InputPublico :icone="iconeLogin" alt="Insira o login" tipo="text"
                    placeholder="E-mail" :modelValue="login" @setInput="setLogin" />

            <InputPublico :icone="iconeSenha" alt="Insira a senha" tipo="password"
                    placeholder="Senha" :modelValue="senha" @setInput="setSenha" />

            <button @click.enter.prevent="efetuarLogin"
                :disabled="loading">{{ buttonText }}</button>
            <div class="link">
                <p>Não possuí uma conta?</p>
                <RouterLink to="/cadastro">Faça seu cadastro agora!</RouterLink>
            </div>
        </form>
    </div>
</template>

<style lang="scss" src="@/assets/styles/paginaPublica.scss" />
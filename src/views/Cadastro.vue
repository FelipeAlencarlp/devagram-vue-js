<script lang="ts">
    import InputPublico from '@/components/InputPublico.vue';
    import { defineComponent } from 'vue';
    import iconeLogin from '../assets/imagens/envelope.svg';
    import iconeSenha from '../assets/imagens/chave.svg';
    import iconeUsuario from '../assets/imagens/usuarioAtivo.svg';
    import iconeAvatar from '../assets/imagens/avatar.svg';

    export default defineComponent({
        setup() {
            return {
                iconeLogin,
                iconeSenha,
                iconeUsuario,
                iconeAvatar
            }
        },
        data() {
            return {
                nome: '',
                email: '',
                senha: '',
                confirmacao: '',
                loading: false,
                erro: '',
            };
        },
        methods: {
            async cadastrar() {
                try {
                    
                } catch (erro : any) {
                    console.log(erro);
                    if(erro?.response?.data?.erro) {
                        this.erro = erro?.response?.data?.erro;
                    } else {
                        this.erro = 'Não foi possível cadastrar o usuário, tente novamente!';
                    }
                }
                this.loading = false;
            },
            setNome(v : any) {
                this.nome = v;
            },
            setEmail(v : any) {
                this.email = v;
            },
            setSenha(v : any) {
                this.senha = v;
            },
            setConfirmacao(v : any) {
                this.confirmacao = v;
            },
        },
        computed: {
            buttonText() {
                return this.loading ? '... Carregando' : 'Cadastrar';
            }
        },
        components: { InputPublico }
    });
</script>

<template>
    <div :class="['container-publico', 'cadastro']">
        <img src="../assets/imagens/logo.svg" alt="Logo Devagram" class="logo" />
        <form>
            <div class="container-upload-imagem">
                <div>
                    <img :src="iconeAvatar" alt="Foto do usuário" class="avatar" />
                </div>

                <input type="file" accept="image/*" class="oculto" />
            </div>

            <p v-if="erro" class="erro">{{ erro }}</p>

            <InputPublico :icone="iconeUsuario" alt="Insira o nome do usuario" tipo="text"
                    placeholder="Nome completo" :modelValue="nome" @setInput="setNome" />
            
            <InputPublico :icone="iconeLogin" alt="Insira o e-mail" tipo="text"
                    placeholder="E-mail" :modelValue="email" @setInput="setEmail" />

            <InputPublico :icone="iconeSenha" alt="Insira a senha" tipo="password"
                    placeholder="Senha" :modelValue="senha" @setInput="setSenha" />

            <InputPublico :icone="iconeSenha" alt="Confirme a senha" tipo="password"
                    placeholder="Confirmar senha" :modelValue="confirmacao" @setInput="setConfirmacao" />

            <button @click.enter.prevent="cadastrar"
                :disabled="loading">{{ buttonText }}</button>
            <div class="link">
                <p>Já possuí uma conta?</p>
                <RouterLink :to="{ name : 'login' }">Faça seu login agora!</RouterLink>
            </div>
        </form>
    </div>
</template>

<style lang="scss" src="@/assets/styles/paginaPublica.scss" />
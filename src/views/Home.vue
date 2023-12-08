<script lang="ts">
    import { defineComponent } from 'vue';
    import { LoginService } from '@/services/LoginService';
    import router from '../router';

    const loginService = new LoginService();

    export default defineComponent({
        setup() {
            return {
                loginService
            }
        },
        methods: {
            sair() {
                loginService.logout();
                router.push({name : 'login'});
            }
        }
    });
</script>

<template>
    <div>
        <button @click="sair">Sair</button>
    </div>
</template>
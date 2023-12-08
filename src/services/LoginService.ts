import { useAccessTokenStore } from "@/stores/accessToken";
import { HttpApiService } from "./HttpApiService";

export class LoginService extends HttpApiService {
    async login(body : any) {
        const store = useAccessTokenStore();
        const {data} = await this.post('/login', body);

        localStorage.setItem('email', data.email);
        localStorage.setItem('token', data.token);
        store.setToken(data.token);

        const userResponse = await this.get('/usuario');
        if(userResponse && userResponse.data) {
            const usuario = userResponse.data;

            localStorage.setItem('_id', usuario._id);
            localStorage.setItem('nome', usuario.nome);

            if(usuario.avatar) {
                localStorage.setItem('avatar', usuario.avatar);
            }
        }
    }

    logout() {
        const store = useAccessTokenStore();
        localStorage.removeItem('_id');
        localStorage.removeItem('token');
        localStorage.removeItem('nome');
        localStorage.removeItem('email');
        localStorage.removeItem('avatar');
        store.setToken('');
    }
}
import { HttpApiService } from "./HttpApiService";

export class LoginService extends HttpApiService {
    async login(body : any) {
        const {data} = await this.post('/login', body);

        localStorage.setItem('email', data.email);
        localStorage.setItem('token', data.token);

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
        localStorage.removeItem('_id');
        localStorage.removeItem('token');
        localStorage.removeItem('nome');
        localStorage.removeItem('email');
        localStorage.removeItem('avatar');
    }
}
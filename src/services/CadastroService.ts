import { HttpApiService } from "./HttpApiService";

export class CadastroService extends HttpApiService {
    async cadastrar(body : any) {
        await this.post('/cadastro', body);
    }
}
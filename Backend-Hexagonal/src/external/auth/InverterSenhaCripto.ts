//ESTA CLASSE É UM ADAPTADOR NA ARQUITETURA HEXAGONAL
//ADAPTADORES NAO FAZEM PARTE DO CORE BUSINESS DA APLICAÇÃO

import ProvedorCriptografia from "../../core/usuario/service/ProvedorCriptografia";

export default class InverterSenhaCripto implements ProvedorCriptografia {
   
     criptografar(senha: string): string {
        return senha.split("").reverse().join('')
    }


    comparar(senha: string, senhaCriptografada: string): boolean {
        return this.criptografar(senha) === senhaCriptografada
    }
}
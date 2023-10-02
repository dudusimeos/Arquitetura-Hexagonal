import TerminalUtil from "@/app/util/TerminalUtil";
import {terminal, Terminal} from 'terminal-kit'
import menuUsuario from "./menuUsuario";
import menuFundamentos from "./menuFundamentos";


export default async function menuPrincipal() {
    TerminalUtil.titulo('Menu Principal')

    const [indice] = await TerminalUtil.menu([
        '1. Fundamentos',
        '2. Usuário',
        'Sair'
    ]) 

    switch(indice) {
        case 0: 
        await menuFundamentos() 
        break
        case 1: 
        await menuUsuario() 
        break
        default : process.exit(0)
    }
    

    menuPrincipal() 

}



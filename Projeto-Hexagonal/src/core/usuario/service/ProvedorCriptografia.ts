//PORTA NA ARQUITETURA HEXAGONAL
//PORTA FAZ PARTE DO CORE DA APLICAÇÃO

export default interface ProvedorCriptografia{
    criptografar(texto: string): string

}
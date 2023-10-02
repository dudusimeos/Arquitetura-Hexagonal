export default interface CasoDeUsoe<E, S>{

    executar(entrada: E): Promise<S>

}
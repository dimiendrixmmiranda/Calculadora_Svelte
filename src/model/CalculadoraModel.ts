const NAO_LIMPAR_TELA = false
const LIMPAR_TELA = true

export default class CalculadoraModel{
    #valor: string
    #acumulador: number
    #limparTela: boolean
    #operacao: string

    constructor(valor:string = null, acumulador:number = null,
        operacao:string = null, limparTela = false){
            this.#valor = valor
            this.#acumulador = acumulador
            this.#limparTela = limparTela
            this.#operacao = operacao
    }

    /* metodos gets */
    get valor(){
        return this.#valor?.replace('.',',') || '0'
    }

    /* funções para os tipos de cenarios */
    numeroDigitado(novoValor: string){
        return new CalculadoraModel(
            this.#limparTela || !this.#valor ? novoValor : this.#valor + novoValor,
            this.#acumulador,
            this.#operacao,
            NAO_LIMPAR_TELA
        )
    }

    pontoDigitado(){
        return new CalculadoraModel(
            this.#valor?.includes('.') ? this.#valor : this.#valor + '.',
            this.#acumulador,
            this.#operacao,
            NAO_LIMPAR_TELA
        )
    }

    limparDigitado(){
        return new CalculadoraModel()
    }

    operacaoDigitada(proximaOperacao: string){
        return this.calcular(proximaOperacao)
    }

    calcular(proximaOperacao:string = null){
        let naoTenhoOperacao = !this.#operacao
        let converterNumero = parseFloat(this.#valor)
        

        const acumulador = naoTenhoOperacao
            ? converterNumero
                : this.#operacao === '*' ? eval(`${this.#acumulador} * ${this.#valor}`): null ||
                this.#operacao === '-' ? eval(`${this.#acumulador} - ${this.#valor}`) : null ||
                this.#operacao === '+' ? eval(`${this.#acumulador} + ${this.#valor}`) : null ||
                this.#operacao === '/' ? eval(`${this.#acumulador} / ${this.#valor}`) : null ||
                this.#operacao === 'x²' ? eval(`${Math.pow(this.#acumulador, 2)}`) : null 
                

        const valor = naoTenhoOperacao ? this.#valor : `${acumulador}` 
        
        return new CalculadoraModel(
            valor,
            acumulador,
            proximaOperacao,
            proximaOperacao ? LIMPAR_TELA : NAO_LIMPAR_TELA
        )
    }
}
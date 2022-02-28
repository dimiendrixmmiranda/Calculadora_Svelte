<script lang="ts">
import CalculadoraModel from "../model/CalculadoraModel";

import Botao from "./Botao.svelte";
import Display from "./Display.svelte";
import Linha from "./Linha.svelte";

let calc = new CalculadoraModel()
const numeroDigitado = (num:string) => calc = calc.numeroDigitado(num)
const operacaoDigitada = (op:string) => calc = calc.operacaoDigitada(op)
const calcular = () => calc = calc.calcular()

const pontoDigitado = () => calc = calc.pontoDigitado()
const limparDigitado = () => calc = calc.limparDigitado()
 

</script>

<div class="calculadora">
    <Display valor={calc.valor}></Display>
    <Linha>
        <Botao texto="AC" destaque botaoTriplo onClick={limparDigitado}/>
        <Botao texto="x²" operacao/>
        <Botao texto="x³" operacao/>
    </Linha>
    <Linha>
        <Botao texto="7" onClick={numeroDigitado}/>
        <Botao texto="8" onClick={numeroDigitado}/>
        <Botao texto="9" onClick={numeroDigitado}/>
        <Botao texto="*" operacao onClick={operacaoDigitada}/>
        <Botao texto="/" operacao onClick={operacaoDigitada}/>
    </Linha>
    <Linha>
        <Botao texto="6" onClick={numeroDigitado}/>
        <Botao texto="5" onClick={numeroDigitado}/>
        <Botao texto="4" onClick={numeroDigitado}/>
        <Botao texto="+" operacao onClick={operacaoDigitada}/>
        <Botao texto="-" operacao onClick={operacaoDigitada}/>
    </Linha>
    <Linha>
        <Botao texto="3" onClick={numeroDigitado}/>
        <Botao texto="2" onClick={numeroDigitado}/>
        <Botao texto="1" onClick={numeroDigitado}/>
        <Botao texto="00" botaoDuplo/>
    </Linha>
    <Linha>
        <Botao texto="0" botaoDuplo onClick={numeroDigitado}/>
        <Botao texto="," onClick={pontoDigitado}/>
        <Botao texto="=" destaque botaoDuplo onClick={calcular}/>
    </Linha>
</div>

<style>
    .calculadora{
        background-color: var(--cor-fundo);
        height: 340px;
        width: 225px;
        
        padding: 15px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
    }

    
</style>

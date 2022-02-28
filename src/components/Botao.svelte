<script lang="ts">
    export let texto: string
    export let botaoDuplo: boolean = false
    export let botaoTriplo: boolean = false
    export let operacao: boolean = false
    export let destaque: boolean = false
    export let onClick: (valor: string) => void = () => {}


</script>

<button class="botao" class:botaoDuplo 
    class:botaoTriplo
    class:operacao
    class:destaque
    on:click={() => onClick(texto)}>
    {texto}
</button>

<style>
    .botao{
        display: flex;
        flex-basis: 20%;
        margin: 0;
        border: solid 1px var(--cor-fundo);
        justify-content: center;
        align-items: center;
    }
    .botaoDuplo{
        flex-basis: 40%;
    }
    .botaoTriplo{
        flex-basis: 60%;
    }
    .operacao{
        background-color: orange;
        color: white;
    }
    .destaque{
        background-color: red;
        color: white;
    }
</style>
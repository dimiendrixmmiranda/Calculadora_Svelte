<script lang="ts">
    export let valor: string

    $: tamanhoFonte = valor.length > 20 ? 'pequena': `s-${valor.length}`
</script>

<div class={`tela ${tamanhoFonte}`}>
    <span>{valor}</span>
</div>

<style>
    .tela{
        display: flex;
        background-color: aliceblue;
        height: 80px;
        margin-bottom: 30px;
        border-radius: 5px;
        justify-content: flex-end;
        align-items: center;
        overflow: hidden;
        padding: 0px 5px;
        font-size: 1.9rem;
    }
    .s-14{font-size: 1.70rem;}
    .s-15{font-size: 1.60rem;}
    .s-16{font-size: 1.55rem;}
    .s-17{font-size: 1.46rem;}
    .s-18{font-size: 1.40rem;}
    .s-19{font-size: 1.34rem;}
    .s-20{font-size: 1.28rem;}
    .pequena{font-size: 0.9rem;}
</style>
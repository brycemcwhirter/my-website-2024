<script>
    import Block from "../components/Block.svelte";

    let colors = ['red', 'green', 'blue', 'yellow', 'orange', 'black'];


    export let pageType;
    export let description;
</script>

<article class="p-4 space-y-6">
    <h1 class="text-4xl font-bold">{pageType}</h1>
    <p class="text-xl">{description}</p>

<div class="grid grid-cols-3 place-items-center space-y-6 p-3">
    {#each colors as color}
        <Block {color}/>
    {/each}
</div>




</article>


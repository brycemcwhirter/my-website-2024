<script>
    import Block from "../components/Block.svelte";

    let colors = ['red', 'green', 'blue'];


    export let pageType;
</script>

<article >
    <h1 >{pageType}</h1>
    <p>Page Description</p>

<div class="grid grid-cols-3">
    {#each colors as color}
        <Block {color}/>
    {/each}
</div>




</article>


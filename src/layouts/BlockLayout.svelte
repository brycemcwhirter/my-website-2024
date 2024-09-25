<script>
    import Block from "../components/Block.svelte";

    let colors = ['Red', 'Green', 'Blue', 'Orange', 'Yellow', 'Purple', 'Orange', 'Orange'];


    export let pageType;
    export let description;
</script>

<div class="p-4 space-y-6">
    <h1 class="text-4xl font-bold">{pageType}</h1>
    <p class="text-xl">{description}</p>

<div class="p-4 flex items-center justify-center">
    <div class="grid grid-cols-3  lg:gap-16 2xl:gap-72">
        {#each colors as color}
            <Block {color}/>
        {/each}
    </div>
</div>





</div>


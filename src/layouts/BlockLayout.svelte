<script>
    import Block from "../components/Block.svelte";


    import testData from '../data/data.json';


    export let pageType;
    export let description;
</script>

<div class="p-4 space-y-6">
    <h1 class="text-4xl font-bold">{pageType}</h1>
    <p class="text-xl">{description}</p>

<div class="p-4 flex items-center justify-center">
    <div class="grid grid-cols-3  lg:gap-16 2xl:gap-72">
        {#each testData as entry}
            <Block {entry}/>
        {/each}
    </div>
</div>





</div>


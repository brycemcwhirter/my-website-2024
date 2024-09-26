<script>
    export let projects;
    export let pageType;
    export let description;
    export let buttonMessage;



    import Block from "../components/Block.svelte";



</script>

<div class="p-4 space-y-6">
    <h1 class="text-4xl font-bold">{pageType}</h1>
    <p class="text-xl">{description}</p>

<div class="p-4 flex items-center justify-center">
    <div class="grid grid-cols-3  lg:gap-16 2xl:gap-72">
        {#each projects as entry}
            <Block {entry} {buttonMessage}/>
        {/each}
    </div>
</div>





</div>


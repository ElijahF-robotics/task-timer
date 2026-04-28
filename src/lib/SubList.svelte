<script>
	import Checkbox from "./Checkbox.svelte";

    var {options, optionFunctions=[]} = $props();

</script>

<div class="flex flex-col items-center justify-between p-4 bg-white w-full">
    {#each options as option, i}
        {#if optionFunctions[i]}
            <button onclick={optionFunctions[i]} class="flex p-2 hover:bg-gray-200 cursor-pointer w-full border-b-0 border-t-2 border-r-2 border-l-2 border-gray-600 last:border-b-2 first:rounded-tl-2xl first:rounded-tr-2xl last:rounded-bl-2xl last:rounded-br-2xl">
                <div class="flex p-2 hover:bg-gray-200 cursor-pointer w-full">{option}</div>
            </button>
        {:else}
             <div class="flex p-2 hover:bg-gray-200 cursor-pointer w-full border-b-0 border-t-2 border-r-2 border-l-2 border-gray-600 last:border-b-2 first:rounded-tl-2xl first:rounded-tr-2xl last:rounded-bl-2xl last:rounded-br-2xl">
                <div class="flex p-2 hover:bg-gray-200 cursor-pointer w-full">{option}</div>
            </div>
        {/if}
        
    {/each}
</div>
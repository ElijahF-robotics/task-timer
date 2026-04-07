<script>
  import Timer from "./Timer.svelte";

  // need to fix this later
  let {timer, timeUp, timeAdd, name, dueMonth = 0, dueDay = 0, dueYear = 0, desc = "", extensions = 0, totalTime = 0, initTime = timer, completed = false} = $props()
</script>

<!-- focused timer -->
<div class="focusedTaskTimer shadow-[4px_4px_0px_0px_#000]">

  <!-- invisible, for timer elements -->
  <div class="m-3e grid grid-cols-2 outline-hidden"> 

    <!-- left : timer side -->
    <div class="m-2">
      <div class="m-5 outline-hidden rounded">
        <Timer {timer} {timeAdd} {timeUp}/>
      </div>
    </div>

    <!-- right : task side -->
    <div class="m-8 content-center">
      <div class="m-2e outline-solid rounded focusedTaskInfo ">
        <h1 class="text-3xl">{name}</h1>
      </div> 
      
      {#if dueMonth !== 0 && dueDay !== 0 && dueDay !== 0 || desc !== ""}
      <div class="m-5 outline-solid rounded focusedTaskInfo">
        {#if dueMonth !== 0 && dueDay !== 0 && dueYear !== 0}
          <h2 class="m-2 px-5 py-2 outline-double">{dueMonth}/{dueDay}/{dueYear}</h2>
        {/if}
        {#if desc !== ""}
          <h2 class="m-2 px-5 py-2 outline-double">{desc}</h2>
        {/if}
      </div>
      {/if}
    </div>
  </div>
</div>


<style>
.focusedTaskTimer {
  margin: calc(var(--spacing) * 5); 
  border-radius: var(--radius-3xl);
  background-color: var(--color-cyan-500); 
  border-width: 2px;
  flex: auto;
}

.focusedTaskInfo {
  background-color: var(--color-white); 
  border: solid;
  border-width: 1px;
  padding-left: 1em;
  padding-right: 1em;
  
  
}
</style>

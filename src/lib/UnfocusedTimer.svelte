<script>
  import { msToHr, msToMin, msToSec } from "./timer_functions.svelte"
  
  // need to fix this later
  let {timer, name, dueMonth = 0, dueDay = 0, dueYear = 0} = $props()
</script>

<div class="unfocusedTaskTimer">
  <div class="grid grid-cols-3">
    <h1>{msToHr(timer)}:{msToMin(timer)}:{msToSec(timer)}</h1>
      {#if (dueMonth !== 0 && dueDay !== 0 && dueYear !== 0)}
        <h1>{dueMonth}/{dueDay}/{dueYear}</h1>
      {:else}
        <h1>-=-=-=-=-</h1>
      {/if}
    <h1>{name}</h1>
  </div>
</div>

<style>
.unfocusedTaskTimer {
  border-radius: var(--radius-sm);
  margin: calc(var(--spacing) * 5);
  outline: double;
  flex: col;
}
</style>

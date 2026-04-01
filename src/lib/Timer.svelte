<script lang="js">
import { msToHr, msToMin, msToSec, toggle } from './timer_functions.svelte.js';
// declare variables 
  let { timer } = $props()
  let paused = $state(true)
  // let timer = $state(27165000) // parameter placeholder

// accessors cause runes are weird
  const is_paused = () => {return paused} 
  const get_time = () => {return timer}

	let now = Date.now() // where timer starts
	let later = now + get_time()

// mutators

 $effect(() => {
    if (!paused && timer > 0) { // only countdown if unpaused
      const interval = window.setInterval(() => {
        timer -= 125; // remove 1/4 a second
      }, 125); // for every 1/4 a second

      return () => clearInterval(interval);
    }
  });

</script>

<div class="flex flex-col">
	<h1>{msToHr(timer)}:{msToMin(timer)}:{msToSec(timer)}</h1>
	
  <button onclick={toggle(pause)}>
    {#if paused}
      Resume
    {:else }
      Pause
    {/if}  
  </button>

</div>


<!-- styles go here -->

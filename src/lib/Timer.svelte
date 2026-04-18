<script lang="js">
  import { msToHr, msToMin, msToSec} from './timer_functions.svelte.js';

  let { timer, timeUp, timeAdd } = $props(); // timeAdd requires focus_timer jank

  let elapsed = $state(0) // time elapsed for mid timer additions
  let paused = $state(true) // for checking if timer is running
  let done = $state(false) // for checking if time is up


 $effect(() => {
    if (!paused && timer > -1) { // countdown past 0 to eval done
    
      const interval = window.setInterval(() => {
        // timer -= 125; // remove 1/4 a second
        elapsed += 125; // give it to elapsed
      }, 125); // every 1/4 a second

      if (timer-elapsed <= 0) {done = true} // and sets done when done

      return () => clearInterval(interval);
    }
  });

  // for ending countdown
  $effect(()=> {
    if(done) {
      timeUp();
      paused = true;
    }
  });

  // reset done flag when not done
  $effect(()=> { if(done && timer-elapsed > 0) {done = !done} });
</script>


<div class="justify-center content-center text-center">
  <div class="timer_outline">
    <p>{msToHr(timer-elapsed)}:{msToMin(timer-elapsed)}:{msToSec(timer-elapsed)}</p>
  </div>
  <p>elapsed time: {elapsed}</p>
  <p>timer: {timer}</p>
  <button onclick={paused = !paused} class="custom_button">
    {#if paused}
      Resume
    {:else }
      Pause
    {/if}
  </button>
  {#if paused}
    <button onclick={timeAdd} class="custom_button">Add Time</button>
    <!-- need to edit actual call to timeAdd -->
    <!-- remove elapsed time before continuing countdown -->
    <!-- something like fullTimeAdd() would be great -->
  {/if}

</div>



<style>
  .timer_outline {
    outline-style: solid;
    border-radius: var(--radius-lg);
    box-shadow: 8px_8px_0px_0px_#000;
    margin: calc(var(--spacing) * 2);
    background-color: var(--color-white); 
    font-size: var(--text-7xl);
    text-align: center;
  }

  .custom_button{
    outline-style: solid;
    border-radius: var(--radius-lg);
    box-shadow: 1px_1px_0px_0px_#000;
    margin: calc(var(--spacing) * 4);
    background-color: var(--color-white); 
    font-size: var(--text-2xl);
  }

</style>


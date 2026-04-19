<script lang="js">
  // these functions format time, else read all time in ms and output in given unit
  import { msToSec, msToMin, msToHr, msToDays, msToWeeks, msToYears} from './timer_functions.svelte.js';

  // these props allow for external functions to decide timer's time, adding time mid-timer, and what to do when time is up
  let { timer, timeUp, timeAdd } = $props(); // timeAdd requires focus_timer jank

  let elapsed = $state(0) // time elapsed for mid timer additions
  let paused = $state(true) // for checking if timer is running
  let done = $state(false) // for checking if time is up


 $effect(() => {
    if (!paused && timer >= elapsed) { // countdown past 0 to eval done
      const interval = window.setInterval(() => {
        // timer -= 125; // remove 1/4 a second
        elapsed += 125; // give it to elapsed
      }, 125); // every 1/4 a second
      if (timer <= elapsed) {done = true; paused = true} // and sets done when done
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
  $effect(()=> { if(done && timer - elapsed > 0) {done = !done} });
</script>


<div class="justify-center content-center text-center">
  <div class="timer_outline">
    <!-- timer is adaptive -->
    <!-- some live their whole lives without completing anything -->
    <p> 
      <!-- putting the if statements with content on multiple lines breaks the format -->
      <!-- years (leap years accounted for), weeks, days, and hours situational. always minutes and seconds -->
      {#if timer >= 31449600000}{msToYears(timer - elapsed)}:{/if}{#if timer >= 604800000}{msToWeeks(timer - elapsed)}:{/if}{#if timer >= 86400000} {msToDays(timer - elapsed)}:{/if}{#if timer >= 360000}{msToHr(timer - elapsed)}:{/if}{msToMin(timer - elapsed)}:{msToSec(timer - elapsed)}
      <!-- prettier please don't kill me -->
    </p>
  </div>
  <p>timer: {timer}</p>
  <p>elapsed: {elapsed}</p>
  <div class="timer_buttons">
  {#if timer > 0}
    <button onclick={paused = !paused} class="custom_button">
      {#if paused}
        Resume
      {:else }
        Pause
      {/if}
    </button>
  {/if}
  {#if paused}
    <button onclick={timeAdd} class="custom_button">Add Time</button>
  {/if}
  </div>
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

  .custom_button {
    outline-style: solid;
    border-radius: var(--radius-lg);
    box-shadow: 1px_1px_0px_0px_#000;
    margin: calc(var(--spacing) * 4);
    background-color: var(--color-white); 
    font-size: var(--text-2xl);
  }

  .timer_buttons {
   align-content:left
  }

</style>


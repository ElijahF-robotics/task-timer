<script>
  import Button from "$lib/Button.svelte";
  import Timer from "$lib/Timer.svelte";
  import FocusedTimer from "$lib/FocusedTimer.svelte";
  import UnfocusedTimer from "$lib/UnfocusedTimer.svelte";

  let timer = 3000
  let done = false

  function timeAdd() {
    timer += 10000
    done = false
  }

  function timeUp() {
    timer = 0;
    done = true
  }

</script>



<!-- figure out basic responsive design (for fonts mainly) in this file -->
<!-- make "focused task" and "unfocused task" from this page -->
<!-- make crud buttons for both of them -->
<!-- make draggable components in a vertical queue -->


<!-- the app is vertical in nature -->
<div class="m-3 outline-none columns-1"> 
  {#if done}
    <h1 class="text-9xl">THE TIMER IS DONE</h1>
  {/if}
  <div>
    <FocusedTimer {timer} {timeAdd} {timeUp} name={"Checkpoint 3"} desc={"idk present again again again or smthn"} dueMonth={4} dueDay={9} dueYear={2026}/>
  </div>
  <UnfocusedTimer timer={120000} name={"quick break, hydrate"}></UnfocusedTimer>  
  <UnfocusedTimer timer={3600000} name={"read that one book you hate"} dueMonth={4} dueDay={8} dueYear={2026}></UnfocusedTimer>  
</div>


<style>
</style>



<script>
  import { getContext } from 'svelte'
  import { getTasks } from '$lib/db/tasks'

  const supabase = getContext('supabase')
  let tasks = $state([])

  $effect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) getTasks(supabase, user.id).then(t => tasks = t)
    })
  })
</script>

<div class="flex flex-col">
    {#each tasks as task}
        <p>{task.id}</p>
    {/each}
</div>
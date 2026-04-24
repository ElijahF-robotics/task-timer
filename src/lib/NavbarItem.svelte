<script>
	import Button from '$lib/Button.svelte';
	let {href, text, selected} = $props();
</script>

<div>
	<a {href}> 
		<div class={`flex items-center h-full px-2 mx-2 ${selected ? "border-b-2 font-bold " : ""}`}>
			{text}
		</div>
		
	</a>
</div>
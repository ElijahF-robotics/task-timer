<script>
	import './layout.css';
	import logo from '$lib/assets/coffee.jpg';
	import Nav from '$lib/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={logo} /></svelte:head>

<Nav></Nav>

<div class="min-h-screen w-screen bg-gray-100">
	{@render children()}
</div>


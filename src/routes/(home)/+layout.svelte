<script lang="ts">
	import '../../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Marksy</title>
	<meta name="title" content="Marksy" />
	<meta name="description" content="Turn your bookmarks into a public directory in seconds." />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://marksy.co" />
	<meta property="og:title" content="Marksy" />
	<meta
		property="og:description"
		content="Turn your bookmarks into a public directory in seconds."
	/>
	<meta property="og:image" content="{import.meta.env.VITE_BASE_URL}/og.svg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://marksy.co" />
	<meta property="twitter:title" content="Marksy" />
	<meta
		property="twitter:description"
		content="Turn your bookmarks into a public directory in seconds."
	/>
	<meta property="twitter:image" content="{import.meta.env.VITE_BASE_URL}/og.svg" />
</svelte:head>
<main>
	{@render children?.()}
</main>

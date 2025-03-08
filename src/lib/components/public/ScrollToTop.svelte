<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { ArrowUp } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';

	let visible = false;

	onMount(() => {
		const handleScroll = () => {
			visible = window.scrollY > 200;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

{#if visible}
	<div transition:fade class="fixed bottom-2 right-2 z-50">
		<Button
			onclick={scrollToTop}
			variant="default"
			size="icon"
			class="hover:scale -110 transition-transform [&_svg]:size-6"
			aria-label="Scroll to top"
			tooltip="Scroll to top"
		>
			<ArrowUp />
		</Button>
	</div>
{/if}

<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils.js';
	import { PanelLeftOpen, PanelLeftClose } from 'lucide-svelte';
	import type { ComponentProps } from 'svelte';
	import { useSidebar } from './context.svelte.js';

	let {
		ref = $bindable(null),
		class: className,
		onclick,
		...restProps
	}: ComponentProps<typeof Button> & {
		onclick?: (e: MouseEvent) => void;
	} = $props();

	const sidebar = useSidebar();
</script>

<Button
	type="button"
	onclick={(e) => {
		onclick?.(e);
		sidebar.toggle();
	}}
	data-sidebar="trigger"
	variant="ghost"
	size="icon"
	class={cn('h-7 w-7', className)}
	{...restProps}
	tooltip={sidebar.open ? 'Close Sidebar' : 'Open Sidebar'}
>
	{#if sidebar.open}
		<PanelLeftClose />
	{:else}
		<PanelLeftOpen />
	{/if}
	<span class="sr-only">{sidebar.open ? 'Close Sidebar' : 'Open Sidebar'}</span>
</Button>

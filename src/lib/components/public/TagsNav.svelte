<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { Tag as TagIcon } from 'lucide-svelte';
	import { slide } from 'svelte/transition';
	import { cn } from '$lib/utils';
	import { colorVariants, type ColorVariant } from '$lib/constants/colorVariants';

	let props = $props<{
		tags: Array<{ name: string; color: string | null; count: number }>;
		selectedTags: string[];
		onTagSelect: (tag: string, selected: boolean) => void;
		loading?: boolean;
	}>();

	let expanded = $state(false);
	let showAllTags = $state(false);

	const tagsPerRow = 10;

	function toggleTag(tagName: string) {
		const isSelected = props.selectedTags.includes(tagName);
		props.onTagSelect(tagName, !isSelected);
	}

	function toggleExpand() {
		expanded = !expanded;
		if (expanded) {
			showAllTags = true;
		}
	}

	function getTagClasses(tag: { color: string | null }, isSelected: boolean): string {
		if (!tag.color) return '';
		const variant = colorVariants[tag.color as ColorVariant];
		return variant ? (isSelected ? variant.selected : variant.unselected) : '';
	}

	const visibleTags = $derived(showAllTags ? props.tags : props.tags.slice(0, tagsPerRow));
	const hasMoreTags = $derived(props.tags.length > tagsPerRow);
</script>

<div class="flex w-full flex-col gap-2">
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-2">
			<h3 class="text-sm font-medium">Filtrar por tags</h3>
			<TagIcon class="h-4 w-4" />
		</div>
	</div>

	{#if props.loading}
		<div class="flex flex-wrap gap-2">
			{#each Array(8) as _}
				<Skeleton class="h-6 w-20 rounded-full" />
			{/each}
		</div>
	{:else}
		<div class="flex flex-wrap gap-2 overflow-hidden transition-all duration-300 ease-in-out">
			{#each visibleTags as tag (tag.name)}
				<Badge
					variant={props.selectedTags.includes(tag.name) ? 'default' : 'secondary'}
					class={cn(
						'cursor-pointer text-sm transition-colors hover:opacity-80',
						getTagClasses(tag, props.selectedTags.includes(tag.name))
					)}
					onclick={() => toggleTag(tag.name)}
				>
					{tag.name.startsWith('#') ? tag.name : `#${tag.name}`}
					<span class="ml-1 text-xs opacity-70">({tag.count})</span>
				</Badge>
			{/each}

			{#if !expanded && hasMoreTags}
				<Badge
					variant="outline"
					class="cursor-pointer bg-background text-sm"
					onclick={toggleExpand}
				>
					+{props.tags.length - tagsPerRow} más
				</Badge>
			{/if}
		</div>

		{#if expanded}
			<div class="mt-2 text-right" transition:slide={{ duration: 200 }}>
				<Button
					variant="link"
					size="sm"
					class="h-6 p-0 text-xs"
					onclick={() => {
						showAllTags = false;
						expanded = false;
					}}
				>
					Mostrar menos tags
				</Button>
			</div>
		{/if}
	{/if}
</div>

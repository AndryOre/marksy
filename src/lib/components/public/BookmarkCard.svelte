<script lang="ts">
	import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { ExternalLink } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { cn } from '$lib/utils';
	import { colorVariants, type ColorVariant } from '$lib/constants/colorVariants';

	const {
		title,
		url,
		description,
		imageUrl,
		tags,
		dateAdded,
		loading = false
	} = $props<{
		title: string;
		url: string;
		description?: string;
		imageUrl?: string;
		tags: Array<{ name: string; color?: string }>;
		dateAdded: string;
		loading?: boolean;
	}>();

	function getTagClasses(tag: { color: string | null }): string {
		if (!tag.color) return '';
		const variant = colorVariants[tag.color as ColorVariant];
		return variant.unselected;
	}
</script>

{#if loading}
	<Card class="overflow-hidden">
		<CardHeader class="p-0">
			<div class="aspect-[1.91/1] w-full bg-[#f8f9fc]">
				<Skeleton class="h-full w-full rounded-none" />
			</div>
		</CardHeader>
		<CardContent class="grid h-[240px] grid-rows-[auto_1fr_auto_auto] gap-4">
			<div>
				<Skeleton class="mb-2 h-7 w-3/4" />
				<Skeleton class="h-4 w-full" />
			</div>
			<div>
				<Skeleton class="mb-2 h-4 w-full" />
				<Skeleton class="mb-2 h-4 w-full" />
				<Skeleton class="h-4 w-2/3" />
			</div>
			<div class="flex flex-wrap gap-2">
				{#each [...Array(3).keys()] as i (i)}
					<Skeleton class="h-6 w-16" />
				{/each}
			</div>
			<Skeleton class="h-9 w-full" />
		</CardContent>
		<CardFooter>
			<Skeleton class="h-4 w-24" />
		</CardFooter>
	</Card>
{:else}
	<Card class="overflow-hidden bg-neutral-100 dark:bg-neutral-900">
		<CardHeader class="p-0">
			<a href={url} target="_blank" rel="noopener noreferrer" class="group relative block">
				<div class="aspect-[1.91/1] w-full">
					<div class="flex h-full items-center justify-center">
						<img src={imageUrl} alt={title} class="h-full w-full object-cover" />
					</div>
					<Button
						variant="secondary"
						size="sm"
						onclick={() => window.open(url, '_blank', 'noopener,noreferrer')}
						class="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100"
					>
						<ExternalLink class="mr-2 h-4 w-4" />
						Visit site
					</Button>
				</div>
			</a>
		</CardHeader>
		<CardContent class="flex flex-col gap-4">
			<div>
				<a href={url} target="_blank" rel="noopener noreferrer">
					<CardTitle class="line-clamp-1 text-xl hover:underline">{title}</CardTitle>
				</a>
				<a href={url} target="_blank" rel="noopener noreferrer">
					<p class="truncate text-sm text-muted-foreground hover:underline">{url}</p>
				</a>
			</div>
			<p class="w-full truncate text-base">
				{description || ''}
			</p>
			<div class="flex flex-col gap-2">
				<div class="flex flex-wrap gap-2 overflow-hidden">
					{#each tags as tag (tag.name)}
						<Badge
							variant="secondary"
							class={cn(
								'cursor-pointer text-sm transition-colors hover:opacity-80',
								getTagClasses(tag)
							)}
						>
							{tag.name.startsWith('#') ? tag.name : `#${tag.name}`}
						</Badge>
					{/each}
				</div>
			</div>
		</CardContent>
		<CardFooter>
			<p class="text-sm text-muted-foreground">{dateAdded}</p>
		</CardFooter>
	</Card>
{/if}

<style>
	:global(.dark) .bg-\[\#f8f9fc\] {
		background-color: #1e1e1e;
	}
</style>

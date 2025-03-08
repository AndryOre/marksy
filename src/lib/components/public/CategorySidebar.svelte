<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import {
		Sidebar,
		SidebarContent,
		SidebarHeader,
		SidebarGroup,
		SidebarGroupContent,
		SidebarGroupLabel,
		SidebarMenu,
		SidebarMenuItem,
		SidebarMenuButton,
		SidebarTrigger
	} from '$lib/components/ui/sidebar';
	import { FolderIcon } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { useSidebar } from '$lib/components/ui/sidebar/context.svelte';

	interface Category {
		id: string;
		title: string;
		bookmarkCount: number;
	}

	let props = $props<{
		categories: Category[];
		selectedCategoryId: string | null;
		onSelectCategory: (categoryId: string | null) => void;
	}>();

	function handleKeydown(e: KeyboardEvent, categoryId: string | null) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			props.onSelectCategory(categoryId);
		}
	}

	let marginTopValue = $state(384);
	let sidebarElement;

	onMount(() => {
		const handleScroll = () => {
			const header = document.querySelector('header');

			if (header) {
				const headerRect = header.getBoundingClientRect();
				if (headerRect.bottom > 0) {
					const visibilityRatio = Math.max(0, Math.min(1, headerRect.bottom / headerRect.height));
					const maxMargin = 384;
					marginTopValue = Math.round(maxMargin * visibilityRatio);
				} else {
					marginTopValue = 0;
				}
			}
		};

		window.addEventListener('scroll', handleScroll);

		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const sidebar = useSidebar();
</script>

<Sidebar
	style="margin-top: {marginTopValue}px;"
	bind:this={sidebarElement}
	variant="floating"
	collapsible="icon"
>
	<SidebarHeader class="flex flex-row items-center justify-between">
		{#if sidebar.open}
			<SidebarGroupLabel class="text-lg font-medium">Categories</SidebarGroupLabel>
		{/if}
		<SidebarTrigger class="size-8 [&_svg]:size-6" />
	</SidebarHeader>
	<SidebarContent>
		<SidebarGroup>
			<SidebarGroupContent>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							isActive={props.selectedCategoryId === null}
							onclick={() => props.onSelectCategory(null)}
							onkeydown={(e) => handleKeydown(e, null)}
							class="group h-auto p-3"
						>
							{#snippet tooltipContent()}
								All
							{/snippet}
							<div class="flex w-full items-center justify-between">
								<div class="flex items-center gap-2">
									<FolderIcon class="h-5 w-5" />
									<span class="text-lg">All</span>
								</div>
								<Badge
									variant="secondary"
									class="group-data-[active=true]:bg-neutral-200 dark:group-data-[active=true]:bg-neutral-900"
								>
									{props.categories.reduce(
										(acc: number, cat: Category) => acc + cat.bookmarkCount,
										0
									)}
								</Badge>
							</div>
						</SidebarMenuButton>
					</SidebarMenuItem>
					{#each props.categories as category (category.id)}
						<SidebarMenuItem>
							<SidebarMenuButton
								isActive={props.selectedCategoryId === category.id}
								onclick={() => props.onSelectCategory(category.id)}
								onkeydown={(e) => handleKeydown(e, category.id)}
								class="group h-auto p-3"
							>
								{#snippet tooltipContent()}
									{category.title}
								{/snippet}
								<div class="flex w-full items-center justify-between">
									<div class="flex items-center gap-2">
										<FolderIcon class="h-5 w-5" />
										<span class="text-lg">{category.title}</span>
									</div>
									<Badge
										variant="secondary"
										class="group-data-[active=true]:bg-neutral-200 dark:group-data-[active=true]:bg-neutral-900"
									>
										{category.bookmarkCount}
									</Badge>
								</div>
							</SidebarMenuButton>
						</SidebarMenuItem>
					{/each}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	</SidebarContent>
</Sidebar>

<style>
</style>

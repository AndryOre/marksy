<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import {
		Sidebar,
		SidebarMenu,
		SidebarMenuItem,
		SidebarMenuButton
	} from '$lib/components/ui/sidebar';
	import { FolderIcon } from 'lucide-svelte';

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
</script>

<Sidebar class="h-full">
	<SidebarMenu class="p-2">
		<SidebarMenuItem>
			<SidebarMenuButton
				isActive={props.selectedCategoryId === null}
				onclick={() => props.onSelectCategory(null)}
				onkeydown={(e) => handleKeydown(e, null)}
				class="group h-auto p-3"
			>
				<div class="flex w-full items-center justify-between">
					<div class="flex items-center gap-2">
						<FolderIcon class="h-5 w-5" />
						<span class="text-lg">All</span>
					</div>
					<Badge
						variant="secondary"
						class="group-data-[active=true]:bg-neutral-200 dark:group-data-[active=true]:bg-neutral-900"
					>
						{props.categories.reduce((acc: number, cat: Category) => acc + cat.bookmarkCount, 0)}
					</Badge>
				</div>
			</SidebarMenuButton>
		</SidebarMenuItem>

		<section class="space-y-1.5">
			{#each props.categories as category (category.id)}
				<SidebarMenuItem>
					<SidebarMenuButton
						isActive={props.selectedCategoryId === category.id}
						onclick={() => props.onSelectCategory(category.id)}
						onkeydown={(e) => handleKeydown(e, category.id)}
						class="group h-auto p-3"
					>
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
		</section>
	</SidebarMenu>
</Sidebar>

<style>
	section {
		min-height: 2rem;
	}
</style>

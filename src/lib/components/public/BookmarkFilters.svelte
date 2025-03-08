<script lang="ts">
	import SearchBar from './SearchBar.svelte';
	import SortSelector from './SortSelector.svelte';
	import TagsNav from './TagsNav.svelte';
	import type { Tag } from '@prisma/client';
	import { SidebarTrigger } from '$lib/components/ui/sidebar';
	type TagWithCount = Pick<Tag, 'name' | 'color'> & {
		count: number;
	};

	const {
		allTags,
		selectedTags,
		loadingTags,
		sortField,
		sortDirection,
		onSearch,
		onSort,
		onTagSelect
	} = $props<{
		allTags: TagWithCount[];
		selectedTags: string[];
		loadingTags: boolean;
		sortField: 'date' | 'alphabetical';
		sortDirection: 'asc' | 'desc';
		onSearch: (term: string) => void;
		onSort: (event: { field: 'date' | 'alphabetical'; direction: 'asc' | 'desc' }) => void;
		onTagSelect: (event: { tag: string; selected: boolean }) => void;
	}>();

	function handleSearch(term: string) {
		onSearch(term);
	}

	function handleSortChange({
		field,
		direction
	}: {
		field: 'date' | 'alphabetical';
		direction: 'asc' | 'desc';
	}) {
		onSort({ field, direction });
	}

	function handleTagSelect(tag: string, selected: boolean) {
		onTagSelect({ tag, selected });
	}
</script>

<div class="flex flex-col gap-4 py-2 md:flex-row md:items-center md:justify-between">
	<div class="flex w-full items-center gap-2 md:w-auto md:flex-1">
		<SidebarTrigger class="size-8 md:hidden [&_svg]:size-6" />
		<SearchBar onSearch={handleSearch} />
	</div>
	<SortSelector
		initialField={sortField}
		initialDirection={sortDirection}
		onChange={handleSortChange}
	/>
</div>

<TagsNav tags={allTags} {selectedTags} onTagSelect={handleTagSelect} loading={loadingTags} />

<script lang="ts">
	import { onMount } from 'svelte';
	import BookmarkCard from '$lib/components/public/BookmarkCard.svelte';
	import BookmarkFilters from '$lib/components/public/BookmarkFilters.svelte';
	import type { Bookmark, Tag } from '@prisma/client';
	import { format } from 'date-fns';

	type BookmarkWithTags = Omit<Bookmark, 'tags'> & {
		tags: Pick<Tag, 'name' | 'color'>[];
	};

	type TagWithCount = Pick<Tag, 'name' | 'color'> & {
		count: number;
	};

	let { data } = $props();
	const selectedCategoryId = $derived(data.selectedCategoryId);

	let bookmarks = $state<BookmarkWithTags[]>([]);
	let allTags = $state<TagWithCount[]>([]);
	let selectedTags = $state<string[]>([]);
	let searchTerm = $state('');
	let sortField = $state<'date' | 'alphabetical'>('date');
	let sortDirection = $state<'asc' | 'desc'>('desc');
	let filteredBookmarks = $state<BookmarkWithTags[]>([]);

	let loadingBookmarks = $state(true);
	let loadingTags = $state(true);

	$effect(() => {
		let filtered = searchTerm.trim()
			? bookmarks.filter((bookmark) => {
					const normalizedSearchTerm = searchTerm.toLowerCase().trim();
					return (
						bookmark.title.toLowerCase().includes(normalizedSearchTerm) ||
						bookmark.description?.toLowerCase().includes(normalizedSearchTerm) ||
						bookmark.url.toLowerCase().includes(normalizedSearchTerm) ||
						bookmark.tags.some((tag) => tag.name.toLowerCase().includes(normalizedSearchTerm))
					);
				})
			: [...bookmarks];

		if (sortField === 'date') {
			filtered.sort((a, b) => {
				const dateA = new Date(a.dateAdded).getTime();
				const dateB = new Date(b.dateAdded).getTime();
				return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
			});
		} else {
			filtered.sort((a, b) => {
				const titleA = a.title.toLowerCase();
				const titleB = b.title.toLowerCase();
				return sortDirection === 'asc'
					? titleA.localeCompare(titleB)
					: titleB.localeCompare(titleA);
			});
		}

		filteredBookmarks = filtered;
	});

	async function fetchTags() {
		loadingTags = true;
		try {
			const response = await fetch('/api/tags');
			const result = await response.json();
			if (result.success) {
				allTags = result.data as TagWithCount[];
			}
		} catch (error) {
			console.error('Error fetching tags:', error);
		} finally {
			loadingTags = false;
		}
	}

	async function fetchBookmarks() {
		loadingBookmarks = true;
		const url = new URL('/api/bookmarks', window.location.origin);

		if (selectedCategoryId) {
			url.searchParams.set('categoryId', selectedCategoryId);
		}

		if (selectedTags.length > 0) {
			url.searchParams.set('tags', selectedTags.join(','));
		}

		try {
			const response = await fetch(url);
			const result = await response.json();

			if (result.success) {
				if (selectedCategoryId || selectedTags.length > 0) {
					bookmarks = result.data as BookmarkWithTags[];
				} else {
					bookmarks = result.data.flatMap(
						(cat: { bookmarks: BookmarkWithTags[] }) => cat.bookmarks
					);
				}
			}
		} catch (error) {
			console.error('Error fetching bookmarks:', error);
			bookmarks = [];
		} finally {
			loadingBookmarks = false;
		}
	}

	function handleTagSelect(tag: string, selected: boolean) {
		if (selected) {
			selectedTags = [...selectedTags, tag];
		} else {
			selectedTags = selectedTags.filter((t) => t !== tag);
		}

		fetchBookmarks();
	}

	function handleSearch(term: string) {
		searchTerm = term;
	}

	function handleSortChange({
		field,
		direction
	}: {
		field: 'date' | 'alphabetical';
		direction: 'asc' | 'desc';
	}) {
		sortField = field;
		sortDirection = direction;
	}

	$effect(() => {
		if (selectedCategoryId !== undefined) {
			fetchBookmarks();
		}
	});

	onMount(() => {
		fetchTags();
		fetchBookmarks();
	});
</script>

<div class="flex">
	<div class="w-full flex-1 px-4">
		<BookmarkFilters
			{allTags}
			{selectedTags}
			{loadingTags}
			{sortField}
			{sortDirection}
			onSearch={handleSearch}
			onSort={handleSortChange}
			onTagSelect={(e) => handleTagSelect(e.tag, e.selected)}
		/>

		{#if loadingBookmarks}
			<div class="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
				{#each Array(6) as _}
					<BookmarkCard title="" url="" tags={[]} dateAdded="" loading={true} />
				{/each}
			</div>
		{:else if filteredBookmarks.length === 0}
			<div class="flex h-[calc(100vh-12rem)] items-center justify-center">
				<div class="max-w-md p-6 text-center">
					<p class="mb-2 text-xl font-semibold">No hay bookmarks</p>
					<p class="text-muted-foreground">
						{searchTerm
							? 'No se encontraron bookmarks que coincidan con tu búsqueda.'
							: 'No se encontraron bookmarks con los filtros seleccionados.'}
					</p>
				</div>
			</div>
		{:else}
			<div class="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:grid-cols-3">
				{#each filteredBookmarks as bookmark}
					<BookmarkCard
						title={bookmark.title}
						url={bookmark.url}
						imageUrl={bookmark.imageUrl ?? undefined}
						tags={bookmark.tags.map((tag) => ({
							name: tag.name,
							color: tag.color || undefined
						}))}
						description={bookmark.description ?? undefined}
						dateAdded={format(new Date(bookmark.dateAdded), 'MMMM d, yyyy')}
						loading={false}
					/>
				{/each}
			</div>
		{/if}
	</div>
</div>

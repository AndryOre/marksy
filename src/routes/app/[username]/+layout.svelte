<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/public/CategorySidebar.svelte';
	import ScrollToTop from '$lib/components/public/ScrollToTop.svelte';
	import { goto } from '$app/navigation';
	import ProfileBanner from '$lib/components/public/ProfileBanner.svelte';
	let { data, children } = $props();

	const categories = $derived(data.categories || []);
	const selectedCategoryId = $derived(data.selectedCategoryId);
	const username = $derived(data.username);
	const user = $derived(data.user);

	function handleSelectCategory(categoryId: string | null) {
		const currentUrl = new URL(window.location.href);

		if (categoryId) {
			currentUrl.searchParams.set('category', categoryId);
		} else {
			currentUrl.searchParams.delete('category');
		}

		goto(currentUrl.pathname + currentUrl.search);
	}
</script>

<div class="flex flex-col">
	{#if user}
		<ProfileBanner
			avatarUrl={user.avatarUrl}
			bannerUrl={user.bannerUrl}
			name={user.name}
			handle={user.handle}
			socials={user.socials}
		/>
	{/if}
	<Sidebar.Provider>
		<AppSidebar {categories} {selectedCategoryId} onSelectCategory={handleSelectCategory} />
		<main class="w-full">
			{@render children?.()}
		</main>
	</Sidebar.Provider>
	<ScrollToTop />
</div>

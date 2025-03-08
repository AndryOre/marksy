<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/public/CategorySidebar.svelte';
	import { goto } from '$app/navigation';

	let { data, children } = $props();

	const categories = $derived(data.categories || []);
	const selectedCategoryId = $derived(data.selectedCategoryId);
	const username = $derived(data.username);

	function handleSelectCategory(categoryId: string | null) {
		// Construir la URL base
		const baseUrl = `/${username}`;

		// Añadir el parámetro de categoría si existe
		if (categoryId) {
			goto(`${baseUrl}?category=${categoryId}`);
		} else {
			goto(baseUrl);
		}
	}
</script>

<Sidebar.Provider>
	<AppSidebar {categories} {selectedCategoryId} onSelectCategory={handleSelectCategory} />
	<main class="w-full">
		<Sidebar.Trigger class="size-8 [&_svg]:size-6" />
		{@render children?.()}
	</main>
</Sidebar.Provider>

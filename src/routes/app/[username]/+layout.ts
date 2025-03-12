import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, params, url }) => {
	const categoryId = url.searchParams.get('category');

	try {
		const [categoriesResponse, userResponse] = await Promise.all([
			fetch('/api/categories'),
			fetch(`/api/users/${params.username}`)
		]);

		const [categoriesResult, userData] = await Promise.all([
			categoriesResponse.json(),
			userResponse.json()
		]);

		if (!categoriesResult.success) {
			console.error('Error fetching categories:', categoriesResult.message);
			return {
				categories: [],
				username: params.username,
				selectedCategoryId: categoryId
			};
		}

		return {
			categories: categoriesResult.data,
			username: params.username,
			selectedCategoryId: categoryId,
			user: {
				avatarUrl: userData.avatarUrl,
				bannerUrl: userData.bannerUrl,
				name: userData.name,
				handle: userData.username,
				socials: {
					instagram: userData.instagram,
					linkedin: userData.linkedin,
					x: userData.x,
					github: userData.github,
					website: userData.website,
					twitch: userData.twitch,
					youtube: userData.youtube,
					tiktok: userData.tiktok
				}
			}
		};
	} catch (error) {
		console.error('Error in layout load function:', error);
		return {
			categories: [],
			username: params.username,
			selectedCategoryId: categoryId,
			user: null
		};
	}
};

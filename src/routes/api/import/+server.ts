import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface BookmarkJson {
	id: string;
	title: string;
	url?: string;
	children?: BookmarkJson[];
	dateAdded?: number;
	parentId?: string;
}

async function processBookmarks(bookmarks: BookmarkJson[], username: string) {
	for (const bookmark of bookmarks) {
		if (bookmark.children) {
			const category = await prisma.category.create({
				data: {
					title: bookmark.title,
					dateAdded: bookmark.dateAdded ? new Date(bookmark.dateAdded) : new Date(),
					dateModified: new Date(),
					username
				}
			});

			for (const child of bookmark.children) {
				if (child.url) {
					await prisma.bookmark.create({
						data: {
							title: child.title,
							url: child.url,
							categoryId: category.id,
							dateAdded: child.dateAdded ? new Date(child.dateAdded) : new Date(),
							username
						}
					});
				} else if (child.children) {
					const subCategory = await prisma.category.create({
						data: {
							title: child.title,
							dateAdded: child.dateAdded ? new Date(child.dateAdded) : new Date(),
							dateModified: new Date(),
							username
						}
					});

					for (const subChild of child.children) {
						if (subChild.url) {
							await prisma.bookmark.create({
								data: {
									title: subChild.title,
									url: subChild.url,
									categoryId: subCategory.id,
									dateAdded: subChild.dateAdded ? new Date(subChild.dateAdded) : new Date(),
									username
								}
							});
						}
					}
				}
			}
		}
	}
}

export async function POST({ request, locals }: RequestEvent) {
	try {
		if (!locals.user?.username) {
			return json({ success: false, message: 'User not authenticated' }, { status: 401 });
		}

		const bookmarks = (await request.json()) as BookmarkJson[];
		await processBookmarks(bookmarks, locals.user.username);
		return json({ success: true, message: 'Bookmarks imported successfully' });
	} catch (error) {
		console.error('Import error:', error);
		return json(
			{ success: false, message: error instanceof Error ? error.message : 'Unknown error' },
			{ status: 500 }
		);
	}
}

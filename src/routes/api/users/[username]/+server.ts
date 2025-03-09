import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET({ params }) {
	const { username } = params;

	try {
		const user = await prisma.user.findUnique({
			where: { username },
			include: {
				_count: {
					select: {
						bookmarks: true,
						categories: true,
						tags: true
					}
				},
				categories: {
					select: {
						id: true,
						title: true,
						_count: {
							select: {
								bookmarks: true
							}
						}
					}
				},
				tags: {
					select: {
						id: true,
						name: true,
						color: true,
						_count: {
							select: {
								bookmarks: true
							}
						}
					}
				}
			}
		});

		if (!user) {
			return new Response('User not found', { status: 404 });
		}

		return json({ ...user });
	} catch (error) {
		console.error('Error fetching user:', error);
		return new Response('Internal Server Error', { status: 500 });
	}
}

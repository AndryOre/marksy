import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	// Clean existing data
	await prisma.healthCheck.deleteMany({});
	await prisma.bookmark.deleteMany({});
	await prisma.category.deleteMany({});
	await prisma.tag.deleteMany({});
	await prisma.user.deleteMany({});

	console.log('Seeding database...');

	// Create user
	const user = await prisma.user.create({
		data: {
			name: 'Andry Orellana',
			username: 'andryore',
			avatarUrl: 'https://pbs.twimg.com/profile_images/1769861078119333888/ZmS08l2w_400x400.jpg',
			bannerUrl: 'https://pbs.twimg.com/profile_banners/1613226844412645397/1706569327/1500x500',
			github: 'andryore',
			x: 'andryore',
			instagram: 'andryore',
			linkedin: 'andryore',
			website: 'https://andryore.dev',
			twitch: 'andryoredev'
		}
	});

	// Create categories
	const developmentCategory = await prisma.category.create({
		data: {
			title: 'Development',
			username: user.username
		}
	});

	const designCategory = await prisma.category.create({
		data: {
			title: 'Design',
			username: user.username
		}
	});

	const productivityCategory = await prisma.category.create({
		data: {
			title: 'Productivity',
			username: user.username
		}
	});

	// Create tags with Tailwind color classes instead of hex values
	const javascriptTag = await prisma.tag.create({
		data: {
			name: 'javascript',
			color: 'yellow',
			username: user.username
		}
	});

	const typescriptTag = await prisma.tag.create({
		data: {
			name: 'typescript',
			color: 'blue',
			username: user.username
		}
	});

	const uiTag = await prisma.tag.create({
		data: {
			name: 'ui',
			color: 'orange',
			username: user.username
		}
	});

	const toolsTag = await prisma.tag.create({
		data: {
			name: 'tools',
			color: 'green',
			username: user.username
		}
	});

	// Create bookmarks with tags and health checks
	await prisma.bookmark.create({
		data: {
			title: 'GitHub',
			url: 'https://github.com',
			description: 'Where the world builds software',
			imageUrl: 'https://cdn.pixabay.com/photo/2017/08/05/11/24/logo-2582757_1280.png',
			categoryId: developmentCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: toolsTag.id }]
			},
			healthChecks: {
				create: [
					{
						status: true,
						statusCode: 200,
						responseTime: 250
					}
				]
			}
		}
	});

	await prisma.bookmark.create({
		data: {
			title: 'TypeScript Documentation',
			url: 'https://www.typescriptlang.org/docs/',
			description: 'Official TypeScript documentation',
			imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png',
			categoryId: developmentCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: typescriptTag.id }, { id: javascriptTag.id }]
			},
			healthChecks: {
				create: [
					{
						status: true,
						statusCode: 200,
						responseTime: 180
					}
				]
			}
		}
	});

	await prisma.bookmark.create({
		data: {
			title: 'Figma',
			url: 'https://www.figma.com',
			description: 'Collaborative interface design tool',
			imageUrl: 'https://cdn.pixabay.com/photo/2017/01/29/13/21/mobile-devices-2017978_1280.png',
			categoryId: designCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: uiTag.id }, { id: toolsTag.id }]
			},
			healthChecks: {
				create: [
					{
						status: true,
						statusCode: 200,
						responseTime: 300
					}
				]
			}
		}
	});

	await prisma.bookmark.create({
		data: {
			title: 'Notion',
			url: 'https://www.notion.so',
			description: 'All-in-one workspace for notes, tasks, wikis, and databases',
			imageUrl: 'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg',
			categoryId: productivityCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: toolsTag.id }]
			},
			healthChecks: {
				create: [
					{
						status: true,
						statusCode: 200,
						responseTime: 220
					}
				]
			}
		}
	});

	await prisma.bookmark.create({
		data: {
			title: 'Private Notes',
			url: 'https://example.com/private-notes',
			description: 'My private development notes',
			imageUrl: 'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg',
			categoryId: developmentCategory.id,
			username: user.username,
			isPrivate: true,
			tags: {
				connect: [{ id: javascriptTag.id }]
			}
		}
	});

	console.log('Database seeded successfully!');
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});

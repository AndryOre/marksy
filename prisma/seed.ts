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

	const marketingCategory = await prisma.category.create({
		data: {
			title: 'Marketing',
			username: user.username
		}
	});

	const businessCategory = await prisma.category.create({
		data: {
			title: 'Business',
			username: user.username
		}
	});

	const educationCategory = await prisma.category.create({
		data: {
			title: 'Education',
			username: user.username
		}
	});

	const healthCategory = await prisma.category.create({
		data: {
			title: 'Health & Wellness',
			username: user.username
		}
	});

	const technologyCategory = await prisma.category.create({
		data: {
			title: 'Technology',
			username: user.username
		}
	});

	const scienceCategory = await prisma.category.create({
		data: {
			title: 'Science',
			username: user.username
		}
	});

	const artsCategory = await prisma.category.create({
		data: {
			title: 'Arts',
			username: user.username
		}
	});

	const entertainmentCategory = await prisma.category.create({
		data: {
			title: 'Entertainment',
			username: user.username
		}
	});

	const sportsCategory = await prisma.category.create({
		data: {
			title: 'Sports',
			username: user.username
		}
	});

	const foodCategory = await prisma.category.create({
		data: {
			title: 'Food & Cooking',
			username: user.username
		}
	});

	const travelCategory = await prisma.category.create({
		data: {
			title: 'Travel',
			username: user.username
		}
	});

	const financeCategory = await prisma.category.create({
		data: {
			title: 'Finance',
			username: user.username
		}
	});

	const newsCategory = await prisma.category.create({
		data: {
			title: 'News',
			username: user.username
		}
	});

	const lifestyleCategory = await prisma.category.create({
		data: {
			title: 'Lifestyle',
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

	// Additional tags
	const reactTag = await prisma.tag.create({
		data: {
			name: 'react',
			color: 'cyan',
			username: user.username
		}
	});

	const nodeTag = await prisma.tag.create({
		data: {
			name: 'node',
			color: 'green',
			username: user.username
		}
	});

	const pythonTag = await prisma.tag.create({
		data: {
			name: 'python',
			color: 'blue',
			username: user.username
		}
	});

	const cssTag = await prisma.tag.create({
		data: {
			name: 'css',
			color: 'blue',
			username: user.username
		}
	});

	const htmlTag = await prisma.tag.create({
		data: {
			name: 'html',
			color: 'orange',
			username: user.username
		}
	});

	const apiTag = await prisma.tag.create({
		data: {
			name: 'api',
			color: 'teal',
			username: user.username
		}
	});

	const databaseTag = await prisma.tag.create({
		data: {
			name: 'database',
			color: 'indigo',
			username: user.username
		}
	});

	const devopsTag = await prisma.tag.create({
		data: {
			name: 'devops',
			color: 'cyan',
			username: user.username
		}
	});

	const aiTag = await prisma.tag.create({
		data: {
			name: 'ai',
			color: 'pink',
			username: user.username
		}
	});

	const machinelearningTag = await prisma.tag.create({
		data: {
			name: 'machine-learning',
			color: 'blue',
			username: user.username
		}
	});

	const securityTag = await prisma.tag.create({
		data: {
			name: 'security',
			color: 'red',
			username: user.username
		}
	});

	const performanceTag = await prisma.tag.create({
		data: {
			name: 'performance',
			color: 'amber',
			username: user.username
		}
	});

	const accessibilityTag = await prisma.tag.create({
		data: {
			name: 'accessibility',
			color: 'purple',
			username: user.username
		}
	});

	const mobileTag = await prisma.tag.create({
		data: {
			name: 'mobile',
			color: 'gray',
			username: user.username
		}
	});

	const frontendTag = await prisma.tag.create({
		data: {
			name: 'frontend',
			color: 'pink',
			username: user.username
		}
	});

	const backendTag = await prisma.tag.create({
		data: {
			name: 'backend',
			color: 'indigo',
			username: user.username
		}
	});

	const cloudTag = await prisma.tag.create({
		data: {
			name: 'cloud',
			color: 'blue',
			username: user.username
		}
	});

	const dockerTag = await prisma.tag.create({
		data: {
			name: 'docker',
			color: 'cyan',
			username: user.username
		}
	});

	const gitTag = await prisma.tag.create({
		data: {
			name: 'git',
			color: 'red',
			username: user.username
		}
	});

	const linuxTag = await prisma.tag.create({
		data: {
			name: 'linux',
			color: 'yellow',
			username: user.username
		}
	});

	const webdevTag = await prisma.tag.create({
		data: {
			name: 'webdev',
			color: 'pink',
			username: user.username
		}
	});

	const tutorialTag = await prisma.tag.create({
		data: {
			name: 'tutorial',
			color: 'lime',
			username: user.username
		}
	});

	const blogTag = await prisma.tag.create({
		data: {
			name: 'blog',
			color: 'purple',
			username: user.username
		}
	});

	const resourceTag = await prisma.tag.create({
		data: {
			name: 'resource',
			color: 'cyan',
			username: user.username
		}
	});

	const frameworkTag = await prisma.tag.create({
		data: {
			name: 'framework',
			color: 'purple',
			username: user.username
		}
	});

	const libraryTag = await prisma.tag.create({
		data: {
			name: 'library',
			color: 'indigo',
			username: user.username
		}
	});

	const testingTag = await prisma.tag.create({
		data: {
			name: 'testing',
			color: 'lime',
			username: user.username
		}
	});

	const uiuxTag = await prisma.tag.create({
		data: {
			name: 'ui-ux',
			color: 'orange',
			username: user.username
		}
	});

	const algorithmTag = await prisma.tag.create({
		data: {
			name: 'algorithm',
			color: 'slate',
			username: user.username
		}
	});

	const datastructureTag = await prisma.tag.create({
		data: {
			name: 'data-structure',
			color: 'gray',
			username: user.username
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

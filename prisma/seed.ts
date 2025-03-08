import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	// Clean existing data
	await prisma.healthCheck.deleteMany({});
	await prisma.bookmark.deleteMany({});
	await prisma.category.deleteMany({});
	await prisma.tag.deleteMany({});

	console.log('Seeding database...');

	// Create categories
	const developmentCategory = await prisma.category.create({
		data: {
			title: 'Development'
		}
	});

	const designCategory = await prisma.category.create({
		data: {
			title: 'Design'
		}
	});

	const productivityCategory = await prisma.category.create({
		data: {
			title: 'Productivity'
		}
	});

	// Create tags with Tailwind color classes instead of hex values
	const javascriptTag = await prisma.tag.create({
		data: {
			name: 'javascript',
			color: 'yellow'
		}
	});

	const typescriptTag = await prisma.tag.create({
		data: {
			name: 'typescript',
			color: 'blue'
		}
	});

	const uiTag = await prisma.tag.create({
		data: {
			name: 'ui',
			color: 'orange'
		}
	});

	const toolsTag = await prisma.tag.create({
		data: {
			name: 'tools',
			color: 'green'
		}
	});

	// 30 more tags
	const reactTag = await prisma.tag.create({
		data: {
			name: 'react',
			color: 'cyan'
		}
	});

	const nodeTag = await prisma.tag.create({
		data: {
			name: 'node',
			color: 'green'
		}
	});

	const pythonTag = await prisma.tag.create({
		data: {
			name: 'python',
			color: 'blue'
		}
	});

	const cssTag = await prisma.tag.create({
		data: {
			name: 'css',
			color: 'blue'
		}
	});

	const htmlTag = await prisma.tag.create({
		data: {
			name: 'html',
			color: 'orange'
		}
	});

	const apiTag = await prisma.tag.create({
		data: {
			name: 'api',
			color: 'teal'
		}
	});

	const databaseTag = await prisma.tag.create({
		data: {
			name: 'database',
			color: 'indigo'
		}
	});

	const devopsTag = await prisma.tag.create({
		data: {
			name: 'devops',
			color: 'cyan'
		}
	});

	const aiTag = await prisma.tag.create({
		data: {
			name: 'ai',
			color: 'pink'
		}
	});

	const machinelearningTag = await prisma.tag.create({
		data: {
			name: 'machine-learning',
			color: 'blue'
		}
	});

	const securityTag = await prisma.tag.create({
		data: {
			name: 'security',
			color: 'red'
		}
	});

	const performanceTag = await prisma.tag.create({
		data: {
			name: 'performance',
			color: 'amber'
		}
	});

	const accessibilityTag = await prisma.tag.create({
		data: {
			name: 'accessibility',
			color: 'purple'
		}
	});

	const mobileTag = await prisma.tag.create({
		data: {
			name: 'mobile',
			color: 'gray'
		}
	});

	const frontendTag = await prisma.tag.create({
		data: {
			name: 'frontend',
			color: 'pink'
		}
	});

	const backendTag = await prisma.tag.create({
		data: {
			name: 'backend',
			color: 'indigo'
		}
	});

	const cloudTag = await prisma.tag.create({
		data: {
			name: 'cloud',
			color: 'blue'
		}
	});

	const dockerTag = await prisma.tag.create({
		data: {
			name: 'docker',
			color: 'cyan'
		}
	});

	const gitTag = await prisma.tag.create({
		data: {
			name: 'git',
			color: 'red'
		}
	});

	const linuxTag = await prisma.tag.create({
		data: {
			name: 'linux',
			color: 'yellow'
		}
	});

	const webdevTag = await prisma.tag.create({
		data: {
			name: 'webdev',
			color: 'pink'
		}
	});

	const tutorialTag = await prisma.tag.create({
		data: {
			name: 'tutorial',
			color: 'lime'
		}
	});

	const blogTag = await prisma.tag.create({
		data: {
			name: 'blog',
			color: 'purple'
		}
	});

	const resourceTag = await prisma.tag.create({
		data: {
			name: 'resource',
			color: 'cyan'
		}
	});

	const frameworkTag = await prisma.tag.create({
		data: {
			name: 'framework',
			color: 'purple'
		}
	});

	const libraryTag = await prisma.tag.create({
		data: {
			name: 'library',
			color: 'indigo'
		}
	});

	const testingTag = await prisma.tag.create({
		data: {
			name: 'testing',
			color: 'lime'
		}
	});

	const uiuxTag = await prisma.tag.create({
		data: {
			name: 'ui-ux',
			color: 'orange'
		}
	});

	const algorithmTag = await prisma.tag.create({
		data: {
			name: 'algorithm',
			color: 'slate'
		}
	});

	const datastructureTag = await prisma.tag.create({
		data: {
			name: 'data-structure',
			color: 'gray'
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

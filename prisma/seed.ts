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

	// Create tags
	const aiTag = await prisma.tag.create({
		data: {
			name: 'AI',
			color: 'indigo',
			username: user.username
		}
	});
	const ai_imagesTag = await prisma.tag.create({
		data: {
			name: 'AI images',
			color: 'violet',
			username: user.username
		}
	});
	const cssTag = await prisma.tag.create({
		data: {
			name: 'CSS',
			color: 'sky',
			username: user.username
		}
	});
	const mcp_serversTag = await prisma.tag.create({
		data: {
			name: 'MCP servers',
			color: 'emerald',
			username: user.username
		}
	});
	const reactTag = await prisma.tag.create({
		data: {
			name: 'React',
			color: 'cyan',
			username: user.username
		}
	});
	const saasTag = await prisma.tag.create({
		data: {
			name: 'SaaS',
			color: 'purple',
			username: user.username
		}
	});
	const tailwindTag = await prisma.tag.create({
		data: {
			name: 'Tailwind',
			color: 'teal',
			username: user.username
		}
	});
	const tailwind_cssTag = await prisma.tag.create({
		data: {
			name: 'Tailwind CSS',
			color: 'cyan',
			username: user.username
		}
	});
	const uiTag = await prisma.tag.create({
		data: {
			name: 'UI',
			color: 'rose',
			username: user.username
		}
	});
	const ui_componentsTag = await prisma.tag.create({
		data: {
			name: 'UI components',
			color: 'pink',
			username: user.username
		}
	});
	const ui_designTag = await prisma.tag.create({
		data: {
			name: 'UI design',
			color: 'fuchsia',
			username: user.username
		}
	});
	const ui_kitsTag = await prisma.tag.create({
		data: {
			name: 'UI kits',
			color: 'violet',
			username: user.username
		}
	});
	const ux_designTag = await prisma.tag.create({
		data: {
			name: 'UX design',
			color: 'purple',
			username: user.username
		}
	});
	const adobeTag = await prisma.tag.create({
		data: {
			name: 'adobe',
			color: 'red',
			username: user.username
		}
	});
	const algorithmsTag = await prisma.tag.create({
		data: {
			name: 'algorithms',
			color: 'indigo',
			username: user.username
		}
	});
	const alternativesTag = await prisma.tag.create({
		data: {
			name: 'alternatives',
			color: 'amber',
			username: user.username
		}
	});
	const backgroundsTag = await prisma.tag.create({
		data: {
			name: 'backgrounds',
			color: 'slate',
			username: user.username
		}
	});
	const bento_gridsTag = await prisma.tag.create({
		data: {
			name: 'bento grids',
			color: 'zinc',
			username: user.username
		}
	});
	const businessTag = await prisma.tag.create({
		data: {
			name: 'business',
			color: 'emerald',
			username: user.username
		}
	});
	const business_ideasTag = await prisma.tag.create({
		data: {
			name: 'business ideas',
			color: 'green',
			username: user.username
		}
	});
	const business_toolsTag = await prisma.tag.create({
		data: {
			name: 'business tools',
			color: 'teal',
			username: user.username
		}
	});
	const challengesTag = await prisma.tag.create({
		data: {
			name: 'challenges',
			color: 'orange',
			username: user.username
		}
	});
	const chatTag = await prisma.tag.create({
		data: {
			name: 'chat',
			color: 'sky',
			username: user.username
		}
	});
	const checklistTag = await prisma.tag.create({
		data: {
			name: 'checklist',
			color: 'lime',
			username: user.username
		}
	});
	const codingTag = await prisma.tag.create({
		data: {
			name: 'coding',
			color: 'blue',
			username: user.username
		}
	});
	const coding_challengesTag = await prisma.tag.create({
		data: {
			name: 'coding challenges',
			color: 'indigo',
			username: user.username
		}
	});
	const color_gradientsTag = await prisma.tag.create({
		data: {
			name: 'color gradients',
			color: 'amber',
			username: user.username
		}
	});
	const color_palettesTag = await prisma.tag.create({
		data: {
			name: 'color palettes',
			color: 'yellow',
			username: user.username
		}
	});
	const communityTag = await prisma.tag.create({
		data: {
			name: 'community',
			color: 'purple',
			username: user.username
		}
	});
	const dark_themeTag = await prisma.tag.create({
		data: {
			name: 'dark theme',
			color: 'zinc',
			username: user.username
		}
	});
	const data_structuresTag = await prisma.tag.create({
		data: {
			name: 'data structures',
			color: 'indigo',
			username: user.username
		}
	});
	const designTag = await prisma.tag.create({
		data: {
			name: 'design',
			color: 'rose',
			username: user.username
		}
	});
	const design_portfolioTag = await prisma.tag.create({
		data: {
			name: 'design portfolio',
			color: 'pink',
			username: user.username
		}
	});
	const design_resourcesTag = await prisma.tag.create({
		data: {
			name: 'design resources',
			color: 'fuchsia',
			username: user.username
		}
	});
	const design_systemsTag = await prisma.tag.create({
		data: {
			name: 'design systems',
			color: 'violet',
			username: user.username
		}
	});
	const dev_toolsTag = await prisma.tag.create({
		data: {
			name: 'dev tools',
			color: 'emerald',
			username: user.username
		}
	});
	const developersTag = await prisma.tag.create({
		data: {
			name: 'developers',
			color: 'cyan',
			username: user.username
		}
	});
	const directoriesTag = await prisma.tag.create({
		data: {
			name: 'directories',
			color: 'stone',
			username: user.username
		}
	});
	const directoryTag = await prisma.tag.create({
		data: {
			name: 'directory',
			color: 'neutral',
			username: user.username
		}
	});
	const discoveryTag = await prisma.tag.create({
		data: {
			name: 'discovery',
			color: 'amber',
			username: user.username
		}
	});
	const early_accessTag = await prisma.tag.create({
		data: {
			name: 'early access',
			color: 'lime',
			username: user.username
		}
	});
	const feedbackTag = await prisma.tag.create({
		data: {
			name: 'feedback',
			color: 'teal',
			username: user.username
		}
	});
	const figmaTag = await prisma.tag.create({
		data: {
			name: 'figma',
			color: 'violet',
			username: user.username
		}
	});
	const fontsTag = await prisma.tag.create({
		data: {
			name: 'fonts',
			color: 'gray',
			username: user.username
		}
	});
	const frontendTag = await prisma.tag.create({
		data: {
			name: 'frontend',
			color: 'sky',
			username: user.username
		}
	});
	const githubTag = await prisma.tag.create({
		data: {
			name: 'github',
			color: 'slate',
			username: user.username
		}
	});
	const googleTag = await prisma.tag.create({
		data: {
			name: 'google',
			color: 'red',
			username: user.username
		}
	});
	const gradientsTag = await prisma.tag.create({
		data: {
			name: 'gradients',
			color: 'amber',
			username: user.username
		}
	});
	const growthTag = await prisma.tag.create({
		data: {
			name: 'growth',
			color: 'emerald',
			username: user.username
		}
	});
	const iconsTag = await prisma.tag.create({
		data: {
			name: 'icons',
			color: 'violet',
			username: user.username
		}
	});
	const illustrationsTag = await prisma.tag.create({
		data: {
			name: 'illustrations',
			color: 'fuchsia',
			username: user.username
		}
	});
	const imagesTag = await prisma.tag.create({
		data: {
			name: 'images',
			color: 'rose',
			username: user.username
		}
	});
	const innovationTag = await prisma.tag.create({
		data: {
			name: 'innovation',
			color: 'cyan',
			username: user.username
		}
	});
	const inspirationTag = await prisma.tag.create({
		data: {
			name: 'inspiration',
			color: 'purple',
			username: user.username
		}
	});
	const interview_prepTag = await prisma.tag.create({
		data: {
			name: 'interview prep',
			color: 'indigo',
			username: user.username
		}
	});
	const javascriptTag = await prisma.tag.create({
		data: {
			name: 'javascript',
			color: 'yellow',
			username: user.username
		}
	});
	const jobsTag = await prisma.tag.create({
		data: {
			name: 'jobs',
			color: 'emerald',
			username: user.username
		}
	});
	const landing_pageTag = await prisma.tag.create({
		data: {
			name: 'landing page',
			color: 'sky',
			username: user.username
		}
	});
	const layoutsTag = await prisma.tag.create({
		data: {
			name: 'layouts',
			color: 'indigo',
			username: user.username
		}
	});
	const learningTag = await prisma.tag.create({
		data: {
			name: 'learning',
			color: 'green',
			username: user.username
		}
	});
	const logosTag = await prisma.tag.create({
		data: {
			name: 'logos',
			color: 'blue',
			username: user.username
		}
	});
	const marketingTag = await prisma.tag.create({
		data: {
			name: 'marketing',
			color: 'orange',
			username: user.username
		}
	});
	const marketplaceTag = await prisma.tag.create({
		data: {
			name: 'marketplace',
			color: 'emerald',
			username: user.username
		}
	});
	const mentoringTag = await prisma.tag.create({
		data: {
			name: 'mentoring',
			color: 'violet',
			username: user.username
		}
	});
	const micro_startupsTag = await prisma.tag.create({
		data: {
			name: 'micro startups',
			color: 'cyan',
			username: user.username
		}
	});
	const mobile_appsTag = await prisma.tag.create({
		data: {
			name: 'mobile apps',
			color: 'indigo',
			username: user.username
		}
	});
	const online_businessTag = await prisma.tag.create({
		data: {
			name: 'online business',
			color: 'emerald',
			username: user.username
		}
	});
	const open_graphTag = await prisma.tag.create({
		data: {
			name: 'open graph',
			color: 'rose',
			username: user.username
		}
	});
	const open_sourceTag = await prisma.tag.create({
		data: {
			name: 'open source',
			color: 'green',
			username: user.username
		}
	});
	const product_directoryTag = await prisma.tag.create({
		data: {
			name: 'product directory',
			color: 'amber',
			username: user.username
		}
	});
	const product_discoveryTag = await prisma.tag.create({
		data: {
			name: 'product discovery',
			color: 'orange',
			username: user.username
		}
	});
	const product_launchTag = await prisma.tag.create({
		data: {
			name: 'product launch',
			color: 'lime',
			username: user.username
		}
	});
	const product_submissionTag = await prisma.tag.create({
		data: {
			name: 'product submission',
			color: 'teal',
			username: user.username
		}
	});
	const product_visibilityTag = await prisma.tag.create({
		data: {
			name: 'product visibility',
			color: 'sky',
			username: user.username
		}
	});
	const profileTag = await prisma.tag.create({
		data: {
			name: 'profile',
			color: 'purple',
			username: user.username
		}
	});
	const promotionTag = await prisma.tag.create({
		data: {
			name: 'promotion',
			color: 'pink',
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
	const readmeTag = await prisma.tag.create({
		data: {
			name: 'readme',
			color: 'gray',
			username: user.username
		}
	});
	const resourcesTag = await prisma.tag.create({
		data: {
			name: 'resources',
			color: 'emerald',
			username: user.username
		}
	});
	const roadmapsTag = await prisma.tag.create({
		data: {
			name: 'roadmaps',
			color: 'indigo',
			username: user.username
		}
	});
	const searchTag = await prisma.tag.create({
		data: {
			name: 'search',
			color: 'violet',
			username: user.username
		}
	});
	const shadcn_uiTag = await prisma.tag.create({
		data: {
			name: 'shadcn/ui',
			color: 'zinc',
			username: user.username
		}
	});
	const side_projectsTag = await prisma.tag.create({
		data: {
			name: 'side projects',
			color: 'cyan',
			username: user.username
		}
	});
	const startupTag = await prisma.tag.create({
		data: {
			name: 'startup',
			color: 'emerald',
			username: user.username
		}
	});
	const startupsTag = await prisma.tag.create({
		data: {
			name: 'startups',
			color: 'green',
			username: user.username
		}
	});
	const stock_photosTag = await prisma.tag.create({
		data: {
			name: 'stock photos',
			color: 'rose',
			username: user.username
		}
	});
	const svgTag = await prisma.tag.create({
		data: {
			name: 'svg',
			color: 'slate',
			username: user.username
		}
	});
	const techTag = await prisma.tag.create({
		data: {
			name: 'tech',
			color: 'cyan',
			username: user.username
		}
	});
	const tech_productsTag = await prisma.tag.create({
		data: {
			name: 'tech products',
			color: 'sky',
			username: user.username
		}
	});
	const tech_startupsTag = await prisma.tag.create({
		data: {
			name: 'tech startups',
			color: 'indigo',
			username: user.username
		}
	});
	const templatesTag = await prisma.tag.create({
		data: {
			name: 'templates',
			color: 'violet',
			username: user.username
		}
	});
	const toolsTag = await prisma.tag.create({
		data: {
			name: 'tools',
			color: 'emerald',
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
	const typographyTag = await prisma.tag.create({
		data: {
			name: 'typography',
			color: 'gray',
			username: user.username
		}
	});
	const web_developmentTag = await prisma.tag.create({
		data: {
			name: 'web development',
			color: 'indigo',
			username: user.username
		}
	});

	// Create categories
	const product_launch_and_promotionCategory = await prisma.category.create({
		data: {
			title: 'Product Launch & Promotion',
			username: user.username
		}
	});
	const ui_design_inspirationCategory = await prisma.category.create({
		data: {
			title: 'UI Design Inspiration',
			username: user.username
		}
	});
	const ui_componentsCategory = await prisma.category.create({
		data: {
			title: 'UI Components',
			username: user.username
		}
	});
	const fonts_and_typographyCategory = await prisma.category.create({
		data: {
			title: 'Fonts and Typography',
			username: user.username
		}
	});
	const color_palettesCategory = await prisma.category.create({
		data: {
			title: 'Color Palettes',
			username: user.username
		}
	});
	const gradientsCategory = await prisma.category.create({
		data: {
			title: 'Gradients',
			username: user.username
		}
	});
	const iconsCategory = await prisma.category.create({
		data: {
			title: 'Icons',
			username: user.username
		}
	});
	const imagesCategory = await prisma.category.create({
		data: {
			title: 'Images',
			username: user.username
		}
	});
	const logosCategory = await prisma.category.create({
		data: {
			title: 'Logos',
			username: user.username
		}
	});
	const dev_resourcesCategory = await prisma.category.create({
		data: {
			title: 'Dev Resources',
			username: user.username
		}
	});
	const learningCategory = await prisma.category.create({
		data: {
			title: 'Learning',
			username: user.username
		}
	});
	const ai_chatCategory = await prisma.category.create({
		data: {
			title: 'AI Chat',
			username: user.username
		}
	});
	const mcp_serversCategory = await prisma.category.create({
		data: {
			title: 'MCP Servers',
			username: user.username
		}
	});
	const github_toolsCategory = await prisma.category.create({
		data: {
			title: 'GitHub Tools',
			username: user.username
		}
	});
	const design_toolsCategory = await prisma.category.create({
		data: {
			title: 'Design Tools',
			username: user.username
		}
	});

	// Create bookmarks
	await prisma.bookmark.create({
		data: {
			title: 'Product Hunt – The best new products in tech.',
			url: 'https://www.producthunt.com/',
			description:
				"Product Hunt is a curation of the best new products, every day. Discover the latest mobile apps, websites, and technology products that everyone's talking about.",
			imageUrl: 'https://ph-static.imgix.net/ph-logo-1.png',
			categoryId: product_launch_and_promotionCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [
					{ id: product_launchTag.id },
					{ id: tech_productsTag.id },
					{ id: discoveryTag.id }
				]
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
			title: 'World-class Tech Products on Microlaunch',
			url: 'https://microlaunch.net/',
			description:
				'Microlaunch provides a unique launch platform for makers & startups to distribute their products. Launch, get feedback and make first sales.',
			imageUrl: 'https://wild-dust-0517.microlaunch.workers.dev/og/microlaunch-og.png',
			categoryId: product_launch_and_promotionCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: product_launchTag.id }, { id: startupsTag.id }, { id: feedbackTag.id }]
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
			title: 'Uneed - A launch platform for your products | Uneed',
			url: 'https://www.uneed.best/',
			description:
				'Best Product Hunt alternative: Discover new products every day, vote for your favorites and promote your own on Uneed.',
			imageUrl: 'https://www.uneed.best/__og-image__/image/og.png',
			categoryId: product_launch_and_promotionCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: product_launchTag.id }, { id: discoveryTag.id }, { id: promotionTag.id }]
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
			title: 'Dev Hunt – The best new Dev Tools every day.',
			url: 'https://devhunt.org/',
			description:
				'A launchpad for dev tools, built by developers for developers, open source, and fair.',
			imageUrl: 'https://devhunt.org/devhuntog.png?v=2',
			categoryId: product_launch_and_promotionCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: dev_toolsTag.id }, { id: product_launchTag.id }, { id: open_sourceTag.id }]
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
			title: '1000.tools',
			url: 'https://1000.tools/',
			description:
				'An exclusive list of the 1000 best tools. Carefully vetted and maintained by humans.',
			imageUrl: 'https://1000.tools/build/assets/opengraph-85cb3a7e.png',
			categoryId: product_launch_and_promotionCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: toolsTag.id }, { id: resourcesTag.id }]
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
			title: 'Fazier – Find your next favourite product, every day.',
			url: 'https://fazier.com/',
			description:
				'Discover tech startups and find your next favourite product, every day. Submit your product for free.',
			imageUrl: 'https://fazier.com/assets/images/fazierOpenGraph.png',
			categoryId: product_launch_and_promotionCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: product_discoveryTag.id }, { id: tech_startupsTag.id }]
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
			title: 'Discover And Share The Best Tiny Startups & Micro Startups',
			url: 'https://www.tinystartups.com/',
			description:
				'The best micro-startups, handpicked from around the web.Curated by humans and updated daily.',
			imageUrl:
				'https://cdn.prod.website-files.com/657b3d8ca1cab4015f06c850/66fa7404db906988c911b863_Screenshot%202024-09-30%20at%2010.48.29.png',
			categoryId: product_launch_and_promotionCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: startupsTag.id }, { id: micro_startupsTag.id }, { id: businessTag.id }]
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
			title: "Discover and get early access to tomorrow's startups | BetaList",
			url: 'https://betalist.com/',
			description: '',
			imageUrl: '',
			categoryId: product_launch_and_promotionCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: startupsTag.id }, { id: early_accessTag.id }]
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
			title: 'Submitting: Share your products. Grow your users.',
			url: 'https://submitting.app/',
			description:
				'Curated lists of the best places to submit your startup, side project, blog post or other product.',
			imageUrl: 'https://submitting.app/og.png',
			categoryId: product_launch_and_promotionCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: product_submissionTag.id }, { id: marketingTag.id }, { id: growthTag.id }]
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
			title: 'Discover pre-launch startups',
			url: 'https://www.early.tools/',
			description:
				"Be first in line to try new products you'll love from day one – early.tools is your home to find pre-launched startups.",
			imageUrl:
				'https://assets.softr-files.com/applications/dd1f69dc-d223-452e-8952-19408ca32e00/assets/782cf24e-61c9-4c41-b9f0-238b761c1e5c.png',
			categoryId: product_launch_and_promotionCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: startupsTag.id }, { id: product_launchTag.id }, { id: early_accessTag.id }]
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
			title: 'Discover Profitable Startups & Online Business Ideas - Startups.fyi',
			url: 'https://www.startups.fyi/',
			description:
				'Learn how successful founders are building profitable online businesses and making money online with their side-projects.',
			imageUrl:
				'https://cdn.prod.website-files.com/62780358b9ccf88491b6167e/6495ce2cae26ddd93909b5d7_2.png',
			categoryId: product_launch_and_promotionCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [
					{ id: startupsTag.id },
					{ id: online_businessTag.id },
					{ id: business_ideasTag.id }
				]
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
			title: 'Prodpapa - Public Page for Products | Gather feedback and reviews',
			url: 'https://www.prodpapa.com/',
			description:
				'Prodpapa is a comprehensive product directory website that provides a wide range of tools for startups, businesses, and sole proprietors.',
			imageUrl: 'https://www.prodpapa.com/FeatureGraphic.webp',
			categoryId: product_launch_and_promotionCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [
					{ id: product_directoryTag.id },
					{ id: startupsTag.id },
					{ id: business_toolsTag.id }
				]
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
			title:
				'Sell, buy, show off your side projects - SideProjectors | Marketplace to buy and sell side projects.',
			url: 'https://www.sideprojectors.com/#/',
			description:
				'SideProjectors is a friendly marketplace to sell and buy interesting side projects from other people. If you are a developer with side projects then this would be a perfect community for you to discover what others are building.',
			imageUrl: '',
			categoryId: product_launch_and_promotionCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: side_projectsTag.id }, { id: marketplaceTag.id }, { id: developersTag.id }]
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
			title: 'PitchWall - Community of tech lovers and early adopters',
			url: 'https://pitchwall.co/',
			description:
				'Community of tech lovers and early adopters. Browse, search or submit your product or startup',
			imageUrl: '',
			categoryId: product_launch_and_promotionCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: communityTag.id }, { id: techTag.id }, { id: startupsTag.id }]
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
			title: 'GetByte | Power your Startup',
			url: 'https://www.getbyte.tech/',
			description: 'GetByte | Empowering, One Innovation at a Time!',
			imageUrl: 'https://getbyte.tech/opengraph-image.png?c42daa5239f21d1b',
			categoryId: product_launch_and_promotionCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: startupTag.id }, { id: innovationTag.id }]
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
			title:
				'Launch Point Zero - Directory of sites to launch and promote Statrtups, Software as a Sevice, and Apps',
			url: 'https://launchpointzero.com/',
			description:
				'Launch Point Zero - Directory of sites to launch and promote Statrtups, Software as a Sevice, and Apps. We track and rate each site to launch from, as well as provide reviews for each one.',
			imageUrl: '',
			categoryId: product_launch_and_promotionCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: product_launchTag.id }, { id: startupsTag.id }, { id: directoryTag.id }]
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
			title: 'Tiny Alternatives - The best new products in tech.',
			url: 'https://tinyalternatives.com/',
			description:
				"Tiny Alternatives is a curation of the best new products, every day. Discover the latest mobile apps, websites, and technology products that everyone's talking about.",
			imageUrl: 'https://image.thum.io/get/maxAge/12/width/700/https://tinyalternatives.com',
			categoryId: product_launch_and_promotionCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: product_discoveryTag.id }, { id: techTag.id }, { id: alternativesTag.id }]
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
			title: '150 Directories And Platforms To List Your SaaS',
			url: 'https://launchpedia.co/list-my-saas/',
			description:
				'Submit your saas on these directories, launch platforms, maker communities, startups sites, and get the first 1000 users for your saas.',
			imageUrl: 'https://launchpedia.co/wp-content/uploads/2024/09/ListMySaaS-OG-.png',
			categoryId: product_launch_and_promotionCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: saasTag.id }, { id: directoriesTag.id }, { id: product_launchTag.id }]
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
			title:
				'GitHub - dehenne/awesome-visibility: Curated list to achieve visibility for your product',
			url: 'https://github.com/dehenne/awesome-visibility',
			description:
				'Curated list to achieve visibility for your product - dehenne/awesome-visibility',
			imageUrl:
				'https://opengraph.githubassets.com/5c0cacdf29247a59b165b1419f7fc03015cc6ecaf272d14ae5fc63174af527a5/dehenne/awesome-visibility',
			categoryId: product_launch_and_promotionCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: product_visibilityTag.id }, { id: marketingTag.id }, { id: githubTag.id }]
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
			title: 'Bento Grids',
			url: 'https://bentogrids.com/',
			description: 'BentoGrids is a curated collection of bento designs for your inspiration.',
			imageUrl: 'https://bentogrids.com/images/og.png',
			categoryId: ui_design_inspirationCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: ui_designTag.id }, { id: inspirationTag.id }, { id: bento_gridsTag.id }]
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
			title: 'Dark Themed Web Design Inspiration',
			url: 'https://www.dark.design/',
			description:
				'The best hand-picked dark themed websites on the internet. From designers for designers. Curated with love.',
			imageUrl: 'https://framerusercontent.com/images/7cu5DrHOnUjoF69HOAaqbYDcO4U.jpg',
			categoryId: ui_design_inspirationCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: ui_designTag.id }, { id: inspirationTag.id }, { id: dark_themeTag.id }]
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
			title: 'UI/UX Design Inspiration for Apps and Websites — Page Flows',
			url: 'https://pagecollective.com/',
			description: '',
			imageUrl: '',
			categoryId: ui_design_inspirationCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: ui_designTag.id }, { id: ux_designTag.id }, { id: inspirationTag.id }]
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
			title: 'The Best Landing Page Design Inspiration, Templates and More | Landingfolio',
			url: 'https://www.landingfolio.com/',
			description:
				"Looking for landing page inspiration? We've got you covered. Landingfolio features the best landing page designs, templates, component and more on the web. Get inspired by real landing page examples.",
			imageUrl: 'https://www.landingfolio.com/_nuxt/img/main.68a8f7f.png',
			categoryId: ui_design_inspirationCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: landing_pageTag.id }, { id: ui_designTag.id }, { id: inspirationTag.id }]
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
			title: 'Explore | Layers',
			url: 'https://layers.to/',
			description: 'Share work, connect with other designers, discover jobs and get hired.',
			imageUrl: 'https://layers.to/build/images/meta.jpg',
			categoryId: ui_design_inspirationCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: designTag.id }, { id: communityTag.id }, { id: jobsTag.id }]
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
			title: 'CallToInspiration – Small details for very exacting ideas!',
			url: 'https://calltoinspiration.com/',
			description:
				'Call for inspiration using the purple hat for when you have inspiration blocks or need fresh new ideas. A great tool created by a deisigner for web professionals.',
			imageUrl: 'https://calltoinspiration.com/share.png',
			categoryId: ui_design_inspirationCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: designTag.id }, { id: inspirationTag.id }]
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
			title: 'Mobbin — UI & UX design inspiration for mobile & web apps',
			url: 'https://mobbin.com/',
			description: '',
			imageUrl: '',
			categoryId: ui_design_inspirationCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: ui_designTag.id }, { id: ux_designTag.id }, { id: mobile_appsTag.id }]
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
			title: 'UI/UX Design Inspiration for Apps and Websites — Page Flows',
			url: 'https://pageflows.com/',
			description: '',
			imageUrl: '',
			categoryId: ui_design_inspirationCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: ui_designTag.id }, { id: ux_designTag.id }, { id: inspirationTag.id }]
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
			title: 'Best Design Portfolio Examples and Case Studies for 2024',
			url: 'https://pafolios.com/',
			description:
				'2024 best design portfolio examples and case studies for Product, UI/UX, Creative Designers. Learn and improve your design skills with real-world examples.',
			imageUrl: 'https://pafolios.com/preview.jpg',
			categoryId: ui_design_inspirationCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: design_portfolioTag.id }, { id: ui_designTag.id }, { id: ux_designTag.id }]
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
			title: 'Explore 3000+ Free UI Elements: CSS & Tailwind',
			url: 'https://uiverse.io/',
			description: '',
			imageUrl: '',
			categoryId: ui_componentsCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: ui_componentsTag.id }, { id: cssTag.id }, { id: tailwindTag.id }]
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
			title: 'Origin UI - Beautiful UI components built with Tailwind CSS and React',
			url: 'https://originui.com/',
			description:
				'An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects.',
			imageUrl: 'https://originui.com/opengraph-image.jpg?2c969d23ed72e3ae',
			categoryId: ui_componentsCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: ui_componentsTag.id }, { id: tailwind_cssTag.id }, { id: reactTag.id }]
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
			title: 'awesome-shadcn-ui',
			url: 'https://awesome-shadcn-ui.vercel.app/',
			description: 'A curated list of awesome things related to shadcn/ui',
			imageUrl: 'https://i.ibb.co/wdxr6M8/seo.png',
			categoryId: ui_componentsCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: ui_componentsTag.id }, { id: shadcn_uiTag.id }]
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
			title: 'The best Tailwind templates & UI kits on the internet | TailAwesome',
			url: 'https://www.tailawesome.com/',
			description:
				'A curated directory of the best Tailwind templates and UI kits to kickstart your next design.',
			imageUrl: 'https://d1etqblq65l80m.cloudfront.net/assets/social_share-8cfeebab.png',
			categoryId: ui_componentsCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: tailwindTag.id }, { id: templatesTag.id }, { id: ui_kitsTag.id }]
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
			title: 'uifonts.app',
			url: 'https://www.uifonts.app/',
			description:
				'Test and preview fonts in real-time for all your design needs. Choose the perfect typeface with ease',
			imageUrl: 'https://www.uifonts.app/og-image.png',
			categoryId: fonts_and_typographyCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: fontsTag.id }, { id: typographyTag.id }]
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
			title: 'Colorsinspo - All in one resource for finding everything about colors  | Colorsinspo',
			url: 'https://colorsinspo.com/',
			description:
				'Colorsinspo is all in one resource to find everything about colors with extreme ease. Also, you will get Freebies, Inspirations, Color Tools, Gradients and thousands of trendy hand-picked color palettes.',
			imageUrl: 'https://colorsinspo.com/static/img/twitter/colorsinspo-twitter-sumary-image.png',
			categoryId: color_palettesCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: color_palettesTag.id }, { id: designTag.id }]
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
			title: 'ColorSpace - Color Palettes Generator and Color Gradient Tool',
			url: 'https://mycolor.space/',
			description:
				'Here you can find the perfect matching color scheme for your next project! Generate nice color palettes, color gradients and much more! Your space for everything that has to do with color!',
			imageUrl: '',
			categoryId: color_palettesCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: color_palettesTag.id }, { id: color_gradientsTag.id }]
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
			title: 'Coolors - The super fast color palettes generator!',
			url: 'https://coolors.co/',
			description: 'Generate or browse beautiful color combinations for your designs.',
			imageUrl: 'https://coolors.co/assets/img/og_image.png',
			categoryId: color_palettesCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: color_palettesTag.id }, { id: designTag.id }]
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
			title: 'Eva Design System: Deep learning color generator',
			url: 'https://colors.eva.design/',
			description: 'Generate color pallets using deep learning powered algorithm',
			imageUrl: '',
			categoryId: color_palettesCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: color_palettesTag.id }, { id: aiTag.id }]
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
			title: 'Untitled',
			url: 'https://color.adobe.com/es/explore',
			description: '',
			imageUrl: '',
			categoryId: color_palettesCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: color_palettesTag.id }, { id: adobeTag.id }]
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
			title: 'PalettePalette',
			url: 'https://palette.tone-row.com/',
			description:
				'Generate a custom Tailwind color palette from a prompt. Palette supports light mode and dark mode, neutral swatches, and shades for your custom colors.',
			imageUrl: 'https://palette.tone-row.com/og.png',
			categoryId: color_palettesCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: color_palettesTag.id }, { id: tailwindTag.id }, { id: designTag.id }]
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
			title: 'Fresh Background Gradients | WebGradients.com 💎',
			url: 'https://webgradients.com/',
			description:
				'Come to WebGradients.com for 180 beautiful linear gradients in CSS3, Photoshop and Sketch. This collection is curated by top designers and totally free.',
			imageUrl: 'https://webgradients.com/Open_graph_image_1200x630.jpg',
			categoryId: gradientsCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: gradientsTag.id }, { id: designTag.id }, { id: cssTag.id }]
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
			title: 'uiGradients - Beautiful colored gradients',
			url: 'https://uigradients.com/#VisionsofGrandeur',
			description:
				'A handpicked collection of beautiful color gradients for designers and developers',
			imageUrl: 'http://uigradients.com/static/images/uigradients.jpg',
			categoryId: gradientsCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: gradientsTag.id }, { id: designTag.id }]
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
			title: 'Vector Icons and Stickers - PNG, SVG, EPS, PSD and CSS',
			url: 'https://www.flaticon.com/',
			description:
				'Download Free Icons and Stickers for your projects. Resources made by and for designers. PNG, SVG, EPS, PSD and CSS formats',
			imageUrl: 'https://media.flaticon.com/share/flaticon-generic.jpg',
			categoryId: iconsCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: iconsTag.id }, { id: designTag.id }]
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
			title: 'Phosphor Icons',
			url: 'https://phosphoricons.com/',
			description:
				'A flexible icon family for interfaces, diagrams, presentations — whatever, really.',
			imageUrl: 'https://phosphoricons.com/phosphor-opengraph.png?v=2.0.2',
			categoryId: iconsCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: iconsTag.id }, { id: designTag.id }]
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
			title: 'React Icons',
			url: 'https://react-icons.github.io/react-icons/',
			description: 'Include popular icons in your React projects easly with react-icons.',
			imageUrl: '',
			categoryId: iconsCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: iconsTag.id }, { id: reactTag.id }]
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
			title: 'Lucide',
			url: 'https://lucide.dev/icons/',
			description: 'Beautiful & consistent icon toolkit made by the community.',
			imageUrl: 'https://lucide.dev/og.png',
			categoryId: iconsCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: iconsTag.id }, { id: designTag.id }]
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
			title: 'Free stock photos · Pexels',
			url: 'https://www.pexels.com/',
			description: '',
			imageUrl: '',
			categoryId: imagesCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: stock_photosTag.id }, { id: imagesTag.id }]
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
			title: 'Illustrations | unDraw',
			url: 'https://undraw.co/illustrations',
			description:
				'Browse the complete unDraw collection of open-source illustrations. Find and customize the perfect illustration for your next project or website.',
			imageUrl: 'https://cdn.undraw.co/static/ud24ogimage.png',
			categoryId: imagesCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: illustrationsTag.id }, { id: designTag.id }]
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
			title: 'Freepik | Diseña mejor y más rápido',
			url: 'https://www.freepik.es/',
			description:
				'Millones de recursos gráficos gratis. ✓ Fotos ✓ Imágenes con IA ✓ Vectores ✓ Iconos ✓ Plantillas ✓ Vídeos. Descubre nuestro generador de creaciones artísticas con IA en tiempo real.',
			imageUrl: 'https://cdn-front.freepik.com/meta-tags-social/og-fb-logo-en.png?w=1200',
			categoryId: imagesCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: design_resourcesTag.id }, { id: ai_imagesTag.id }]
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
			title: 'Find your icon | LogSnag',
			url: 'https://logsnag.com/icon',
			description: 'Find the perfect icon for your LogSnag event.',
			imageUrl: 'https://logsnag.com/og-image.png',
			categoryId: logosCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: logosTag.id }, { id: iconsTag.id }]
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
			title: 'Logoipsum',
			url: 'https://logoipsum.com/',
			description:
				'Logoipsum offers free, SVG placeholder logos in a variety of styles for use in design projects and mockups. Easily copy or download logos for your design.',
			imageUrl: 'https://logoipsum.com/logoipsum.png',
			categoryId: logosCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: logosTag.id }, { id: designTag.id }]
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
			title: 'A beautiful library with SVG logos - SvglA beautiful library with SVG logos - Svgl',
			url: 'https://svgl.app/',
			description: 'A beautiful library with SVG logos',
			imageUrl: 'https://svgl.app/images/screenshot.png',
			categoryId: logosCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: logosTag.id }, { id: svgTag.id }]
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
			title: '1-Line Layouts',
			url: 'https://1linelayouts.glitch.me/',
			description: '',
			imageUrl: '',
			categoryId: dev_resourcesCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: cssTag.id }, { id: layoutsTag.id }]
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
			title: 'BG.IBELICK - Modern, Ready-to-Use Background Snippets for Developers',
			url: 'https://bg.ibelick.com/',
			description:
				'A collection of modern background snippets for web developers. Ready-to-use snippets crafted with Tailwind CSS and Vanilla CSS for seamless integration.',
			imageUrl:
				'https://background-snippets-jowj-526njc8rv-julienthibeauts-projects.vercel.app/banner.jpg',
			categoryId: dev_resourcesCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: cssTag.id }, { id: backgroundsTag.id }, { id: tailwindTag.id }]
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
			title: 'Products, Tools and Resources for Developers & Designers | Resource.fyi',
			url: 'https://resource.fyi/',
			description:
				'Handpicked Free Tools, Resources and Products Curated for Developers, Designers, Marketers and More. Explore, submit and support - Products, resources and tools created for tech enthusiasts and professionals.',
			imageUrl: 'https://ucarecdn.com/769f556d-d81f-4f6b-b4e1-142ac255b2c2/resourcefyibanner.png',
			categoryId: dev_resourcesCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: dev_toolsTag.id }, { id: design_resourcesTag.id }]
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
			title: 'Developer Roadmaps - roadmap.sh',
			url: 'https://roadmap.sh/',
			description:
				'Community driven roadmaps, articles and guides for developers to grow in their career.',
			imageUrl: 'https://roadmap.sh/images/og-img.png',
			categoryId: learningCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: learningTag.id }, { id: roadmapsTag.id }, { id: developersTag.id }]
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
			title: 'Web Skills',
			url: 'https://andreasbm.github.io/web-skills/',
			description: 'A visual overview of useful skills to learn as a web developer',
			imageUrl: 'https://andreasbm.github.io/web-skills/www/og-image.jpg',
			categoryId: learningCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: learningTag.id }, { id: web_developmentTag.id }]
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
			title: 'Edabit',
			url: 'https://edabit.com/challenges',
			description: '',
			imageUrl: '',
			categoryId: learningCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: coding_challengesTag.id }, { id: learningTag.id }]
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
			title: 'adventJS - JavaScript, TypeScript and Python coding challenges every day of December',
			url: 'https://adventjs.dev/',
			description:
				'JavaScript, TypeScript and Python coding challenges every day of December. Learn and have fun with adventJS coding challenges!',
			imageUrl: 'https://adventjs.dev/og.webp',
			categoryId: learningCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: javascriptTag.id }, { id: typescriptTag.id }, { id: pythonTag.id }]
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
			title: 'CSS Challenges - Become a Better Web Developer',
			url: 'https://css-challenges.com/',
			description:
				'Challenge yourself, improve your CSS skills and learn a new trick every day. With CSS Challenges, you can practice becoming a better web developer.',
			imageUrl: 'https://css-challenges.com/wp-content/uploads/2022/01/social-share.png',
			categoryId: learningCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: cssTag.id }, { id: web_developmentTag.id }, { id: learningTag.id }]
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
			title: 'Dashboard | HackerRank',
			url: 'https://www.hackerrank.com/dashboard',
			description:
				'Join over 23 million developers in solving code challenges on HackerRank, one of the best ways to prepare for programming interviews.',
			imageUrl: 'https://hrcdn.net/og/default.jpg',
			categoryId: learningCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: coding_challengesTag.id }, { id: interview_prepTag.id }]
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
			title: '100 Days CSS Challenge',
			url: 'https://100dayscss.com/days/01/',
			description: '',
			imageUrl: '',
			categoryId: learningCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: cssTag.id }, { id: challengesTag.id }, { id: learningTag.id }]
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
			title: 'LeetCode',
			url: 'https://leetcode.com/explore/',
			description: '',
			imageUrl: '',
			categoryId: learningCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: algorithmsTag.id }, { id: data_structuresTag.id }]
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
			title: 'Untitled',
			url: 'https://www.freecodecamp.org/',
			description: '',
			imageUrl: 'https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png',
			categoryId: learningCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: codingTag.id }, { id: learningTag.id }]
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
			title: 'Frontend Mentor | Front-end coding challenges using a real-life workflow',
			url: 'https://www.frontendmentor.io/',
			description:
				'Improve your front-end skills by building real projects. Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs.',
			imageUrl:
				'https://res.cloudinary.com/dz209s6jk/image/upload/v1585172856/Meta/meta-homepage.png',
			categoryId: learningCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: frontendTag.id }, { id: coding_challengesTag.id }, { id: learningTag.id }]
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
			title: 'Exercism',
			url: 'https://exercism.org/',
			description: 'Learn, practice and get world-class mentoring in over 50 languages. 100% free.',
			imageUrl: 'https://assets.exercism.org/meta/og.png',
			categoryId: learningCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: codingTag.id }, { id: mentoringTag.id }, { id: learningTag.id }]
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
			title: 'ChatGPT',
			url: 'https://chatgpt.com/',
			description: '',
			imageUrl: '',
			categoryId: ai_chatCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: aiTag.id }, { id: chatTag.id }]
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
			title: 'Claude',
			url: 'https://claude.ai/new',
			description: 'Talk with Claude, an AI assistant from Anthropic',
			imageUrl: 'https://claude.ai/images/claude_ogimage.png',
			categoryId: ai_chatCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: aiTag.id }, { id: chatTag.id }]
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
			title: '‎Gemini - chat to supercharge your ideas',
			url: 'https://gemini.google.com/app',
			description:
				'Bard is now Gemini. Get help with writing, planning, learning, and more from Google AI.',
			imageUrl: 'https://www.gstatic.com/lamda/images/gemini_thumbnail_c362e5eadc46ca9f617e2.png',
			categoryId: ai_chatCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: aiTag.id }, { id: chatTag.id }, { id: googleTag.id }]
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
			title: 'Perplexity',
			url: 'https://www.perplexity.ai/',
			description: '',
			imageUrl: '',
			categoryId: ai_chatCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: aiTag.id }, { id: searchTag.id }]
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
			title: 'DeepSeek',
			url: 'https://chat.deepseek.com/',
			description: '',
			imageUrl: '',
			categoryId: ai_chatCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: aiTag.id }, { id: chatTag.id }]
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
			title: 'Qwen Chat',
			url: 'https://chat.qwenlm.ai/',
			description:
				'Qwen Chat offers comprehensive functionality spanning chatbot, image and video understanding, image generation, document processing, web search integration, tool utilization, and artifacts.',
			imageUrl: '',
			categoryId: ai_chatCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: aiTag.id }, { id: chatTag.id }]
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
			title: 'Kimi - 会推理解析，能深度思考的AI助手',
			url: 'https://kimi.ai/',
			description:
				'Kimi 是一个有着超大"内存"的智能助手，可以一口气读完二十万字的小说，还会上网冲浪，快来跟他聊聊吧 | Kimi - Moonshot AI 出品的智能助手',
			imageUrl: '',
			categoryId: ai_chatCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: aiTag.id }, { id: chatTag.id }]
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
			title: 'Le Chat - Mistral AI',
			url: 'https://chat.mistral.ai/chat',
			description: "Chat with Mistral AI's cutting edge language models.",
			imageUrl: 'https://chat.mistral.ai/og.png',
			categoryId: ai_chatCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: aiTag.id }, { id: chatTag.id }]
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
			title: 'MCP Servers for Cursor',
			url: 'https://cursor.directory/mcp',
			description: 'MCP Servers',
			imageUrl: 'https://cdn.midday.ai/cursor/opengraph-image.png',
			categoryId: mcp_serversCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: mcp_serversTag.id }, { id: aiTag.id }]
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
			title: 'Open-Source MCP servers | Glama',
			url: 'https://glama.ai/mcp/servers',
			description:
				'Enterprise-grade security, privacy, with features like agents, MCP, prompt templates, and more.',
			imageUrl: 'https://glama.ai/generated-images/og?title=Open-Source+MCP+servers',
			categoryId: mcp_serversCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: mcp_serversTag.id }, { id: aiTag.id }]
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
			title: 'MCP Servers',
			url: 'https://mcp.so/',
			description:
				'The largest collection of MCP Servers, including Awesome MCP Servers and Claude MCP integration. Search and discover MCP servers to enhance your AI capabilities.',
			imageUrl: '',
			categoryId: mcp_serversCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: mcp_serversTag.id }, { id: aiTag.id }]
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
			title: 'Smithery - Model Context Protocol Registry',
			url: 'https://smithery.ai/',
			description: "Extend your agent's capabilities with Model Context Protocol servers.",
			imageUrl: '',
			categoryId: mcp_serversCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: mcp_serversTag.id }, { id: aiTag.id }]
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
			title: 'MCP Server Info | Model Context Protocol Directory',
			url: 'https://www.mcpserver.info/',
			description:
				'Conennect your AI to the world • MCP Server Info • Directory for Model Context Protocol servers • Find and try MCP Servers for Claude.ai, ChatGPT and other AI tools • Community-driven open source platform.',
			imageUrl: '',
			categoryId: mcp_serversCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: mcp_serversTag.id }, { id: aiTag.id }]
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
			title: 'Composio MCP Server',
			url: 'https://mcp.composio.dev/',
			description: '',
			imageUrl: 'https://mcp-assets.composio.dev/composio-mcp-splash.png',
			categoryId: mcp_serversCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: mcp_serversTag.id }, { id: aiTag.id }]
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
			title: 'GitHub Profile Badges',
			url: 'https://home.aveek.io/GitHub-Profile-Badges/',
			description: '',
			imageUrl: '',
			categoryId: github_toolsCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: githubTag.id }, { id: profileTag.id }]
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
			title: 'GitHub README Templates',
			url: 'https://www.readme-templates.com/',
			description: "An overview of insightful GitHub README's to get you started in seconds.",
			imageUrl: 'https://www.readme-templates.com/meta-image.png',
			categoryId: github_toolsCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: githubTag.id }, { id: readmeTag.id }]
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
			title: 'Checklist Design - A collection of the best design practices.',
			url: 'https://www.checklist.design/',
			description:
				'Checklist Design is a curated list of checklists ranging from website pages, to UI components, all the way to branding assets.',
			imageUrl:
				'https://cdn.prod.website-files.com/5ba4b3c973b5d218459f7e6f/5f36037991336f1f2a8bf938_checklist-3-thumbnail.jpg',
			categoryId: design_toolsCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: designTag.id }, { id: checklistTag.id }]
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
			title: 'Design Systems For Figma',
			url: 'https://www.designsystemsforfigma.com/',
			description:
				'Discover expert insights and tools to create, manage, and scale design systems with Figma. Access real-world case studies, best practices, and tips from industry leaders to elevate your design process and achieve consistent, user-centered results.',
			imageUrl:
				'https://cdn.prod.website-files.com/5f08a6a4b22d4a7ca3b0b630/5f18a5844db54c3e79853bca_OG-image-main.png',
			categoryId: design_toolsCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: design_systemsTag.id }, { id: figmaTag.id }]
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
			title: 'UI Goodies - A Directory of Design Resources & Tools',
			url: 'https://uigoodies.com/',
			description:
				'UI Goodies is a curated directory of design resources and tools to help designers and developers create better user interfaces. Discover the best UI kits, icons, templates, and more.',
			imageUrl: 'https://framerusercontent.com/assets/1MD5fAuHIIWmyLZzzeWTGcJQYg.png',
			categoryId: design_toolsCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: design_resourcesTag.id }, { id: uiTag.id }]
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
			title: 'The Front-End Checklist - ✨ Your best Front-End Tool ✨',
			url: 'https://frontendchecklist.io/',
			description:
				'🗂 The Front-End Checklist Application is perfect for modern websites and meticulous developers! Follow the rules and deliver the best of your work in a generated report!',
			imageUrl: 'https://everywhere-8a59.kxcdn.com/img/social/facebook-banner.jpg',
			categoryId: design_toolsCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: frontendTag.id }, { id: checklistTag.id }]
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
			title: 'Recursos Cósmicos',
			url: 'https://www.recursoscosmicos.com/',
			description: 'Recursos y herramientas para diseño y desarrollo web',
			imageUrl: '',
			categoryId: design_toolsCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: designTag.id }, { id: web_developmentTag.id }]
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
			title: 'imgsrc',
			url: 'https://imgsrc.io/',
			description: 'Generate beautiful Open Graph images with zero effort.',
			imageUrl: 'https://imgsrc.io/og.png',
			categoryId: design_toolsCategory.id,
			username: user.username,
			isAvailable: true,
			tags: {
				connect: [{ id: open_graphTag.id }, { id: imagesTag.id }]
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

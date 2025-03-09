<script lang="ts">
	import {
		SiInstagram,
		SiX,
		SiGithub,
		SiTwitch,
		SiYoutube,
		SiTiktok
	} from '@icons-pack/svelte-simple-icons';
	import { Link, Linkedin } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';

	type SocialPlatform =
		| 'instagram'
		| 'linkedin'
		| 'x'
		| 'github'
		| 'website'
		| 'twitch'
		| 'youtube'
		| 'tiktok';

	interface Props {
		avatarUrl: string;
		bannerUrl: string;
		name: string;
		handle: string;
		socials: Partial<Record<SocialPlatform, string>>;
	}

	let { avatarUrl, bannerUrl, name, handle, socials }: Props = $props();

	const socialIcons: Record<SocialPlatform, any> = {
		instagram: SiInstagram,
		linkedin: Linkedin,
		x: SiX,
		github: SiGithub,
		website: Link,
		twitch: SiTwitch,
		youtube: SiYoutube,
		tiktok: SiTiktok
	};

	let socialLinks = $derived(
		Object.entries(socials).map(([platform, url]) => ({
			name: platform.charAt(0).toUpperCase() + platform.slice(1),
			url,
			icon: socialIcons[platform as SocialPlatform]
		}))
	);
</script>

<header class="mb-4 flex w-full flex-col md:h-80">
	<div class="relative h-48 md:h-80">
		<img src={bannerUrl} class="absolute inset-0 h-full w-full object-cover" alt="Profile Banner" />
		<!-- <img
			src="https://pbs.twimg.com/profile_banners/1613226844412645397/1706569327/1080x360"
			class="absolute inset-0 h-full w-full object-cover"
			alt="Profile Banner"
		/> -->
	</div>
	<div
		class="container -mt-16 flex w-full flex-col items-center justify-between gap-2 self-end md:-mt-12 md:flex-row md:items-end"
	>
		<div class="flex flex-col items-center gap-2 text-center md:flex-row md:items-end md:text-left">
			<Avatar class="size-28 rounded-xl">
				<AvatarImage src={avatarUrl} alt="Profile Image" />
				<AvatarFallback
					>{name
						.split(' ')
						.map((n) => n[0])
						.join('')}</AvatarFallback
				>
			</Avatar>
			<div class="flex flex-col gap-2 self-end">
				<h1 class="text-2xl font-medium">{name}</h1>
				<p class="text-sm text-muted-foreground">@{handle}</p>
			</div>
		</div>
		<div class="flex flex-wrap justify-center gap-2 md:flex-row md:justify-end">
			{#each socialLinks as link}
				<a href={link.url} target="_blank" rel="noopener noreferrer">
					<Button variant="ghost" size="icon" tooltip={link.name}>
						<link.icon />
					</Button>
				</a>
			{/each}
		</div>
	</div>
</header>

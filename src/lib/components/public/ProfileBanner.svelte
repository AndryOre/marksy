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

	const socialLinks = [
		{
			name: 'Instagram',
			icon: SiInstagram
		},
		{
			name: 'Linkedin',
			icon: Linkedin
		},
		{
			name: 'X',
			icon: SiX
		},
		{
			name: 'Github',
			icon: SiGithub
		},
		{
			name: 'Website',
			icon: Link
		},
		{
			name: 'Twitch',
			icon: SiTwitch
		},
		{
			name: 'Youtube',
			icon: SiYoutube
		},
		{
			name: 'Tiktok',
			icon: SiTiktok
		}
	];
</script>

<header class="relative mb-4 flex h-96 w-full overflow-hidden">
	<img
		src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/2476680/cb284d32052344b59b9a35d438eb943b/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/8.jpg?token-time=1743724800&token-hash=E2um6GuzSyuczsD8g4fojcYALhW_dI1ntAfu1QhlzTw%3D"
		class="max- absolute z-0 mx-auto aspect-[16/9] w-full object-cover"
		alt="Profile Banner"
	/>
	<div
		class="container z-10 flex w-full flex-col items-center justify-between gap-2 self-end md:flex-row md:items-end"
	>
		<div class="flex flex-col items-center gap-2 text-center md:flex-row md:items-end md:text-left">
			<Avatar class="size-28 rounded-xl">
				<AvatarImage
					src="https://pbs.twimg.com/profile_images/1769861078119333888/ZmS08l2w_400x400.jpg"
					alt="Profile Image"
				/>
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<div class="flex flex-col gap-2 self-end">
				<h1 class="text-2xl font-medium">Andry Orellana</h1>
				<p class="text-sm text-muted-foreground">@andryoredev</p>
			</div>
		</div>
		<div class="flex flex-wrap justify-center gap-2 md:flex-row md:justify-end">
			{#each socialLinks as link}
				<Button variant="ghost" size="icon" tooltip={link.name}>
					<link.icon />
				</Button>
			{/each}
		</div>
	</div>
</header>

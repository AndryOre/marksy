<script lang="ts">
	import { Card, CardHeader, CardContent } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import type { PageData } from './$types.js';
	import EmailInput from '$lib/components/public/EmailInput/EmailInput.svelte';
	import { setMode } from 'mode-watcher';
	import { onMount } from 'svelte';

	let { data }: { data: PageData } = $props();

	onMount(() => {
		setMode('light');
	});
</script>

<div
	class="flex flex-col gap-8 bg-gradient-to-br from-amber-200 to-amber-400 px-4 py-8 md:px-16 md:py-8"
>
	<section class="flex flex-col items-center gap-6 text-center">
		<h1 class="font-serif text-7xl md:text-9xl">Marksy</h1>
		<p class="text-4xl font-medium md:text-6xl">
			<span class="font-bold">Turn your bookmarks</span> <br />into a public directory in seconds.
		</p>
	</section>

	<section class="flex flex-col items-center gap-4 text-center">
		<p class="text-xl font-medium md:text-2xl">
			Join the waitlist and be among the first to try Marksy.
		</p>
		<EmailInput {data} />
	</section>

	<section class="flex flex-col gap-4">
		<h2 class="text-center text-2xl font-semibold">How it Works</h2>
		<div
			class="flex flex-col items-center justify-center gap-8 md:grid md:grid-cols-2 md:items-stretch lg:grid-cols-3"
		>
			<Card class="flex h-full w-full flex-col bg-card/50 sm:max-w-md md:max-w-none">
				<CardHeader class="flex-1">
					<img
						src="/assets/signup.webp"
						alt="Sign up illustration"
						class="-mb-16 mr-8 h-[180px] rotate-12 self-end sm:h-[200px]"
					/>
				</CardHeader>
				<CardContent>
					<Badge class="bg-amber-400 text-primary">Step 1</Badge>
					<h3 class="text-lg font-medium">Sign up and set up your profile</h3>
					<p>Create your account and personalize your Marksy space.</p>
				</CardContent>
			</Card>

			<Card class="flex h-full w-full flex-col bg-card/50 sm:max-w-md md:max-w-none">
				<CardHeader class="flex-1">
					<img
						src="/assets/sync.webp"
						alt="Sync illustration"
						class="-mb-4 h-[150px] self-center sm:h-[164px]"
					/>
				</CardHeader>
				<CardContent>
					<Badge class="bg-amber-400 text-primary">Step 2</Badge>
					<h3 class="text-lg font-medium">Install the extension and sync</h3>
					<p>Connect with your browser and choose which folders to import.</p>
				</CardContent>
			</Card>

			<Card
				class="flex h-full w-full flex-col bg-card/50 sm:max-w-md md:col-span-2 md:max-w-none lg:col-span-1"
			>
				<CardHeader class="flex-1">
					<img
						src="/assets/share.webp"
						alt="Share illustration"
						class="-mb-12 h-[160px] -rotate-12 self-center sm:h-[180px]"
					/>
				</CardHeader>
				<CardContent>
					<Badge class="bg-amber-400 text-primary">Step 3</Badge>
					<h3 class="text-lg font-medium">Share your public directory</h3>
					<p>
						Get your personalized link and share it easily. Just like this one: <a
							href="https://andryore.marksy.co"
							target="_blank"
							class="font-medium hover:underline">andryore.marksy.co</a
						>
					</p>
				</CardContent>
			</Card>
		</div>
	</section>

	<footer class="text-center">
		<p class="font-medium">
			Built with ❤️ by <a href="https://andryore.dev" class="font-bold underline">AndryOre</a>
		</p>
	</footer>
</div>

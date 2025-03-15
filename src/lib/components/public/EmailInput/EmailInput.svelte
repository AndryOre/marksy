<script lang="ts">
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { emailSchema, type EmailSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { LoaderCircle, Check } from 'lucide-svelte';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	let {
		data
	}: { data: { form: SuperValidated<Infer<EmailSchema>>; success?: boolean; error?: string } } =
		$props();

	const form = superForm(data.form, {
		validators: zodClient(emailSchema),
		resetForm: false
	});

	const { form: formData, enhance, submitting, message } = form;
</script>

<div class="flex w-full flex-col items-center gap-2">
	{#if $message?.status === 'success'}
		<Card.Root class="w-full max-w-[340px] bg-card/50 ">
			<Card.Content>
				<Badge class="bg-green-400 text-base text-primary" variant="outline">
					<Check class="mr-1 h-6 w-6" />
					You're in!
				</Badge>
				<Card.Description>
					We'll keep you posted at
					<span class="mt-1 block font-medium text-primary hover:underline">andryfpo@gmail.com</span
					>
				</Card.Description>
			</Card.Content>
		</Card.Root>
	{:else}
		<form method="POST" use:enhance class="flex w-full justify-center gap-2">
			<Form.Field {form} name="email">
				<Form.Control>
					{#snippet children({ props })}
						<Input
							{...props}
							bind:value={$formData.email}
							placeholder="Your email address"
							class="w-full max-w-60"
							disabled={$submitting}
						/>
						<input type="hidden" name="userGroup" value="Waitlist" />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Button disabled={$submitting}>
				{#if $submitting}
					<div class="flex items-center gap-2">
						<LoaderCircle class="h-4 w-4 animate-spin" />
						<span>Joining...</span>
					</div>
				{:else}
					Join
				{/if}
			</Form.Button>
		</form>
	{/if}
</div>

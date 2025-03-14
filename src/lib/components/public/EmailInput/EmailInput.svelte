<script lang="ts">
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { emailSchema, type EmailSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	let {
		data
	}: { data: { form: SuperValidated<Infer<EmailSchema>>; success?: boolean; error?: string } } =
		$props();

	const form = superForm(data.form, {
		validators: zodClient(emailSchema),
		resetForm: true
	});

	const { form: formData, enhance } = form;
</script>

<div class="flex w-full flex-col items-center gap-2">
	<form method="POST" use:enhance class="flex w-full justify-center gap-2">
		<Form.Field {form} name="email">
			<Form.Control>
				{#snippet children({ props })}
					<Input
						{...props}
						bind:value={$formData.email}
						placeholder="Your email address"
						class="w-full max-w-60"
					/>
					<input type="hidden" name="userGroup" value="Waitlist" />
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Button class={data.success ? 'bg-green-500' : ''}
			>{data.success ? 'Joined' : 'Join'}</Form.Button
		>
	</form>
</div>

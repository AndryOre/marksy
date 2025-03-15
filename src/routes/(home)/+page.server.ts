import type { PageServerLoad, Actions } from './$types.js';
import { fail } from '@sveltejs/kit';
import { superValidate, message } from 'sveltekit-superforms';
import { emailSchema } from '$lib/components/public/EmailInput/schema';
import { zod } from 'sveltekit-superforms/adapters';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(emailSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(emailSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		try {
			const formBody = `email=${encodeURIComponent(form.data.email)}&userGroup=Waitlist`;
			const response = await fetch(
				'https://app.loops.so/api/newsletter-form/cm889kv9x001p10gmbsosnnen',
				{
					method: 'POST',
					body: formBody,
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}
			);

			const data = await response.json();

			if (!response.ok) {
				return message(form, { status: 'error', text: data.message || 'Failed to subscribe' });
			}

			return message(form, { status: 'success', text: 'Successfully subscribed!' });
		} catch {
			return message(form, { status: 'error', text: 'Server error occurred' });
		}
	}
};

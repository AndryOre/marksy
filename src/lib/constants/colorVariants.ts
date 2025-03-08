export const colorVariants = {
	slate: {
		selected: 'bg-slate-500 text-white',
		unselected: 'bg-slate-500/10 text-slate-500'
	},
	gray: {
		selected: 'bg-gray-500 text-white',
		unselected: 'bg-gray-500/10 text-gray-500'
	},
	zinc: {
		selected: 'bg-zinc-500 text-white',
		unselected: 'bg-zinc-500/10 text-zinc-500'
	},
	neutral: {
		selected: 'bg-neutral-500 text-white',
		unselected: 'bg-neutral-500/10 text-neutral-500'
	},
	stone: {
		selected: 'bg-stone-500 text-white',
		unselected: 'bg-stone-500/10 text-stone-500'
	},
	red: {
		selected: 'bg-red-500 text-white',
		unselected: 'bg-red-500/10 text-red-500'
	},
	orange: {
		selected: 'bg-orange-500 text-white',
		unselected: 'bg-orange-500/10 text-orange-500'
	},
	amber: {
		selected: 'bg-amber-500 text-white',
		unselected: 'bg-amber-500/10 text-amber-500'
	},
	yellow: {
		selected: 'bg-yellow-500 text-white',
		unselected: 'bg-yellow-500/10 text-yellow-500'
	},
	lime: {
		selected: 'bg-lime-500 text-white',
		unselected: 'bg-lime-500/10 text-lime-500'
	},
	green: {
		selected: 'bg-green-500 text-white',
		unselected: 'bg-green-500/10 text-green-500'
	},
	emerald: {
		selected: 'bg-emerald-500 text-white',
		unselected: 'bg-emerald-500/10 text-emerald-500'
	},
	teal: {
		selected: 'bg-teal-500 text-white',
		unselected: 'bg-teal-500/10 text-teal-500'
	},
	cyan: {
		selected: 'bg-cyan-500 text-white',
		unselected: 'bg-cyan-500/10 text-cyan-500'
	},
	sky: {
		selected: 'bg-sky-500 text-white',
		unselected: 'bg-sky-500/10 text-sky-500'
	},
	blue: {
		selected: 'bg-blue-500 text-white',
		unselected: 'bg-blue-500/10 text-blue-500'
	},
	indigo: {
		selected: 'bg-indigo-500 text-white',
		unselected: 'bg-indigo-500/10 text-indigo-500'
	},
	violet: {
		selected: 'bg-violet-500 text-white',
		unselected: 'bg-violet-500/10 text-violet-500'
	},
	purple: {
		selected: 'bg-purple-500 text-white',
		unselected: 'bg-purple-500/10 text-purple-500'
	},
	fuchsia: {
		selected: 'bg-fuchsia-500 text-white',
		unselected: 'bg-fuchsia-500/10 text-fuchsia-500'
	},
	pink: {
		selected: 'bg-pink-500 text-white',
		unselected: 'bg-pink-500/10 text-pink-500'
	},
	rose: {
		selected: 'bg-rose-500 text-white',
		unselected: 'bg-rose-500/10 text-rose-500'
	}
} as const;

export type ColorVariant = keyof typeof colorVariants;

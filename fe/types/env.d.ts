declare global {
	type Env = Omit<
		CloudflareBindings,
		"WHICH_ENV"
	> & {
		WHICH_ENV: string
	}
}

export {}

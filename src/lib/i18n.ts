export type Locale = 'en' | 'th';

export async function getDictionary(lang: Locale) {
	// Load locale JSON from public/locales
	switch (lang) {
		case 'th':
			return (await import('../../public/locales/th.json')).default as Record<string, string>;
		case 'en':
		default:
			return (await import('../../public/locales/en.json')).default as Record<string, string>;
	}
}

export function createT(dict: Record<string, string>) {
	return (key: string, fallback?: string) => dict[key] ?? fallback ?? key;
}

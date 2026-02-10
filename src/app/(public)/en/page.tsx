import enTranslations from '../../../../public/locales/en.json';
import thTranslations from '../../../../public/locales/th.json';
import ClientPage from '../ClientPage';

// This is a Server Component that will be statically generated
export default function EnglishPage() {
  // Pre-fetch translations at build time
  const translations = {
    en: enTranslations,
    th: thTranslations
  };

  // Pass translations and locale as props to client component
  return <ClientPage translations={translations} locale="en" />;
}

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = false; // Never revalidate (pure SSG)

import { redirect } from 'next/navigation';

// This is a Server Component that redirects to English by default
export default function Home() {
  // Redirect to English version
  redirect('/en');
}

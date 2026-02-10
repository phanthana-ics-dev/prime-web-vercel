import Link from 'next/link';
import { getDictionary, createT, type Locale } from '../../../../lib/i18n';
import DocumentLayout from '../../components/DocumentLayout';

// Generate static paths for supported languages
export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'th' }
  ];
}

// Only generate specified params
export const dynamicParams = false;

export default async function MembershipAgreementPage({ params }: { params: Promise<{ lang: Locale }> }) {
	const { lang } = await params;
	const dict = await getDictionary(lang);
	const t = createT(dict);

	return (
		<DocumentLayout 
			activePage="membership-agreement" 
			lang={lang} 
			translations={{
				backToHome: t('Back to Home'),
				membershipDocuments: t('MEMBERSHIP DOCUMENTS'),
				purposeAndDirectory: t('Purpose and course directory'),
				factSheet: t('Fact Sheet'),
				termsAndConditions: t('Terms & Conditions'),
				membershipAgreement: t('Membership Agreement'),
				privacyPolicy: t('Privacy Policy'),
				courseDirectory: t('Course Directory')
			}}
		>
			<div className="max-w-3xl mx-auto">
					{/* Header */}
					<div className="text-center mb-6">
						<h1 className="text-4xl font-bold tracking-[0.3em] mb-2">{t('PRIME')}</h1>
						<p className="text-base uppercase tracking-[0.3em] text-[#000000]/60 mb-2">{t('Agreement.Title', 'MEMBERSHIP AGREEMENT')}</p>
						<p className="text-sm text-red-300 mb-6">{t('Agreement.Draft', 'DRAFT - Subject to Legal Review')}</p>
					</div>

					{/* Agreement Intro */}
					<div className="mb-10">
						<p className="text-base leading-relaxed mb-4">{t('Agreement.Intro')}</p>
					</div>

					{/* Sections */}
					<div className="space-y-8 text-base">
						{/* Section 1 */}
						<section>
							<h2 className="font-bold mb-2">1. {t('Agreement.Section1.Title')}</h2>
							<ul className="list-disc ml-6 space-y-2">
								<li>{t('Agreement.Section1.Content1')}</li>
								<li>{t('Agreement.Section1.Content2')}</li>
								<li>{t('Agreement.Section1.Content3')}</li>
								<li>{t('Agreement.Section1.Content4')}</li>
								<li>{t('Agreement.Section1.Content5')}</li>
								<li>{t('Agreement.Section1.Content6')}</li>
								<li>{t('Agreement.Section1.Content7')}</li>
							</ul>
						</section>
						{/* Section 2 */}
						<section>
							<h2 className="font-bold mb-2">2. {t('Agreement.Section2.Title')}</h2>
							<ul className="list-disc ml-6 space-y-2">
								<li>{t('Agreement.Section2.Content1')}</li>
								<li>{t('Agreement.Section2.Content2')}</li>
								<li>{t('Agreement.Section2.Content3')}</li>
							</ul>
						</section>
						{/* Section 3 */}
						<section>
							<h2 className="font-bold mb-2">3. {t('Agreement.Section3.Title')}</h2>
							<ul className="list-disc ml-6 space-y-2">
								<li>{t('Agreement.Section3.Content1')}</li>
								<li>{t('Agreement.Section3.Content2')}</li>
								<li>{t('Agreement.Section3.Content3')}</li>
							</ul>
						</section>
						{/* Section 4 */}
						<section>
							<h2 className="font-bold mb-2">4. {t('Agreement.Section4.Title')}</h2>
							<ul className="list-disc ml-6 space-y-2">
								<li>{t('Agreement.Section4.Content1')}</li>
								<li>{t('Agreement.Section4.Content2')}</li>
							</ul>
						</section>
						{/* Section 5 */}
						<section>
							<h2 className="font-bold mb-2">5. {t('Agreement.Section5.Title')}</h2>
							<ul className="list-disc ml-6 space-y-2">
								<li>{t('Agreement.Section5.Content1')}</li>
								<li>{t('Agreement.Section5.Content2')}</li>
								<li>{t('Agreement.Section5.Content3')}</li>
								<li>{t('Agreement.Section5.Content4')}</li>
							</ul>
						</section>
						{/* Section 6 */}
						<section>
							<h2 className="font-bold mb-2">6. {t('Agreement.Section6.Title')}</h2>
							<ul className="list-disc ml-6 space-y-2">
								<li>{t('Agreement.Section6.Content1')}</li>
								<li>{t('Agreement.Section6.Content2')}</li>
								<li>{t('Agreement.Section6.Content3')}</li>
							</ul>
						</section>
						{/* Section 7 */}
						<section>
							<h2 className="font-bold mb-2">7. {t('Agreement.Section7.Title')}</h2>
							<p className="ml-6">{t('Agreement.Section7.Content1')}</p>
						</section>
						{/* Section 8 */}
						<section>
							<h2 className="font-bold mb-2">8. {t('Agreement.Section8.Title')}</h2>
							<ul className="list-disc ml-6 space-y-2">
								<li>{t('Agreement.Section8.Content1')}</li>
								<li>{t('Agreement.Section8.Content2')}</li>
								<li>{t('Agreement.Section8.Content3')}</li>
							</ul>
						</section>
						{/* Section 9 */}
						<section>
							<h2 className="font-bold mb-2">9. {t('Agreement.Section9.Title')}</h2>
							<ul className="list-disc ml-6 space-y-2">
								<li>{t('Agreement.Section9.Content1')}</li>
								<li>{t('Agreement.Section9.Content2')}</li>
							</ul>
						</section>
						{/* Section 10 */}
						<section>
							<h2 className="font-bold mb-2">10. {t('Agreement.Section10.Title')}</h2>
							<ul className="list-disc ml-6 space-y-2">
								<li>{t('Agreement.Section10.Content1')}</li>
								<li>{t('Agreement.Section10.Content2')}</li>
								<li>{t('Agreement.Section10.Content3')}</li>
							</ul>
						</section>
					</div>

					{/* Signature Block */}
					<div className="mt-12 mb-8">
						<h2 className="text-xl font-bold text-center mb-6">{t('Agreement.SignatureSection', 'SIGNATURE BLOCK')}</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
							{/* PRIME Signature */}
							<div className="border border-[#4a7c59] p-6">
								<h3 className="font-semibold mb-4">{t('Agreement.PrimeSignature', 'FOR PRIME CORPORATE GOLF MEMBERSHIP:')}</h3>
								<p>{t('Agreement.Name', 'Name:')}</p>
								<div className="border-b border-[#000000]/30 mb-4"></div>
								<p>{t('Agreement.TitleField', 'Title:')}</p>
								<div className="border-b border-[#000000]/30 mb-4"></div>
								<p>{t('Agreement.DateField', 'Date:')}</p>
								<div className="border-b border-[#000000]/30 mb-4"></div>
								<p>{t('Agreement.CompanySeal', 'Company Seal:')}</p>
								<div className="border-b border-[#000000]/30 mb-4"></div>
							</div>
							{/* Member Signature */}
							<div className="border border-[#4a7c59] p-6">
								<h3 className="font-semibold mb-4">{t('Agreement.MemberSignature', 'FOR MEMBER CORPORATION:')}</h3>
								<p>{t('Agreement.Name', 'Name:')}</p>
								<div className="border-b border-[#000000]/30 mb-4"></div>
								<p>{t('Agreement.TitleField', 'Title:')}</p>
								<div className="border-b border-[#000000]/30 mb-4"></div>
								<p>{t('Agreement.DateField', 'Date:')}</p>
								<div className="border-b border-[#000000]/30 mb-4"></div>
								<p>{t('Agreement.CompanySeal', 'Company Seal:')}</p>
								<div className="border-b border-[#000000]/30 mb-4"></div>
							</div>
						</div>
						{/* Designated Users */}
						<div className="border border-[#4a7c59] p-6">
							<h3 className="font-semibold mb-4">{t('Agreement.DesignatedUsers', 'DESIGNATED USERS (TO BE REGISTERED)')}</h3>
							<div className="mb-4">
								<p>{t('Agreement.RegisteredUser1', 'User 1:')}</p>
								<p>{t('Agreement.Name', 'Name:')}</p>
								<div className="border-b border-[#000000]/30 mb-2"></div>
								<p>{t('Agreement.EmailField', 'Email:')}</p>
								<div className="border-b border-[#000000]/30 mb-2"></div>
								<p>{t('Agreement.PhoneField', 'Phone:')}</p>
								<div className="border-b border-[#000000]/30 mb-2"></div>
							</div>
							<div>
								<p>{t('Agreement.RegisteredUser2', 'User 2:')}</p>
								<p>{t('Agreement.Name', 'Name:')}</p>
								<div className="border-b border-[#000000]/30 mb-2"></div>
								<p>{t('Agreement.EmailField', 'Email:')}</p>
								<div className="border-b border-[#000000]/30 mb-2"></div>
								<p>{t('Agreement.PhoneField', 'Phone:')}</p>
								<div className="border-b border-[#000000]/30 mb-2"></div>
							</div>
						</div>
					</div>

					{/* Footer */}
					<div className="text-center mt-8 mb-4">
						<p className="text-xs text-[#000000]/50">{t('© 2025 PRIME Corporate Golf Membership. All Rights Reserved.')}</p>
					</div>
				</div>

				{/* Floating Back Button */}
			<Link href={`/${lang}`} className="fixed bottom-8 right-8 bg-[#4a7c59] text-white p-4 rounded-full shadow-2xl hover:bg-[#4a7c59]/90 transition-colors">
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
					</svg>
				</Link>
	</DocumentLayout>
	);
}

export const dynamic = 'force-static';

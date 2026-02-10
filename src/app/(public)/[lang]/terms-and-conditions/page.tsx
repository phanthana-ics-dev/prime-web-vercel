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

export default async function TermsAndConditionsPage({ params }: { params: Promise<{ lang: Locale }> }) {
	const { lang } = await params;
	const dict = await getDictionary(lang);
	const t = createT(dict);

	return (
		<DocumentLayout 
			activePage="terms-and-conditions" 
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
			<div className="max-w-4xl mx-auto">
					{/* Header */}
					<div className="text-center mb-12">
						<h1 className="text-4xl font-bold tracking-[0.3em] mb-2">{t('PRIME')}</h1>
						<p className="text-sm uppercase tracking-[0.3em] text-[#000000]/60">{t('Terms.Title')}</p>
					</div>

					{/* Membership Fee and Features Table */}
					<div className="mb-10">
						<h2 className="text-xl font-semibold mb-4">{t('Terms.Fees.Title')}</h2>
						<table className="w-full border-collapse mb-4">
							<thead>
								<tr className="bg-[#4a7c59] text-white">
									<th className="text-left p-4">{t('Terms.TableFeature')}</th>
									<th className="text-left p-4">{t('Terms.TableDetails')}</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b border-[#000000]/10">
									<td className="p-4">{t('Terms.DetailFee')}</td>
									<td className="p-4">{t('Terms.DetailFeeValue')}</td>
								</tr>
								<tr className="border-b border-[#000000]/10">
									<td className="p-4">{t('Terms.DetailRounds')}</td>
									<td className="p-4">{t('Terms.DetailRoundsValue')}</td>
								</tr>
								<tr className="border-b border-[#000000]/10">
									<td className="p-4">{t('Terms.DetailUsers')}</td>
									<td className="p-4">{t('Terms.DetailUsersValue')}</td>
								</tr>
								<tr className="border-b border-[#000000]/10">
									<td className="p-4">{t('Terms.DetailGuests')}</td>
									<td className="p-4">{t('Terms.DetailGuestsValue')}</td>
								</tr>
								<tr className="border-b border-[#000000]/10">
									<td className="p-4">{t('Terms.DetailServices')}</td>
									<td className="p-4">{t('Terms.DetailServicesValue')}</td>
								</tr>
								<tr>
									<td className="p-4">{t('Terms.DetailCancellation')}</td>
									<td className="p-4">{t('Terms.DetailCancellationValue')}</td>
								</tr>
							</tbody>
						</table>
					</div>

					{/* Terms & Conditions Sections */}
					<div className="space-y-8">
						{/* Section 1 */}
						<section>
							<h3 className="text-lg font-semibold mb-2">{t('Terms.Section1.Title')}</h3>
							<ul className="list-disc ml-6 space-y-2 text-base">
								<li>{t('Terms.Section1.Content1')}</li>
								<li>{t('Terms.Section1.Content2')}</li>
								<li>{t('Terms.Section1.Content3')}</li>
								<li>{t('Terms.Section1.Content4')}</li>
								<li>{t('Terms.Section1.Content5')}</li>
							</ul>
						</section>
						{/* Section 2 */}
						<section>
							<h3 className="text-lg font-semibold mb-2">{t('Terms.Section2.Title')}</h3>
							<ul className="list-disc ml-6 space-y-2 text-base">
								<li>{t('Terms.Section2.Content1')}</li>
								<li>{t('Terms.Section2.Content2')}</li>
								<li>{t('Terms.Section2.Content3')}</li>
								<li>{t('Terms.Section2.Content4')}</li>
								<li>{t('Terms.Section2.Content5')}</li>
							</ul>
						</section>
						{/* Section 3 */}
						<section>
							<h3 className="text-lg font-semibold mb-2">{t('Terms.Section3.Title')}</h3>
							<ul className="list-disc ml-6 space-y-2 text-base">
								<li>{t('Terms.Section3.Content1')}</li>
								<li>{t('Terms.Section3.Content2')}</li>
								<li>{t('Terms.Section3.Content3')}</li>
								<li>{t('Terms.Section3.Content4')}</li>
								<li>{t('Terms.Section3.Content5')}</li>
							</ul>
						</section>
						{/* Section 4 */}
						<section>
							<h3 className="text-lg font-semibold mb-2">{t('Terms.Section4.Title')}</h3>
							<ul className="list-disc ml-6 space-y-2 text-base">
								<li>{t('Terms.Section4.Content1')}</li>
								<li>{t('Terms.Section4.Content2')}</li>
								<li>{t('Terms.Section4.Content3')}</li>
							</ul>
						</section>
					</div>

					{/* Contact & Footer */}
					<div className="border-t border-[#000000]/10 pt-8 mt-12">
						<div className="mb-6">
							<h4 className="text-base font-semibold mb-2">{t('Contact')}</h4>
							<p className="text-sm mb-1">{t('Email')}: membership@primegolf.in.th</p>
							<p className="text-sm mb-1">{t('Phone')}: +66 (0) 62 562 5456</p>
							<p className="text-sm mb-1">LINE: @primegolf</p>
						</div>
						<p className="text-xs text-[#000000]/50 mt-6">{t('© 2025 PRIME Corporate Golf Membership. All Rights Reserved.')}</p>
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

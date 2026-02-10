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

export default async function FactSheetPage({ params }: { params: Promise<{ lang: Locale }> }) {
	const { lang } = await params;
	const dict = await getDictionary(lang);
	const t = createT(dict);

	return (
		<DocumentLayout 
			activePage="fact-sheet" 
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
					<div className="text-center mb-16">
						<h1 className="text-4xl font-bold tracking-[0.3em] mb-2">{t('PRIME')}</h1>
						<p className="text-sm uppercase tracking-[0.3em] text-[#000000]/60">{t('FactSheet.Title', 'FACT SHEET')}</p>
					</div>

					{/* Intro */}
					<div className="mb-12">
						<p className="text-base leading-relaxed mb-6">
							{t('FactSheet.Intro')}
						</p>
					</div>

					{/* Key Features */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold mb-6">{t('FactSheet.Highlights', 'Key Highlights')}</h2>
						<div className="space-y-3">
							{[
								t('FactSheet.Highlight1'),
								t('FactSheet.Highlight2'),
								t('FactSheet.Highlight3'),
								t('FactSheet.Highlight4'),
								t('FactSheet.Highlight5'),
								t('FactSheet.Highlight6', 'All-inclusive - Green fees, caddies, and carts included every round')
							].map((feature, idx) => (
								<div key={idx} className="flex items-start gap-3">
									<span className="text-[#4a7c59] mt-1">✓</span>
									<p className="text-base">{feature}</p>
								</div>
							))}
						</div>
					</div>

					{/* Why Choose PRIME? */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold mb-6">{t('FactSheet.WhyChoosePrime', 'Why Choose PRIME?')}</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<div>
								<h3 className="font-semibold mb-2">{t('FactSheet.Flexibility', 'Flexibility')}</h3>
								<p className="text-sm text-[#000000]/70">{t('FactSheet.FlexibilityDesc', 'Play at various courses with a single membership.')}</p>
							</div>
							<div>
								<h3 className="font-semibold mb-2">{t('FactSheet.PredictableCosts', 'Predictable Costs')}</h3>
								<p className="text-sm text-[#000000]/70">{t('FactSheet.PredictableCostsDesc', 'A single annual fee simplifies budgeting.')}</p>
							</div>
							<div>
								<h3 className="font-semibold mb-2">{t('FactSheet.ProfessionalLevel', 'Professional Level')}</h3>
								<p className="text-sm text-[#000000]/70">{t('FactSheet.ProfessionalLevelDesc', 'Consistent service standards for corporate use.')}</p>
							</div>
						</div>
					</div>

					{/* Membership Details Table */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold mb-6">{t('FactSheet.MembershipDetails', 'Membership Details')}</h2>
						<table className="w-full border-collapse">
							<thead>
								<tr className="bg-[#4a7c59] text-white">
									<th className="text-left p-4 font-medium">{t('FactSheet.TableFeature', 'Feature')}</th>
									<th className="text-left p-4 font-medium">{t('FactSheet.TableDetails', 'Details')}</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b border-[#000000]/10">
									<td className="p-4">{t('FactSheet.DetailFee', 'Annual Fee')}</td>
									<td className="p-4">{t('FactSheet.DetailFeeValue', '฿949,000 (excluding VAT) / ฿1,015,430 (including 7% VAT)')}</td>
								</tr>
								<tr className="border-b border-[#000000]/10 bg-[#f4f5ef]">
									<td className="p-4">{t('FactSheet.DetailRounds', 'Annual Rounds')}</td>
									<td className="p-4">{t('FactSheet.DetailRoundsValue', '144 rounds per year')}</td>
								</tr>
								<tr className="border-b border-[#000000]/10">
									<td className="p-4">{t('FactSheet.DetailUsers', 'Registered Users')}</td>
									<td className="p-4">{t('FactSheet.DetailUsersValue', '2 corporate users')}</td>
								</tr>
								<tr className="border-b border-[#000000]/10 bg-[#f4f5ef]">
									<td className="p-4">{t('FactSheet.DetailGuests', 'Guest Access')}</td>
									<td className="p-4">{t('FactSheet.DetailGuestsValue', 'Up to 6 guests (both users present)')}</td>
								</tr>
								<tr className="border-b border-[#000000]/10">
									<td className="p-4">{t('FactSheet.DetailServices', 'Included Services')}</td>
									<td className="p-4">{t('FactSheet.DetailServicesValue', 'Green fee, caddy, golf cart')}</td>
								</tr>
								<tr className="bg-[#f4f5ef]">
									<td className="p-4">{t('FactSheet.DetailCancellation', 'Cancellation Policy')}</td>
									<td className="p-4">{t('FactSheet.DetailCancellationValue', '48-hour notice required')}</td>
								</tr>
							</tbody>
						</table>
					</div>

					{/* How It Works */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold mb-6">{t('FactSheet.HowItWorks', 'How It Works')}</h2>
						<div className="grid md:grid-cols-4 gap-6">
							{[
								{ num: '1', title: t('FactSheet.Step1Title', t('FactSheet.Step1', 'Contact Your Concierge')), desc: t('FactSheet.Step1Desc', 'Request preferred course and date') },
								{ num: '2', title: t('FactSheet.Step2Title', t('FactSheet.Step2', 'We Arrange Everything')), desc: t('FactSheet.Step2Desc', 'Confirmation and logistics') },
								{ num: '3', title: t('FactSheet.Step3Title', t('FactSheet.Step3', 'Show Up and Play')), desc: t('FactSheet.Step3Desc', 'Focus on game and guests') },
								{ num: '4', title: t('FactSheet.Step4Title', t('FactSheet.Step4', 'Track Your Usage')), desc: t('FactSheet.Step4Desc', 'Monitor via member portal') }
							].map((step, idx) => (
								<div key={idx} className="text-center">
									<div className="w-16 h-16 rounded-full bg-[#4a7c59] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
										{step.num}
									</div>
									<h3 className="font-semibold mb-2 text-sm">{step.title}</h3>
									<p className="text-xs text-[#000000]/70">{step.desc}</p>
								</div>
							))}
						</div>
					</div>

					{/* Contact Footer */}
					<div className="border-t border-[#000000]/10 pt-8 mt-12">
						<div className="text-center">
							<p className="text-lg font-bold tracking-[0.2em] mb-2">{t('PRIME')}</p>
							<p className="text-sm text-[#000000]/60 mb-4">{t('Corporate Golf Membership')}</p>
							<div className="space-y-1 text-sm">
								<p>{t('Email')}: membership@primegolf.in.th</p>
								<p>{t('Phone')}: +66 (0) 62 562 5456</p>
								<p>LINE: @primegolf</p>
							</div>
							<p className="text-xs text-[#000000]/50 mt-6">{t('© 2025 PRIME Corporate Golf Membership. All Rights Reserved.')}</p>
						</div>
					</div>
				</div> 
 
				{/* Floating Back Button */}
				<Link
					href={`/${lang}`}
					className="fixed bottom-8 right-8 bg-[#4a7c59] text-white p-4 rounded-full shadow-2xl hover:bg-[#4a7c59]/90 transition-colors"
				>
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
					</svg>
				</Link>
		</DocumentLayout>
	);
}


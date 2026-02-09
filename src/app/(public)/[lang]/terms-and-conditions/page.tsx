import Link from 'next/link';

// Generate static paths for supported languages
export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'th' }
  ];
}

// Only generate specified params
export const dynamicParams = false;

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#fdfcfa]">
      {/* Sidebar */} 
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-[#000000]/10 p-6">
        <Link href="/" className="flex items-center gap-2 mb-8 text-[#000000] hover:text-[#4a7c59] transition-colors">
          <span>←</span>
          <span className="text-sm">Back to Home</span>
        </Link>
        
        <div className="space-y-1">
          <h3 className="text-xs font-medium text-[#000000]/50 uppercase tracking-wide mb-4">MEMBERSHIP DOCUMENTS</h3>
          <p className="text-xs text-[#000000]/40 mb-6">Purpose and course directory</p>
          
          <nav className="space-y-2">
            <Link href="/en/fact-sheet" className="flex items-center gap-2 text-sm text-[#000000]/60 hover:text-[#4a7c59]">
              <span>📄</span> Fact Sheet
            </Link>
            <Link href="/en/terms-and-conditions" className="flex items-center gap-2 text-sm text-[#4a7c59] font-medium">
              <span>📋</span> Terms & Conditions
            </Link>
            <Link href="/en/membership-agreement" className="flex items-center gap-2 text-sm text-[#000000]/60 hover:text-[#4a7c59]">
              <span>📝</span> Membership Agreement
            </Link>
            <Link href="/en/privacy-policy" className="flex items-center gap-2 text-sm text-[#000000]/60 hover:text-[#4a7c59]">
              <span>🔒</span> Privacy Policy
            </Link>
            <Link href="/en/course-directory" className="flex items-center gap-2 text-sm text-[#000000]/60 hover:text-[#4a7c59]">
              <span>⛳</span> Course Directory
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-[0.3em] mb-2">PRIME</h1>
            <p className="text-sm uppercase tracking-[0.3em] text-[#000000]/60">TERMS & CONDITIONS</p>
          </div>

          {/* Membership Fees */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Membership Fees</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#4a7c59] text-white">
                  <th className="text-left p-4 font-medium">Fee Type</th>
                  <th className="text-right p-4 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#000000]/10">
                  <td className="p-4">Annual Membership Fee (Excluding VAT)</td>
                  <td className="p-4 text-right">฿949,000</td>
                </tr>
                <tr className="border-b border-[#000000]/10 bg-[#f4f5ef]">
                  <td className="p-4">Value Added Tax (7%)</td>
                  <td className="p-4 text-right">฿66,430</td>
                </tr>
                <tr className="bg-white border-b-2 border-[#4a7c59]">
                  <td className="p-4 font-semibold">Total Annual Fee (Including VAT)</td>
                  <td className="p-4 text-right font-bold text-[#4a7c59]">฿1,015,430</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-[#000000]/50 mt-3">All fees are subject to applicable taxes and must be paid in full prior to membership activation.</p>
          </div>

          {/* Terms */}
          <div className="space-y-8">
            {/* Section 1 */}
            <section>
              <h3 className="text-xl font-semibold mb-4">1. Membership Scope and Eligibility</h3>
              <div className="space-y-3 text-base leading-relaxed">
                <p><strong>1.1 Corporate Membership:</strong> PRIME membership is exclusively available to business entities (corporations, partnerships, or legal entities). Individual memberships are not offered.</p>
                <p><strong>1.2 Authorized Users:</strong> Each corporate membership may designate up to two (2) registered users who are authorized to utilize the membership benefits.</p>
                <p><strong>1.3 Guest Policy:</strong> When both registered users are present, up to six (6) guests may be invited. Guests must be accompanied by a registered user at all times.</p>
                <p><strong>1.4 User Changes:</strong> Changes to registered users require fourteen (14) days written notice and are limited to twice per membership year.</p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h3 className="text-xl font-semibold mb-4">2. Annual Round Allocation</h3>
              <div className="space-y-3 text-base leading-relaxed">
                <p><strong>2.1 Round Entitlement:</strong> Membership includes 144 rounds of golf per membership year, commencing on the membership activation date.</p>
                <p><strong>2.2 Usage Calculation:</strong> Each round of golf played by a registered user or guest counts as one (1) round against the annual allocation.</p>
                <p><strong>2.3 Non-Transferability:</strong> Unused rounds expire at the end of the membership year and cannot be transferred, refunded, or carried forward.</p>
                <p><strong>2.4 Round Sharing:</strong> Rounds are shared between both registered users and are not allocated individually.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h3 className="text-xl font-semibold mb-4">3. Booking and Cancellation Policy</h3>
              <div className="space-y-3 text-base leading-relaxed">
                <p><strong>3.1 Advance Booking:</strong> Tee times must be requested at least seventy-two (72) hours in advance through your Personal Concierge. Earlier booking is recommended for weekends and holidays.</p>
                <p><strong>3.2 Confirmation:</strong> All bookings are subject to course availability. PRIME will confirm arrangements within twenty-four (24) hours of your request.</p>
                <p><strong>3.3 Cancellation Notice:</strong> Cancellations must be made at least forty-eight (48) hours before the scheduled tee time to avoid forfeiture of the round.</p>
                <p><strong>3.4 Late Cancellation:</strong> Cancellations made less than forty-eight (48) hours before tee time will result in the round being deducted from your annual allocation.</p>
                <p><strong>3.5 No-Show Policy:</strong> Failure to appear for a confirmed tee time without prior cancellation will result in the round being deducted from your annual allocation.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h3 className="text-xl font-semibold mb-4">4. Course Access and Restrictions</h3>
              <div className="space-y-3 text-base leading-relaxed">
                <p><strong>4.1 Course Network:</strong> Membership provides access to 70+ premium golf courses in Thailand as listed in the Course Directory, subject to periodic updates.</p>
                <p><strong>4.2 Course Availability:</strong> Access is subject to each course&apos;s individual policies, maintenance schedules, tournaments, and seasonal closures.</p>
                <p><strong>4.3 Blackout Dates:</strong> Certain courses may have restricted availability during peak periods or special events. PRIME will notify members of blackout dates in advance where possible.</p>
                <p><strong>4.4 Course Changes:</strong> PRIME reserves the right to modify the course network with thirty (30) days notice. Substitutions will be of comparable quality and location.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h3 className="text-xl font-semibold mb-4">5. Services Included and Excluded</h3>
              <div className="space-y-3 text-base leading-relaxed">
                <p><strong>5.1 Included Services:</strong> Each round includes green fees, caddy fees, and golf cart rental for all players (registered users and guests).</p>
                <p><strong>5.2 Excluded Expenses:</strong> The following are not included and are the member&apos;s responsibility:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Food and beverage charges</li>
                  <li>Locker rental fees</li>
                  <li>Golf equipment rental</li>
                  <li>Coaching or lessons</li>
                  <li>Gratuities and tips (recommended but discretionary)</li>
                  <li>Transportation to and from courses</li>
                  <li>Any additional services not explicitly listed as included</li>
                </ul>
                <p><strong>5.3 Direct Billing:</strong> Members will be directly billed by golf courses for any excluded expenses incurred during their visits.</p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h3 className="text-xl font-semibold mb-4">6. Member Conduct and Course Rules</h3>
              <div className="space-y-3 text-base leading-relaxed">
                <p><strong>6.1 Code of Conduct:</strong> Members and guests must adhere to standard golf etiquette and each course&apos;s specific rules and regulations.</p>
                <p><strong>6.2 Dress Code:</strong> Appropriate golf attire is required at all courses. Members are responsible for informing guests of dress code requirements.</p>
                <p><strong>6.3 Pace of Play:</strong> Members must maintain reasonable pace of play as directed by course marshals.</p>
                <p><strong>6.4 Liability for Damage:</strong> Members are financially responsible for any damage to course property, facilities, or equipment caused by themselves or their guests.</p>
                <p><strong>6.5 Suspension Rights:</strong> PRIME reserves the right to suspend or terminate membership for violations of course rules, inappropriate conduct, or non-payment of incurred charges.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h3 className="text-xl font-semibold mb-4">7. Payment Terms and Refund Policy</h3>
              <div className="space-y-3 text-base leading-relaxed">
                <p><strong>7.1 Annual Fee Payment:</strong> The full annual membership fee must be paid before membership activation and course access is granted.</p>
                <p><strong>7.2 Payment Methods:</strong> Payment may be made via bank transfer, corporate check, or credit card (processing fees may apply).</p>
                <p><strong>7.3 Non-Refundable:</strong> Membership fees are non-refundable after the fourteen (14) day cooling-off period, regardless of usage levels.</p>
                <p><strong>7.4 Renewal:</strong> Membership automatically renews annually unless written notice of cancellation is provided at least sixty (60) days prior to renewal date.</p>
                <p><strong>7.5 Late Payment:</strong> Failure to pay renewal fees by the due date will result in immediate suspension of course access until payment is received.</p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h3 className="text-xl font-semibold mb-4">8. Liability and Insurance</h3>
              <div className="space-y-3 text-base leading-relaxed">
                <p><strong>8.1 Personal Injury:</strong> PRIME and participating golf courses are not liable for personal injuries, accidents, or health issues occurring during play.</p>
                <p><strong>8.2 Property Loss:</strong> PRIME is not responsible for loss, theft, or damage to personal property at any golf course.</p>
                <p><strong>8.3 Insurance Recommendation:</strong> Members are strongly encouraged to maintain personal accident and liability insurance coverage.</p>
                <p><strong>8.4 Medical Conditions:</strong> Members must disclose relevant medical conditions and assume full responsibility for their fitness to play golf.</p>
                <p><strong>8.5 Waiver:</strong> By using the membership, members and guests acknowledge and accept all inherent risks associated with the sport of golf.</p>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h3 className="text-xl font-semibold mb-4">9. Termination and Suspension</h3>
              <div className="space-y-3 text-base leading-relaxed">
                <p><strong>9.1 Member-Initiated Termination:</strong> Members may terminate membership with sixty (60) days written notice. Fees are non-refundable.</p>
                <p><strong>9.2 PRIME-Initiated Termination:</strong> PRIME may terminate membership immediately for breach of terms, inappropriate conduct, or non-payment.</p>
                <p><strong>9.3 Course Access Suspension:</strong> PRIME may temporarily suspend course access during investigation of alleged violations.</p>
                <p><strong>9.4 Obligations Upon Termination:</strong> All outstanding charges must be paid in full. Unused rounds are forfeited without compensation.</p>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h3 className="text-xl font-semibold mb-4">10. Modifications to Terms</h3>
              <div className="space-y-3 text-base leading-relaxed">
                <p><strong>10.1 Right to Modify:</strong> PRIME reserves the right to modify these terms and conditions with thirty (30) days written notice to members.</p>
                <p><strong>10.2 Notification:</strong> Changes will be communicated via email to the registered contact address on file.</p>
                <p><strong>10.3 Acceptance:</strong> Continued use of membership services after notification constitutes acceptance of modified terms.</p>
                <p><strong>10.4 Rejection Option:</strong> Members who do not accept modified terms may terminate membership as specified in Section 9.1.</p>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h3 className="text-xl font-semibold mb-4">11. Governing Law and Disputes</h3>
              <div className="space-y-3 text-base leading-relaxed">
                <p><strong>11.1 Jurisdiction:</strong> These terms are governed by the laws of Thailand and subject to the jurisdiction of Thai courts.</p>
                <p><strong>11.2 Dispute Resolution:</strong> Any disputes shall first be attempted to resolve through good-faith negotiation.</p>
                <p><strong>11.3 Arbitration:</strong> Unresolved disputes may be submitted to binding arbitration under Thai arbitration rules.</p>
                <p><strong>11.4 Legal Costs:</strong> The prevailing party in any dispute shall be entitled to recovery of reasonable legal fees and costs.</p>
              </div>
            </section>
          </div>

          {/* Effective Date */}
          <div className="border-t border-[#000000]/10 pt-8 mt-12">
            <p className="text-sm text-[#000000]/60 mb-6">Effective Date: March 1, 2026</p>
            <p className="text-sm text-[#000000]/60 mb-6">Last Updated: December 2025</p>
            <div className="text-center">
              <p className="text-lg font-bold tracking-[0.2em] mb-2">PRIME</p>
              <p className="text-sm text-[#000000]/60 mb-4">CORPORATE GOLF MEMBERSHIP</p>
              <div className="space-y-1 text-sm">
                <p>Email: membership@primegolf.in.th</p>
                <p>Phone: +66 (0) 62 562 5456</p>
                <p>LINE: @primegolf</p>
              </div>
              <p className="text-xs text-[#000000]/50 mt-6">© 2025 PRIME Corporate Golf Membership. All Rights Reserved.</p>
            </div>
          </div>
        </div>

        {/* Floating Back Button */}
        <Link
          href="/"
          className="fixed bottom-8 right-8 bg-[#4a7c59] text-white p-4 rounded-full shadow-2xl hover:bg-[#4a7c59]/90 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </Link>
      </main>
    </div>
  );
}

export const dynamic = 'force-static';
export const revalidate = false;

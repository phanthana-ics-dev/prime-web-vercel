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

export default function MembershipAgreementPage() {
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
            <Link href="/en/terms-and-conditions" className="flex items-center gap-2 text-sm text-[#000000]/60 hover:text-[#4a7c59]">
              <span>📋</span> Terms & Conditions
            </Link>
            <Link href="/en/membership-agreement" className="flex items-center gap-2 text-sm text-[#4a7c59] font-medium">
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
            <p className="text-sm uppercase tracking-[0.3em] text-[#000000]/60">MEMBERSHIP AGREEMENT</p>
          </div>

          {/* Agreement Intro */}
          <div className="mb-12 p-6 bg-[#f4f5ef] border-l-4 border-[#4a7c59]">
            <p className="text-base leading-relaxed">
              This Membership Agreement (&quot;Agreement&quot;) is entered into between PRIME Corporate Golf Membership (&quot;PRIME&quot;) and the corporate entity identified below (&quot;Member&quot;) for participation in the PRIME golf membership program. By signing this Agreement, the Member agrees to be bound by all terms and conditions set forth herein.
            </p>
          </div>

          {/* Corporate Member Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Corporate Member Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-[#000000]/20 p-4">
                <label className="text-xs uppercase text-[#000000]/50 block mb-2">Corporate Entity Name</label>
                <div className="border-b border-[#000000]/30 pb-2">_______________________________________</div>
              </div>
              <div className="border border-[#000000]/20 p-4">
                <label className="text-xs uppercase text-[#000000]/50 block mb-2">Tax ID Number</label>
                <div className="border-b border-[#000000]/30 pb-2">_______________________________________</div>
              </div>
              <div className="border border-[#000000]/20 p-4">
                <label className="text-xs uppercase text-[#000000]/50 block mb-2">Registered Address</label>
                <div className="border-b border-[#000000]/30 pb-2">_______________________________________</div>
              </div>
              <div className="border border-[#000000]/20 p-4">
                <label className="text-xs uppercase text-[#000000]/50 block mb-2">Contact Phone Number</label>
                <div className="border-b border-[#000000]/30 pb-2">_______________________________________</div>
              </div>
              <div className="border border-[#000000]/20 p-4 md:col-span-2">
                <label className="text-xs uppercase text-[#000000]/50 block mb-2">Billing Email Address</label>
                <div className="border-b border-[#000000]/30 pb-2">_______________________________________</div>
              </div>
            </div>
          </div>

          {/* Registered Users */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Designated Registered Users</h2>
            <p className="text-sm text-[#000000]/60 mb-6">Please designate up to two (2) authorized users who will utilize the membership benefits:</p>
            
            <div className="space-y-6">
              {/* User 1 */}
              <div className="border-2 border-[#4a7c59]/30 p-6">
                <h3 className="font-semibold mb-4 text-[#4a7c59]">REGISTERED USER 1</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase text-[#000000]/50 block mb-2">Full Name</label>
                    <div className="border-b border-[#000000]/30 pb-2">_____________________________________</div>
                  </div>
                  <div>
                    <label className="text-xs uppercase text-[#000000]/50 block mb-2">Position/Title</label>
                    <div className="border-b border-[#000000]/30 pb-2">_____________________________________</div>
                  </div>
                  <div>
                    <label className="text-xs uppercase text-[#000000]/50 block mb-2">Email Address</label>
                    <div className="border-b border-[#000000]/30 pb-2">_____________________________________</div>
                  </div>
                  <div>
                    <label className="text-xs uppercase text-[#000000]/50 block mb-2">Mobile Phone</label>
                    <div className="border-b border-[#000000]/30 pb-2">_____________________________________</div>
                  </div>
                </div>
              </div>

              {/* User 2 */}
              <div className="border-2 border-[#4a7c59]/30 p-6">
                <h3 className="font-semibold mb-4 text-[#4a7c59]">REGISTERED USER 2</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase text-[#000000]/50 block mb-2">Full Name</label>
                    <div className="border-b border-[#000000]/30 pb-2">_____________________________________</div>
                  </div>
                  <div>
                    <label className="text-xs uppercase text-[#000000]/50 block mb-2">Position/Title</label>
                    <div className="border-b border-[#000000]/30 pb-2">_____________________________________</div>
                  </div>
                  <div>
                    <label className="text-xs uppercase text-[#000000]/50 block mb-2">Email Address</label>
                    <div className="border-b border-[#000000]/30 pb-2">_____________________________________</div>
                  </div>
                  <div>
                    <label className="text-xs uppercase text-[#000000]/50 block mb-2">Mobile Phone</label>
                    <div className="border-b border-[#000000]/30 pb-2">_____________________________________</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Membership Details */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Membership Details and Financial Terms</h2>
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b border-[#000000]/10">
                  <td className="p-4 w-1/2">Membership Start Date</td>
                  <td className="p-4 font-semibold">_______________________</td>
                </tr>
                <tr className="border-b border-[#000000]/10 bg-[#f4f5ef]">
                  <td className="p-4">Membership End Date (1 Year)</td>
                  <td className="p-4 font-semibold">_______________________</td>
                </tr>
                <tr className="border-b border-[#000000]/10">
                  <td className="p-4">Annual Membership Fee (Excluding VAT)</td>
                  <td className="p-4 font-semibold">฿949,000</td>
                </tr>
                <tr className="border-b border-[#000000]/10 bg-[#f4f5ef]">
                  <td className="p-4">Value Added Tax (7%)</td>
                  <td className="p-4 font-semibold">฿66,430</td>
                </tr>
                <tr className="bg-white border-b-2 border-[#4a7c59]">
                  <td className="p-4 font-bold">Total Amount Due (Including VAT)</td>
                  <td className="p-4 font-bold text-[#4a7c59] text-xl">฿1,015,430</td>
                </tr>
                <tr className="border-b border-[#000000]/10 bg-[#f4f5ef]">
                  <td className="p-4">Annual Round Allocation</td>
                  <td className="p-4 font-semibold">144 rounds</td>
                </tr>
                <tr className="border-b border-[#000000]/10">
                  <td className="p-4">Number of Courses</td>
                  <td className="p-4 font-semibold">70+ premium courses</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Key Terms Acknowledgment */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Acknowledgment of Key Terms</h2>
            <p className="text-sm text-[#000000]/60 mb-6">By signing below, the Member acknowledges and agrees to the following key terms:</p>
            
            <div className="space-y-4">
              {[
                { title: '1. Payment Terms', content: 'Full payment of ฿1,015,430 (including VAT) is due before membership activation. Payment is non-refundable after the 14-day cooling-off period.' },
                { title: '2. Round Allocation', content: 'Membership includes 144 rounds per year, shared between two registered users. Unused rounds expire and cannot be carried forward.' },
                { title: '3. Booking Requirements', content: 'Tee times must be booked at least 72 hours in advance through your Personal Concierge service.' },
                { title: '4. Cancellation Policy', content: 'Cancellations require 48 hours notice. Late cancellations or no-shows will result in round forfeiture.' },
                { title: '5. Guest Policy', content: 'Up to 6 guests allowed when both registered users are present. Guests must be accompanied at all times.' },
                { title: '6. Course Access', content: 'Access to 70+ courses subject to availability, blackout dates, and individual course policies.' },
                { title: '7. Included Services', content: 'Green fee, caddy, and golf cart included. Food, beverage, locker rental, and equipment rental are excluded.' },
                { title: '8. Liability Waiver', content: 'Member assumes all risks associated with golf activities. PRIME and courses are not liable for injuries or property loss.' },
                { title: '9. User Changes', content: 'Registered user changes require 14 days written notice and are limited to twice per year.' },
                { title: '10. Renewal Terms', content: 'Membership automatically renews annually unless 60 days written cancellation notice is provided.' },
                { title: '11. Code of Conduct', content: 'Member and guests must adhere to golf etiquette, dress codes, and course rules. Violations may result in suspension or termination.' },
                { title: '12. Terms Acceptance', content: 'Member agrees to be bound by all Terms & Conditions and Privacy Policy as published on primegolf.in.th.' }
              ].map((term, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-white border border-[#000000]/10">
                  <div className="flex-shrink-0 w-6 h-6 rounded border-2 border-[#4a7c59] mt-1"></div>
                  <div>
                    <p className="font-semibold text-[#4a7c59] mb-1">{term.title}</p>
                    <p className="text-sm text-[#000000]/70">{term.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Signature Section */}
          <div className="mb-12 p-8 bg-white border-2 border-[#4a7c59]">
            <h2 className="text-2xl font-semibold mb-6 text-center">Authorized Signatures</h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Member Signature */}
              <div>
                <h3 className="font-semibold mb-6 text-[#4a7c59]">FOR THE MEMBER:</h3>
                <div className="space-y-6">
                  <div>
                    <label className="text-xs uppercase text-[#000000]/50 block mb-2">Authorized Signatory Name</label>
                    <div className="border-b-2 border-[#000000]/30 pb-2">_____________________________________</div>
                  </div>
                  <div>
                    <label className="text-xs uppercase text-[#000000]/50 block mb-2">Position/Title</label>
                    <div className="border-b-2 border-[#000000]/30 pb-2">_____________________________________</div>
                  </div>
                  <div>
                    <label className="text-xs uppercase text-[#000000]/50 block mb-2">Signature</label>
                    <div className="border-b-2 border-[#000000]/30 pb-2 h-16"></div>
                  </div>
                  <div>
                    <label className="text-xs uppercase text-[#000000]/50 block mb-2">Date</label>
                    <div className="border-b-2 border-[#000000]/30 pb-2">_____________________________________</div>
                  </div>
                </div>
              </div>

              {/* PRIME Signature */}
              <div>
                <h3 className="font-semibold mb-6 text-[#4a7c59]">FOR PRIME:</h3>
                <div className="space-y-6">
                  <div>
                    <label className="text-xs uppercase text-[#000000]/50 block mb-2">Authorized Signatory Name</label>
                    <div className="border-b-2 border-[#000000]/30 pb-2">_____________________________________</div>
                  </div>
                  <div>
                    <label className="text-xs uppercase text-[#000000]/50 block mb-2">Position/Title</label>
                    <div className="border-b-2 border-[#000000]/30 pb-2">_____________________________________</div>
                  </div>
                  <div>
                    <label className="text-xs uppercase text-[#000000]/50 block mb-2">Signature</label>
                    <div className="border-b-2 border-[#000000]/30 pb-2 h-16"></div>
                  </div>
                  <div>
                    <label className="text-xs uppercase text-[#000000]/50 block mb-2">Date</label>
                    <div className="border-b-2 border-[#000000]/30 pb-2">_____________________________________</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-[#000000]/10">
              <p className="text-xs text-[#000000]/50">This Agreement constitutes a binding contract between the parties and may only be amended in writing with mutual consent.</p>
            </div>
          </div>

          {/* Contact Footer */}
          <div className="border-t border-[#000000]/10 pt-8 mt-12">
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

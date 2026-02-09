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

export default function FactSheetPage() {
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
            <Link href="/en/fact-sheet" className="flex items-center gap-2 text-sm text-[#4a7c59] font-medium">
              <span>📄</span> Fact Sheet
            </Link>
            <Link href="/en/terms-and-conditions" className="flex items-center gap-2 text-sm text-[#000000]/60 hover:text-[#4a7c59]">
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
            <p className="text-sm uppercase tracking-[0.3em] text-[#000000]/60">FACT SHEET</p>
          </div>

          {/* Intro */}
          <div className="mb-12">
            <p className="text-base leading-relaxed mb-6">
              PRIME Corporate Golf Membership provides organizations with flexible, convenient access to 70+ premium golf courses throughout Thailand. With dedicated Personal Concierge service and 144 annual rounds, PRIME simplifies corporate golf entertainment.
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
            <div className="space-y-3">
              {[
                '144 Annual Rounds - Generous allocation for corporate entertainment needs',
                '70+ Premium Courses - Championship venues to exclusive private clubs',
                '2 Corporate Users - Two registered users per membership',
                'Guest Privileges - Up to 6 guests when both users present',
                'Personal Concierge - Dedicated service team handles all arrangements',
                'All-Inclusive - Green fees, caddies, and carts included every round'
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
            <h2 className="text-2xl font-semibold mb-6">Why Choose PRIME?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Flexibility</h3>
                <p className="text-sm text-[#000000]/70">Play at different courses for different occasions</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Predictable Budgeting</h3>
                <p className="text-sm text-[#000000]/70">Fixed annual fee eliminates surprise costs</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Professional Convenience</h3>
                <p className="text-sm text-[#000000]/70">Concierge handles all logistics</p>
              </div>
            </div>
          </div>

          {/* Membership Details Table */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Membership Details</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#4a7c59] text-white">
                  <th className="text-left p-4 font-medium">Feature</th>
                  <th className="text-left p-4 font-medium">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#000000]/10">
                  <td className="p-4">Annual Fee</td>
                  <td className="p-4">฿949,000 (excluding VAT) / ฿1,015,430 (including 7% VAT)</td>
                </tr>
                <tr className="border-b border-[#000000]/10 bg-[#f4f5ef]">
                  <td className="p-4">Annual Rounds</td>
                  <td className="p-4">144 rounds per year</td>
                </tr>
                <tr className="border-b border-[#000000]/10">
                  <td className="p-4">Registered Users</td>
                  <td className="p-4">2 corporate users</td>
                </tr>
                <tr className="border-b border-[#000000]/10 bg-[#f4f5ef]">
                  <td className="p-4">Guest Access</td>
                  <td className="p-4">Up to 6 guests (both users present)</td>
                </tr>
                <tr className="border-b border-[#000000]/10">
                  <td className="p-4">Included Services</td>
                  <td className="p-4">Green fee, caddy, golf cart</td>
                </tr>
                <tr className="bg-[#f4f5ef]">
                  <td className="p-4">Cancellation Policy</td>
                  <td className="p-4">48-hour notice required</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { num: '1', title: 'Contact Your Concierge', desc: 'Request preferred course and date' },
                { num: '2', title: 'We Arrange Everything', desc: 'Confirmation and logistics' },
                { num: '3', title: 'Show Up and Play', desc: 'Focus on game and guests' },
                { num: '4', title: 'Track Your Usage', desc: 'Monitor via member portal' }
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

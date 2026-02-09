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

export default function PrivacyPolicyPage() {
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
            <Link href="/en/membership-agreement" className="flex items-center gap-2 text-sm text-[#000000]/60 hover:text-[#4a7c59]">
              <span>📝</span> Membership Agreement
            </Link>
            <Link href="/en/privacy-policy" className="flex items-center gap-2 text-sm text-[#4a7c59] font-medium">
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
            <p className="text-sm uppercase tracking-[0.3em] text-[#000000]/60">PRIVACY POLICY</p>
          </div>

          {/* Intro */}
          <div className="mb-12 p-6 bg-[#f4f5ef] border-l-4 border-[#4a7c59]">
            <p className="text-base leading-relaxed mb-4">
              <strong>Effective Date:</strong> March 1, 2026
            </p>
            <p className="text-base leading-relaxed">
              PRIME Corporate Golf Membership (&quot;PRIME&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you become a member or use our services.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <section>
              <h3 className="text-xl font-semibold mb-4">1. Information We Collect</h3>
              <div className="space-y-4 text-base leading-relaxed">
                <div>
                  <h4 className="font-semibold text-[#4a7c59] mb-2">1.1 Corporate Information</h4>
                  <p className="mb-2">When a corporate entity applies for membership, we collect:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Company name and legal entity designation</li>
                    <li>Business registration number and tax identification number</li>
                    <li>Registered business address</li>
                    <li>Corporate contact information (phone, email, fax)</li>
                    <li>Billing and payment information</li>
                    <li>Industry sector and business description</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#4a7c59] mb-2">1.2 Personal Information of Registered Users</h4>
                  <p className="mb-2">For each designated registered user, we collect:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Full name and date of birth</li>
                    <li>National ID or passport number</li>
                    <li>Position/title within the organization</li>
                    <li>Contact details (mobile phone, email address)</li>
                    <li>Emergency contact information</li>
                    <li>Golf handicap and playing preferences</li>
                    <li>Dietary restrictions or special requirements</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#4a7c59] mb-2">1.3 Usage Information</h4>
                  <p className="mb-2">When you use our services, we automatically collect:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Booking history and tee time reservations</li>
                    <li>Course preferences and frequency of play</li>
                    <li>Round completion records and attendance</li>
                    <li>Cancellation history and patterns</li>
                    <li>Feedback and service satisfaction ratings</li>
                    <li>Communication records with concierge services</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#4a7c59] mb-2">1.4 Guest Information</h4>
                  <p className="mb-2">When registered users bring guests:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Guest names and contact information</li>
                    <li>Relationship to registered user (business associate, client, etc.)</li>
                    <li>Golf experience level and special requirements</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#4a7c59] mb-2">1.5 Technical Information</h4>
                  <p className="mb-2">Our website and member portal collect:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>IP address and device information</li>
                    <li>Browser type and operating system</li>
                    <li>Login credentials and authentication data</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Website navigation patterns and preferences</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h3 className="text-xl font-semibold mb-4">2. How We Use Your Information</h3>
              <div className="space-y-4 text-base leading-relaxed">
                <div>
                  <h4 className="font-semibold text-[#4a7c59] mb-2">2.1 Membership Services</h4>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Processing membership applications and renewals</li>
                    <li>Managing your account and membership benefits</li>
                    <li>Coordinating tee time bookings with golf courses</li>
                    <li>Providing personal concierge services</li>
                    <li>Tracking round usage and allocation</li>
                    <li>Processing payments and issuing invoices</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#4a7c59] mb-2">2.2 Communication</h4>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Sending booking confirmations and reminders</li>
                    <li>Providing service updates and important notices</li>
                    <li>Responding to inquiries and support requests</li>
                    <li>Sharing promotional offers and membership benefits (with consent)</li>
                    <li>Conducting satisfaction surveys and feedback collection</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#4a7c59] mb-2">2.3 Service Improvement</h4>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Analyzing usage patterns to enhance services</li>
                    <li>Personalizing your member experience</li>
                    <li>Developing new features and offerings</li>
                    <li>Monitoring service quality and performance</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#4a7c59] mb-2">2.4 Legal Compliance</h4>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Fulfilling legal obligations under Thai law</li>
                    <li>Enforcing our Terms & Conditions</li>
                    <li>Preventing fraud and unauthorized access</li>
                    <li>Responding to legal requests and court orders</li>
                    <li>Maintaining tax and accounting records</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h3 className="text-xl font-semibold mb-4">3. Information Sharing and Disclosure</h3>
              <div className="space-y-4 text-base leading-relaxed">
                <div>
                  <h4 className="font-semibold text-[#4a7c59] mb-2">3.1 Golf Course Partners</h4>
                  <p>We share necessary booking information (names, number of players, tee times) with golf courses to facilitate your reservations. Courses are contractually bound to protect your information.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#4a7c59] mb-2">3.2 Service Providers</h4>
                  <p className="mb-2">We may share information with trusted third-party service providers who assist us with:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Payment processing and financial transactions</li>
                    <li>IT infrastructure and website hosting</li>
                    <li>Customer relationship management systems</li>
                    <li>Email communication platforms</li>
                    <li>Data analytics and reporting tools</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#4a7c59] mb-2">3.3 Legal Requirements</h4>
                  <p>We may disclose information when required by law, court order, or government authority, or to protect our legal rights and safety.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#4a7c59] mb-2">3.4 Business Transfers</h4>
                  <p>In the event of a merger, acquisition, or sale of assets, member information may be transferred to the acquiring entity with appropriate safeguards.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#4a7c59] mb-2">3.5 With Your Consent</h4>
                  <p>We will seek your explicit consent before sharing information for purposes not described in this policy.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h3 className="text-xl font-semibold mb-4">4. Data Security</h3>
              <div className="space-y-3 text-base leading-relaxed">
                <p><strong>4.1 Security Measures:</strong> We implement industry-standard security measures including encryption, secure servers, firewalls, and access controls to protect your information from unauthorized access, alteration, or destruction.</p>
                <p><strong>4.2 Employee Access:</strong> Access to personal information is restricted to authorized employees who need it to perform their job functions. All employees are trained on privacy and security protocols.</p>
                <p><strong>4.3 Data Backup:</strong> We maintain regular backups of data to prevent loss and ensure business continuity.</p>
                <p><strong>4.4 No Absolute Security:</strong> While we strive to protect your information, no electronic transmission or storage system is completely secure. We cannot guarantee absolute security.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h3 className="text-xl font-semibold mb-4">5. Data Retention</h3>
              <div className="space-y-3 text-base leading-relaxed">
                <p><strong>5.1 Active Memberships:</strong> We retain all membership information for the duration of your active membership and for a reasonable period thereafter to fulfill legal obligations.</p>
                <p><strong>5.2 Inactive Memberships:</strong> After membership termination, we retain basic information for seven (7) years as required by Thai tax and accounting laws.</p>
                <p><strong>5.3 Marketing Data:</strong> If you have consented to marketing communications, we retain your preferences until you opt out or request deletion.</p>
                <p><strong>5.4 Legal Disputes:</strong> Information relevant to legal claims or disputes will be retained until the matter is resolved.</p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h3 className="text-xl font-semibold mb-4">6. Your Privacy Rights</h3>
              <div className="space-y-3 text-base leading-relaxed">
                <p><strong>6.1 Access:</strong> You have the right to request access to the personal information we hold about you.</p>
                <p><strong>6.2 Correction:</strong> You may request correction of inaccurate or incomplete information. Updates can be made through the member portal or by contacting us.</p>
                <p><strong>6.3 Deletion:</strong> You may request deletion of your information, subject to our legal retention obligations and legitimate business needs.</p>
                <p><strong>6.4 Opt-Out:</strong> You can opt out of marketing communications at any time by clicking unsubscribe links in emails or contacting us directly.</p>
                <p><strong>6.5 Data Portability:</strong> You may request a copy of your information in a structured, commonly used format.</p>
                <p><strong>6.6 Withdraw Consent:</strong> Where we rely on consent for processing, you may withdraw consent at any time, though this will not affect prior processing.</p>
                <p><strong>6.7 Complaints:</strong> You have the right to lodge a complaint with the Personal Data Protection Committee of Thailand if you believe your privacy rights have been violated.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h3 className="text-xl font-semibold mb-4">7. Cookies and Tracking Technologies</h3>
              <div className="space-y-3 text-base leading-relaxed">
                <p><strong>7.1 Types of Cookies:</strong> We use essential cookies (necessary for website function), performance cookies (analytics), and functional cookies (preferences and settings).</p>
                <p><strong>7.2 Cookie Management:</strong> You can control cookie preferences through your browser settings. Note that disabling cookies may limit website functionality.</p>
                <p><strong>7.3 Analytics:</strong> We use analytics tools to understand how members use our services. Data is aggregated and does not identify individuals.</p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h3 className="text-xl font-semibold mb-4">8. Children&apos;s Privacy</h3>
              <div className="space-y-3 text-base leading-relaxed">
                <p>PRIME membership is exclusively for corporate entities and their designated adult users. We do not knowingly collect information from individuals under 18 years of age. If we become aware that we have collected information from a minor, we will take steps to delete it promptly.</p>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h3 className="text-xl font-semibold mb-4">9. International Data Transfers</h3>
              <div className="space-y-3 text-base leading-relaxed">
                <p><strong>9.1 Data Location:</strong> Your information is primarily stored and processed in Thailand. Some service providers may be located outside Thailand.</p>
                <p><strong>9.2 Safeguards:</strong> When transferring data internationally, we ensure appropriate safeguards are in place, including contractual protections and compliance with applicable laws.</p>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h3 className="text-xl font-semibold mb-4">10. Changes to This Privacy Policy</h3>
              <div className="space-y-3 text-base leading-relaxed">
                <p><strong>10.1 Updates:</strong> We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.</p>
                <p><strong>10.2 Notification:</strong> Material changes will be communicated to members via email at least thirty (30) days before taking effect.</p>
                <p><strong>10.3 Review:</strong> We encourage you to review this policy periodically. The &quot;Effective Date&quot; at the top indicates when the policy was last updated.</p>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h3 className="text-xl font-semibold mb-4">11. Contact Information</h3>
              <div className="space-y-3 text-base leading-relaxed">
                <p>For questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us:</p>
                
                <div className="p-6 bg-white border border-[#4a7c59] mt-4">
                  <p className="font-semibold text-[#4a7c59] mb-3">PRIME Data Privacy Officer</p>
                  <div className="space-y-1 text-sm">
                    <p><strong>Email:</strong> privacy@primegolf.in.th</p>
                    <p><strong>Phone:</strong> +66 (0) 62 562 5456</p>
                    <p><strong>Postal Address:</strong></p>
                    <p className="ml-4">PRIME Corporate Golf Membership<br/>
                    [Address Line 1]<br/>
                    [Address Line 2]<br/>
                    Bangkok, Thailand [Postal Code]</p>
                  </div>
                </div>

                <p className="mt-4"><strong>Response Time:</strong> We will respond to privacy requests within thirty (30) days of receipt.</p>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="border-t border-[#000000]/10 pt-8 mt-12">
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

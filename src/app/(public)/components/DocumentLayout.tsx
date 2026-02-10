'use client';

import MobileSidebar from './MobileSidebar';

interface DocumentLayoutProps {
  activePage: string;
  children: React.ReactNode;
  lang: string;
  translations: {
    backToHome: string;
    membershipDocuments: string;
    purposeAndDirectory: string;
    factSheet: string;
    termsAndConditions: string;
    membershipAgreement: string;
    privacyPolicy: string;
    courseDirectory: string;
  };
}

export default function DocumentLayout({ activePage, children, lang, translations }: DocumentLayoutProps) {
  const navLinks = [
    { href: `/${lang}/fact-sheet`, icon: '📄', label: translations.factSheet, page: 'fact-sheet' },
    { href: `/${lang}/terms-and-conditions`, icon: '📋', label: translations.termsAndConditions, page: 'terms-and-conditions' },
    { href: `/${lang}/membership-agreement`, icon: '📝', label: translations.membershipAgreement, page: 'membership-agreement' },
    { href: `/${lang}/privacy-policy`, icon: '🔒', label: translations.privacyPolicy, page: 'privacy-policy' },
    { href: `/${lang}/course-directory`, icon: '⛳', label: translations.courseDirectory, page: 'course-directory' },
  ];

  return (
    <div className="min-h-screen bg-[#fdfcfa]">
      <MobileSidebar 
        activePage={activePage} 
        navLinks={navLinks}
        translations={{
          backToHome: translations.backToHome,
          membershipDocuments: translations.membershipDocuments,
          purposeAndDirectory: translations.purposeAndDirectory
        }}
      />
      
      {/* Main Content */}
      <main className="lg:ml-64 p-6 md:p-8 lg:p-12 pt-20 lg:pt-12">
        {children}
      </main>
    </div>
  );
}

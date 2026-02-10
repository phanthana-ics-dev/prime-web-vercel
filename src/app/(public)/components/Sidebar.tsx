'use client';

import Link from 'next/link';
import { useTranslation } from '@/app/i18n/client';
import { useParams } from 'next/navigation';

interface NavLinkProps {
  href: string;
  active: boolean;
  icon: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, active, icon, label }) => (
  <Link href={href} className={`flex items-center gap-2 text-sm ${active ? 'text-[#4a7c59] font-medium' : 'text-[#000000]/60 hover:text-[#4a7c59]'}`}>
    <span>{icon}</span> {label}
  </Link>
);

export default function Sidebar({ activePage }: { activePage: string }) {
  const { lang } = useParams<{ lang: string }>();
  const { t } = useTranslation(lang, 'common');

  const navLinks = [
    { href: `/${lang}/fact-sheet`, icon: '📄', label: t('Fact Sheet'), page: 'fact-sheet' },
    { href: `/${lang}/terms-and-conditions`, icon: '📋', label: t('Terms & Conditions'), page: 'terms-and-conditions' },
    { href: `/${lang}/membership-agreement`, icon: '📝', label: t('Membership Agreement'), page: 'membership-agreement' },
    { href: `/${lang}/privacy-policy`, icon: '🔒', label: t('Privacy Policy'), page: 'privacy-policy' },
    { href: `/${lang}/course-directory`, icon: '⛳', label: t('Course Directory'), page: 'course-directory' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-[#000000]/10 p-6">
      <Link href={`/${lang}`} className="flex items-center gap-2 mb-8 text-[#000000] hover:text-[#4a7c59] transition-colors">
        <span>←</span>
        <span className="text-sm">{t('Back to Home')}</span>
      </Link>
      
      <div className="space-y-1">
        <h3 className="text-xs font-medium text-[#000000]/50 uppercase tracking-wide mb-4">{t('MEMBERSHIP DOCUMENTS')}</h3>
        <p className="text-xs text-[#000000]/40 mb-6">{t('Purpose and course directory')}</p>
        
        <nav className="space-y-2">
          {navLinks.map(link => (
            <NavLink
              key={link.page}
              href={link.href}
              active={activePage === link.page}
              icon={link.icon}
              label={link.label}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
}

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useParams } from 'next/navigation';

interface NavLinkItem {
  href: string;
  icon: string;
  label: string;
  page: string;
}

interface MobileSidebarProps {
  activePage: string;
  navLinks: NavLinkItem[];
  translations: {
    backToHome: string;
    membershipDocuments: string;
    purposeAndDirectory: string;
  };
}

export default function MobileSidebar({ activePage, navLinks, translations }: MobileSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useParams<{ lang: string }>();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Button - Show only on mobile */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 lg:hidden bg-white p-2 rounded-md shadow-lg border border-[#000000]/10 hover:bg-[#f5f5f5]"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-[#4a7c59]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Overlay - Show only on mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-full w-64 bg-white border-r border-[#000000]/10 p-6 z-40
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <Link
          href={`/${lang}`}
          className="flex items-center gap-2 mb-8 text-[#000000] hover:text-[#4a7c59] transition-colors"
          onClick={closeSidebar}
        >
          <span>←</span>
          <span className="text-sm">{translations.backToHome}</span>
        </Link>

        <div className="space-y-1">
          <h3 className="text-xs font-medium text-[#000000]/50 uppercase tracking-wide mb-4">
            {translations.membershipDocuments}
          </h3>
          <p className="text-xs text-[#000000]/40 mb-6">
            {translations.purposeAndDirectory}
          </p>

          <nav className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                href={link.href}
                onClick={closeSidebar}
                className={`flex items-center gap-2 text-sm ${
                  activePage === link.page
                    ? 'text-[#4a7c59] font-medium'
                    : 'text-[#000000]/60 hover:text-[#4a7c59]'
                }`}
              >
                <span>{link.icon}</span> {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}

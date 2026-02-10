import Link from "next/link";
import { getDictionary, createT, type Locale } from "../../../../lib/i18n";
import DocumentLayout from "../../components/DocumentLayout";

// Generate static paths for supported languages
export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "th" }];
}

// Only generate specified params
export const dynamicParams = false;

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = createT(dict);

  return (
    <DocumentLayout 
      activePage="privacy-policy" 
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
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-[0.3em] mb-2">
              {t("PRIME")}
            </h1>
            <p className="text-base uppercase tracking-[0.3em] text-[#000000]/60">
              {t("Privacy.Title")}
            </p>
          </div>

          {/* Intro */}
          <div className="mb-8">
            <p className="text-base leading-relaxed">{t("Privacy.Intro")}</p>
          </div>

          {/* Sections */}
          <div className="space-y-6 text-base">
            {/* Section 1 */}
            <section>
              <h2 className="font-bold mb-3">{t("Privacy.Section1.Title")}</h2>
              <p className="leading-relaxed mb-3">
                {t("Privacy.Section1.Content1")}
              </p>
              <p className="font-semibold mb-2">
                {t("Privacy.Section1.Subtitle1")}
              </p>
              <ul className="list-disc ml-6 space-y-1 mb-3">
                <li>{t("Privacy.Section1.Item1")}</li>
                <li>{t("Privacy.Section1.Item2")}</li>
                <li>{t("Privacy.Section1.Item3")}</li>
                <li>{t("Privacy.Section1.Item4")}</li>
                <li>{t("Privacy.Section1.Item5")}</li>
                <li>{t("Privacy.Section1.Item6")}</li>
              </ul>
              <p className="leading-relaxed">
                {t("Privacy.Section1.Content2")}
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-bold mb-3">{t("Privacy.Section2.Title")}</h2>
              <p className="leading-relaxed mb-2">
                {t("Privacy.Section2.Content1")}
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>{t("Privacy.Section2.Item1")}</li>
                <li>{t("Privacy.Section2.Item2")}</li>
                <li>{t("Privacy.Section2.Item3")}</li>
                <li>{t("Privacy.Section2.Item4")}</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-bold mb-3">{t("Privacy.Section3.Title")}</h2>
              <p className="leading-relaxed mb-2">
                {t("Privacy.Section3.Content1")}
              </p>
              <ul className="list-disc ml-6 space-y-1 mb-3">
                <li>{t("Privacy.Section3.Item1")}</li>
                <li>{t("Privacy.Section3.Item2")}</li>
                <li>{t("Privacy.Section3.Item3")}</li>
              </ul>
              <p className="leading-relaxed">
                {t("Privacy.Section3.Content2")}
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-bold mb-3">{t("Privacy.Section4.Title")}</h2>
              <p className="leading-relaxed">
                {t("Privacy.Section4.Content1")}
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-bold mb-3">{t("Privacy.Section5.Title")}</h2>
              <p className="leading-relaxed">
                {t("Privacy.Section5.Content1")}
              </p>
            </section>

            {/* Section 6 */} 
            <section>
              <h2 className="font-bold mb-3">{t("Privacy.Section6.Title")}</h2>
              <p className="leading-relaxed mb-2">
                {t("Privacy.Section6.Content1")}
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>{t("Privacy.Section6.Item1")}</li>
                <li>{t("Privacy.Section6.Item2")}</li>
                <li>{t("Privacy.Section6.Item3")}</li>
                <li>{t("Privacy.Section6.Item4")}</li>
                <li>{t("Privacy.Section6.Item5")}</li>
                <li>{t("Privacy.Section6.Item6")}</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-bold mb-3">{t("Privacy.Section7.Title")}</h2>
              <p className="leading-relaxed">
                {t("Privacy.Section7.Content1")}
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-bold mb-3">{t("Privacy.Section8.Title")}</h2>
              <p className="leading-relaxed mb-2">
                {t("Privacy.Section8.Content1")}
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="font-bold mb-3">{t("Privacy.Section9.Title")}</h2>
              <p className="leading-relaxed">
                {t("Privacy.Section9.Content1")}
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="font-bold mb-3">{t("Privacy.Section10.Title")}</h2>
              <p className="leading-relaxed">
                {t("Privacy.Section10.Content1")}
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="font-bold mb-3">{t("Privacy.Section11.Title")}</h2>
              <p className="leading-relaxed mb-2">
                {t("Privacy.Section11.Content1")}
              </p>
              <div className="border border-[#000000]/50 p-4 mt-3 flex items-start">
                <div className="flex flex-col items-start w-1/2  p-3 rounded">
                  <p className="font-semibold text-lg">
                    {t("Privacy.Section11.PRIME")}
                  </p>
                  <p className="text-sm">{t("Privacy.Section11.SubPrime")}</p>
                </div>
                <div className="flex flex-col items-end w-1/2 ml-6">
                  <p className="text-sm mb-1">
                    <strong>{t("Email")}:</strong>{" "}
                    {t("Privacy.Section11.Email")}
                  </p>
                  <p className="text-sm mb-1">
                    <strong>{t("Phone")}:</strong>{" "}
                    {t("Privacy.Section11.Phone")}
                  </p>
                  <p className="text-sm">
                    <strong>LINE:</strong> {t("Privacy.Section11.Line")}
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 pt-6 border-t border-[#000000]/10">
            <p className="text-xs text-[#000000]/50">
              {t(
                "© 2025 PRIME Corporate Golf Membership. All Rights Reserved.",
              )}
            </p>
          </div>
        </div>

        {/* Floating Back Button */}
        <Link
          href={`/${lang}`}
          className="fixed bottom-8 right-8 bg-[#4a7c59] text-white p-4 rounded-full shadow-2xl hover:bg-[#4a7c59]/90 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </Link>
    </DocumentLayout>
  );
}

export const dynamic = "force-static";
export const revalidate = false;

import Link from "next/link";
import { getDictionary, createT, type Locale } from "../../../../lib/i18n";
import DocumentLayout from "../../components/DocumentLayout";

// Generate static paths for supported languages
export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "th" }];
}

// Only generate specified params
export const dynamicParams = false;

export default async function CourseDirectoryPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = createT(dict);

  const courses = {
    bangkokCentral: [
      { name: "Thai Country Club", region: "Bangkok", isPremium: true },
      { name: "Siam Country Club Bangkok", region: "Bangkok", isPremium: true },
      { name: "Nikanti Golf Club", region: "Bangkok", isPremium: true },
      { name: "Alpine Golf Club", region: "Bangkok", isPremium: true },
      {
        name: "Summit Windmill Golf Club",
        region: "Samut Prakan",
        isPremium: true,
      },
      { name: "The RG City Golf", region: "Pathum Thani", isPremium: true },
      {
        name: "Royal Bang Pa-in Golf Club",
        region: "Ayutthaya",
        isPremium: true,
      },
      { name: "Green Valley Country Club", region: "Bangkok", isPremium: true },
      {
        name: "Muang Kaew Golf Course",
        region: "Samut Prakan",
        isPremium: false,
      },
      {
        name: "The Royal Golf & Country Club",
        region: "Bangkok",
        isPremium: false,
      },
      { name: "Thana City Country Club", region: "Bangkok", isPremium: false },
      { name: "The Vintage Club", region: "Samut Prakan", isPremium: false },
      {
        name: "Phoenix Gold Golf Bangkok",
        region: "Bangkok",
        isPremium: false,
      },
      {
        name: "Krung Kavee Golf Course & Country Club",
        region: "Pathum Thani",
        isPremium: false,
      },
      {
        name: "Suwan Golf & Country Club",
        region: "Nakhon Pathom",
        isPremium: false,
      },
      { name: "Cascata Golf Club", region: "Nakhon Nayok", isPremium: false },
      { name: "Lakewood Country Club", region: "Bangkok", isPremium: false },
      {
        name: "Lam Luk Ka Country Club",
        region: "Pathum Thani",
        isPremium: false,
      },
      { name: "Rachakram Golf Club", region: "Ayutthaya", isPremium: false },
      {
        name: "Lotus Valley Golf Resort",
        region: "Pathum Thani",
        isPremium: false,
      },
      { name: "Subhapruek Golf Club", region: "Bangkok", isPremium: false },
      {
        name: "Summit Pinehurst Golf Club",
        region: "Bangkok",
        isPremium: false,
      },
      { name: "Windsor Park & Golf Club", region: "Bangkok", isPremium: false },
      {
        name: "Flora Ville Golf & Country Club",
        region: "Pathum Thani",
        isPremium: false,
      },
      {
        name: "Royal Hills Golf Resort & Spa",
        region: "Nakhon Nayok",
        isPremium: false,
      },
      { name: "Bangkok Golf Club", region: "Bangkok", isPremium: false },
      {
        name: "Bangpakong Riverside Country Club",
        region: "Chachoengsao",
        isPremium: false,
      },
      { name: "Legacy Golf Club", region: "Bangkok", isPremium: false },
      {
        name: "Northern Rangsit Golf Club",
        region: "Pathum Thani",
        isPremium: false,
      },
      {
        name: "Royal Lakeside Golf Club",
        region: "Chachoengsao",
        isPremium: false,
      },
      { name: "Riverdale Golf Club", region: "Pathum Thani", isPremium: false },
      {
        name: "Wangnoi Prestige Golf Course",
        region: "Ayutthaya",
        isPremium: false,
      },
      {
        name: "Watermill Golf Club & Resort",
        region: "Pathum Thani",
        isPremium: false,
      },
      { name: "Ban Rakat Club", region: "Bangkok", isPremium: false },
      {
        name: "Rose Garden Golf Club",
        region: "Nakhon Pathom",
        isPremium: false,
      },
    ],
    pattayaEastern: [
      {
        name: "Siam Country Club - Old Course",
        region: "Pattaya",
        isPremium: true,
      },
      {
        name: "Siam Country Club - Plantation",
        region: "Pattaya",
        isPremium: true,
      },
      {
        name: "Siam Country Club - Waterside",
        region: "Pattaya",
        isPremium: true,
      },
      {
        name: "Siam Country Club - Rolling Hills",
        region: "Pattaya",
        isPremium: true,
      },
      { name: "Chee Chan Golf Resort", region: "Pattaya", isPremium: true },
      {
        name: "Laem Chabang International Country Club",
        region: "Chonburi",
        isPremium: true,
      },
      {
        name: "Pattana Golf Club & Resort",
        region: "Chonburi",
        isPremium: false,
      },
      { name: "Bangpra Golf Club", region: "Chonburi", isPremium: false },
      {
        name: "Phoenix Gold Golf & Country Club",
        region: "Chonburi",
        isPremium: false,
      },
      {
        name: "Rayong Green Valley Country Club",
        region: "Rayong",
        isPremium: false,
      },
      {
        name: "St. Andrew 2000 Golf Course",
        region: "Rayong",
        isPremium: false,
      },
      { name: "Treasure Hill Golf Club", region: "Chonburi", isPremium: false },
      { name: "Burapha Golf & Resort", region: "Chonburi", isPremium: false },
      {
        name: "Pleasant Valley Golf & Country Club",
        region: "Chonburi",
        isPremium: false,
      },
      { name: "Wangjuntr Golf Park", region: "Rayong", isPremium: false },
      { name: "Khao Kheow Country Club", region: "Chonburi", isPremium: false },
      {
        name: "Parichat International Golf Links",
        region: "Chonburi",
        isPremium: false,
      },
    ],
    khaoyai: [
      {
        name: "Toscana Valley Golf Course",
        region: "Khao Yai",
        isPremium: true,
      },
      {
        name: "Rancho Charnvee Resort & Country Club",
        region: "Khao Yai",
        isPremium: false,
      },
      {
        name: "Kirimaya Golf Resort & Spa",
        region: "Khao Yai",
        isPremium: false,
      },
      {
        name: "Mountain Creek Golf Resort",
        region: "Khao Yai",
        isPremium: false,
      },
      {
        name: "My Ozone Golf Club Khaoyai",
        region: "Khao Yai",
        isPremium: false,
      },
    ],
    huaHinWest: [
      { name: "Black Mountain Golf Club", region: "Hua Hin", isPremium: true },
      {
        name: "Pineapple Valley Golf Club",
        region: "Hua Hin",
        isPremium: true,
      },
      {
        name: "Springfield Royal Country Club",
        region: "Hua Hin",
        isPremium: false,
      },
      { name: "Palm Hills Golf Club", region: "Hua Hin", isPremium: false },
      {
        name: "Lake View Resort and Golf Club",
        region: "Hua Hin",
        isPremium: false,
      },
      {
        name: "Blue Sapphire Golf and Resort",
        region: "Kanchanaburi",
        isPremium: false,
      },
      {
        name: "Grand Prix Golf Club",
        region: "Kanchanaburi",
        isPremium: false,
      },
    ],
    chiangMaiNorth: [
      {
        name: "Alpine Golf Resort Chiangmai",
        region: "Chiang Mai",
        isPremium: true,
      },
      {
        name: "Chiangmai Highlands Golf and Spa Resort",
        region: "Chiang Mai",
        isPremium: false,
      },
      {
        name: "Santiburi Country Club Chiangrai",
        region: "Chiang Rai",
        isPremium: false,
      },
    ],
    phuketSouth: [
      {
        name: "Blue Canyon Country Club - Canyon Course",
        region: "Phuket",
        isPremium: true,
      },
      {
        name: "Mission Hills Phuket Golf Resort & Spa",
        region: "Phuket",
        isPremium: true,
      },
      {
        name: "Blue Canyon Country Club - Lake Course",
        region: "Phuket",
        isPremium: false,
      },
      { name: "Loch Palm Golf Club", region: "Phuket", isPremium: false },
      {
        name: "Aquella Golf & Country Club",
        region: "Phang Nga",
        isPremium: false,
      },
      {
        name: "Santiburi Samui Country Club",
        region: "Koh Samui",
        isPremium: false,
      },
      { name: "Red Mountain Golf Club", region: "Phuket", isPremium: false },
    ],
  };

  return (
    <DocumentLayout
      activePage="course-directory"
      lang={lang}
      translations={{
        backToHome: t("Back to Home"),
        membershipDocuments: t("MEMBERSHIP DOCUMENTS"),
        purposeAndDirectory: t("Purpose and course directory"),
        factSheet: t("Fact Sheet"),
        termsAndConditions: t("Terms & Conditions"),
        membershipAgreement: t("Membership Agreement"),
        privacyPolicy: t("Privacy Policy"),
        courseDirectory: t("Course Directory"),
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-[0.3em] mb-2">
            {t("PRIME")}
          </h1>
          <p className="text-base uppercase tracking-[0.3em] text-[#000000]/60">
            {t("CourseDirectory.Title")}
          </p>
          <p className="text-sm text-[#000000]/50 mt-2">
            {t("CourseDirectory.AllCoursesDate")}
          </p>
        </div>

        {/* Course Classification Section */}
        <div className="mb-8 border border-[#000000]/10 rounded overflow-hidden">
          <h2 className="font-bold text-lg mb-0 bg-white px-4 py-3">
            {t("CourseDirectory.Classification")}
          </h2>
          <div className="bg-[#f5f1e8] px-4 py-3 border-t border-[#000000]/10">
            <p className="text-sm text-[#000000]/70">
              <strong>{t("CourseDirectory.PremiumChampionship")}</strong> -{" "}
              {t("CourseDirectory.PremiumChampionshipDesc")}
            </p>
          </div>
          <div className="bg-white px-4 py-3 border-t border-[#000000]/10">
            <p className="text-sm text-[#000000]/70">
              <strong>{t("CourseDirectory.QualityCourses")}</strong> -{" "}
              {t("CourseDirectory.QualityCoursesDesc")}
            </p>
          </div>
        </div>

        {/* Bangkok & Central */}
        <div className="mb-8">
          <div className="bg-[#4a7c59] text-white px-4 py-2 mb-2 flex justify-between items-center">
            <h3 className="font-bold">{t("Bangkok & Central")}</h3>
            <span className="text-sm">
              (34 {t("CourseDirectory.CoursesCount")})
            </span>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#5a8c69] text-white">
                <th className="text-left px-4 py-2 border border-[#000000]/10">
                  {t("CourseDirectory.CourseName")}
                </th>
                <th className="text-left px-4 py-2 border border-[#000000]/10">
                  {t("CourseDirectory.Region")}
                </th>
              </tr>
            </thead>
            <tbody>
              {courses.bangkokCentral.map((course, idx) => (
                <tr
                  key={idx}
                  className={course.isPremium ? "bg-[#f5f1e8]" : "bg-white"}
                >
                  <td className="px-4 py-2 border border-[#000000]/10 text-sm">
                    {course.name}
                  </td>
                  <td className="px-4 py-2 border border-[#000000]/10 text-sm">
                    {course.region}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pattaya & Eastern */}
        <div className="mb-8">
          <div className="bg-[#4a7c59] text-white px-4 py-2 mb-2 flex justify-between items-center">
            <h3 className="font-bold">{t("Pattaya & Eastern")}</h3>
            <span className="text-sm">
              (18 {t("CourseDirectory.CoursesCount")})
            </span>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#5a8c69] text-white">
                <th className="text-left px-4 py-2 border border-[#000000]/10">
                  {t("CourseDirectory.CourseName")}
                </th>
                <th className="text-left px-4 py-2 border border-[#000000]/10">
                  {t("CourseDirectory.Region")}
                </th>
              </tr>
            </thead>
            <tbody>
              {courses.pattayaEastern.map((course, idx) => (
                <tr
                  key={idx}
                  className={course.isPremium ? "bg-[#f5f1e8]" : "bg-white"}
                >
                  <td className="px-4 py-2 border border-[#000000]/10 text-sm">
                    {course.name}
                  </td>
                  <td className="px-4 py-2 border border-[#000000]/10 text-sm">
                    {course.region}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Khao Yai */}
        <div className="mb-8">
          <div className="bg-[#4a7c59] text-white px-4 py-2 mb-2 flex justify-between items-center">
            <h3 className="font-bold">{t("Khao Yai")}</h3>
            <span className="text-sm">
              (5 {t("CourseDirectory.CoursesCount")})
            </span>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#5a8c69] text-white">
                <th className="text-left px-4 py-2 border border-[#000000]/10">
                  {t("CourseDirectory.CourseName")}
                </th>
                <th className="text-left px-4 py-2 border border-[#000000]/10">
                  {t("CourseDirectory.Region")}
                </th>
              </tr>
            </thead>
            <tbody>
              {courses.khaoyai.map((course, idx) => (
                <tr
                  key={idx}
                  className={course.isPremium ? "bg-[#f5f1e8]" : "bg-white"}
                >
                  <td className="px-4 py-2 border border-[#000000]/10 text-sm">
                    {course.name}
                  </td>
                  <td className="px-4 py-2 border border-[#000000]/10 text-sm">
                    {course.region}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Hua Hin & West */}
        <div className="mb-8">
          <div className="bg-[#4a7c59] text-white px-4 py-2 mb-2 flex justify-between items-center">
            <h3 className="font-bold">{t("Hua Hin & West")}</h3>
            <span className="text-sm">
              (7 {t("CourseDirectory.CoursesCount")})
            </span>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#5a8c69] text-white">
                <th className="text-left px-4 py-2 border border-[#000000]/10">
                  {t("CourseDirectory.CourseName")}
                </th>
                <th className="text-left px-4 py-2 border border-[#000000]/10">
                  {t("CourseDirectory.Region")}
                </th>
              </tr>
            </thead>
            <tbody>
              {courses.huaHinWest.map((course, idx) => (
                <tr
                  key={idx}
                  className={course.isPremium ? "bg-[#f5f1e8]" : "bg-white"}
                >
                  <td className="px-4 py-2 border border-[#000000]/10 text-sm">
                    {course.name}
                  </td>
                  <td className="px-4 py-2 border border-[#000000]/10 text-sm">
                    {course.region}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Chiang Mai & North */}
        <div className="mb-8">
          <div className="bg-[#4a7c59] text-white px-4 py-2 mb-2 flex justify-between items-center">
            <h3 className="font-bold">{t("Chiang Mai & North")}</h3>
            <span className="text-sm">
              (3 {t("CourseDirectory.CoursesCount")})
            </span>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#5a8c69] text-white">
                <th className="text-left px-4 py-2 border border-[#000000]/10">
                  {t("CourseDirectory.CourseName")}
                </th>
                <th className="text-left px-4 py-2 border border-[#000000]/10">
                  {t("CourseDirectory.Region")}
                </th>
              </tr>
            </thead>
            <tbody>
              {courses.chiangMaiNorth.map((course, idx) => (
                <tr
                  key={idx}
                  className={course.isPremium ? "bg-[#f5f1e8]" : "bg-white"}
                >
                  <td className="px-4 py-2 border border-[#000000]/10 text-sm">
                    {course.name}
                  </td>
                  <td className="px-4 py-2 border border-[#000000]/10 text-sm">
                    {course.region}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Phuket & South */}
        <div className="mb-8">
          <div className="bg-[#4a7c59] text-white px-4 py-2 mb-2 flex justify-between items-center">
            <h3 className="font-bold">{t("Phuket & South")}</h3>
            <span className="text-sm">
              (7 {t("CourseDirectory.CoursesCount")})
            </span>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#5a8c69] text-white">
                <th className="text-left px-4 py-2 border border-[#000000]/10">
                  {t("CourseDirectory.CourseName")}
                </th>
                <th className="text-left px-4 py-2 border border-[#000000]/10">
                  {t("CourseDirectory.Region")}
                </th>
              </tr>
            </thead>
            <tbody>
              {courses.phuketSouth.map((course, idx) => (
                <tr
                  key={idx}
                  className={course.isPremium ? "bg-[#f5f1e8]" : "bg-white"}
                >
                  <td className="px-4 py-2 border border-[#000000]/10 text-sm">
                    {course.name}
                  </td>
                  <td className="px-4 py-2 border border-[#000000]/10 text-sm">
                    {course.region}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Geographic Summary */}
        <div className="mb-12 p-4 bg-white border border-[#000000]/10 rounded">
          <h2 className="font-bold text-lg mb-4">
            {t("CourseDirectory.GeographicSummary")}
          </h2>
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 scrollbar-thin">
            <table className="w-full border-collapse text-sm min-w-[500px]">
              <thead>
                <tr className="bg-[#5a8c69] text-white">
                  <th className="text-left px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm">
                    {t("CourseDirectory.Region")}
                  </th>
                  <th className="text-center px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm whitespace-nowrap">
                    {t("CourseDirectory.TotalCourses")}
                  </th>
                  <th className="text-center px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm whitespace-nowrap">
                    {t("CourseDirectory.PremiumInternational")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm">
                    {t("Bangkok & Central")}
                  </td>
                  <td className="text-center px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm">
                    34
                  </td>
                  <td className="text-center px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm">
                    8
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm">
                    {t("Pattaya & Eastern")}
                  </td>
                  <td className="text-center px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm">
                    18
                  </td>
                  <td className="text-center px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm">
                    6
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm">
                    {t("Khao Yai")}
                  </td>
                  <td className="text-center px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm">
                    5
                  </td>
                  <td className="text-center px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm">
                    1
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm">
                    {t("Hua Hin & West")}
                  </td>
                  <td className="text-center px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm">
                    7
                  </td>
                  <td className="text-center px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm">
                    2
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm">
                    {t("Chiang Mai & North")}
                  </td>
                  <td className="text-center px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm">
                    3
                  </td>
                  <td className="text-center px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm">
                    1
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm">
                    {t("Phuket & South")}
                  </td>
                  <td className="text-center px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm">
                    7
                  </td>
                  <td className="text-center px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm">
                    2
                  </td>
                </tr>
                <tr className="bg-[#5a8c69] text-white font-bold">
                  <td className="px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm">
                    {t("CourseDirectory.Total")}
                  </td>
                  <td className="text-center px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm">
                    74
                  </td>
                  <td className="text-center px-2 md:px-4 py-2 border border-[#000000]/10 text-xs md:text-sm">
                    20
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* About the Prime Network */}
        <div className="mb-8 p-4 bg-white border border-[#000000]/10 rounded">
          <h2 className="font-bold text-lg mb-3">
            {t("CourseDirectory.AboutNetwork")}
          </h2>
            <p className="text-sm text-[#000000]/70 mb-3">
              {t("CourseDirectory.AboutNetworkDesc")}
            </p>
            <ul className="list-disc ml-6 space-y-2 text-sm text-[#000000]/70">
              <li>{t("CourseDirectory.Feature1")}</li>
              <li>{t("CourseDirectory.Feature2")}</li>
              <li>{t("CourseDirectory.Feature3")}</li>
              <li>{t("CourseDirectory.Feature4")}</li>
              <li>{t("CourseDirectory.Feature5")}</li>
              <li>
                {t("CourseDirectory.ContactInfo")}
                <br />
                📧 {t("CourseDirectory.ContactEmail")} | ☎️{" "}
                {t("CourseDirectory.ContactPhone")}
              </li>
            </ul>
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

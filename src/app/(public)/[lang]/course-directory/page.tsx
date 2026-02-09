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

export default function CourseDirectoryPage() {
  // Course data organized by region
  const courses = {
    'Bangkok & Vicinity': [
      { name: 'Alpine Golf Club', location: 'Pathum Thani' },
      { name: 'Bangpakong Riverside Country Club', location: 'Chachoengsao' },
      { name: 'Cascata Golf Club', location: 'Hua Hin' },
      { name: 'Dynasty Golf & Country Club', location: 'Bangkok' },
      { name: 'Green Valley Country Club', location: 'Rayong' },
      { name: 'Krungthep Kreetha Sports Club', location: 'Bangkok' },
      { name: 'Lakewood Country Club', location: 'Bangkok' },
      { name: 'Muang Kaew Golf Course', location: 'Nonthaburi' },
      { name: 'Navatanee Golf Course', location: 'Bangkok' },
      { name: 'Panya Indra Golf Course', location: 'Bangkok' },
      { name: 'Riverdale Golf Club', location: 'Pathum Thani' },
      { name: 'Royal Gems Golf City', location: 'Nakhon Nayok' },
      { name: 'Summit Windmill Golf Club', location: 'Samut Prakan' },
      { name: 'Suwan Golf & Country Club', location: 'Chonburi' },
      { name: 'Thai Country Club', location: 'Pathum Thani' },
      { name: 'Thana City Golf & Country Club', location: 'Samut Prakan' },
      { name: 'The Royal Golf & Country Club', location: 'Nakhon Nayok' },
      { name: 'Vintage Golf Club', location: 'Pathum Thani' },
    ],
    'Eastern Seaboard': [
      { name: 'Burapha Golf Club', location: 'Chonburi' },
      { name: 'Eastern Star Golf Course', location: 'Rayong' },
      { name: 'Greenwood Golf Club', location: 'Pattaya' },
      { name: 'Khao Kheow Country Club', location: 'Chonburi' },
      { name: 'Laem Chabang International Country Club', location: 'Chonburi' },
      { name: 'Pattana Golf Club & Resort', location: 'Chonburi' },
      { name: 'Pattavia Century Golf Club', location: 'Pattaya' },
      { name: 'Phoenix Gold Golf & Country Club', location: 'Pattaya' },
      { name: 'Plutaluang Royal Thai Navy Golf Course', location: 'Chonburi' },
      { name: 'Rayong Green Valley Country Club', location: 'Rayong' },
      { name: 'Siam Country Club (Old Course)', location: 'Pattaya' },
      { name: 'Siam Country Club (Plantation)', location: 'Pattaya' },
      { name: 'Siam Country Club (Waterside)', location: 'Pattaya' },
      { name: 'St. Andrews 2000 Golf Club', location: 'Chonburi' },
    ],
    'Hua Hin & Cha-Am': [
      { name: 'Banyan Golf Club', location: 'Hua Hin' },
      { name: 'Black Mountain Golf Club', location: 'Hua Hin' },
      { name: 'Imperial Lake View Golf Club', location: 'Cha-Am' },
      { name: 'Majestic Creek Country Club', location: 'Hua Hin' },
      { name: 'Milford Golf Club', location: 'Hua Hin' },
      { name: 'Royal Hua Hin Golf Course', location: 'Hua Hin' },
      { name: 'Sea Pine Golf Course', location: 'Hua Hin' },
      { name: 'Springfield Royal Country Club', location: 'Cha-Am' },
      { name: 'The Imperial Hua Hin Beach Resort', location: 'Hua Hin' },
    ],
    'Chiang Mai & Northern Thailand': [
      { name: 'Alpine Golf Resort Chiang Mai', location: 'Chiang Mai' },
      { name: 'Chiang Mai Highlands Golf & Spa Resort', location: 'Chiang Mai' },
      { name: 'Gassan Khuntan Golf & Resort', location: 'Lamphun' },
      { name: 'Gassan Legacy Golf Club', location: 'Chiang Mai' },
      { name: 'Gassan Marina Golf Club', location: 'Chiang Mai' },
      { name: 'Mae Jo Golf Club', location: 'Chiang Mai' },
      { name: 'Royal Chiang Mai Golf Club', location: 'Chiang Mai' },
      { name: 'Santiburi Country Club', location: 'Chiang Rai' },
      { name: 'Summit Green Valley Chiangmai Country Club', location: 'Chiang Mai' },
    ],
    'Phuket & Southern Islands': [
      { name: 'Blue Canyon Country Club (Canyon)', location: 'Phuket' },
      { name: 'Blue Canyon Country Club (Lakes)', location: 'Phuket' },
      { name: 'Laguna Golf Phuket', location: 'Phuket' },
      { name: 'Loch Palm Golf Club', location: 'Phuket' },
      { name: 'Mission Hills Golf Club Phuket', location: 'Phuket' },
      { name: 'Phuket Country Club', location: 'Phuket' },
      { name: 'Red Mountain Golf Club', location: 'Phuket' },
      { name: 'Santiburi Samui Country Club', location: 'Koh Samui' },
    ],
    'Khao Yai & Northeast': [
      { name: 'Bonanza Golf & Country Club', location: 'Khao Yai' },
      { name: 'Khao Yai Golf Club', location: 'Khao Yai' },
      { name: 'Kirimaya Golf Resort', location: 'Khao Yai' },
      { name: 'Mission Hills Khao Yai', location: 'Khao Yai' },
      { name: 'Rancho Charnvee Resort & Country Club', location: 'Khao Yai' },
      { name: 'Scenical World Country Club', location: 'Khao Yai' },
      { name: 'Toscana Valley Country Club', location: 'Khao Yai' },
    ],
    'Kanchanaburi & West': [
      { name: 'Grand Prix International Circuit', location: 'Kanchanaburi' },
      { name: 'Mission Hills Golf Resort Kanchanaburi', location: 'Kanchanaburi' },
      { name: 'Nichigo Resort & Country Club', location: 'Kanchanaburi' },
      { name: 'Royal Ratchaburi Golf Club', location: 'Ratchaburi' },
    ]
  };

  const totalCourses = Object.values(courses).flat().length;

  return (
    <div className="min-h-screen bg-[#fdfcfa]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-[#000000]/10 p-6 overflow-y-auto">
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
            <Link href="/en/privacy-policy" className="flex items-center gap-2 text-sm text-[#000000]/60 hover:text-[#4a7c59]">
              <span>🔒</span> Privacy Policy
            </Link>
            <Link href="/en/course-directory" className="flex items-center gap-2 text-sm text-[#4a7c59] font-medium">
              <span>⛳</span> Course Directory
            </Link>
          </nav>
        </div>

        {/* Quick Navigation */}
        <div className="mt-8 pt-8 border-t border-[#000000]/10">
          <h4 className="text-xs font-medium text-[#000000]/50 uppercase tracking-wide mb-4">REGIONS</h4>
          <nav className="space-y-2">
            {Object.keys(courses).map((region, idx) => (
              <a key={idx} href={`#${region.toLowerCase().replace(/\s+/g, '-')}`} className="block text-xs text-[#000000]/60 hover:text-[#4a7c59] transition-colors">
                {region}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-[0.3em] mb-2">PRIME</h1>
            <p className="text-sm uppercase tracking-[0.3em] text-[#000000]/60">COURSE DIRECTORY</p>
            <p className="text-base text-[#000000]/60 mt-4">{totalCourses} Premium Golf Courses Across Thailand</p>
          </div>

          {/* Intro */}
          <div className="mb-12 p-6 bg-[#f4f5ef] border-l-4 border-[#4a7c59]">
            <p className="text-base leading-relaxed">
              PRIME membership provides access to Thailand&apos;s finest golf courses, from championship venues that have hosted international tournaments to exclusive private clubs nestled in stunning natural settings. Our diverse portfolio ensures you&apos;ll find the perfect course for every occasion - whether entertaining clients, rewarding your team, or enjoying a personal round.
            </p>
          </div>

          {/* Course Listings by Region */}
          {Object.entries(courses).map(([region, courseList], idx) => (
            <section key={idx} id={region.toLowerCase().replace(/\s+/g, '-')} className="mb-16 scroll-mt-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2 text-[#4a7c59]">{region}</h2>
                <div className="h-1 w-24 bg-[#4a7c59]"></div>
                <p className="text-sm text-[#000000]/50 mt-2">{courseList.length} Courses Available</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {courseList.map((course, courseIdx) => (
                  <div key={courseIdx} className="bg-white p-6 border border-[#000000]/10 hover:border-[#4a7c59] hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-[#4a7c59] transition-colors">
                          {course.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-[#000000]/60">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{course.location}</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <div className="w-10 h-10 rounded-full bg-[#f4f5ef] flex items-center justify-center group-hover:bg-[#4a7c59] transition-colors">
                          <span className="text-xl group-hover:text-white transition-colors">⛳</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Important Notes */}
          <div className="mb-12 p-8 bg-white border-2 border-[#4a7c59]">
            <h2 className="text-2xl font-semibold mb-6 text-center">Booking Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3 text-[#4a7c59]">📞 Advance Booking Required</h3>
                <p className="text-sm text-[#000000]/70 mb-4">
                  Contact your Personal Concierge at least 72 hours before your desired tee time. For weekends and holidays, we recommend booking 1-2 weeks in advance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-[#4a7c59]">📅 Subject to Availability</h3>
                <p className="text-sm text-[#000000]/70 mb-4">
                  Course access is subject to availability, tournament schedules, and maintenance closures. We&apos;ll work to accommodate your preferences.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-[#4a7c59]">⏰ Blackout Dates Apply</h3>
                <p className="text-sm text-[#000000]/70 mb-4">
                  Some courses have restricted availability during major tournaments or peak holiday periods. Your concierge will advise on alternatives.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-[#4a7c59]">✨ All-Inclusive Service</h3>
                <p className="text-sm text-[#000000]/70 mb-4">
                  Every round includes green fee, caddy, and golf cart for all players. Just show up and enjoy your day on the course.
                </p>
              </div>
            </div>
          </div>

          {/* Course Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-8 text-center">What to Expect</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-[#f4f5ef]">
                <div className="w-16 h-16 rounded-full bg-[#4a7c59] text-white flex items-center justify-center text-2xl mx-auto mb-4">
                  🏆
                </div>
                <h3 className="font-semibold mb-2">Championship Quality</h3>
                <p className="text-sm text-[#000000]/70">
                  Many courses have hosted Asian Tour and LPGA events, offering world-class playing conditions.
                </p>
              </div>
              <div className="text-center p-6 bg-[#f4f5ef]">
                <div className="w-16 h-16 rounded-full bg-[#4a7c59] text-white flex items-center justify-center text-2xl mx-auto mb-4">
                  🏔️
                </div>
                <h3 className="font-semibold mb-2">Diverse Settings</h3>
                <p className="text-sm text-[#000000]/70">
                  From mountain layouts to coastal courses, experience Thailand&apos;s varied landscapes.
                </p>
              </div>
              <div className="text-center p-6 bg-[#f4f5ef]">
                <div className="w-16 h-16 rounded-full bg-[#4a7c59] text-white flex items-center justify-center text-2xl mx-auto mb-4">
                  🛎️
                </div>
                <h3 className="font-semibold mb-2">Premium Facilities</h3>
                <p className="text-sm text-[#000000]/70">
                  Clubhouses with dining, pro shops, practice facilities, and locker rooms.
                </p>
              </div>
            </div>
          </div>

          {/* Regional Highlights */}
          <div className="mb-12 p-6 bg-white border border-[#4a7c59]/30">
            <h2 className="text-2xl font-semibold mb-6">Regional Highlights</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">🏙️</span>
                <div>
                  <h4 className="font-semibold">Bangkok & Vicinity</h4>
                  <p className="text-sm text-[#000000]/70">Convenient access from the city center, perfect for weekday rounds and client entertainment.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">🏖️</span>
                <div>
                  <h4 className="font-semibold">Eastern Seaboard & Pattaya</h4>
                  <p className="text-sm text-[#000000]/70">Combine golf with beach resorts, ideal for weekend getaways and corporate retreats.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">🏔️</span>
                <div>
                  <h4 className="font-semibold">Chiang Mai & Northern Thailand</h4>
                  <p className="text-sm text-[#000000]/70">Cooler climate and mountain views offer a refreshing escape, especially November-February.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">🌴</span>
                <div>
                  <h4 className="font-semibold">Phuket & Southern Islands</h4>
                  <p className="text-sm text-[#000000]/70">Tropical paradise settings perfect for reward trips and destination golf experiences.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">🦌</span>
                <div>
                  <h4 className="font-semibold">Khao Yai</h4>
                  <p className="text-sm text-[#000000]/70">UNESCO heritage area with world-class courses designed by legends like Jack Nicklaus and Pete Dye.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Footer */}
          <div className="border-t border-[#000000]/10 pt-8 mt-12">
            <div className="text-center">
              <p className="text-lg font-bold tracking-[0.2em] mb-2">PRIME</p>
              <p className="text-sm text-[#000000]/60 mb-4">CORPORATE GOLF MEMBERSHIP</p>
              <div className="space-y-1 text-sm mb-6">
                <p className="font-semibold text-[#4a7c59]">Ready to Book Your Next Round?</p>
                <p>Email: membership@primegolf.in.th</p>
                <p>Phone: +66 (0) 62 562 5456</p>
                <p>LINE: @primegolf</p>
              </div>
              <p className="text-xs text-[#000000]/50 mt-6">© 2025 PRIME Corporate Golf Membership. All Rights Reserved.</p>
              <p className="text-xs text-[#000000]/40 mt-2">Course availability and listings subject to change. Please contact your concierge for current information.</p>
            </div>
          </div>
        </div>

        {/* Floating Back Button */}
        <Link
          href="/"
          className="fixed bottom-8 right-8 bg-[#4a7c59] text-white p-4 rounded-full shadow-2xl hover:bg-[#4a7c59]/90 transition-colors z-50"
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

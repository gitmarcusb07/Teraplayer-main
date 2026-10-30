/**
 * Blog posts for TeraPlayer — the single data file the daily blog job appends to.
 *
 * HOW TO ADD A POST (daily job):
 *  1. Prepend a new object to the `posts` array (newest first).
 *  2. `slug` must be unique, lowercase, kebab-case, and match the post's URL:
 *     /blog/<slug>. Never reuse a slug, even for a revised post.
 *  3. `date` is YYYY-MM-DD (the publish date). `excerpt` is one sentence.
 *     `image` (optional but preferred) is a high-quality cover image URL that
 *     loads publicly, with `imageAlt` describing it. Use the real poster or
 *     official image for a movie/show/game when one exists, otherwise a good
 *     topical image; never a broken, low-resolution, or watermarked image.
 *  4. `sections` is an ordered list of content blocks. Supported block types:
 *       { type: "p", text: "..." }                        paragraph
 *       { type: "h2", text: "..." }                       section heading
 *       { type: "h3", text: "..." }                       sub-heading
 *       { type: "list", items: ["...", "..."] }            bullet list
 *       { type: "steps", items: ["...", "..."] }           numbered steps
 *       { type: "faq", items: [{ q: "...", a: "..." }] }  FAQ pairs
 *     Keep text plain — no HTML, no markdown, no invented dates, features,
 *     prices, limits or statistics. Only link out to https://teraplayer.in
 *     (the player itself) via the built-in CTA; never invent other URLs.
 *  5. Also add the new post URL to frontend/public/sitemap.xml and, if the
 *     parent wants a static snapshot, to the ROUTES list in
 *     frontend/scripts/prerender.js (see PATCHES.md).
 *  6. Do NOT touch frontend/src/components/AdsSection.jsx or any ad key.
 *     Blog pages mount the existing <AdsSection /> / <AdTopBanner />, so
 *     they reuse the site's existing Adsterra units automatically.
 */

export const posts = [
  {
    slug: "cyclone-arnab-odisha-floods-october-30-2026",
    image: "https://cf-images.assettype.com/nationalherald%2F2023-05%2F865b069a-9ebf-4400-a50a-1e9c47067e69%2FFvlh9_paAAAXpRr.jpg?rect=0%2C21%2C1080%2C567&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
    imageAlt: "Satellite view of Cyclone Arnab over the Bay of Bengal near India's east coast",
    title: "Cyclone Arnab Odisha Floods (October 30, 2026): 59,000 Evacuated, 1,000+ Villages Hit as CM Plans Aerial Survey",
    description:
      "Cyclone Arnab Odisha floods: 59,028 people evacuated, 1,000+ villages affected in Ganjam and Gajapati, trains cancelled, and a CM aerial survey today.",
    excerpt:
      "Cyclone Arnab has weakened, but its rains have flooded more than 1,000 villages in Odisha, forced over 59,000 people to safety, and disrupted trains and roads across the south of the state.",
    date: "2026-10-30",
    category: "News",
    sections: [
      {
        type: "p",
        text: "The Cyclone Arnab Odisha floods are now the story coming out of the storm. Cyclone Arnab itself has weakened over central India, but the danger in Odisha has shifted from wind to water. Torrential rain on Thursday, October 29, 2026, sent rivers into spate, cut off villages, washed away stretches of road, and forced a rescue operation across nine districts. On Friday, October 30, 2026, Chief Minister Mohan Charan Majhi is scheduled to visit the worst-hit districts, Ganjam and Gajapati, to assess the damage from the air and review relief work on the ground.",
      },
      { type: "h2", text: "Cyclone Arnab Odisha floods: the key numbers" },
      {
        type: "list",
        items: [
          "59,028 people evacuated to safety across nine districts in Odisha, including 11,882 from Ganjam.",
          "More than 1,000 villages affected: 299 villages across 22 blocks in Ganjam and 711 villages across seven blocks in Gajapati.",
          "313 rescue teams deployed: nine National Disaster Response Force teams, 60 Odisha Disaster Rapid Action Force teams and 244 fire services teams.",
          "3,001 pregnant women among those evacuated in Odisha, according to the state government.",
          "Patrapur recorded 546 mm of rain and Sorada 503 mm in the 24 hours ending at 8.30 am on Thursday.",
          "36 trains cancelled, 30 diverted and eight regulated or rescheduled on the Howrah-Chennai route.",
        ],
      },
      { type: "h2", text: "Ganjam and Gajapati: where the flooding is worst" },
      {
        type: "p",
        text: "Ganjam and Gajapati have borne the brunt of the flooding. In Ganjam, floods affected 208 gram panchayats across 22 blocks, with 22 villages reported marooned. In Gajapati, rising water from the Vansadhara and Mahendratanaya rivers inundated low-lying villages, including around Kashinagar, and left residents stranded in several blocks. Schools and colleges in both districts stay closed until October 31.",
      },
      { type: "h2", text: "Why the rain was so extreme" },
      {
        type: "p",
        text: "The rainfall totals explain why rivers rose so fast. Patrapur in Ganjam recorded 546 mm in 24 hours, Sorada recorded 503 mm, and G Udayagiri in Kandhamal recorded 462.4 mm. Extremely heavy rainfall above 200 mm was recorded at 15 places across Ganjam, Gajapati and Kandhamal in the same period. That volume of water pushed several rivers past their danger marks, including the Rushikulya, flowing at about 19 metres at Purushottampur, above its danger level.",
      },
      { type: "h2", text: "Roads, rail and rescue operations" },
      {
        type: "p",
        text: "Road and rail links have taken extensive damage. A stretch of National Highway 326 in Gajapati district was washed away, disrupting the route between Ganjam and Mohana, and floodwater near railway bridges and submerged tracks disrupted services on the Howrah-Chennai route. The East Coast Railway cancelled 24 trains and diverted 22, while the South Coast Railway cancelled 12 and diverted eight. Rescue teams are working in difficult conditions: an Indian Coast Guard helicopter winched six people, including two children, from a flooded public health centre at Jagmohan in Dharakote, while efforts to reach more than 2,000 people stranded in cut-off villages in Ganjam have been affected by low cloud cover.",
      },
      { type: "h2", text: "CM aerial survey and central assistance" },
      {
        type: "p",
        text: "Chief Minister Mohan Charan Majhi, accompanied by Revenue and Disaster Management Minister Suresh Pujari, is scheduled to conduct an aerial survey of Ganjam and Gajapati on Friday, October 30, 2026, and later land at Rangeilunda to hold discussions with officials and review relief and rescue operations. Union Home Minister Amit Shah has spoken to the chief ministers of Odisha, Andhra Pradesh, Chhattisgarh and Puducherry and assured central assistance, and inter-ministerial teams are expected to visit the affected states to assess the damage.",
      },
      { type: "h2", text: "Andhra Pradesh: damage put at Rs 4,600 crore" },
      {
        type: "p",
        text: "Neighbouring Andhra Pradesh has also been badly hit. Chief Minister N Chandrababu Naidu has put the preliminary damage in Andhra Pradesh at Rs 4,600 crore, after an aerial survey of cyclone-hit areas in the Krishna and Godavari regions. Power infrastructure losses alone are estimated at Rs 500 crore, crops across 2.24 lakh hectares have been affected, and the casualty figure given for Andhra Pradesh was seven. The Indian Coast Guard also airlifted all 20 crew members of the bulk carrier Sigma Pearl, stranded off the Andhra coast, and in Andhra Pradesh 3,100 pregnant women were shifted to hospitals as a precaution.",
      },
      { type: "h2", text: "What happens next for Odisha" },
      {
        type: "p",
        text: "The weather threat is not yet over. The India Meteorological Department has said a separate low-pressure area over the South Andaman Sea is likely to intensify into a depression over the southeast Bay of Bengal around October 31, and it is expected to move west-northwestwards. That system could bring another spell of rain to south Odisha in early November, so residents in flood-affected districts should keep following official weather and district advisories, even as the immediate rescue and relief operation continues and the authorities assess the full damage.",
      },
      { type: "h2", text: "If you are in or travelling to the affected areas" },
      {
        type: "steps",
        items: [
          "Check the latest official train and road updates before travelling on the Howrah-Chennai route or through Ganjam and Gajapati, as cancellations and diversions are still in force.",
          "Do not try to cross flooded roads, bridges or causeways, and avoid driving through water where the depth or current is unclear.",
          "Follow district and disaster management advisories on school closures, shelter locations and evacuation instructions, rather than rumours on social media.",
          "If you are in a low-lying or riverside area and water is rising, move to higher ground and contact local rescue teams rather than waiting for the water to recede.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: "How many people have been evacuated in the Cyclone Arnab Odisha floods?",
            a: "According to the Odisha government, 59,028 people have been evacuated to safety across nine districts, including 11,882 from Ganjam and 3,001 pregnant women.",
          },
          {
            q: "Which districts are worst affected by Cyclone Arnab in Odisha?",
            a: "Ganjam and Gajapati are the worst affected, with more than 1,000 villages affected between them, followed by heavy rain in Kandhamal, Malkangiri, Koraput, Nabarangpur, Rayagada, Kalahandi and Nuapada.",
          },
          {
            q: "Are trains running on the Howrah-Chennai route?",
            a: "Services have been disrupted: 36 trains were cancelled, 30 diverted and eight regulated or rescheduled after the Bahuda river crossed the danger mark at railway bridges in Ganjam, so check the latest railway updates before travelling.",
          },
        ],
      },
    ],
  },
  {
    slug: "new-ott-releases-this-weekend-october-30-2026",
    image: "https://www.ottrelease.com/wp-content/uploads/2026/10/akka.jpg",
    imageAlt: "Akka, the Netflix crime thriller leading this weekend's new OTT releases",
    title: "New OTT Releases This Weekend (October 30, 2026): Akka, Sigma, The Strangers: Chapter 3 and More",
    description:
      "New OTT releases this weekend, October 30, 2026: Akka and Sigma on Netflix, The Strangers: Chapter 3 on Prime Video, plus new South Indian titles on SonyLIV, ZEE5 and JioHotstar.",
    excerpt:
      "This weekend's new OTT releases bring crime thrillers, action drama, horror and South Indian stories to Netflix, Prime Video, SonyLIV, ZEE5 and JioHotstar from October 30, 2026.",
    date: "2026-10-30",
    category: "Pop Culture",
    sections: [
      {
        type: "p",
        text: "If you are looking for what to watch this weekend, the new OTT releases this weekend have arrived at a good time. From Friday, October 30, 2026, several new movies and shows are streaming across Netflix, Prime Video, SonyLIV, ZEE5 and JioHotstar. The mix covers Tamil and Telugu stories, crime thrillers, action drama, horror and family drama, so there is something here whether you want a tense weekend binge or a lighter watch.",
      },
      { type: "h2", text: "New OTT releases this weekend: the quick list" },
      {
        type: "list",
        items: [
          "Akka — Netflix, from October 30, 2026. A Tamil crime thriller set in the 1980s.",
          "Sigma — Netflix, from October 30, 2026. A Tamil action drama.",
          "The Strangers: Chapter 3 — Prime Video and Apple TV+, from October 30, 2026.",
          "Love Always — JioHotstar, from October 30, 2026. Adapted from a Korean webtoon.",
          "Rudravanam PS — ZEE5, from October 30, 2026. A Telugu investigation series.",
          "More South Indian titles — SonyLIV, ZEE5 and JioHotstar, from October 30, 2026.",
        ],
      },
      { type: "h2", text: "Akka on Netflix: the weekend's big crime thriller" },
      {
        type: "p",
        text: "Akka is the title most people will be searching for this weekend. It is a Tamil crime thriller set in the fictional town of Pernuru in the 1980s, and it centres on a gold-smuggling network run by women. Keerthy Suresh plays Bhavani, the feared boss of the syndicate, with Radhika Apte and Tanvi Azmi also starring. If you like period crime stories with a strong central character, start here.",
      },
      { type: "h2", text: "Sigma on Netflix: Tamil action drama to watch" },
      {
        type: "p",
        text: "Sigma is a Tamil action drama that also arrives on Netflix on October 30, 2026. It marks the directorial debut of Jason Sanjay, and Telugu and Hindi language tracks are available, which makes it an easy pick for viewers who do not watch Tamil originals. Action drama fans who want a new film, rather than a new series, should put this near the top of the list.",
      },
      { type: "h2", text: "The Strangers: Chapter 3 on Prime Video" },
      {
        type: "p",
        text: "For horror fans, The Strangers: Chapter 3 streams on Prime Video and Apple TV+ from October 30, 2026. It is the weekend's clear horror pick, and it pairs well with a late-night watch. If you are choosing between a thriller and a horror film this weekend, this is the horror option to start with.",
      },
      { type: "h2", text: "More new South Indian OTT releases today" },
      {
        type: "p",
        text: "Friday, October 30, 2026 is a crowded day for South Indian streaming. Six new South Indian titles are streaming from today across Netflix, SonyLIV, ZEE5 and JioHotstar, covering Tamil, Telugu and Malayalam stories in comedy, crime, romance, horror and investigation. Two more to note are Love Always on JioHotstar, adapted from a Korean webtoon called Here We Go Again, and Rudravanam PS on ZEE5, a Telugu series following Sub-Inspector Sivakumar, played by Naresh Agastya.",
      },
      { type: "h2", text: "What to watch first this weekend" },
      {
        type: "steps",
        items: [
          "Want a crime thriller? Start with Akka on Netflix.",
          "Want a new action film? Watch Sigma on Netflix.",
          "Want horror? Choose The Strangers: Chapter 3 on Prime Video.",
          "Want a series to follow into the week? Try Rudravanam PS on ZEE5 or Love Always on JioHotstar.",
          "Check the language options before you start, especially for Sigma, which offers Telugu and Hindi tracks as well.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: "What are the new OTT releases this weekend, October 30, 2026?",
            a: "The new OTT releases this weekend include Akka and Sigma on Netflix, The Strangers: Chapter 3 on Prime Video and Apple TV+, and new South Indian titles on SonyLIV, ZEE5 and JioHotstar, all from October 30, 2026.",
          },
          {
            q: "Where can I watch Akka?",
            a: "Akka streams on Netflix from October 30, 2026. It is a Tamil crime thriller set in the 1980s, starring Keerthy Suresh, Radhika Apte and Tanvi Azmi.",
          },
          {
            q: "Is Sigma available in Hindi or Telugu?",
            a: "Yes, according to the release listings, Sigma offers Telugu and Hindi language tracks in addition to its Tamil version on Netflix.",
          },
        ],
      },
    ],
  },
  {
    slug: "watch-terabox-video-online-without-app",
    image: "https://www.teraplayer.in/images/feature-player.webp",
    imageAlt: "TeraPlayer video player opening a TeraBox link in the browser",
    title: "How to Watch a TeraBox Video Online Without the App",
    description:
      "Learn how to watch a TeraBox video online without the app, using just your browser. No install and no TeraBox login needed for public links.",
    excerpt:
      "You received a TeraBox link but do not want to install another app just to watch one video. Here is how to watch it in your browser instead.",
    date: "2026-10-30",
    category: "How-to",
    sections: [
      {
        type: "p",
        text: "You received a TeraBox link, but you do not want to install another app just to watch one video. That is a common problem, especially on a phone that is already short on storage. The good news is that you can watch many public TeraBox videos directly in your browser, without installing the TeraBox app and without signing in to a TeraBox account. This guide explains how it works and what to do if the video does not load on the first try.",
      },
      { type: "h2", text: "Why watch in the browser?" },
      {
        type: "p",
        text: "A browser player is useful when you are on a friend's phone, using a shared computer, or trying to save storage space. It is also handy when you only want to preview a file before deciding whether it is worth keeping. A browser tool does not change who owns the file. It simply opens a public share link in a web player. Files shared through TeraBox still belong to their owners, and you should only open links that were shared with you or shared publicly.",
      },
      { type: "h2", text: "What you need" },
      {
        type: "p",
        text: "You need only three things: a public TeraBox share link, a modern browser such as Chrome, Safari, Edge, or Firefox, and a stable internet connection. You do not need a TeraBox account for a public link, and you do not need to install anything. If a link asks for a password, it is a protected share, and you will need the correct password from the person who shared it.",
      },
      { type: "h2", text: "How to watch a TeraBox video online without the app" },
      { type: "p", text: "Follow these steps on your phone or computer. The steps are the same in most browsers." },
      {
        type: "steps",
        items: [
          "Copy the TeraBox link. Open the message, email, or post that contains the link. Long-press the link on your phone, or right-click it on a computer, and choose Copy. Make sure you copy the full link, not just part of it. A cut-off link is one of the most common reasons a video fails to open.",
          "Open the browser player. Go to the TeraPlayer tool on the home page. You will see a box where you can paste a link. There is nothing to install and no account to create before you use it.",
          "Paste the link and press Watch. Paste the link into the box and press Watch. The tool will try to read the public share and load the video in the browser player. This can take a few seconds, depending on your connection and the size of the file.",
          "Play the video. Once the video appears, press Play. You can usually pause, seek forward or back, and switch to full screen, just as you would in a normal video player. If more than one quality option is available, choose the one that works best with your connection.",
          "Close the page when you are done. When you finish watching, simply close the tab. There is no app left behind on your device, and no account to sign out of.",
        ],
      },
      { type: "h2", text: "Watch on any device" },
      {
        type: "p",
        text: "The same steps work on Android, iPhone, tablets, and computers. On iPhone, if the video plays with no sound, check the silent switch and the volume in Control Center. If the video stutters, try a lower quality option or a stronger connection.",
      },
      { type: "h2", text: "If the video will not play" },
      {
        type: "p",
        text: "First re-copy the full link, refresh the page, and try again. Then try a different browser, because an ad blocker or strict privacy setting can block a player. If the link is private, expired, or removed by the owner, it will not open in any player, and you should ask the owner for a fresh link. Never enter your TeraBox password into a random site, because a public link should not need it.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Do I need the TeraBox app to watch a shared video?",
            a: "No, not for a public link. You can watch it in a browser player without installing the app.",
          },
          {
            q: "Do I need a TeraBox account?",
            a: "No. Public links need no login. Protected links will still ask for the share password set by the owner.",
          },
          {
            q: "Why does my video keep buffering?",
            a: "Buffering is usually caused by a slow connection or a very large file. Try a lower quality option, pause briefly to let it load, or switch to a stronger connection.",
          },
        ],
      },
    ],
  },
];

/** Newest first. The list page renders in this order; the daily job prepends. */
export function getAllPosts() {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}

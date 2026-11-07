import Seo from "../components/Seo";
import LegalDocument from "../components/legal/LegalDocument";

const SECTIONS = [
  {
    id: "overview",
    title: "How Watch Later handles information",
    kicker: "Overview",
    blocks: [
      {
        type: "p",
        text: "Watch Later is an Android app for tracking the movies, TV series and anime you want to watch. The app has no sign-in or account system. In the current release, it does not include advertising or analytics SDKs and does not send your watchlist, progress, ratings or notes to a Watch Later server.",
      },
      {
        type: "p",
        text: "An internet connection is required to load catalog metadata and artwork. The app reads that public information over the network; your library stays on your device.",
      },
      {
        type: "p",
        text: "This policy applies to the Watch Later Android app and its features.",
      },
    ],
  },
  {
    id: "information",
    title: "Information the app does and does not receive",
    kicker: "Information handled",
    blocks: [
      {
        type: "p",
        text: "Watch Later does not ask you for personal details such as your name, email address, phone number, or location. It does not access contacts or collect location data.",
      },
      {
        type: "p",
        text: "When the app requests the public catalog or an artwork image, your device necessarily sends standard network information such as its IP address, the requested path, request time, and technical connection details. The app uses those requests to deliver catalog content; it does not attach your watchlist or other personal profile information.",
      },
      {
        type: "p",
        text: "The app may process titles and metadata locally to render your library, populate the home screen, and schedule a reminder if you enable one.",
      },
    ],
  },
  {
    id: "catalog",
    title: "Catalog lookups and public data sources",
    kicker: "Online content",
    blocks: [
      {
        type: "table",
        head: ["Provider", "What is requested", "Why"],
        rows: [
          ["TMDb", "Search terms, title IDs, artwork paths", "Movie and TV metadata, posters and cast"],
          ["TheTVDB", "Search terms, series IDs, episode queries", "Season and episode lists"],
          ["AniList", "Anime search terms and IDs", "Anime metadata and airing schedules"],
          ["Catalog hosting service", "Title IDs and media type", "IMDb rating lookup, OTT release dates and Global Hits"],
          ["Image CDNs", "Artwork paths", "Poster and backdrop images"],
        ],
      },
      {
        type: "p",
        text: "These requests are for public catalog information. The providers may keep standard server logs under their own policies. We do not use those requests to build a profile of you, and we do not combine them with your library.",
      },
      {
        type: "p",
        text: "Some screens link to an external site, cinema listing, trailer or streaming platform. Opening one is your choice. Once you leave Watch Later, the third party's own privacy policy and terms apply.",
      },
    ],
  },
  {
    id: "local",
    title: "What stays on your phone",
    kicker: "On-device storage",
    blocks: [
      {
        type: "p",
        text: "The app stores information locally to provide its features, including:",
      },
      {
        type: "list",
        items: [
          "Your library: the movies, TV series and anime you add, and whether each title is on your watchlist, watched, in progress or completed.",
          "Episode and season progress, so you can resume where you stopped, plus rewatch counts.",
          "Favorites, custom lists, personal ratings and \"interested\" marks for upcoming releases.",
          "Reminder schedules for release days and upcoming episodes.",
          "Custom entries, notes and Creator Studio drafts or images you create in the app.",
          "App preferences, including onboarding completion, theme, layout choices, rating settings, notification preferences and the last library view you used.",
          "Cached poster and backdrop images and catalog details, so the app opens quickly and works offline.",
        ],
      },
      {
        type: "p",
        text: "This data is used only to run the app's features on your device. It is not uploaded to us, and we have no server-side copy of your library. Uninstalling Watch Later, or clearing its storage from Android settings, deletes it. If you want to keep your library across a reinstall, export a backup first from More → Export backup.",
      },
    ],
  },
  {
    id: "permissions",
    title: "Permissions and sharing",
    kicker: "Permissions and sharing",
    blocks: [
      {
        type: "list",
        items: [
          "<strong>Internet and network state:</strong> to load catalog metadata and artwork. The app also checks connectivity so it can tell you when you are offline.",
          "<strong>Notifications and alarms:</strong> only if you turn on release-day or episode reminders. Reminders are scheduled locally on the device. You can turn them off in the app or in Android settings.",
          "<strong>Photos and media:</strong> only when you save a Creator Studio image to your gallery. The app does not scan or upload your photos.",
          "<strong>Files and documents:</strong> only when you export or import a library backup, so you can choose the file and location through Android's system picker.",
          "<strong>Sharing:</strong> if you share a wallpaper or image, Android opens the system share sheet. The app passes the content to the destination you select; that destination's privacy practices then apply.",
        ],
      },
      {
        type: "p",
        text: "You can revoke any permission in Android settings. Revoking notifications stops reminders; the rest of the app keeps working. Revoking photo or file access only affects the save, export or import action that needs it.",
      },
    ],
  },
  {
    id: "providers",
    title: "Third-party services involved",
    kicker: "Service providers",
    blocks: [
      {
        type: "p",
        text: "The app calls public catalog and image services to make its features work. Google Play may process information under its own terms when you install or update the app.",
      },
      {
        type: "p",
        text: "The current app release does not integrate ad networks, analytics providers, or an account/authentication service.",
      },
      {
        type: "p",
        text: "Catalog files are requested over HTTPS. App preferences and cached files are kept in Android app storage. No online account or server stores your watchlist or ratings.",
      },
    ],
  },
  {
    id: "retention",
    title: "Managing or removing app data",
    kicker: "Retention and controls",
    blocks: [
      {
        type: "p",
        text: "Locally stored app settings and your library remain on the device until you clear the app's storage or uninstall Watch Later. Android may clear cached image files at any time; the app can download them again while online. Images you save to your gallery remain there until you delete them using your gallery app.",
      },
      {
        type: "p",
        text: "You can disable reminders from Watch Later settings or Android notification settings, revoke gallery permission in Android settings, and clear app data or uninstall the app using Android's app settings.",
      },
    ],
  },
  {
    id: "children",
    title: "Children's privacy",
    kicker: "Children",
    blocks: [
      {
        type: "p",
        text: "Watch Later does not ask users to submit personal information and does not knowingly collect personal information from children. For a privacy question or concern, use the developer contact details on the Watch Later Google Play listing.",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    kicker: "Updates",
    blocks: [
      {
        type: "p",
        text: "This policy may be updated if the app's data practices or features change. The latest version will be published at this address, with its revision date shown at the top of the page. Material changes to the app's handling of information will be reflected here before or when the changed feature is released.",
      },
    ],
  },
  {
    id: "contact",
    title: "Questions about Watch Later privacy?",
    kicker: "Contact",
    blocks: [
      {
        type: "p",
        text: "For questions about this policy or a privacy request, contact the developer using the contact details on the Watch Later Google Play listing. Please do not include sensitive personal information unless it is needed to explain your request.",
      },
    ],
  },
];

export default function AppPrivacyPolicy() {
  return (
    <>
      <Seo
        title="Watch Later Privacy Policy"
        description="Watch Later for Android keeps your watchlist, progress, ratings and backups on your device. No account, no ads, no analytics, no tracking and no selling of personal data."
        path="/watchlater-privacypolicy"
        robots="noindex, nofollow"
      />
      <LegalDocument
        activeDoc="privacy"
        eyebrow="Watch Later · Privacy"
        title="Privacy Policy"
        intro="Watch Later is a personal movie, TV and anime tracker. Your library stays on your phone, there is no account, and the app contains no ads or tracking. This policy explains exactly what is stored, what the app sends when it loads catalog data, and how you can delete it."
        updated="6 November 2026"
        version="1.0.6 and later"
        summary={[
          {
            kicker: "On your device",
            title: "Your library is local",
            body: "Watchlist, progress, favorites, lists, ratings, reminders and backups live in the app's private storage. No account needed.",
          },
          {
            kicker: "No accounts",
            title: "Nothing to sign up for",
            body: "There is no sign-up, sign-in, email address or cloud profile. The app uses a local guest profile only.",
          },
          {
            kicker: "Never",
            title: "No ads, no tracking, no selling",
            body: "No advertising SDKs, no analytics, no data brokers, no cross-app profiling and no sale of personal information.",
          },
        ]}
        sections={SECTIONS}
      />
    </>
  );
}

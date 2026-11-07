import Seo from "../components/Seo";
import LegalDocument from "../components/legal/LegalDocument";

const SECTIONS = [
  {
    id: "scope",
    title: "Who we are and what this policy covers",
    blocks: [
      {
        type: "p",
        text: "Watch Later is an Android application published by TeraPlayer (\"we\", \"us\", \"our\"). This Privacy Policy explains what the app does with information when you install and use it. It applies to the Watch Later app distributed on Google Play under the package name com.watchlater.app, including updates to that app.",
      },
      {
        type: "p",
        text: "It applies to the app only. It does not describe the TeraPlayer website, which publishes its own separate privacy policy, and it does not apply to third-party services you reach from the app, such as a studio website, IMDb or a streaming platform. Those services have their own policies.",
      },
      {
        type: "p",
        text: "The current version of Watch Later has no account system. There is no sign-up, no sign-in, no email address, no password and no cloud profile. You open the app and start using it. Everything you add is kept on your device.",
      },
    ],
  },
  {
    id: "data-safety",
    title: "Google Play Data safety summary",
    blocks: [
      {
        type: "p",
        text: "This is the short version that matches the Data safety information we provide to Google Play for Watch Later:",
      },
      {
        type: "table",
        head: ["Question", "Watch Later"],
        rows: [
          ["Does the app collect personal data?", "No. The developer does not collect personal data through the app."],
          ["Does the app share personal data?", "No. We do not share, sell or rent personal data."],
          ["Does the app show ads?", "No. There are no ads and no advertising SDKs."],
          ["Does the app track you?", "No. No analytics, no cross-app tracking, no fingerprinting and no advertising ID."],
          ["Do I need an account?", "No. There is no sign-up, sign-in or subscription."],
          ["Where is my library stored?", "On your device, in the app's private storage. It is not uploaded to us."],
          ["Can I move my library?", "Yes. You can export a JSON backup file and import it on another device."],
          ["How do I delete my data?", "Delete items in the app, clear the app's storage, or uninstall the app."],
          ["Is data encrypted in transit?", "Yes. Network requests use HTTPS/TLS."],
        ],
      },
      {
        type: "p",
        text: "The app does make network requests for public catalog information, such as a title you search for or a poster image. Those requests are described in section 5. They are not used by us to identify you and are not linked to an account, because there is no account.",
      },
    ],
  },
  {
    id: "device-data",
    title: "What is stored on your device",
    blocks: [
      {
        type: "p",
        text: "Watch Later is a personal tracker. The information you enter is written to a database inside the app's private storage area, which other apps on your phone cannot read:",
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
    id: "accounts",
    title: "No account, no sign-up and no cloud sync",
    blocks: [
      {
        type: "p",
        text: "Watch Later does not offer account creation, sign-in, social login, subscriptions or cloud sync. We do not ask for your name, email address, phone number, password or date of birth, and the app does not create a profile for you.",
      },
      {
        type: "p",
        text: "If you see account-related code or settings in a development build, those features are not part of the public app and are not reachable in the version distributed on Google Play. The public app uses a local guest profile that exists only on your device.",
      },
      {
        type: "p",
        text: "Because there is no account, there is nothing for you to sign out of and no online account to delete. Your library lives on your device and remains under your control.",
      },
    ],
  },
  {
    id: "catalog",
    title: "Catalog lookups and the information they send",
    blocks: [
      {
        type: "p",
        text: "To show accurate titles, artwork, episode lists, ratings and release dates, the app requests public catalog data when you browse or search. Those requests contain the title you searched for or the identifier of the item being opened, plus the technical details any internet request carries, such as your IP address, app version, device type and operating system. They do not contain your library, watch history, ratings, notes or backup file.",
      },
      {
        type: "table",
        head: ["Provider", "What is requested", "Why"],
        rows: [
          ["TMDb", "Search terms, title IDs, artwork paths", "Movie and TV metadata, posters and cast"],
          ["TheTVDB", "Search terms, series IDs, episode queries", "Season and episode lists"],
          ["AniList", "Anime search terms and IDs", "Anime metadata and airing schedules"],
          ["Supabase (our catalog service)", "Title IDs and media type", "IMDb rating lookup, OTT release dates and Global Hits"],
          ["Image CDNs", "Artwork paths", "Poster and backdrop images"],
        ],
      },
      {
        type: "p",
        text: "These requests are for public catalog information. TMDb, TheTVDB, AniList and our catalog hosting provider may keep standard server logs under their own policies. We do not use those requests to build a profile of you, and we do not combine them with your library.",
      },
      {
        type: "p",
        text: "Some screens link to an external site, cinema listing, trailer or streaming platform. Opening one is your choice. Once you leave Watch Later, the third party's own privacy policy and terms apply, and we do not control what that service collects.",
      },
    ],
  },
  {
    id: "not-collected",
    title: "What we do not collect or use",
    blocks: [
      {
        type: "p",
        text: "Watch Later is built to need as little as possible. In particular, the app does not:",
      },
      {
        type: "list",
        items: [
          "Show advertising or include any advertising SDK. There are no ad identifiers, ad profiles or sponsored content.",
          "Include third-party analytics, crash-reporting, attribution or session-replay SDKs. We do not use Google Analytics, Firebase Analytics, PostHog, Sentry, Crashlytics or similar tools in the app.",
          "Track you across apps or websites, fingerprint your device or build a behavioural profile.",
          "Sell, rent or trade personal information, and we have no data-broker relationship of any kind.",
          "Ask for an email address, password, phone number, contacts, precise location, camera, microphone, SMS, call logs, calendar or health data.",
          "Read your photo library in the background. Gallery access is requested only when you ask the app to save an image you created.",
          "Register a push-notification token or operate a push server. Reminders are scheduled locally on your device.",
          "Upload your library, watch history, ratings, notes, custom entries or backup file to us.",
        ],
      },
    ],
  },
  {
    id: "permissions",
    title: "Permissions the app asks for",
    blocks: [
      {
        type: "table",
        head: ["Permission", "When it is used"],
        rows: [
          ["Internet and network state", "To load catalog metadata and artwork. The app also checks connectivity so it can tell you when you are offline."],
          ["Notifications and alarms", "Only if you turn on release-day or episode reminders. Reminders are scheduled locally. You can turn them off in the app or in Android settings."],
          ["Photos and media", "Only when you save a Creator Studio image to your gallery. The app does not scan or upload your photos."],
          ["Files and documents", "Only when you export or import a library backup, so you can choose the file and location through Android's system picker."],
        ],
      },
      {
        type: "p",
        text: "You can revoke any permission in Android settings. Revoking notifications stops reminders; the rest of the app keeps working. Revoking photo or file access only affects the save, export or import action that needs it.",
      },
    ],
  },
  {
    id: "sharing",
    title: "When information is shared",
    blocks: [
      {
        type: "p",
        text: "We do not sell, rent or share personal information for advertising or any other purpose. We do not have a server-side library to share.",
      },
      {
        type: "p",
        text: "The app uses a small number of service providers and public data sources to make catalog features work:",
      },
      {
        type: "table",
        head: ["Service", "Role", "Data involved"],
        rows: [
          ["Supabase", "Hosting our public catalog tables", "Title IDs and media type in the request; no account or library data"],
          ["TMDb", "Movie and TV metadata", "Search terms and title IDs in the request"],
          ["TheTVDB", "Series and episode metadata", "Search terms and series IDs in the request"],
          ["AniList", "Anime metadata", "Anime search terms and IDs in the request"],
          ["Google Play", "App distribution", "Handled by Google under Google Play's own terms and privacy policy"],
        ],
      },
      {
        type: "p",
        text: "We may disclose information if the law requires it, if we must protect the rights and safety of users or the public, or as part of a merger or acquisition where the receiving party remains bound by this policy. In practice, we hold no personal data from the app to disclose.",
      },
      {
        type: "p",
        text: "If you email us for support, we receive your email address and whatever you choose to include in the message. We use it only to answer you and handle follow-ups. See section 9 for retention.",
      },
      {
        type: "p",
        text: "Some features let you share content you created, such as a Creator Studio image or a backup file, through Android's share sheet. What you share and who receives it is entirely your choice.",
      },
    ],
  },
  {
    id: "retention",
    title: "How long information is kept",
    blocks: [
      {
        type: "list",
        items: [
          "On-device library, settings and cached images: kept until you delete the data in the app, clear app storage or uninstall the app.",
          "Reminder schedules: overwritten as you change them and removed when you delete the title, turn reminders off or uninstall.",
          "Backup files: kept wherever you saved them, for as long as you keep them. We never receive them.",
          "Support emails: kept for up to 24 months after the conversation ends so we can handle follow-ups and legal obligations, then deleted.",
          "Server-side library or account data: none exists, because the app has no accounts and does not upload your library.",
        ],
      },
    ],
  },
  {
    id: "deletion",
    title: "Deleting your data",
    blocks: [
      {
        type: "p",
        text: "You are in control of deletion at every level:",
      },
      {
        type: "list",
        items: [
          "Delete individual items (a title, a list, a rating, a custom entry) directly in the app at any time.",
          "Remove all on-device data by clearing Watch Later's storage in Android settings or by uninstalling the app.",
          "Delete a backup file from wherever you saved it (Files, Drive, email or another app). Deleting the app does not delete a backup you copied elsewhere.",
          "Ask us to delete a support email by writing to teraplayer.contact@gmail.com from the address you used. We action verified requests within 30 days and confirm when it is done.",
        ],
      },
      {
        type: "p",
        text: "There is no account-deletion step because there is no account. Everything the app knows about your library is on your device. That is also why we cannot restore a library for you after a device is wiped or the app is uninstalled; keep a backup if the library matters to you.",
      },
    ],
  },
  {
    id: "rights",
    title: "Your rights and choices",
    blocks: [
      {
        type: "p",
        text: "Depending on where you live, you may have the right to access, correct, delete, restrict or object to processing of your personal information, to receive a portable copy, and to withdraw consent. Because Watch Later keeps your library on your device and does not create an account, you can exercise most of these rights directly: your library is editable in place, Export backup gives you a portable copy, and clearing app storage or uninstalling deletes the local data.",
      },
      {
        type: "p",
        text: "For a support email or any other request, contact teraplayer.contact@gmail.com. We will verify your request and respond within 30 days, or within the shorter period your local law requires. You will not be charged or receive a lesser service for exercising these rights.",
      },
      {
        type: "p",
        text: "Users in India may exercise rights under the Digital Personal Data Protection Act, 2023, including access, correction, erasure and grievance redressal, by contacting us at the same address. California residents have the right to know, delete, correct and opt out of sale or sharing; we do not sell or share personal information as those terms are defined by the CCPA/CPRA, and we do not discriminate for exercising these rights.",
      },
      {
        type: "p",
        text: "If you are in the EEA or UK and believe we have not handled your data lawfully, you may complain to your local supervisory authority. We would appreciate the chance to resolve it with you first.",
      },
    ],
  },
  {
    id: "security",
    title: "How we protect information",
    blocks: [
      {
        type: "p",
        text: "Network requests use HTTPS/TLS. On the device, the library lives in app-private storage that other apps cannot read, and notification reminders are scheduled through Android's local notification system. The app does not store a password because it never asks for one.",
      },
      {
        type: "p",
        text: "We do not add a separate encryption layer to the local database, and an exported backup is a plain JSON file. Anyone who can read that file can read your library, so keep backups somewhere you trust and delete copies you no longer need. Device encryption and a screen lock protect local data if the phone is lost.",
      },
      {
        type: "p",
        text: "No system is perfectly secure. Keep your device lock enabled, install Android updates, and contact us immediately if you suspect someone has accessed a backup you shared.",
      },
    ],
  },
  {
    id: "transfers",
    title: "International transfers",
    blocks: [
      {
        type: "p",
        text: "We do not transfer your library or account data internationally because we do not receive it. Catalog requests may be handled by TMDb, TheTVDB, AniList, image CDNs and our catalog hosting provider in countries other than yours, including the United States and the European Union, under their own safeguards and policies. Support emails are processed by the email provider we use.",
      },
    ],
  },
  {
    id: "children",
    title: "Children's privacy",
    blocks: [
      {
        type: "p",
        text: "Watch Later is not directed to children under 13, and we do not knowingly collect personal information from children. The app has no account and no advertising, and a child's library stays on the device like anyone else's. If you believe a child has sent us personal information by email, contact us and we will delete it.",
      },
      {
        type: "p",
        text: "If you are between 13 and the age of majority where you live, use the app only with the involvement of a parent or guardian.",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    blocks: [
      {
        type: "p",
        text: "We update this policy when the app changes — for example, if a new data source or feature is added. The effective date at the top always shows the current version, and material changes will be announced in the app or on the store listing before they take effect. If a future version adds accounts or cloud sync, this policy will be updated before that version is released, and the change will be described clearly.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    blocks: [
      {
        type: "p",
        text: "Questions, requests and complaints about privacy can be sent to teraplayer.contact@gmail.com. This is also the developer contact address published on our Google Play listing. Include the app name and, where relevant, the email address you used to contact us, and we will reply within 30 days.",
      },
      {
        type: "p",
        text: "Developer: TeraPlayer. App: Watch Later (com.watchlater.app). This policy is provided for the Watch Later Android application and does not describe the TeraPlayer website, which has its own separate policies.",
      },
    ],
  },
];

export default function AppPrivacyPolicy() {
  return (
    <>
      <Seo
        title="Watch Later Privacy Policy | TeraPlayer"
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

import Seo from "../components/Seo";
import LegalDocument from "../components/legal/LegalDocument";

const SECTIONS = [
  {
    id: "scope",
    title: "Who we are and what this policy covers",
    blocks: [
      {
        type: "p",
        text: "Watch Later is an Android application published by TeraPlayer (\"we\", \"us\", \"our\"). This Privacy Policy explains what the app does with information when you install and use it. It applies to the Watch Later app distributed on Google Play under the package name com.watchlater.app, including all current and future versions of that app.",
      },
      {
        type: "p",
        text: "It does not apply to the TeraPlayer website or to any other TeraPlayer product; the website publishes its own separate privacy policy. It also does not apply to third-party services you reach from the app, such as a studio website, IMDb or a streaming platform, which have their own policies.",
      },
      {
        type: "p",
        text: "You can use Watch Later without creating an account. If you never sign in, everything you save stays in the app's private storage on your phone and is never uploaded to us.",
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
          "Your library: the movies, series and anime you add, whether each is on your watchlist, watched, or in progress.",
          "Episode and season progress, so you can resume exactly where you stopped.",
          "Favorites, custom lists, personal ratings and \"interested\" marks for upcoming releases.",
          "Reminder schedules for release days and upcoming episodes.",
          "App preferences, including onboarding completion, layout choices and the last library view you used.",
          "Cached poster and backdrop images, so the app opens quickly and works offline.",
          "Backup files, but only the ones you deliberately export — these are written to a location you choose and remain under your control.",
        ],
      },
      {
        type: "p",
        text: "This data is used only to run the app's features on your device. Uninstalling Watch Later, or clearing its storage from Android settings, deletes it. If you want to keep your library across a reinstall, export a backup first from More → Export backup.",
      },
    ],
  },
  {
    id: "accounts",
    title: "If you create an account (optional)",
    blocks: [
      {
        type: "p",
        text: "Creating an account is optional and exists only so a library can follow you to another device. Where account features are available, you can sign up with an email address and password or with Google Sign-In. Authentication is handled by Clerk, and account records plus synced library data are stored in Supabase on our behalf.",
      },
      {
        type: "p",
        text: "When you are signed in, the following is uploaded so it can be restored on your other devices:",
      },
      {
        type: "list",
        items: [
          "Your account identifier, email address and display profile from Clerk or Google.",
          "Your library entries and watch state: watchlist items, watched movies and episodes, series tracking, favorites, custom lists, ratings and \"interested\" marks.",
          "Timestamps recording when each item changed, which the app uses to resolve conflicts between devices.",
        ],
      },
      {
        type: "p",
        text: "We never receive or store your password. Passwords are handled by Clerk using industry-standard hashing, and Google Sign-In never shares your Google password with us. Session tokens are kept in the device's protected storage and are removed when you sign out.",
      },
      {
        type: "p",
        text: "If you use the app as a guest, none of the account data above exists and nothing you save is transmitted to us.",
      },
    ],
  },
  {
    id: "catalog",
    title: "Catalog lookups and the information they send",
    blocks: [
      {
        type: "p",
        text: "To show accurate titles, artwork, episode lists, ratings and release dates, the app requests public catalog data. Those requests contain the title you searched for or the identifier of the item being opened, plus the technical details any internet request carries, such as your IP address and device type:",
      },
      {
        type: "table",
        head: ["Provider", "What is requested", "Why"],
        rows: [
          ["TMDb", "Search terms, title IDs, artwork paths", "Movie and TV metadata, posters, cast"],
          ["TheTVDB", "Search terms, series IDs, episode queries", "Season and episode lists"],
          ["AniList", "Anime search terms and IDs", "Anime metadata and airing schedules"],
          ["Supabase (ours)", "Title IDs and media type", "IMDb rating lookup, OTT release dates, Global Hits"],
        ],
      },
      {
        type: "p",
        text: "These requests are for public catalog information. Your library, ratings, notes and viewing progress are not sent to TMDb, TheTVDB or AniList. If you are signed in, catalog data you open may be cached locally to keep the app fast and usable offline.",
      },
    ],
  },
  {
    id: "not-collected",
    title: "What we do not collect",
    blocks: [
      {
        type: "p",
        text: "We built Watch Later to need as little as possible. In particular, the app does not:",
      },
      {
        type: "list",
        items: [
          "Show advertising or include any advertising SDK. There are no ad identifiers and no ad profiles.",
          "Sell, rent or trade personal information, and there is no data broker relationship of any kind.",
          "Use cross-app or cross-site tracking, fingerprinting or behavioural profiling.",
          "Include third-party analytics or crash-reporting SDKs that profile what you watch.",
          "Request access to your contacts, precise location, camera, microphone, SMS, call logs or health data.",
          "Read your photo library in the background; gallery access is used only when you ask the app to save an image you created.",
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
          ["Notifications", "Only if you turn on release-day and episode reminders. Reminders are scheduled locally on your device; we do not run a push server."],
          ["Photos / media", "Only when you save a Creator Studio post or image to your gallery."],
          ["Files and documents", "Only when you export or import a library backup, so you can choose the file and location."],
          ["Internet / network state", "To load catalog metadata and, if signed in, to sync your library. The app also checks connectivity to avoid failing silently offline."],
        ],
      },
      {
        type: "p",
        text: "You can revoke any permission in Android settings. Revoking notifications stops reminders; the rest of the app keeps working.",
      },
    ],
  },
  {
    id: "sharing",
    title: "When information is shared",
    blocks: [
      {
        type: "p",
        text: "We do not sell or share personal information for advertising. Information is disclosed only to the service providers that make the app work, and only as much as each one needs:",
      },
      {
        type: "table",
        head: ["Service", "Role", "Data involved"],
        rows: [
          ["Clerk", "Authentication", "Email address, sign-in method, session tokens"],
          ["Google", "Sign-In (optional)", "Google account identity and email, if you choose it"],
          ["Supabase", "Database and sync hosting", "Account ID, email, synced library entries and timestamps"],
          ["TMDb, TheTVDB, AniList", "Catalog metadata", "Search terms and title IDs in the request"],
        ],
      },
      {
        type: "p",
        text: "We may also disclose information if the law requires it, if we must protect the rights and safety of users or the public, or as part of a merger or acquisition where the receiving party remains bound by this policy. We will tell you if that happens, unless we are legally barred from doing so.",
      },
      {
        type: "p",
        text: "Some features let you share content you created — a Creator Studio image or a backup file — through Android's share sheet. What you share and who receives it is entirely your choice.",
      },
    ],
  },
  {
    id: "legal-bases",
    title: "Legal bases for processing",
    blocks: [
      {
        type: "p",
        text: "If you are in the European Economic Area, the United Kingdom or Switzerland, we rely on the following legal bases: performance of a contract when we provide the app and sync your library to your account; legitimate interests in keeping the service secure, preventing abuse and improving reliability; and consent where the law requires it, such as optional notifications, which you can withdraw at any time in Android settings.",
      },
      {
        type: "p",
        text: "Providing an email address and using an account is voluntary. Guest use relies only on the app running locally, which is why no personal data leaves your device in that mode.",
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
          "On-device library and preferences: kept until you delete the data in the app, clear app storage or uninstall the app.",
          "Account and synced library: kept while your account exists. Deleting your account removes the account and its synced rows.",
          "Reminder schedules: overwritten as you change them and removed when you delete the title, sign out of reminders, or uninstall.",
          "Cached catalog data: refreshed as you browse and cleared with app storage.",
          "Backup files: kept wherever you saved them, for as long as you keep them. We never receive them.",
          "Support emails: kept for up to 24 months after the conversation ends so we can handle follow-ups and legal obligations.",
        ],
      },
    ],
  },
  {
    id: "deletion",
    title: "Deleting your data and your account",
    blocks: [
      {
        type: "p",
        text: "You are in control of deletion at every level:",
      },
      {
        type: "list",
        items: [
          "Delete individual items (a title, a list, a rating) directly in the app at any time.",
          "Delete your account inside the app: More → Delete account. You confirm by typing your account email. The account and every row it owns are removed from our database, the local library is wiped, scheduled reminders are cancelled and you are signed out.",
          "Delete everything on the device without an account by uninstalling the app or clearing its storage in Android settings.",
          "Request deletion by email to teraplayer.contact@gmail.com from the address linked to the account. We action verified requests within 30 days and confirm when it is done.",
        ],
      },
      {
        type: "p",
        text: "Account deletion is permanent. Anything you want to keep should be exported first with More → Export backup. Residual copies may remain in encrypted backups for a limited period before they are overwritten, and we may retain minimal records where the law requires it.",
      },
    ],
  },
  {
    id: "rights",
    title: "Your rights and choices",
    blocks: [
      {
        type: "p",
        text: "Depending on where you live, you may have the right to access, correct, delete, restrict or object to processing of your personal information, to receive a portable copy, and to withdraw consent. You can exercise most of these directly in the app: your library is editable in place, backups give you a portable export, and account deletion is built in.",
      },
      {
        type: "p",
        text: "For anything else, email teraplayer.contact@gmail.com. We will verify your request and respond within 30 days, or within the shorter period your local law requires. You will not be charged or receive a lesser service for exercising these rights.",
      },
      {
        type: "p",
        text: "Users in India may exercise their rights under the Digital Personal Data Protection Act, 2023, including access, correction, erasure and grievance redressal, by contacting us at the same address. California residents have the right to know, delete, correct and opt out of sale or sharing; we do not sell or share personal information as those terms are defined by the CCPA/CPRA, and we do not discriminate for exercising these rights.",
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
        text: "Data in transit is protected with HTTPS/TLS. Account and sync data in Supabase is protected by row-level security so each account can only reach its own rows, and passwords never reach our servers. On the device, the library lives in app-private storage that other apps cannot read, and session tokens are kept in protected storage.",
      },
      {
        type: "p",
        text: "No system is perfectly secure. Keep your device lock enabled, use a strong password or Google account protection, and contact us immediately if you suspect unauthorised access to your account.",
      },
    ],
  },
  {
    id: "transfers",
    title: "International transfers",
    blocks: [
      {
        type: "p",
        text: "Our service providers may process data in countries other than yours, including the United States and the European Union. Where required, transfers rely on appropriate safeguards such as standard contractual clauses. Because guest use keeps everything on your device, no transfer takes place at all in that mode.",
      },
    ],
  },
  {
    id: "children",
    title: "Children's privacy",
    blocks: [
      {
        type: "p",
        text: "Watch Later is not directed to children under 13, and we do not knowingly collect personal information from them. If you are between 13 and the age of majority where you live, use the app only with the involvement of a parent or guardian. If you believe a child has provided us with personal information, email us and we will delete it.",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    blocks: [
      {
        type: "p",
        text: "We update this policy when the app changes — for example, when a new data source or feature is added. The effective date at the top always shows the current version, and material changes will be announced in the app or on the store listing before they take effect. Continuing to use Watch Later after an update means you accept the revised policy.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    blocks: [
      {
        type: "p",
        text: "Questions, requests and complaints about privacy can be sent to teraplayer.contact@gmail.com. Include the email address linked to your account where relevant, and we will reply within 30 days. This is also the contact address published on our Google Play listing.",
      },
    ],
  },
];

export default function AppPrivacyPolicy() {
  return (
    <>
      <Seo
        title="Watch Later App Privacy Policy | TeraPlayer"
        description="How the Watch Later Android app handles your data: a private on-device library, an optional account for sync, no ads, no tracking and no selling of personal information."
        path="/privacy-policy"
        robots="noindex, follow"
      />
      <LegalDocument
        eyebrow="Privacy Policy"
        title="Watch Later Privacy Policy"
        intro="Watch Later is a personal movie and TV tracker. By default everything you save stays on your phone. This policy explains, in plain language, what the app stores, what it sends, and how you can delete it."
        updated="5 November 2026"
        version="1.0.5 and later"
        summary={[
          {
            kicker: "On your device",
            title: "Your library is local by default",
            body: "Watchlist, progress, favorites, lists, ratings and reminders live in the app's private database. No account needed.",
          },
          {
            kicker: "Optional",
            title: "Accounts only for sync",
            body: "Signing in is optional and exists so your library can follow you to another phone. Guest use uploads nothing.",
          },
          {
            kicker: "Never",
            title: "No ads, no selling, no tracking",
            body: "No advertising SDKs, no data brokers, no cross-app profiling. We do not sell personal information.",
          },
        ]}
        sections={SECTIONS}
        otherPage={{ to: "/terms-and-conditions", label: "Terms & Conditions for Watch Later" }}
      />
    </>
  );
}

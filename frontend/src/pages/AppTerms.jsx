import Seo from "../components/Seo";
import LegalDocument from "../components/legal/LegalDocument";

const SECTIONS = [
  {
    id: "agreement",
    title: "Accepting these terms",
    blocks: [
      {
        type: "p",
        text: "These Terms & Conditions (\"Terms\") are a legal agreement between you and TeraPlayer (\"we\", \"us\", \"our\") for the Watch Later Android application, package com.watchlater.app, including its updates and any beta features made available to you (the \"App\").",
      },
      {
        type: "p",
        text: "By installing, opening or using the App you agree to these Terms and to our Privacy Policy. If you do not agree, do not install or use the App, and uninstall it if you already have. If you use the App on a device you do not own, you confirm you have the owner's permission.",
      },
      {
        type: "p",
        text: "These Terms cover the App only, not the TeraPlayer website, which is governed by its own separate terms. They also do not govern Google Play or any third-party service you reach from the App.",
      },
    ],
  },
  {
    id: "service",
    title: "What Watch Later is — and what it is not",
    blocks: [
      {
        type: "p",
        text: "Watch Later is a personal tracking tool. It lets you record the movies, TV series and anime you want to watch, mark what you have watched, track episode progress season by season, build lists and favorites, rate titles, create shareable images in Creator Studio, and set local reminders for release days.",
      },
      {
        type: "p",
        text: "The App is not a streaming service, a downloader or a media host. It does not provide, store, transmit or link to video streams, and it does not grant any right to watch copyrighted content. Anywhere the App shows a streaming platform, cinema listing, trailer or external source, you are simply being pointed at a third party whose own terms and availability apply.",
      },
      {
        type: "p",
        text: "Catalog information such as titles, artwork, episode lists, ratings and release dates comes from third-party sources. It may be incomplete, delayed or wrong. Always verify a release date or availability with the platform or cinema before relying on it.",
      },
    ],
  },
  {
    id: "eligibility",
    title: "Who may use the App",
    blocks: [
      {
        type: "p",
        text: "You must be at least 13 years old to use the App, and old enough to form a binding contract in your country. If you are a minor, you may use the App only with the involvement and consent of a parent or guardian who agrees to these Terms on your behalf. The App is not directed to children under 13.",
      },
    ],
  },
  {
    id: "no-account",
    title: "No account, sign-in or cloud service",
    blocks: [
      {
        type: "p",
        text: "The current version of Watch Later has no account system. There is no registration, sign-in, social login, subscription or cloud sync. We do not ask for your name, email address, phone number or password, and the App does not create an online profile for you.",
      },
      {
        type: "p",
        text: "Your library is stored locally on your device. If you see account-related code or screens in a development build, those features are not part of the public App and are not reachable in the version distributed on Google Play. The public App uses a local guest profile that exists only on your device.",
      },
      {
        type: "p",
        text: "Because there is no account, there is no account to terminate, suspend or delete. If a future version adds an account or cloud sync, these Terms and the Privacy Policy will be updated before that version is released.",
      },
    ],
  },
  {
    id: "licence",
    title: "Licence to use the App",
    blocks: [
      {
        type: "p",
        text: "Subject to these Terms, we grant you a personal, limited, non-exclusive, non-transferable, revocable licence to install and use the App on devices you own or control, for your own private, non-commercial use. This licence does not include the right to distribute, sublicense, resell or make the App available to others.",
      },
      {
        type: "p",
        text: "The App, its design, code, artwork and branding are owned by us or our licensors and are protected by intellectual-property laws. You receive only the licence described above; no ownership is transferred.",
      },
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    blocks: [
      {
        type: "p",
        text: "You agree not to:",
      },
      {
        type: "list",
        items: [
          "Reverse engineer, decompile or attempt to extract the source code of the App, except where the law expressly permits it.",
          "Bypass, disable or interfere with security features, rate limits or authentication mechanisms, or attempt to access another person's device or data.",
          "Scrape, crawl or bulk-extract data from our catalog service, or use the App to build a competing dataset or service.",
          "Use automated scripts, bots or emulators to stress or abuse the service.",
          "Upload or create content that is unlawful, infringing, hateful, harassing or malicious in custom entries, notes, Creator Studio images or shared images.",
          "Use the App in violation of any applicable law, including copyright and data-protection law, or in a way that harms other users, our providers or us.",
        ],
      },
      {
        type: "p",
        text: "We may suspend or terminate access to any service we operate if you breach these rules, and we may remove content that violates them. Because the App's library is local, uninstalling it remains your choice and your data is not held by us.",
      },
    ],
  },
  {
    id: "your-content",
    title: "Your library and your content",
    blocks: [
      {
        type: "p",
        text: "The library data you enter — titles, progress, ratings, lists, notes and custom entries — belongs to you. We claim no ownership of it and we never receive it. The App does not upload your library to us.",
      },
      {
        type: "p",
        text: "You are responsible for your own backups. The App is designed to work offline and stores your library on your device, but devices get lost, reset and replaced. Export a backup from More → Export backup if the library matters to you. We are not liable for library data lost because a device was wiped, an app was uninstalled, storage was cleared, or a backup was not made.",
      },
      {
        type: "p",
        text: "A backup is a plain JSON file that contains your library. Anyone who can read that file can read your library, so store backups somewhere you trust and delete copies you no longer need. Importing a backup replaces the library on that device; the original file is not modified.",
      },
      {
        type: "p",
        text: "Custom entries and images you create remain your responsibility. Do not add content you do not have the right to use, and do not share images that infringe someone else's rights.",
      },
    ],
  },
  {
    id: "third-party",
    title: "Third-party data, services and trademarks",
    blocks: [
      {
        type: "p",
        text: "The App displays metadata and ratings supplied by third parties and links to third-party sites and stores. Those services are not under our control. Their availability, accuracy and terms can change without notice, and using them may be subject to their own agreements.",
      },
      {
        type: "list",
        items: [
          "This product uses the TMDB API but is not endorsed or certified by TMDB.",
          "TV series, episode and artwork data is provided in part by TheTVDB; anime data is provided in part by AniList.",
          "IMDb ratings shown in the App are informational data attributed to IMDb. The App is not endorsed by, affiliated with, or sponsored by IMDb.",
          "Streaming availability and OTT release dates are compiled from public sources and platform announcements and may lag behind the platform itself.",
          "Google Play is a service of Google and is governed by Google Play's own terms and policies.",
        ],
      },
      {
        type: "p",
        text: "All third-party names, logos and trademarks are the property of their respective owners and are used only to identify the content or service being referenced.",
      },
    ],
  },
  {
    id: "availability",
    title: "Availability, changes and beta features",
    blocks: [
      {
        type: "p",
        text: "The App is provided free of charge. We work to keep it running, but we do not promise uninterrupted or error-free operation. Features that depend on the internet — catalog search, ratings, release dates and artwork — can be unavailable or delayed because of maintenance, provider outages or your connection. The local library remains usable offline.",
      },
      {
        type: "p",
        text: "We may add, change, deprecate or remove features at any time. Some features are labelled beta or experimental; they may change substantially, lose data or be withdrawn, and should not be relied on for anything critical. We may also stop supporting older versions of the App, after which updates and fixes will not be provided for them.",
      },
      {
        type: "p",
        text: "If we discontinue the App entirely, we will give reasonable notice in the App or on the store listing so you can export a backup of your library.",
      },
    ],
  },
  {
    id: "fees",
    title: "Fees, advertising and paid features",
    blocks: [
      {
        type: "p",
        text: "The App is currently free, contains no advertising and has no in-app purchases or subscriptions. There are no ads in the App and no advertising SDKs.",
      },
      {
        type: "p",
        text: "If we introduce paid features or subscriptions in the future, the price, billing terms and cancellation rules will be shown to you before you buy, and purchases made through Google Play will be governed by Google Play's payment terms. Nothing in these Terms obliges you to buy anything, and existing free features will not be made paid retroactively without clear notice.",
      },
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimers",
    blocks: [
      {
        type: "p",
        text: "To the fullest extent permitted by law, the App is provided \"as is\" and \"as available\", without warranties of any kind, whether express, implied or statutory, including implied warranties of merchantability, fitness for a particular purpose, accuracy and non-infringement.",
      },
      {
        type: "p",
        text: "We do not warrant that catalog information, ratings, episode counts, artwork or release dates are accurate or complete, that the App will meet your requirements, or that defects will be corrected. Nothing in these Terms excludes warranties or rights that cannot be excluded under the consumer law that applies to you.",
      },
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    blocks: [
      {
        type: "p",
        text: "To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential or punitive damages, or for loss of data, loss of profits, loss of goodwill, device failure, or missed releases and reminders, arising out of or related to your use of or inability to use the App.",
      },
      {
        type: "p",
        text: "To the same extent, our total aggregate liability for all claims relating to the App is limited to the greater of the amount you paid us for the App in the twelve months before the claim, or INR 1,000. Where the law does not allow a limitation, this section applies only to the extent permitted.",
      },
      {
        type: "p",
        text: "You are responsible for keeping your own backups; a lost library caused by uninstalling, clearing storage, resetting or losing a device is not a loss we can restore.",
      },
    ],
  },
  {
    id: "indemnity",
    title: "Indemnity",
    blocks: [
      {
        type: "p",
        text: "You agree to indemnify and hold harmless TeraPlayer and its team from claims, damages, liabilities and reasonable costs arising from your breach of these Terms, your misuse of the App, or content you add or share through it, except to the extent caused by our own negligence or wilful misconduct.",
      },
    ],
  },
  {
    id: "termination",
    title: "Stopping use",
    blocks: [
      {
        type: "p",
        text: "You may stop using the App at any time by uninstalling it. Because there is no account, there is no account to close and no server-side profile to delete. Uninstalling or clearing app storage removes the local library; export a backup first if you want to keep it.",
      },
      {
        type: "p",
        text: "We may suspend or end access to any service we operate if you materially breach these Terms, if we are required to by law, or if continuing would expose other users or us to harm. Where reasonable, we will tell you why. On termination, the licence granted to you ends. Sections about your content, third-party services, disclaimers, limitation of liability, indemnity and governing law survive termination.",
      },
    ],
  },
  {
    id: "law",
    title: "Governing law and disputes",
    blocks: [
      {
        type: "p",
        text: "These Terms are governed by the laws of India, without regard to conflict-of-law rules. Subject to any mandatory consumer protection in your country of residence, the courts at our principal place of business in India have exclusive jurisdiction over disputes.",
      },
      {
        type: "p",
        text: "Before starting formal proceedings, please contact us at teraplayer.contact@gmail.com and give us 30 days to resolve the issue informally. Most concerns can be fixed quickly that way.",
      },
    ],
  },
  {
    id: "google-play",
    title: "Google Play",
    blocks: [
      {
        type: "p",
        text: "Watch Later is distributed through Google Play. Your use of Google Play is governed by Google Play's own terms and policies. Google is not a party to these Terms and does not sponsor or endorse the App. If you downloaded the App from Google Play, Google Play's refund rules apply to any purchase made through Google Play, but the App is currently free.",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to these Terms",
    blocks: [
      {
        type: "p",
        text: "We may update these Terms as the App evolves. The effective date at the top shows the current version. For material changes we will give notice in the App or on the store listing before they take effect. If you continue using the App after the changes take effect, you accept the updated Terms; if you do not accept them, stop using the App and uninstall it.",
      },
    ],
  },
  {
    id: "general",
    title: "General",
    blocks: [
      {
        type: "p",
        text: "If any provision of these Terms is found unenforceable, the rest remains in force. Our failure to enforce a provision is not a waiver of it. You may not assign your rights under these Terms; we may assign ours as part of a merger, acquisition or sale of assets, subject to these Terms continuing to apply. These Terms, together with the Privacy Policy, are the entire agreement between us about the App.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    blocks: [
      {
        type: "p",
        text: "Questions about these Terms can be sent to teraplayer.contact@gmail.com. This is also the developer contact address published on our Google Play listing, and we aim to reply within 30 days.",
      },
      {
        type: "p",
        text: "Developer: TeraPlayer. App: Watch Later (com.watchlater.app). These Terms apply to the Watch Later Android application and not to the TeraPlayer website, which has its own separate terms.",
      },
    ],
  },
];

export default function AppTerms() {
  return (
    <>
      <Seo
        title="Watch Later Terms & Conditions | TeraPlayer"
        description="The terms that govern use of the Watch Later Android app: licence, acceptable use, your local library and backups, third-party metadata, disclaimers and liability."
        path="/watchlater-terms-and-conditions"
        robots="noindex, nofollow"
      />
      <LegalDocument
        activeDoc="terms"
        eyebrow="Watch Later · Terms"
        title="Terms & Conditions"
        intro="These terms govern your use of the Watch Later Android app — a personal tracker for movies, TV series and anime. They explain the licence you get, what you may and may not do, and the limits of what we promise."
        updated="6 November 2026"
        version="1.0.6 and later"
        contactBody="Email us and we will reply within 30 days. We are happy to answer questions about these Terms, the licence or anything else in this document."
        summary={[
          {
            kicker: "The app",
            title: "A tracker, not a streaming service",
            body: "Watch Later tracks what you plan to watch and what you have watched. It hosts, streams and downloads nothing.",
          },
          {
            kicker: "Your data",
            title: "Your library stays yours",
            body: "You own what you add. It stays on your device; keep a backup for anything important.",
          },
          {
            kicker: "Fair use",
            title: "Personal use only",
            body: "No reverse engineering, scraping, resale or abuse of the service. Use it for your own library.",
          },
        ]}
        sections={SECTIONS}
      />
    </>
  );
}

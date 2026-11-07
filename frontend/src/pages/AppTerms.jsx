import Seo from "../components/Seo";
import LegalDocument from "../components/legal/LegalDocument";

const SECTIONS = [
  {
    id: "agreement",
    title: "Accepting these terms",
    kicker: "Accepting these terms",
    blocks: [
      {
        type: "p",
        text: "These Terms & Conditions (\"Terms\") are a legal agreement between you and the developer for the Watch Later Android application, package com.watchlater.app, including its updates and any beta features made available to you (the \"App\").",
      },
      {
        type: "p",
        text: "By installing, opening or using the App you agree to these Terms and to our Privacy Policy. If you do not agree, do not install or use the App, and uninstall it if you already have. If you use the App on a device you do not own, you confirm you have the owner's permission.",
      },
      {
        type: "p",
        text: "These Terms cover the App only. They also do not govern Google Play or any third-party service you reach from the App.",
      },
    ],
  },
  {
    id: "service",
    title: "What Watch Later is — and what it is not",
    kicker: "The app",
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
    kicker: "Who may use the app",
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
    kicker: "No account",
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
    kicker: "Licence to use",
    blocks: [
      {
        type: "p",
        text: "Subject to these Terms, we grant you a personal, limited, non-exclusive, non-transferable, revocable licence to install and use the App on devices you own or control, for your own private, non-commercial use. This licence does not include the right to distribute, sublicense, resell or make the App available to others.",
      },
      {
        type: "p",
        text: "The App, its design, code, artwork and branding are owned by the developer or our licensors and are protected by intellectual-property laws. You receive only the licence described above; no ownership is transferred.",
      },
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    kicker: "Acceptable use",
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
          "Use the App in violation of any applicable law, including copyright and data-protection law, or in a way that harms other users, our providers or the developer.",
        ],
      },
      {
        type: "p",
        text: "The developer may suspend or terminate access to any service operated if you breach these rules, and may remove content that violates them. Because the App's library is local, uninstalling it remains your choice and your data is not held by the developer.",
      },
    ],
  },
  {
    id: "your-content",
    title: "Your library and your content",
    kicker: "Your data",
    blocks: [
      {
        type: "p",
        text: "The library data you enter — titles, progress, ratings, lists, notes and custom entries — belongs to you. The developer claims no ownership of it and never receives it. The App does not upload your library.",
      },
      {
        type: "p",
        text: "You are responsible for your own backups. The App is designed to work offline and stores your library on your device, but devices get lost, reset and replaced. Export a backup from More → Export backup if the library matters to you. The developer is not liable for library data lost because a device was wiped, an app was uninstalled, storage was cleared, or a backup was not made.",
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
    kicker: "Third-party services",
    blocks: [
      {
        type: "p",
        text: "The App displays metadata and ratings supplied by third parties and links to third-party sites and stores. Those services are not under the developer's control. Their availability, accuracy and terms can change without notice, and using them may be subject to their own agreements.",
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
    title: "Availability, changes, fees and disclaimers",
    kicker: "Availability and changes",
    blocks: [
      {
        type: "p",
        text: "The App is provided free of charge, contains no advertising and has no in-app purchases or subscriptions. The developer works to keep it running, but does not promise uninterrupted or error-free operation. Features that depend on the internet — catalog search, ratings, release dates and artwork — can be unavailable or delayed because of maintenance, provider outages or your connection. The local library remains usable offline.",
      },
      {
        type: "p",
        text: "The developer may add, change, deprecate or remove features at any time. Some features are labelled beta or experimental; they may change substantially, lose data or be withdrawn, and should not be relied on for anything critical. The developer may also stop supporting older versions of the App, after which updates and fixes will not be provided for them. If the App is discontinued entirely, the developer will give reasonable notice in the App or on the store listing so you can export a backup of your library.",
      },
      {
        type: "p",
        text: "To the fullest extent permitted by law, the App is provided \"as is\" and \"as available\", without warranties of any kind. To the maximum extent permitted by law, the developer is not liable for indirect, incidental, special, consequential or punitive damages, or for loss of data, loss of profits, device failure, or missed releases and reminders. Total aggregate liability is limited to the greater of the amount you paid for the App in the twelve months before the claim, or INR 1,000. You are responsible for keeping your own backups; a lost library caused by uninstalling, clearing storage, resetting or losing a device cannot be restored.",
      },
    ],
  },
  {
    id: "contact",
    title: "Questions about these Terms?",
    kicker: "Contact",
    blocks: [
      {
        type: "p",
        text: "For questions about these Terms or a request, contact the developer using the contact details on the Watch Later Google Play listing. Please do not include sensitive personal information unless it is needed to explain your request.",
      },
    ],
  },
];

export default function AppTerms() {
  return (
    <>
      <Seo
        title="Watch Later Terms & Conditions"
        description="The terms that govern use of the Watch Later Android app: licence, acceptable use, your local library and backups, third-party metadata, disclaimers and liability."
        path="/watchlater-terms-and-conditions"
        robots="noindex, nofollow"
      />
      <LegalDocument
        activeDoc="terms"
        eyebrow="Watch Later · Terms"
        title="Terms & Conditions"
        intro="These terms govern your use of the Watch Later Android app — a personal tracker for movies, TV series and anime. They explain the licence you get, what you may and may not do, and the limits of what the developer promises."
        updated="6 November 2026"
        version="1.0.6 and later"
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

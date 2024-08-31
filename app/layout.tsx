import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL('https://live-alarm.com'),
    title: "Live Alarm Engineering | Myanmar's Premier Fire Protection System Provider",
    description: "Live Alarm Engineering offers advanced fire protection systems in Myanmar, ensuring safety with international standards. Explore our services tailored to your fire safety needs.",
    applicationName: "Live Alarm Engineering",
    authors: [
        { name: "Live Alarm Engineering Team", url: "https://www.live-alarm.com" },
    ],
    generator: "Next.js",
    keywords: ["fire protection systems", "Myanmar fire safety", "fire alarm systems", "fire suppression", "fire safety solutions", "fire system installation"],
    referrer: "no-referrer-when-downgrade",
    creator: "Live Alarm Engineering",
    publisher: "Live Alarm Engineering",
    robots: "index, follow",
    openGraph: {
        title: "Live Alarm Engineering | Myanmar's Premier Fire Protection System Provider",
        description: "Providing top-notch fire protection systems in Myanmar with a commitment to international standards.",
        url: "https://www.live-alarm.com",
        type: "website",
        images: [
            {
                url: "https://www.live-alarm.com/assets/LiveAlarmLogo.svg",
                width: 1200,
                height: 630,
                alt: "Live Alarm Engineering",
            },
        ],
        siteName: "Live Alarm Engineering",
    },
    icons: {
        icon: { url: "https://www.live-alarm.com/assets/LiveAlarmLogo.svg" },  // Correct type: an object with a `url` property
        apple: { url: "https://www.live-alarm.com/assets/LiveAlarmLogo.svg" },  // Correct type: an object with a `url` property
        shortcut: { url: "https://www.live-alarm.com/assets/LiveAlarmLogo.svg" },
        other: {
            rel: 'Live Alarm Engineering',
            url: "https://www.live-alarm.com/assets/LiveAlarmLogo.svg",
        },
    },
    manifest: 'https://live-alarm.com/manifest.json',
    twitter: {
        card: "Live Alarm Engineering",
        site: "@LiveAlarmEng",
        creator: "@LiveAlarmEng",
        title: "Live Alarm Engineering | Myanmar's Premier Fire Protection System Provider",
        description: "Explore our range of fire protection systems, designed to meet the highest international standards.",
        images: ["https://www.live-alarm.com/assets/LiveAlarmLogo.svg"],
    },
    verification: {
        google: "google-site-verification-code",
        bing: "bing-site-verification-code",
    },
    appleWebApp: {
        capable: true,
        title: "Live Alarm Engineering",
        statusBarStyle: "default",
    },
    abstract : "Leading provider of fire protection systems in Myanmar with adherence to international safety standards.",
    appLinks:{
        web:{
            url: "https://www.live-alarm.com/",
            should_fallback : true,
        }
    },
    assets: ['https://live-alarm.com/assets'],
    bookmarks: ['https://live-alarm.com'],
    category: "Business",
    classification: "Business/Fire Safety",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">

      <body className={inter.className}>
      <div className="absolute w-screen h-screen top-0 left-0 bg-black opacity-50 z-0"></div>
      {children}</body>
      </html>
  );
}

import "../index.css";

export const metadata = {
  metadataBase: new URL("https://a4gentssalon.in"),
  title: "A4 Gents Salon Nalbari | Best Men's Salon & Haircut in Nalbari Assam",
  description:
    "Looking for the best salon in Nalbari? A4 Gents Salon offers precision haircuts, styling, facials, and men's grooming near MNC College. Book your appointment via WhatsApp today!",
  keywords: [
    "best salon in Nalbari",
    "mens salon Nalbari",
    "A4 Gents Salon",
    "gents parlor Nalbari",
    "hair cut and styling Assam",
    "men grooming Nalbari",
    "salon near MNC College Nalbari",
  ],
  alternates: {
    canonical: "https://a4gentssalon.in/",
  },
  openGraph: {
    title: "A4 Gents Salon Nalbari",
    description: "The premier grooming destination for men in Nalbari, Assam.",
    url: "https://a4gentssalon.in/",
    siteName: "A4 Gents Salon",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://i.ibb.co/7xvSCC6C/file-000000001b688208932afc657ac7302c-be7139da-0b00-4646-ad5f-58fb10a1776a.jpg",
        width: 1488,
        height: 1056,
        alt: "A4 Gents Salon Nalbari — best men's salon and haircut in Nalbari, Assam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A4 Gents Salon Nalbari",
    description: "The premier grooming destination for men in Nalbari, Assam.",
    images: [
      "https://i.ibb.co/7xvSCC6C/file-000000001b688208932afc657ac7302c-be7139da-0b00-4646-ad5f-58fb10a1776a.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "A4 Gents Salon",
  image:
    "https://i.ibb.co/7xvSCC6C/file-000000001b688208932afc657ac7302c-be7139da-0b00-4646-ad5f-58fb10a1776a.jpg",
  url: "https://a4gentssalon.in/",
  description:
    "A4 Gents Salon is a men's grooming salon in Nalbari, Assam, offering precision haircuts, hairstyling, facials, massage, and wedding grooming.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "near MNC College, Ward No. 7, Majdia",
    addressLocality: "Nalbari",
    addressRegion: "Assam",
    postalCode: "781353",
    addressCountry: "IN",
  },
  telephone: "+918486754335",
  priceRange: "₹₹",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "21:00",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
import { branches, site, PHONE_TEL } from "@/lib/site";

const SITE_URL = "https://alchemistpharmacy.com";

const openingHours = [
  {
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
    closes: "02:00",
  },
];

/**
 * Emits Organization + one Pharmacy (LocalBusiness) node per branch as
 * JSON-LD. Helps each branch surface in Google Maps / "pharmacy near me".
 */
export function StructuredData() {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: site.name,
      url: SITE_URL,
      logo: `${SITE_URL}/opengraph-image`,
      description:
        "30-minute prescription and medicine home delivery across Lahore via WhatsApp.",
      telephone: PHONE_TEL,
      areaServed: "Lahore, Pakistan",
    },
    ...branches.map((b) => ({
      "@type": "Pharmacy",
      "@id": `${SITE_URL}/branches#${b.slug}`,
      name: `${site.name} — ${b.name}`,
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      url: `${SITE_URL}/branches`,
      image: `${SITE_URL}/opengraph-image`,
      telephone: PHONE_TEL,
      priceRange: "$$",
      currenciesAccepted: "PKR",
      address: {
        "@type": "PostalAddress",
        streetAddress: b.address,
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: b.coords[0],
        longitude: b.coords[1],
      },
      openingHoursSpecification: openingHours,
      areaServed: b.area,
    })),
  ];

  const json = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

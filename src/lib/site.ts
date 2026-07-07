/**
 * Single source of truth for Alchemist Pharmacy site content.
 * Update phone / whatsapp / branches here and it propagates everywhere.
 */

// WhatsApp needs full international format, no "+" or leading zero.
// 0302-1499064 (Pakistan) -> 92 302 1499064
export const WHATSAPP_NUMBER = "923021499064";
export const PHONE_DISPLAY = "0302 149 9064";
export const PHONE_TEL = "+923021499064";

export type Branch = {
  slug: string;
  name: string;
  area: string;
  address: string;
  landmark: string;
  hours: string;
  mapsQuery: string; // used to build a Google Maps link
  /**
   * [latitude, longitude] for the map marker.
   * ⚠️ APPROXIMATE — placed by area, not the exact shopfront.
   * Replace with the real pin from each branch's Google Maps link.
   */
  coords: [number, number];
};

export const branches: Branch[] = [
  {
    slug: "gt-road",
    name: "G.T. Road",
    area: "G.T. Road",
    address: "G.T. Road, near Pakistan Mint",
    landmark: "Near Pakistan Mint",
    hours: "9:00 AM – 2:00 AM",
    mapsQuery: "Alchemist Pharmacy G.T. Road Pakistan Mint Lahore",
    coords: [31.5931, 74.3810],
  },
  {
    slug: "thokar-niaz-baig",
    name: "Thokar Niaz Baig",
    area: "Thokar Niaz Baig",
    address: "Canal Bank Road, Thokar Niaz Baig",
    landmark: "Canal Bank Road",
    hours: "9:00 AM – 2:00 AM",
    mapsQuery: "Alchemist Pharmacy Thokar Niaz Baig Canal Bank Road Lahore",
    coords: [31.4693, 74.2380],
  },
  {
    slug: "allama-iqbal-town",
    name: "Allama Iqbal Town",
    area: "Allama Iqbal Town",
    address: "Dubai Chowk, Allama Iqbal Town",
    landmark: "Dubai Chowk",
    hours: "9:00 AM – 2:00 AM",
    mapsQuery: "Alchemist Pharmacy Dubai Chowk Allama Iqbal Town Lahore",
    coords: [31.5093, 74.2955],
  },
  {
    slug: "johar-town-1",
    name: "Johar Town",
    area: "Johar Town",
    address: "Johar Town, Lahore",
    landmark: "Johar Town",
    hours: "9:00 AM – 2:00 AM",
    mapsQuery: "Alchemist Pharmacy Johar Town Lahore",
    coords: [31.4697, 74.2728],
  },
  {
    slug: "johar-town-2",
    name: "Johar Town (Block G)",
    area: "Johar Town",
    address: "Johar Town, Lahore",
    landmark: "Johar Town",
    hours: "9:00 AM – 2:00 AM",
    mapsQuery: "Alchemist Pharmacy Johar Town Block G Lahore",
    coords: [31.4635, 74.2820],
  },
];

export const stats = [
  { value: "30", suffix: "min", label: "Average delivery time" },
  { value: "5", suffix: "", label: "Branches across Lahore" },
  { value: "350", suffix: "+", label: "Deliveries every day" },
  { value: "10", suffix: "yrs", label: "Serving the community" },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/branches", label: "Branches" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const site = {
  name: "Alchemist Pharmacy",
  tagline: "Medicine at your door in 30 minutes",
  phoneDisplay: PHONE_DISPLAY,
  phoneTel: PHONE_TEL,
  whatsapp: WHATSAPP_NUMBER,
  whatsappPrefill:
    "Hi Alchemist Pharmacy 👋 I'd like to order medicine for home delivery. I'm attaching a photo of my prescription.",
  email: "info@alchemistpharmacy.com",
  branches,
  stats,
  nav,
};

/** Build a wa.me deep link with a pre-filled message. */
export function waLink(message: string = site.whatsappPrefill): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function mapsLink(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}


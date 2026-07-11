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

/**
 * Lahore localities we deliver to, each mapped to the nearest branch slug.
 * Used by the delivery-area checker. Extend this list freely.
 */
export const deliveryAreas: { name: string; branch: string }[] = [
  { name: "Johar Town", branch: "johar-town-1" },
  { name: "Wapda Town", branch: "johar-town-1" },
  { name: "Faisal Town", branch: "johar-town-1" },
  { name: "Township", branch: "johar-town-2" },
  { name: "Model Town", branch: "johar-town-2" },
  { name: "Garden Town", branch: "johar-town-2" },
  { name: "Kalma Chowk", branch: "johar-town-2" },
  { name: "Thokar Niaz Baig", branch: "thokar-niaz-baig" },
  { name: "Canal Bank", branch: "thokar-niaz-baig" },
  { name: "Valencia", branch: "thokar-niaz-baig" },
  { name: "Bahria Town", branch: "thokar-niaz-baig" },
  { name: "Adda Plot", branch: "thokar-niaz-baig" },
  { name: "Allama Iqbal Town", branch: "allama-iqbal-town" },
  { name: "Iqbal Town", branch: "allama-iqbal-town" },
  { name: "Dubai Chowk", branch: "allama-iqbal-town" },
  { name: "Sabzazar", branch: "allama-iqbal-town" },
  { name: "Samanabad", branch: "allama-iqbal-town" },
  { name: "Multan Road", branch: "allama-iqbal-town" },
  { name: "G.T. Road", branch: "gt-road" },
  { name: "GT Road", branch: "gt-road" },
  { name: "Pakistan Mint", branch: "gt-road" },
  { name: "Baghbanpura", branch: "gt-road" },
  { name: "Shalimar", branch: "gt-road" },
];

/** Match a typed area to the nearest branch (fuzzy contains match). */
export function findDeliveryArea(query: string): { name: string; branch: Branch } | null {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return null;
  const hit = deliveryAreas.find(
    (a) => a.name.toLowerCase().includes(q) || q.includes(a.name.toLowerCase()),
  );
  if (!hit) return null;
  const branch = branches.find((b) => b.slug === hit.branch);
  return branch ? { name: hit.name, branch } : null;
}

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


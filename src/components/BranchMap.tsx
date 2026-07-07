"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import type { Map as LeafletMap, Marker as LeafletMarker } from "leaflet";
import { Container, Reveal, SectionHeading } from "@/components/ui";
import { PinIcon, ClockIcon, ArrowIcon, WhatsAppIcon } from "@/components/icons";
import { branches, mapsLink, waLink } from "@/lib/site";

// A green teardrop pin rendered as an HTML divIcon (no external image assets).
const pinSvg = (active: boolean) => `
  <div style="transform: translate(-50%, -100%); transition: filter .2s;">
    <svg width="34" height="44" viewBox="0 0 34 44" fill="none" xmlns="http://www.w3.org/2000/svg"
      style="filter: drop-shadow(0 4px 6px rgba(12,61,52,.35)); ${active ? "" : "opacity:.92"}">
      <path d="M17 43C17 43 32 27.5 32 16C32 7.7 25.3 1 17 1C8.7 1 2 7.7 2 16C2 27.5 17 43 17 43Z"
        fill="${active ? "#0a6f5d" : "#0e9079"}" stroke="white" stroke-width="2.5"/>
      <circle cx="17" cy="16" r="5.5" fill="white"/>
    </svg>
  </div>`;

export function BranchMap() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<LeafletMarker[]>([]);
  const didInitRef = useRef(false);
  const [ready, setReady] = useState(false);

  // Initialise the map once, on mount.
  useEffect(() => {
    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
      });
      mapRef.current = map;

      // Keep OSM attribution visible (bottom is covered by our info card).
      map.attributionControl.setPosition("topright");

      L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        },
      ).addTo(map);

      markersRef.current = branches.map((b, i) => {
        const marker = L.marker(b.coords, {
          icon: L.divIcon({
            html: pinSvg(i === 0),
            className: "",
            iconSize: [0, 0],
          }),
          title: b.name,
        }).addTo(map);

        marker.bindPopup(
          `<strong>${b.name}</strong><br/>${b.address}<br/>` +
            `<a href="${mapsLink(b.mapsQuery)}" target="_blank" rel="noopener">Get directions →</a>`,
        );
        marker.on("click", () => setActive(i));
        return marker;
      });

      // Frame all branches.
      const bounds = L.latLngBounds(branches.map((b) => b.coords));
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 13 });

      setReady(true);
    })();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  // React to branch selection: recolour pins, fly to the active branch, open popup.
  useEffect(() => {
    if (!ready) return;
    // Skip the first run so the initial view keeps all five pins framed
    // (fitBounds) instead of immediately flying to branch 0.
    if (!didInitRef.current) {
      didInitRef.current = true;
      return;
    }
    (async () => {
      const L = (await import("leaflet")).default;
      markersRef.current.forEach((m, i) => {
        m.setIcon(
          L.divIcon({ html: pinSvg(i === active), className: "", iconSize: [0, 0] }),
        );
      });
      const map = mapRef.current;
      const marker = markersRef.current[active];
      if (map && marker) {
        map.flyTo(branches[active].coords, 15, { duration: 0.8 });
        marker.openPopup();
      }
    })();
  }, [active, ready]);

  const branch = branches[active];

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="On the map"
          title="Find your nearest branch"
          intro="Tap a branch to zoom to it, or explore all five pins on the map. Wherever you are in Lahore, one is close enough for 30-minute delivery."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
          {/* Branch selector list */}
          <Reveal className="flex flex-col gap-2.5">
            {branches.map((b, i) => {
              const isActive = i === active;
              return (
                <button
                  key={b.slug}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`group flex items-start gap-3.5 rounded-[var(--radius)] border p-4 text-left transition-all duration-200 ${
                    isActive
                      ? "border-[var(--brand-600)] bg-[var(--brand-50)] shadow-[var(--shadow-sm)]"
                      : "border-[var(--line)] bg-[var(--surface)] hover:border-[var(--brand-100)] hover:bg-[var(--surface-2)]"
                  }`}
                >
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors ${
                      isActive
                        ? "bg-[var(--brand-600)] text-white"
                        : "bg-[var(--brand-50)] text-[var(--brand-600)] group-hover:bg-[var(--brand-100)]"
                    }`}
                  >
                    <PinIcon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-ink">{b.name}</span>
                    <span className="block truncate text-[0.86rem] text-ink-muted">
                      {b.address}
                    </span>
                    <span className="mt-1 flex items-center gap-1.5 text-[0.78rem] text-ink-body">
                      <ClockIcon className="h-3.5 w-3.5 text-[var(--brand-600)]" />
                      {b.hours}
                    </span>
                  </span>
                </button>
              );
            })}
          </Reveal>

          {/* Map */}
          <Reveal delay={120} className="flex flex-col">
            <div className="relative flex-1 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--surface-2)] shadow-[var(--shadow-md)]">
              <div
                ref={containerRef}
                className="h-[320px] w-full sm:h-[440px] lg:h-full lg:min-h-[460px]"
                aria-label="Map of Alchemist Pharmacy branches"
                role="application"
              />

              {/* Floating info card over the map */}
              <div className="pointer-events-none absolute inset-x-3 bottom-3 z-[500] sm:inset-x-4 sm:bottom-4">
                <div className="pointer-events-auto flex flex-col gap-3 rounded-[var(--radius)] border border-[var(--line)] bg-[var(--surface)]/95 p-4 shadow-[var(--shadow-lg)] backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[var(--brand-50)] text-[var(--brand-600)]">
                      <PinIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-ink">{branch.name}</p>
                      <p className="text-[0.84rem] text-ink-muted">{branch.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={mapsLink(branch.mapsQuery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line-strong)] px-4 py-2 text-[0.85rem] font-semibold text-ink transition hover:border-[var(--brand-600)] hover:text-[var(--brand-700)]"
                    >
                      Directions
                      <ArrowIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={waLink(
                        `Hi Alchemist Pharmacy 👋 I'd like delivery from your ${branch.name} branch. Here's my prescription:`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Order from ${branch.name} on WhatsApp`}
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--wa)] text-white transition hover:brightness-105"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

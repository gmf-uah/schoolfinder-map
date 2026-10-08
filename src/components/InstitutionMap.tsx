import { useEffect, useRef } from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import { institutions, type Institution } from "@/data/institutions";

export const TIER_MIN_ZOOM: Record<number, number> = { 1: 0, 2: 4.5, 3: 6, 4: 8 };

function makeMarkerEl(inst: Institution, onClick: () => void) {
  const el = document.createElement("button");
  el.className = `inst-marker inst-tier-${inst.tier}`;
  el.setAttribute("aria-label", inst.name);
  el.style.setProperty("--inst-c1", inst.colors[0]);
  el.style.setProperty("--inst-c2", inst.colors[1]);
  const badge = document.createElement("span");
  badge.className = "inst-badge";
  badge.textContent = inst.short;
  const img = document.createElement("img");
  img.alt = "";
  img.src = `https://www.google.com/s2/favicons?domain=${inst.domain}&sz=64`;
  img.onload = () => {
    // Google returns a 16px globe when no icon exists — keep initials then
    if (img.naturalWidth > 16) badge.replaceWith(img);
  };
  el.appendChild(badge);
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    onClick();
  });
  return el;
}

export default function InstitutionMap({
  onSelect,
  visibleTypes,
}: {
  onSelect: (i: Institution) => void;
  visibleTypes: Set<string>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const markersRef = useRef<{ inst: Institution; el: HTMLElement }[]>([]);
  const zoomRef = useRef(3.5);
  const typesRef = useRef(visibleTypes);
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  const refresh = () => {
    for (const { inst, el } of markersRef.current) {
      const show = zoomRef.current >= (TIER_MIN_ZOOM[inst.tier] ?? 0) && typesRef.current.has(inst.type);
      el.style.display = show ? "" : "none";
    }
  };

  useEffect(() => {
    typesRef.current = visibleTypes;
    refresh();
  }, [visibleTypes]);

  useEffect(() => {
    let map: import("maplibre-gl").Map | undefined;
    let cancelled = false;
    import("maplibre-gl").then((mod) => {
      const maplibregl = (mod as any).default ?? mod;
      if (cancelled || !ref.current) return;
      map = new maplibregl.Map({
        container: ref.current,
        style: "https://tiles.openfreemap.org/styles/positron",
        center: [-97, 38.5],
        zoom: 3.5,
        minZoom: 2.5,
        maxZoom: 16,
        attributionControl: { compact: true },
      });
      map!.addControl(new maplibregl.NavigationControl({ showCompass: false }), "bottom-right");
      // Sort so prominent institutions render on top
      const sorted = [...institutions].sort((a, b) => b.tier - a.tier);
      markersRef.current = sorted.map((inst) => {
        const el = makeMarkerEl(inst, () => {
          onSelectRef.current(inst);
          map?.easeTo({ center: [inst.lng, inst.lat], duration: 600 });
        });
        new maplibregl.Marker({ element: el }).setLngLat([inst.lng, inst.lat]).addTo(map!);
        return { inst, el };
      });
      const onZoom = () => {
        zoomRef.current = map!.getZoom();
        refresh();
      };
      map!.on("zoom", onZoom);
      refresh();
    });
    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);

  return (
    <div className="absolute inset-0">
      <div ref={ref} className="h-full w-full" />
    </div>
  );
}

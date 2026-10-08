import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useState } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { MapPin, Calendar, Users, Globe } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { institutions, type Institution, type InstitutionType } from "@/data/institutions";

const InstitutionMap = lazy(() => import("@/components/InstitutionMap"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Campus Atlas — US Schools & Universities Map" },
      { name: "description", content: "Explore US universities, colleges and high schools on an interactive map. Zoom in to reveal more institutions." },
      { property: "og:title", content: "Campus Atlas — US Schools & Universities Map" },
      { property: "og:description", content: "Interactive map of US educational institutions, revealed by prominence as you zoom." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TYPES: InstitutionType[] = ["University", "College", "Community College", "Military Academy", "High School"];
const TIER_LABEL = { 1: "National flagship", 2: "Major institution", 3: "Regional", 4: "Local" };

function Index() {
  const [selected, setSelected] = useState<Institution | null>(null);
  const [types, setTypes] = useState<Set<string>>(new Set(TYPES));

  const toggle = (t: string) =>
    setTypes((prev) => {
      const n = new Set(prev);
      n.has(t) ? n.delete(t) : n.add(t);
      return n;
    });

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-background">
      <ClientOnly>
        <Suspense fallback={null}>
          <InstitutionMap onSelect={setSelected} visibleTypes={types} />
        </Suspense>
      </ClientOnly>

      <header className="panel absolute left-4 top-4 z-10 max-w-xs p-5">
        <h1 className="font-display text-3xl leading-none text-foreground">Campus Atlas</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {institutions.length} institutions. Zoom in to reveal smaller schools.
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {TYPES.map((t) => (
            <button key={t} onClick={() => toggle(t)} className="chip" data-active={types.has(t)}>
              {t}
            </button>
          ))}
        </div>
      </header>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-md overflow-hidden p-0">
          {selected && (
            <>
              <div
                className="h-3 w-full"
                style={{ background: `linear-gradient(90deg, ${selected.colors[0]} 60%, ${selected.colors[1]} 60%)` }}
              />
              <div className="p-6 pt-4">
                <DialogHeader>
                  <span className="eyebrow">{selected.type} · {TIER_LABEL[selected.tier]}</span>
                  <DialogTitle className="font-display text-2xl">{selected.name}</DialogTitle>
                  <DialogDescription className="sr-only">Details for {selected.name}</DialogDescription>
                </DialogHeader>
                <dl className="mt-4 space-y-3 text-sm">
                  <Row icon={<MapPin className="h-4 w-4" />} label={selected.address} />
                  {selected.founded && <Row icon={<Calendar className="h-4 w-4" />} label={`Founded ${selected.founded}`} />}
                  {selected.enrollment && (
                    <Row icon={<Users className="h-4 w-4" />} label={`~${selected.enrollment.toLocaleString()} students`} />
                  )}
                  <Row
                    icon={<Globe className="h-4 w-4" />}
                    label={
                      <a href={`https://${selected.domain}`} target="_blank" rel="noreferrer" className="text-primary underline-offset-2 hover:underline">
                        {selected.domain}
                      </a>
                    }
                  />
                </dl>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}

function Row({ icon, label }: { icon: React.ReactNode; label: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 text-foreground">
      <span className="mt-0.5 text-muted-foreground">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

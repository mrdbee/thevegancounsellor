import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center">
        <span className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
          Now welcoming new clients
        </span>

        <div className="max-w-2xl space-y-5">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Counselling that understands your values
          </h1>
          <p className="text-balance text-lg text-muted-foreground sm:text-xl">
            One-on-one support with David, a counsellor who works closely with
            vegans and anyone living in line with what matters most to them.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" className="text-base">
            Book a session
          </Button>
          <Button size="lg" variant="outline" className="text-base">
            Learn more
          </Button>
        </div>

        <p className="pt-8 text-sm text-muted-foreground">
          Website under construction — more coming soon.
        </p>
      </section>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} The Vegan Counsellor
      </footer>
    </main>
  );
}

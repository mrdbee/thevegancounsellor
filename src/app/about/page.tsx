import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About David",
  description:
    "Meet David Coles — counsellor, writer, and long-time student of human behaviour, supporting vegans and people living aligned with their values.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
        <div className="flex flex-col items-start gap-10 sm:flex-row sm:items-start">
          <Image
            src="/david_headshot.png"
            alt="David, The Vegan Counsellor"
            width={160}
            height={160}
            className="h-32 w-32 shrink-0 rounded-full object-cover sm:h-40 sm:w-40"
            priority
          />

          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              About
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Hello, I&rsquo;m David.
            </h1>
            <p className="text-balance text-lg text-muted-foreground">
              I&rsquo;m a counsellor based in Adelaide, working with vegans and
              anyone living in line with what matters most to them.
            </p>
          </div>
        </div>

        <div className="mt-16 space-y-14 text-base leading-relaxed text-foreground/90">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              My approach
            </h2>
            <p>
              I&rsquo;ve spent most of my working life paying close attention to
              how people actually behave &mdash; not how we think we behave, and
              not how we wish we did. That curiosity has shaped how I sit with
              clients. Sessions are calm, unhurried, and grounded in real
              conversation. I&rsquo;m not here to hand you a script or a
              technique to perform; I&rsquo;m here to think alongside you, slowly
              enough that the patterns underneath start to come into view.
            </p>
            <p>
              A lot of the work is simply taking what feels tangled and giving
              it room to be looked at honestly &mdash; without judgement, and
              without rushing to fix it. From there, the next step usually makes
              itself obvious.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              Why I work with vegans
            </h2>
            <p>
              I&rsquo;m vegan myself, and have been long enough to know how it
              quietly shapes everything &mdash; meals with family, conversations
              at work, how you carry your values when no one around you shares
              them. It can be isolating in ways that are hard to put into
              words, especially when the people closest to you don&rsquo;t see
              the cost of holding the line.
            </p>
            <p>
              I don&rsquo;t treat being vegan as something to be talked out of,
              managed around, or explained away. I treat it as part of who you
              are. Most of the people I work with aren&rsquo;t coming to me
              because they&rsquo;re vegan &mdash; they&rsquo;re coming with the
              usual things life puts in front of us &mdash; but they want to do
              that work with someone who already gets that piece of it, so they
              don&rsquo;t have to start by defending it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              A little more about me
            </h2>
            <p>
              Outside of counselling I write and make things. I&rsquo;m the
              author of <em>The Insanity of Humanity</em>, and I&rsquo;m
              currently developing a body of work called the Awake Ape Project
              &mdash; a long look at how much of our day-to-day decision-making
              is driven by older survival programming than we tend to admit.
              It&rsquo;s a thread that runs through my counselling work too:
              taking human behaviour seriously, on its own terms, before trying
              to change it.
            </p>
          </section>
        </div>

        <div className="mt-16 flex flex-col items-start gap-4 rounded-2xl border bg-accent/40 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-lg font-medium">Thinking about a session?</p>
            <p className="text-sm text-muted-foreground">
              I&rsquo;m currently welcoming new clients. No pressure &mdash; have
              a read, and reach out when you&rsquo;re ready.
            </p>
          </div>
          <Link
            href="/"
            className={buttonVariants({ size: "lg", className: "text-base" })}
          >
            Book a session
          </Link>
        </div>
      </section>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} The Vegan Counsellor
      </footer>
    </main>
  );
}

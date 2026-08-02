import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    id: "01",
    title: "Redesigning the core analytics dashboard",
    description:
      "Reduced time-on-task by 34% by restructuring the information architecture and introducing progressive disclosure for power users.",
    tags: ["Product Design", "Data Visualization", "Research"],
    year: "2024",
    href: "#",
  },
  {
    id: "02",
    title: "Design system at scale",
    description:
      "Built and shipped a multi-brand component library adopted by 12 product teams, cutting design-to-dev handoff time in half.",
    tags: ["Design Systems", "Components", "Tokens"],
    year: "2023",
    href: "#",
  },
  {
    id: "03",
    title: "Onboarding for a B2B SaaS product",
    description:
      "Increased 7-day activation rate from 41% to 68% through structured onboarding flows informed by usability testing.",
    tags: ["UX Research", "Product Strategy", "Flows"],
    year: "2023",
    href: "#",
  },
];

export default function Home() {
  return (
    <div className="dark min-h-screen bg-background text-foreground font-sans">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <span className="text-sm font-medium text-foreground">Kenneth Fernandez</span>
          <nav className="flex items-center gap-6">
            <Link
              href="#work"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Work
            </Link>
            <Link
              href="#about"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Button size="sm" variant="outline" asChild>
              <a href="mailto:kennethfernandez91@gmail.com">Contact</a>
            </Button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6">
        {/* Hero */}
        <section className="py-24 sm:py-32">
          <p className="mb-4 text-sm font-medium tracking-widest text-primary uppercase">
            Product Designer
          </p>
          <h1 className="mb-6 text-4xl font-normal leading-tight tracking-tight text-foreground sm:text-5xl">
            Designing products people
            <br />
            <span className="text-primary">actually want to use.</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            I work at the intersection of research, systems thinking, and craft — helping teams ship
            products that are clear, accessible, and built to last.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <Button asChild>
              <a href="#work">View work</a>
            </Button>
            <Button variant="ghost" asChild>
              <a
                href="https://linkedin.com/in/kennethfernandez"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </Button>
          </div>
        </section>

        {/* Case Studies */}
        <section id="work" className="pb-24">
          <h2 className="mb-12 text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Selected work
          </h2>
          <div className="flex flex-col divide-y divide-border/50">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                href={study.href}
                className="group flex flex-col gap-4 py-10 sm:flex-row sm:gap-12 transition-opacity hover:opacity-80"
              >
                <span className="shrink-0 text-xs font-mono text-muted-foreground/60 sm:w-8 sm:pt-1">
                  {study.id}
                </span>
                <div className="flex flex-1 flex-col gap-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-normal leading-snug text-foreground group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <span className="shrink-0 text-sm text-muted-foreground">{study.year}</span>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border/50 py-24">
          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-xs font-medium tracking-widest text-muted-foreground uppercase">
                About
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                I&apos;m a product designer with 5+ years of experience across B2B SaaS, fintech,
                and consumer products. I care deeply about the people I design for — and the teams
                I build with.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Currently open to full-time roles and select freelance projects.
              </p>
            </div>
            <div>
              <h2 className="mb-6 text-xs font-medium tracking-widest text-muted-foreground uppercase">
                Skills
              </h2>
              <ul className="flex flex-col gap-2 text-base text-muted-foreground">
                {[
                  "Product strategy & vision",
                  "User research & usability testing",
                  "Interaction & visual design",
                  "Design systems & tokens",
                  "Prototyping & animation",
                  "Cross-functional collaboration",
                ].map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="size-1 shrink-0 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-8">
          <span className="text-sm text-muted-foreground">© 2026 Kenneth Fernandez</span>
          <div className="flex items-center gap-6">
            <a
              href="mailto:kennethfernandez91@gmail.com"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/kennethfernandez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/kkfernan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

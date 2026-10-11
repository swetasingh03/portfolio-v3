import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import portrait from "@/assets/sweta-hero-light.png";
import workspace from "@/assets/developer-workspace.jpg";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2, Github, Linkedin } from "lucide-react";

const TITLE = "Sweta Singh — Full Stack Developer";
const DESC =
  "Portfolio of Sweta Singh, a MERN & Next.js developer with 4+ years building e-commerce, sports, real estate and education platforms.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "swetasingh03052000@gmail.com";
const socials = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/sweta-singh-0b91781bb", Icon: Linkedin },
  { label: "GitHub", url: "https://github.com/swetasingh03", Icon: Github },
];

const projects = [
  { name: "Besein Sports", cat: "Sports · AI", url: "https://www.beseinsports.com/", desc: "A football talent platform bringing players, scouts and clubs into one connected experience, with AI-assisted insights and dedicated dashboards.", tech: ["Next.js", "Node.js", "Express.js", "JWT", "AWS S3", "Python", "Stripe"], highlights: ["Role-based player, scout and club dashboards", "Video uploads to AWS S3 and AI-powered insights", "Stripe subscriptions and authenticated access"] },
  { name: "Zien", cat: "Real Estate", url: "https://zien.ai/", desc: "A property discovery platform combining map-based search with live MLS listings, helping users explore properties and agents track activity.", tech: ["MLS API", "Map-based search", "Real-time data sync"], highlights: ["Property filters and interactive map discovery", "Live listing synchronization and lazy loading", "Analytics dashboard for real-estate agents"] },
  { name: "Answer & Win", cat: "Online Games", url: "https://www.answerandwin.co.uk/", desc: "An online quiz competition platform where secure access, paid entry and reliable transaction checks support the participant journey.", tech: ["Session management", "Payment integration", "Transaction validation"], highlights: ["Payment-based competition entry", "Secure participant sessions", "Validated transactions across the entry flow"] },
  { name: "Sherpa Sports", cat: "Sports", url: "https://sherpasports.ai/", desc: "A sports-focused digital product in my portfolio, bringing together my web development experience and the needs of the sports industry.", focus: ["Sports technology", "Web experience"], highlights: ["Sports-focused product experience", "Part of my work across athlete-oriented platforms"] },
  { name: "Strategic Soft-Flow", cat: "E-commerce", url: "https://strategicsoftflow.com/", desc: "An e-commerce project centred on the online shopping experience, from exploring the storefront to discovering products.", focus: ["E-commerce", "Product discovery"], highlights: ["Online retail storefront", "Product browsing and shopping experience"] },
  { name: "Just Hung", cat: "Art Marketplace", url: "https://justhung.com/timecapsule/bluerain/", desc: "An online destination for purchasing paintings, bringing artwork into a digital shopping experience for art buyers and collectors.", focus: ["Art marketplace", "Online shopping"], highlights: ["Painting discovery and artwork presentation", "Online purchasing for art buyers"] },
  { name: "Viddhyaa", cat: "Education", url: "https://viddhyaa.codesmile.in/", desc: "An education-focused tutor and learning platform, part of my work on digital experiences for students and teachers.", focus: ["Education", "Tutoring"], highlights: ["Student and tutor-focused experience", "Online learning platform"] },
  { name: "Bunchy", cat: "Hobby App", url: "https://bunchy.io/login", desc: "A hobby-focused community application built around shared interests, adding a social product to my portfolio of web experiences.", focus: ["Community", "Shared interests"], highlights: ["Hobby-oriented community experience", "A social application for shared interests"] },
  { name: "FastPrinter", cat: "Print Shop", url: "https://fastprinter.codesmile.in/products/?id=prod_1788256807425", desc: "An online print-shopping application for banners, books and posters, presenting print products through a library-style catalogue.", focus: ["Print commerce", "Product catalogue"], highlights: ["Banners, books and posters in one catalogue", "Library-style product browsing and online shopping"] },
];

const skills = {
  Frontend: ["React.js", "Next.js", "TypeScript", "Redux", "React Query", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT / OAuth2", "WebSockets"],
  Data: ["MongoDB", "MySQL", "PostgreSQL", "Prisma", "Sequelize"],
  Integrations: ["Stripe", "Razorpay", "Orange Pay", "Shiprocket", "MLS API", "AWS S3", "Docker"],
};

const experience = [
  { role: "MERN Stack Developer", co: "Isynbus Technologies", when: "Jul 2024 — Present", summary: "Building connected web products across application development, payments, data and third-party services.", tech: ["React", "Next.js", "Node.js", "Express", "Prisma", "Sequelize"], pts: ["Develop scalable applications with React and Next.js interfaces backed by Node.js and Express.js services.", "Integrate Stripe, Razorpay and Orange Pay, including secure webhooks for payment events.", "Optimize MySQL and MongoDB data workflows with Prisma and Sequelize ORM.", "Connect third-party APIs and Google Analytics to support product functionality and usage tracking."] },
  { role: "Software Development Engineer", co: "Virtuzo Infosystems", when: "Apr 2022 — Jul 2024", summary: "Delivered full-stack applications with an emphasis on search visibility, loading performance and reliable data services.", tech: ["Next.js", "REST APIs", "MySQL", "Stored procedures"], pts: ["Built and deployed full-stack web applications, working across user interfaces and application services.", "Developed SEO-optimized Next.js applications and improved page-loading performance.", "Designed scalable REST APIs and MySQL stored procedures for application data workflows.", "Recognized with a Best Performer certificate for highest proficiency."] },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-xl">Sweta<span className="text-primary">.</span></a>
          <div className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
            {["about", "work", "experience", "contact"].map((s) => (
              <a key={s} href={`#${s}`} className="capitalize transition-colors hover:text-primary">{s}</a>
            ))}
          </div>
          <a href="#contact" className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-ink-foreground transition-colors hover:bg-primary">Hire me</a>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 md:grid-cols-[1.2fr_1fr] md:py-16">
        <div className="fade-up">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-primary">Full Stack Developer · Noida, India</p>
          <h1 className="text-5xl leading-[1.05] md:text-7xl">
            Sweta Singh<span className="mt-5 block font-sans text-2xl leading-snug md:text-3xl">I build web products that ship and scale.</span>
          </h1>
          <p className="mt-8 max-w-lg text-lg text-muted-foreground">
            4+ years crafting MERN & Next.js platforms — from AI sports scouting to real-estate search, e-commerce and secure payments.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg"><a href="#work">See my work <ArrowUpRight /></a></Button>
            <Button asChild size="lg" variant="outline"><a href="#contact">Get in touch</a></Button>
          </div>
          <SocialLinks className="mt-6" />
          <div className="mt-14 flex gap-10">
            {[["4+", "Years"], ["9+", "Live products"], ["25+", "Interviews led"]].map(([n, l]) => (
              <div key={l}><div className="font-display text-4xl">{n}</div><div className="text-sm text-muted-foreground">{l}</div></div>
            ))}
          </div>
        </div>
        <div className="fade-up relative" style={{ animationDelay: "0.15s" }}>
          <div className="absolute -inset-4 -rotate-3 rounded-[2rem] bg-accent" />
          <img src={portrait} alt="Sweta Singh portrait" width={848} height={1264} fetchPriority="high" className="relative mx-auto aspect-[4/5] max-h-[570px] w-full rounded-[2rem] object-cover object-top shadow-soft" />
        </div>
      </header>

      {/* About */}
      <section id="about" className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 md:grid-cols-2">
          <div>
            <img src={workspace} alt="Modern software development workspace with a code editor, laptop and keyboard" loading="lazy" width={1200} height={1008} className="aspect-[6/5] w-full rounded-lg object-cover" />
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">About me</p>
            <h2 className="text-4xl md:text-5xl">Clean code, real business outcomes.</h2>
            <p className="mt-6 text-ink-foreground/75">
              I'm a MERN stack developer who loves turning messy requirements into fast, maintainable products. I work closely with clients, design RESTful APIs, integrate payment gateways and cloud services, and care deeply about the experience on the other side of the screen.
            </p>
            <p className="mt-4 text-ink-foreground/75">
              I've mentored 4 junior developers, led 5-member cross-functional teams and contribute to the React Native community. B.Com, Delhi University.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {Object.entries(skills).map(([k, v]) => (
                <div key={k}>
                  <h3 className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-primary">{k}</h3>
                  <div className="flex flex-wrap gap-2">
                    {v.map((s) => <span key={s} className="rounded-full border border-ink-foreground/20 px-3 py-1 text-xs">{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">Selected work</p>
        <h2 className="mb-14 max-w-2xl text-4xl md:text-5xl">Products I've helped bring to life.</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article key={p.name} className="group flex flex-col rounded-lg border border-border bg-card p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <span>{String(i + 1).padStart(2, "0")}</span><span>{p.cat}</span>
              </div>
              <h3 className="text-2xl">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <ul className="mt-5 flex-1 space-y-2 text-sm">
                {p.highlights.map((point) => <li key={point} className="flex gap-3"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />{point}</li>)}
              </ul>
              <div className="mt-6 border-t border-border pt-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{p.tech ? "Technology & integrations" : "Project focus"}</p>
                <div className="flex flex-wrap gap-2">{(p.tech ?? p.focus).map((tag) => <span key={tag} className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">{tag}</span>)}</div>
              </div>
              <Button asChild variant="link" className="mt-5 w-fit px-0"><a href={p.url} target="_blank" rel="noreferrer" aria-label={`Visit ${p.name} live site`}>Visit live site <ArrowUpRight /></a></Button>
            </article>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">Experience</p>
          <h2 className="mb-14 text-4xl md:text-5xl">Where I've worked.</h2>
          <div className="space-y-6">
            {experience.map((e) => (
              <div key={e.co} className="grid gap-8 border-t border-border py-8 md:grid-cols-[1fr_2fr]">
                <div>
                  <div className="text-sm text-muted-foreground">{e.when}</div>
                  <h3 className="mt-2 text-2xl">{e.role}</h3>
                  <div className="font-semibold text-primary">{e.co}</div>
                  <div className="mt-5 flex flex-wrap gap-2">{e.tech.map((tag) => <span key={tag} className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground">{tag}</span>)}</div>
                </div>
                <div><p className="mb-5 text-muted-foreground">{e.summary}</p><ul className="space-y-3">
                  {e.pts.map((p) => <li key={p} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{p}</li>)}
                </ul></div>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-3">
            {[["4", "Junior developers mentored"], ["5", "Members in cross-functional teams led"], ["25+", "Technical interviews conducted"]].map(([value, label]) => <div key={label}><p className="font-display text-4xl text-primary">{value}</p><p className="mt-2 text-sm text-muted-foreground">{label}</p></div>)}
          </div>
        </div>
      </section>

      <Contact />

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Sweta Singh</p>
        <SocialLinks className="mt-3 justify-center" />
      </footer>
    </div>
  );
}

function SocialLinks({ className = "" }: { className?: string }) {
  return <div className={`flex flex-wrap gap-3 ${className}`}>{socials.map(({ label, url, Icon }) => <Button asChild key={label} variant="ghost" className="px-2"><a href={url} target="_blank" rel="noreferrer"><Icon />{label}<ArrowUpRight /></a></Button>)}</div>;
}

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(5, "Message is too short").max(2000),
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const parsed = schema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? "Please check the form"); return; }
    setError(""); setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          _subject: `New portfolio enquiry from ${parsed.data.name}`,
          _replyto: parsed.data.email,
          _template: "table",
          _captcha: "false",
          _autoresponse: `Hi ${parsed.data.name}, thank you for reaching out! I've received your message and will get back to you soon. — Sweta Singh, Full Stack Developer`,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (data.message && typeof data.message === "string" && data.message.toLowerCase().includes("activation")) {
        setSuccessMsg("Thanks! We've sent an activation link to the recipient inbox. Once clicked, direct delivery is active.");
        setStatus("sent");
        form.reset();
        return;
      }
      if (!res.ok || data.success === "false") throw new Error();
      setSuccessMsg("Thanks! Your message was sent successfully — check your inbox for a confirmation.");
      setStatus("sent"); form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field = "w-full rounded-xl border border-input bg-card px-4 py-3 outline-none transition-colors focus:border-primary";

  return (
    <section id="contact" className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2">
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">Contact</p>
        <h2 className="text-4xl md:text-5xl">Have a project in mind? Let's talk.</h2>
        <p className="mt-6 text-muted-foreground">Send a message and you'll get a confirmation in your inbox right away.</p>
        <div className="mt-10 space-y-3">
          <a href={`mailto:${EMAIL}`} className="block font-semibold hover:text-primary">{EMAIL}</a>
          <a href="tel:+919319614264" className="block font-semibold hover:text-primary">+91 93196 14264</a>
          <p className="text-muted-foreground">Noida, Uttar Pradesh, India</p>
        </div>
        <SocialLinks className="mt-6" />
      </div>
      <form onSubmit={onSubmit} className="space-y-4 rounded-2xl bg-secondary p-8">
        <input name="name" placeholder="Your name" className={field} maxLength={100} />
        <input name="email" type="email" placeholder="Your email" className={field} maxLength={255} />
        <textarea name="message" rows={5} placeholder="Tell me about your project" className={field} maxLength={2000} />
        {error && <p className="text-sm text-destructive">{error}</p>}
        {status === "sent" && (
          <div className="flex items-center gap-3 rounded-xl border border-green-500/40 bg-green-500/15 p-4 text-green-700 dark:border-green-500/30 dark:bg-green-950/40 dark:text-green-300">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
            <p className="text-sm font-semibold">{successMsg}</p>
          </div>
        )}
        {status === "error" && <p className="text-sm text-destructive">Something went wrong. Please email me directly.</p>}
        <button disabled={status === "sending"} className="w-full rounded-full bg-ink py-3 font-semibold text-ink-foreground transition-colors hover:bg-primary disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </form>
    </section>
  );
}

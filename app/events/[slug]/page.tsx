import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { EVENTS } from "@/lib/events";
import Magnetic from "@/components/ui/Magnetic";

export function generateStaticParams() {
  return EVENTS.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = EVENTS.find((e) => e.slug === slug);
  if (!event) return {};

  return {
    title: event.title,
    description: event.summary,
    openGraph: {
      title: event.title,
      description: event.summary,
      images: [{ url: event.heroImage }],
    },
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = EVENTS.find((e) => e.slug === slug);
  if (!event) notFound();

  return (
    <main className="pt-28 sm:pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#recent-events"
          className="inline-flex items-center gap-1.5 text-[#6f6759] hover:text-[#a8302f] text-sm font-medium transition-colors mb-6"
        >
          <ArrowLeft size={15} weight="bold" />
          Back to events
        </Link>

        <div className="relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl mb-8">
          <Image
            src={event.heroImage}
            alt={event.title}
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-[#18140f] tracking-tight mb-3">
          {event.title}
        </h1>
        <p className="text-[#8a6a2e] text-sm font-semibold tracking-wide uppercase mb-6">
          {event.client} · {event.location}
        </p>
        <p className="text-[#4a4237] text-lg leading-relaxed max-w-2xl mb-10">
          {event.description}
        </p>

        <Magnetic>
          <Link href="/#contact" className="group btn-island btn-primary font-semibold">
            Start a Conversation
            <span className="btn-island-icon bg-white/15">
              <ArrowUpRight size={16} weight="bold" />
            </span>
          </Link>
        </Magnetic>
      </div>
    </main>
  );
}

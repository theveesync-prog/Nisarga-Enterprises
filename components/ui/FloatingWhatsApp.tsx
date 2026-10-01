import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { CONTACT_WHATSAPP } from "@/lib/constants";

export default function FloatingWhatsApp() {
  return (
    <a
      href={CONTACT_WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-5 md:right-8 z-40 w-14 h-14 rounded-full bg-white border border-[#18140f]/8 flex items-center justify-center shadow-[0_16px_40px_-12px_rgba(24,20,15,0.35)] hover:scale-105 active:scale-95 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
    >
      <WhatsappLogo size={26} weight="fill" className="text-[#18140f]" />
    </a>
  );
}

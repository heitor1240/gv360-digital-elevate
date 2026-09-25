import { FaWhatsapp } from 'react-icons/fa';

import { WHATSAPP_DIAGNOSTIC_URL } from "@/lib/gv360";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_DIAGNOSTIC_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      data-cursor="link"
      className="fixed right-5 bottom-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.28)] transition-transform duration-300 hover:scale-110 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:right-7 sm:bottom-7"
    >
      <FaWhatsapp aria-hidden="true" className="size-7" />
    </a>
  );
}

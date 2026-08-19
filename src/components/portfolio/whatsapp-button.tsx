import { MessageCircle } from "lucide-react";

export function WhatsappButton() {
  const phone = "919325260228";
  const message = encodeURIComponent(
    "Hi Harsh, I reviewed your portfolio and would like to discuss a software engineering opportunity."
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Harsh on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full p-2.5 sm:px-4 sm:py-2.5 shadow-[0_12px_32px_rgba(37,211,102,0.3)] backdrop-blur-2xl transition-all duration-300 hover:scale-105 active:scale-95 bg-[#25D366] text-white hover:bg-[#20ba5a] border border-white/20"
    >
      <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white/20 shrink-0">
        <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
        </span>
        <MessageCircle size={17} className="fill-white text-white stroke-none" />
      </span>

      <div className="hidden sm:flex flex-col text-left pr-1">
        <span className="text-[10px] font-medium tracking-wide uppercase text-white/80 leading-none">
          Recruiters
        </span>
        <span className="text-xs font-bold tracking-tight text-white leading-tight mt-0.5">
          Chat on WhatsApp
        </span>
      </div>
    </a>
  );
}

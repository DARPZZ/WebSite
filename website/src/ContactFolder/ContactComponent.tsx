interface ContactProps {
  icon: string;
  link: string;
  label: string;
  handle?: string;
}

function ContactComponent({ icon, link, label, handle }: ContactProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in a new tab)`}
      className="group flex h-full flex-col items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-green-400/60 hover:bg-white/10 hover:shadow-[0_0_40px_-10px_rgba(74,222,128,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 md:p-8 4xl:gap-8 4xl:p-12"
    >
      <div className="flex size-20 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:scale-110 group-hover:ring-green-400/50 md:size-28 4xl:size-44">
        <img
          src={icon}
          alt=""
          className="size-12 object-contain md:size-16 4xl:size-28"
        />
      </div>

      <div className="flex flex-col items-center gap-1 text-center">
        <span className="font-inter text-lg font-semibold text-white md:text-xl 4xl:text-4xl">
          {label}
        </span>
        {handle && (
          <span className="font-inter text-sm text-gray-400 transition-colors duration-300 group-hover:text-green-400 4xl:text-2xl">
            {handle}
          </span>
        )}
      </div>
    </a>
  );
}

export default ContactComponent;

import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <main className="fixed inset-0 z-10 pointer-events-none py-6 px-4 flex flex-col items-start justify-between ">
      <div className="min-w-full h-fit! pointer-events-auto">
        <nav className="w-full flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="Backstage Talks Logo"
            width={330}
            height={100}
            className="w-auto h-3 lg:h-5 xl:h-9"
            loading="eager"
          />

          <Link
            className="text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold hover:underline text-[#251d20]"
            href="mailto:info@backstagetalks.com"
            target="_blank"
          >
            info@backstagetalks.com
          </Link>
        </nav>
      </div>

      <div className="lg:w-70 xl:w-100 h-fit! ml-3.5 flex flex-col items-start! gap-5 xl:gap-7 2xl:gap-10 text-sm md:text-base xl:text-xl 2xl:text-[22px] pointer-events-auto">
        <div>
          <p className="font-bold xl:leading-7.5 text-[#251d20]">
            Backstage Talks is a magazine of casual, but in depth dialogues on
            design and business. Our decisions shape and influence this complex
            world — to have a chance to make the right ones, we need to talk.
          </p>
          <Link href="http://buromilk.com/" target="_blank">
            <small className="text-xs xl:text-base text-[#251d20]">
              © 2026 <u>Published by Büro Milk</u>
            </small>
          </Link>
        </div>

        <Link
          className="text-sm md:text-base xl:text-xl 2xl:text-2xl font-bold underline text-[#251d20]"
          href="https://backstagetalks.com/privacy-policy.php"
          target="_blank"
        >
          Privacy Policy
        </Link>
      </div>
    </main>
  );
};

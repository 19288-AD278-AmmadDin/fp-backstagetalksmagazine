import Image from "next/image";
import "./Magazine.style.css";
import Link from "next/link";
import { sectionData } from "@/constants/constants";
export const Magazine = () => {
  return (
    <main className="px-4">
      {sectionData.map((item, index) => (
        <section
          className="magazine-section -mt-20 lg:mt-0 flex flex-col items-center justify-center text-center"
          key={index}
        >
          <div className="content flex flex-col items-center justify-center ">
            <Image
              src={item.imageSrc}
              alt={item.title}
              width={420}
              height={700}
              loading="eager"
              className="w-auto h-90 lg:h-100 xl:h-170"
            />

            <div className="flex flex-col items-center justify-center gap-3 xl:gap-5">
              <span className="text-sm md:text-base xl:text-xl 2xl:text-[22px] font-bold">
                <h3>
                  {item.linkDetails.length
                    ? item.title
                    : `${item.title} is sold out!`}
                </h3>
              </span>
              {item.linkDetails.map((linkObj, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-1 text-sm lg:text-base xl:text-lg 2xl:text-[19px] font-bold"
                >
                  <Link
                    href={linkObj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uppercase"
                    style={{ color: item.linkTextColor ?? "white" }}
                  >
                    {linkObj.text}
                  </Link>
                  {linkObj.extraText}
                </div>
              ))}
              <div className="text-sm lg:text-base xl:text-lg 2xl:text-[19px] font-bold">
                {item.linkDetails.length > 0
                  ? "or in "
                  : "If you are lucky, you may get the last pieces in "}
                <Link
                  key={index}
                  href={item.storeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: item.linkTextColor ?? "white" }}
                >
                  selected stores
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

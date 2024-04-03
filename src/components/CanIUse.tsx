import Link from "next/link";
import Image from "next/image";
import { BrowserEnums } from "@/utils/index";
import { features, feature } from "caniuse-lite";

const Section = ({ browser, data }) => {
  return (
    <div className={"mt-4"}>
      <h3 className={"py-4 text-sm font-bold capitalize"}>{browser}</h3>
      <div className={"grid grid-cols-4 gap-4 mb-2"}>
        {Object.entries(BrowserEnums[browser]).map(([key, value], index) => {
          return (
            <div
              className={"flex flex-col justify-center items-center gap-4"}
              key={key}
            >
              <Image
                src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/logos/${value}.svg`}
                alt={key}
                loading="lazy"
                width={48}
                height={48}
              />

              <div
                className={"mt-2 rounded-md font-bold p-2 w-full text-center"}
                style={{
                  backgroundColor:
                    data.desktop[index] === "No" ? "#ff0024" : "#47ca4c",
                }}
              >
                {data.desktop[index]}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function CanIUse({ tag }) {
  const {
    stats: {
      chrome,
      firefox,
      ie,
      edge,
      safari,
      and_chr,
      and_ff,
      android,
      ios_saf,
    },
  } = feature(features[tag]);
  const getSupportData = (arr) => {
    return arr.map((item) => {
      const firstSupportItems = Object.entries(item).find(
        (el) => el[1] === "y"
      );
      return firstSupportItems ? firstSupportItems[0] : "No";
    });
  };

  const data = {
    desktop: getSupportData([chrome, firefox, ie, edge, safari]),
    mobile: getSupportData([and_chr, and_ff, android, ios_saf]),
  };

  return (
    <div className={"my-12"}>
      <div className={"text-gray-500"}>
        This browser support data is from
        <Link
          className={"px-1 text-red-500"}
          href={`https://caniuse.com/#feat=${tag}`}
        >
          Caniuse
        </Link>
        ,which has more detail. A number indicates that browser supports the
        feature at that version and up.
      </div>
      <Section browser="desktop" data={data} />
      <Section browser="mobile" data={data} />
    </div>
  );
}

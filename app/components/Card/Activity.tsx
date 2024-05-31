import classNames from "classnames";
import Image from "next/image";
import { FaSpotify } from "react-icons/fa6";

export default function ActivityCard({
  imageUrl,
  name,
  details,
  state,
  spotify = false,
}: {
  imageUrl: string;
  name: string;
  details: string;
  state: string;
  spotify?: boolean
}) {
  return (
    <div className="flex w-full items-center gap-x-2 rounded-xl bg-[#0f0f0f] p-2">
      <Image
        className="h-16 w-16 rounded-xl"
        src={imageUrl}
        alt="assets"
        height={123}
        width={128}
      />
      <div className={classNames({
        "w-full": spotify,
        "text-sm text-[#dbdee1]": true,
      })}>
        {spotify ? (
          <h2 className="font-semibold w-full flex justify-between"><span>{name}</span> <span><FaSpotify size={20} className="text-[#1ED760]" /></span></h2>
        ) : (
          <h2 className="font-semibold">{name}</h2>
        )}
        <p>{details}</p>
        <p>{state}</p>
      </div>
    </div>
  );
}

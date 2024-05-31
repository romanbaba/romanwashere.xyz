import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

export default function Project({
  imgUrl,
  name,
  description,
  githubLink,
  websiteLink,
  tags,
}: { imgUrl: string; githubLink: string; websiteLink: string; name: string; description: string; tags: string[] }) {
  return (
    <div className="w-full h-full select-auto bg-gradient-to-r from-[#151515] to-[#161616]  rounded-md transition-all duration-200">
      <Image className="rounded-md blur-[1px] w-full h-[185px]" src={imgUrl} alt={name} height={512} width={512} />

      <div className="p-3 border rounded-lg border-[#262626]">
        <div className="flex justify-between items-center">
          <h2>{name}</h2>

          <div className="border-b-2 w-full mx-4 border-[#212225] cursor-move"></div>

          <div className="flex items-center gap-x-2">
            <Link href={githubLink} target="_blank" className="text-[#a7a7a7] hover:text-[#ccc] transition-all duration-200"><FaGithub size={20} /></Link>

            <Link href={websiteLink} target="_blank" className="text-[#a7a7a7] hover:text-[#ccc] transition-all duration-200"><LuExternalLink size={20} /></Link>
          </div>
        </div>

        <p className="text-[#a7a7a7] mt-1">{description}</p>

        <div className="flex items-center gap-x-1 mt-2 ">
          {tags.map((tag) => (
            <>
              <span className="py-1 px-3 bg-[#212225] text-[#ccc] rounded-full text-sm">{tag}</span>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
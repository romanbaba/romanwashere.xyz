import { item } from "@/lib/animate";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Technology({
  name,
  file,
  svg = true,
}: {
  name: string;
  file: string;
  svg?: boolean;
}) {
  return (
    <motion.div variants={item} className="h-[50px] cursor-pointer rounded-lg border border-[#262626] bg-gradient-to-r from-[#151515] to-[#161616] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-[#ccc]">
      <div className="flex items-center gap-x-3">
        <Image
          src={`/imgs/${file}.${svg ? "svg" : "png"}`}
          alt={name}
          height={24}
          width={24}
          className="rounded-md"
        />
        {name}
      </div>
    </motion.div>
  );
}

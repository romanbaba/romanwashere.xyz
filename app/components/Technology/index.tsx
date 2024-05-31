import Technologies from "@/app/components/Technology/components/Technologies";
import { container } from "@/lib/animate";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Technology() {
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 15 }}
      animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 15 }}
      className="container mx-auto w-11/12 sm:w-9/12  my-16 py-4">
      <h2 className="text-3xl">Technologies I Use</h2>
      <p className="text-[#a7a7a7]">I use a lot of technologies, but I&apos;m always learning new ones.</p>

      <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={container}>
        <Technologies />
      </motion.div>
    </motion.div>
  );
}
"use client";
import Square from "@/app/components/Background/Square";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { container, item } from "@/lib/animate";
import { motion } from "framer-motion";
import Project from "./components/Project";

export default function Projects() {


  return (
    <>
      <div className="relative z-10 h-full">
        <Square
          column="10"
          row="10"
          transparentEffectDirection="bottomToTop"
          blockColor="#161616"
        />

        <Header />
        <motion.div
          initial={{ opacity: 0, translateY: 15 }}
          animate={{ opacity: 1, translateY: 0 }}
          className="container mx-auto w-11/12 sm:w-9/12 my-16 pb-4 pt-12">
          <div>
            <h2 className="text-5xl font-semibold">My Projects</h2>
            <p className="text-[#a7a7a7] sm:w-3/5 mt-1">On this page, you can see the projects that I have developed, which are actively ongoing or suspended.</p>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-12">
            <motion.div variants={item}>
              <Project
                imgUrl="https://i.hizliresim.com/pkfxiu2.png"
                name="Haberler"
                githubLink="https://github.com/haberlerbot"
                websiteLink="https://haberlerbot.xyz"
                description="Discord Turkey&apos;s first social media focused news platform
Get access to news from your servers."
                tags={["TypeScript", "MongoDB", "i18next"]}
              />
            </motion.div>


            <motion.div variants={item}>
              <Project
                imgUrl="https://i.hizliresim.com/c6iv9tc.png"
                name="Raven"
                githubLink="https://github.com/rravencode"
                websiteLink="https://discord.com/invite/altyapilar"
                description="Our code sharing community where people can get free support and access free codes."
                tags={["Community", "Support", "Discord"]}
              />
            </motion.div>
          </motion.div>
        </motion.div>
        <Footer />
      </div>
    </>
  );
}

import Spinner from "@/app/components/Providers/Spinner";
import Repository from "@/app/components/Repositories/components/Repository";
import { container, item } from "@/lib/animate";
import SWR from "@/lib/swr";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Repositories() {
  const [ref, inView] = useInView();

  const {
    data,
    isLoading,
  } = SWR(`https://api.github.com/users/${process.env.NEXT_PUBLIC_SOCIAL_MEDIA_GITHUB}/repos`);
  const repositories = data ?? null;

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, translateY: 15 }}
          animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 15 }}
          className="container mx-auto w-11/12 sm:w-9/12  my-16 py-4">
          <h2 className="text-3xl">Repositories</h2>
          <p className="text-[#a7a7a7]">My Github Open Source Projects.</p>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-4">
            {repositories.filter((repo: any) => repo.name !== process.env.NEXT_PUBLIC_SOCIAL_MEDIA_GITHUB).map((repo: any, index: number) => (
              <motion.div variants={item} key={index}>
                <Repository
                  htmlURL={repo.html_url}
                  fullName={repo.full_name}
                  updatedAt={repo.updated_at}
                  description={repo.description}
                  language={repo.language}
                  licenseName={repo?.license?.name}
                  stargazersCount={repo.stargazers_count}
                  forksCount={repo.forks_count}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
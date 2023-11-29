import { GithubRepositoriesData } from '@/types';
import { Colors } from '@/utils/colors';
import { githubUsername } from '@/utils/variables';
import Link from 'next/link';
import { BiGitRepoForked } from 'react-icons/bi';
import { FaRegStar } from 'react-icons/fa';

export default function Repositories({ github }: { github: GithubRepositoriesData | null }) {
  return (
    <div className='container mx-auto pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12'>
      <div className='space-y-2 my-8'>
        <h3 className='font-semibold text-3xl text-zinc-200'>Repositories</h3>
        <p className='text-zinc-400'>My Github Open Source Projects.</p>
      </div>
      <div className='grid gap-4 md:grid-cols-2'>
        {github ? github.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 4).map((data, key) => (
          <div className="w-full rounded-lg bg-zinc-900/30 hover:bg-zinc-900/70 border border-zinc-900/30 hover:border-violet-500 p-4 cursor-pointer transition-colors duration-200" key={key}>
            <div className="flex justify-between items-center">
              <Link href={`https://github.com/${githubUsername}/${data.name}`}><h1 className="font-semibold text-violet-500 hover:opacity-75 truncate">{data.name}</h1></Link>
              <div className=" text-sm px-2 py-1 rounded-2xl border border-solid border-gray-700">Public</div>
            </div>
            <br/>
            <h1 className="text-sm line-clamp-2">
              {data.description}
            </h1>
            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center gap-2">
                <div className={'w-4 h-4 rounded-full'} style={{
                  backgroundColor:
                  // @ts-ignore
                 Colors[data.language]?.color || 'GRAY' }}/>
                <h1 className="text-xs">{data.language}</h1>
              </div>
              <div className="flex items-center gap-2">
                <FaRegStar size="18px" color="GRAY"/>
                <h1 className="font-semibold text-sm">{data.stargazers_count}</h1>
              </div>
              <div className="flex items-center gap-2">
                <BiGitRepoForked size="18px" color="GRAY"/>
                <h1 className="font-semibold text-sm">{data.forks}</h1>
              </div>
            </div>
          </div>
        )) : (<></>)}
      </div>
    </div>
  );
}
'use client';

import Contact from '@/components/Contact';
import Header from '@/components/Header';
import LanguagesAndTechnologies from '@/components/LanguagesAndTechnologies';
import PorfileDetails from '@/components/PorfileDetails';
import Projects from '@/components/Projects';
import Repositories from '@/components/Repositories';
import { DiscordUserData, GithubRepositoriesData } from '@/types';
import SWR from '@/utils/swr';
import { githubUsername } from '@/utils/variables';
import { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { animateScroll as scroll } from 'react-scroll';

export default function Home() {
  const discord = SWR('discord');
  const discordUser: DiscordUserData | null = discord.data ? discord.data : null;

  const github = SWR('github');
  const githubUser: GithubRepositoriesData | null = github.data ? github.data : null;

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(top > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='flex h-screen'>
        <div className='w-full h-full bg-zinc-950 selection:bg-violet-500 selection:text-zinc-100'>
          <Header />
          <PorfileDetails discord={discordUser}/>
          <Contact />
          <Repositories github={githubUser} />
          <LanguagesAndTechnologies />
          <Projects />
          <div className='select-none bg-zinc-900/30 w-full py-4 text-zinc-200 0'>
            <div className='mx-auto w-11/12 sm:w-9/12 md:w-7/12'>
              <div className='space-y-4 text-center'>
                developing and designing; {githubUsername}
              </div>
            </div>
          </div>
          <div className='flex space-x-2 mr-6 mb-4 right-0 bottom-0 z-50 fixed items-center sm:space-x-4'>
            <button onClick={handleScrollToTop} className={`opacity-100 cursor-pointer inline-flex items-center p-2 rounded-full bg-zinc-900 hover:bg-zinc-900/80 transition-opacity ${isVisible ? 'visible' : 'invisible'}`}>
              <AiOutlineArrowUp size={'23px'} className='h-6 w-6 text-zinc-400'/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

import { AiOutlineArrowUp } from 'react-icons/ai';
import { BsSpotify } from 'react-icons/bs';
import { SiVisualstudiocode } from 'react-icons/si';

import config from '../config';
import SWR from '../lib/swr';

const Home = () => {
    const DISCORD = SWR('linkcord');
    const discord = DISCORD.data ? DISCORD.data : null;

    const GITHUB = SWR('github');
    const github = GITHUB.data ? GITHUB.data : null;

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
                {/* Avatar, Profile */}
                <div className='container mx-auto bg-zinc-900/30 w-11/12 sm:w-9/12 md:w-7/12 rounded-md flex flex-col-reverse my-16 py-10 px-8 justify-between md:flex-row md:items-center'>
                    <div className='md:w-8/12'>
                        <div className='space-y-2'>
                            <h1 className='text-2xl font-semibold'> Hello there, I'm <span className='text-2xl font-semibold text-violet-500'>@{config.github.username}</span> </h1>
                            <ul className='flex flex-row font-medium gap-x-1'>
                                <li key={1}>he/him  ・ </li>
                                <li key={2}>Full-Stack Developer</li>
                            </ul>
                        </div>
                        {/* Spotify, VSCode and dark mode */}
                        <div className='font-medium rounded-md flex text-zinc-300 items-center mt-4'>
                                {discord && discord.data && discord.data['listening_to_spotify'] ? (
                                     <>
                                    <div className='area'>
                                        <BsSpotify size={'23px'} color='#1DB954'/>
                                    </div>
                                    <div className='truncate hover:text-clip'>
                                        <div>
                                            <div className='text-zinc-300 break-words mx-2 select-none leading-tight'>
                                                <p>Listening to <b>{discord.data.spotify.song}</b> by <b>{discord.data.spotify.artist.includes(';') ? discord.data.spotify.artist.split(';')[0] : discord.data.spotify.artist}</b></p>
                                            </div>
                                        </div>
                                    </div>
                                     </>
                                ): (
                                    <>
                                    </>
                                )}
                        </div>
                    </div>
                    <div className='avatar'>
                    {discord ? (
                        <div className={"w-36 rounded-full mb-4 md:mb-0 ring ring-primary ring-offset-base-100 ring-offset-2"}>
                                <img className='rounded-full hover:opacity-75 transition duration-700' src={`https://cdn.discordapp.com/avatars/${discord.data['discord_user'].id}/${discord.data['discord_user'].avatar}`} alt='avatar' />
                                <div className="absolute bottom-1 bg-[#0d0d10] rounded-full right-1 w-10 h-10 flex items-center justify-center">
                                <div className="w-full h-full relative flex items-center justify-center">
                                    <div className={"animate-ping w-6 h-6 rounded-full " + (discord.data['discord_status'] == 'dnd' ? 'bg-red-500' : discord.data['discord_status'] == 'idle' ? 'bg-yellow-500' : discord.data['discord_status'] == 'online' ? 'bg-green-500' : 'bg-zinc-600')} />
                                    <div className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full " + (discord.data['discord_status'] == 'dnd' ? 'bg-red-500' : discord.data['discord_status'] == 'idle' ? 'bg-yellow-500' : discord.data['discord_status'] == 'online' ? 'bg-green-500' : 'bg-zinc-600')} />
                                </div>
                     </div>
                        </div>
                        ): (
                            <div className={"w-36 rounded-full mb-4 md:mb-0 ring ring-primary ring-offset-base-100 ring-offset-2"}>
                                <img className='rounded-full hover:opacity-75 transition duration-700' src={'https://media.tenor.com/IHdlTRsmcS4AAAAS/404.gif'} alt='avatar' />
                            </div>
                        )}
                    </div>
                </div>
                {/* Contact */}
                <div className='container mx-auto pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12'>
                    <div className='space-y-2 my-8'>
                        <h3 className='font-semibold text-3xl text-zinc-200'> Contact </h3>
                        <p className='text-zinc-400'> My social media accounts. </p>
                    </div>
                        <div className='grid gap-4 md:grid-cols-2'>
                            {config.social_media_accounts.map((media) => (
                                <Link to={media.to} className='rounded-md focusRing overflow-x-hidden cursor-pointer p-4 transition duration-200 bg-zinc-900/30 hover:bg-zinc-900/70 items-center justify-between flex space-x-2'>
                                    <div className='line-clamp-2'>
                                        <h2 className='font-semibold text-zinc-200 truncate'>{media.label}</h2>
                                        <p className='text-zinc-400 line-clamp-2'>You can follow me on {media.label}.</p>
                                    </div>
                                    <div className='flex-shrink-0'>
                                        <media.icon size={'23px'} className='h-8 w-8 text-zinc-200 opacity-75'/>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/* Github Repositories */}
                    <div className='container mx-auto pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12'>
                        <div className='space-y-2 my-8'>
                            <h3 className='font-semibold text-3xl text-zinc-200'>Repositories</h3>
                            <p className='text-zinc-400'>My Github Open Source Projects.</p>
                        </div>
                        <div className='grid gap-4 md:grid-cols-2'>
                            {github ? github.map((repo: { 
                                name: string,
                                html_url: string
                                owner: { login: string },
                                description: string,
                                forks: number,
                                stargazers_count: number,
                                language: string
                             }) => (
                                <main>
                                    <div className='area'>
                                    <Link to={repo.html_url}>
                                        <div className='rounded-lg cursor-pointer flex flex-col p-4 text-neutral-500 justify-between transition duration-200 bg-zinc-900/30 hover:bg-zinc-900/70 h-full'>
                                            <div className='space-y-2'>
                                                <h3 className='font-semibold text-violet-500 truncate'>{repo.name}</h3>
                                                <p className='text-white truncate'>{repo.description}</p>
                                            </div>
                                            <div className='mt-4'>
                                                <ul className='text-zinc-400'>
                                                    <li key={1}><b>{repo.stargazers_count}</b> Stars ・ <b>{repo.forks}</b> Forks</li>
                                                    <li className='mt-2' key={2}>Language: <b>{repo.language ?? 'Markdown'}</b></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                </main>
                            )): (
                                <main>
                                    <div className='area'>
                                    <Link to='/404'>
                                        <div className='rounded-lg cursor-pointer flex flex-col p-4 text-neutral-500 justify-between transition duration-200 bg-zinc-900/30 hover:bg-zinc-900/70 h-full'>
                                            <div className='space-y-2'>
                                                <h3 className='font-semibold text-violet-500 truncate'>Failed to retrieve data</h3>
                                                <p className='text-white truncate'>I couldn't get the required data</p>
                                            </div>
                                            <div className='mt-4'>
                                                <ul className='text-zinc-400'>
                                                    <li key={1}><b>0</b> Stars ・ <b>0</b> Forks</li>
                                                    <li className='mt-2' key={2}>Language: <b>Unknow</b></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                </main>
                            )}
                        </div>
                    </div>
                    {/* Languages and technologies */}
                    <div className='mt-6 container mx-auto pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12'>
                        <div className='space-y-2 my-5'>
                            <h3 className='font-semibold text-3xl text-zinc-200'>Languages ​​and technologies I use</h3>
                            <div className='mt-4 grid gap-2 sm:grid-cols-3 md:grid-cols-4'>
                                {config.techs.map((lang) => (
                                    <div className='area'>
                                        <div className='rounded-md overflow-x-hidden p-4 transition duration-200 bg-zinc-900/30 hover:bg-zinc-900/70 items-center justify-between flex space-x-2'>
                                            <div className='line-clamp-2'>
                                                <h2 className='font-semibold text-zinc-200 truncate'>{lang.lang}</h2>
                                            </div>
                                            <div className='flex-shrink-0'>
                                                <lang.icon size={'23px'}/>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Footer */}
                    <div className='select-none bg-zinc-900/30 w-full py-4 text-zinc-200 0'>
                        <div className='mx-auto w-11/12 sm:w-9/12 md:w-7/12'>
                            <div className='space-y-4 text-center'>
                                developing and designing; {config.github.username}
                            </div>
                        </div>
                    </div>
                    {/* Up button */}
                    <div className='flex space-x-2 mr-6 mb-4 right-0 bottom-0 z-50 fixed items-center sm:space-x-4'>
                        <button onClick={handleScrollToTop} className={`opacity-100 cursor-pointer inline-flex items-center p-2 rounded-full bg-zinc-900 hover:bg-zinc-900/80 transition-opacity ${isVisible ? 'visible' : 'invisible'}`}>
                            <AiOutlineArrowUp size={'23px'} className='h-6 w-6 text-zinc-400'/>
                        </button>
                    </div>
                </div>
        </div>
      </>
    )
};

export default Home;

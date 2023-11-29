import { DiscordUserData } from '@/types';
import { githubUsername } from '@/utils/variables';
import Image from 'next/image';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { BsSpotify } from 'react-icons/bs';


export default function PorfileDetails({ discord }: {discord: DiscordUserData | null}) {
  return (
    <div className='container mx-auto bg-zinc-900/30 w-11/12 sm:w-9/12 md:w-7/12 rounded-md flex flex-col-reverse my-16 py-10 px-8 justify-between md:flex-row md:items-center'>
      <div className='md:w-8/12'>
        <div className='space-y-2'>
          <h1 className='text-2xl font-semibold'> Hello there, I&apos;m <span className='text-2xl font-semibold text-violet-500 hover:opacity-75 cursor-pointer'>@{githubUsername}</span> </h1>
          <ul className='flex flex-row font-medium gap-x-1'>
            <li key={1}>he/him  ・ </li>
            <li key={2}>Full-Stack Developer</li>
          </ul>
        </div>
        {/* Spotify, VSCode and dark mode */}
        <div className='flex flex-col'>
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
            ) : (
              <>
              </>
            )}
          </div>
          <div className='font-medium rounded-md flex text-zinc-300 items-center mt-4'>
            {discord && discord.data && discord.data['activities'].find((data) => data.name === 'Visual Studio Code') ? (
              <>
                <div className='area'>
                  <BiLogoVisualStudio size={'23px'} color='#0078d7'/>
                </div>
                <div className='truncate hover:text-clip'>
                  <div>
                    <div className='text-zinc-300 break-words mx-2 select-none leading-tight'>
                      <p>Editing <b>{discord.data['activities'].find((data) => data.name === 'Visual Studio Code')?.details}</b></p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
              </>
            )}
          </div>
        </div>
      </div>
      <div className='avatar'>
        {discord ? (
          <div className={'w-36 rounded-full mb-4 md:mb-0 ring ' + (discord.data['discord_status'] == 'dnd' ? 'ring-[#ed4245]' : discord.data['discord_status'] == 'idle' ? 'ring-[#fee75c]' : discord.data['discord_status'] == 'online' ? 'ring-[#57f287]' : 'ring-[#2c2f33]')}>
            <Image className='rounded-full hover:opacity-75 transition duration-700' src={`https://cdn.discordapp.com/avatars/${discord.data['discord_user'].id}/${discord.data['discord_user'].avatar}`} alt='avatar' width={1024} height={1024} />
            <div className="absolute bottom-1 bg-[#0d0d10] rounded-full right-1 w-10 h-10 sm:hidden md:flex lg:flex items-center justify-center">
              <div className="w-full h-full relative flex items-center justify-center">
                <div className={'animate-ping w-6 h-6 rounded-full ' + (discord.data['discord_status'] == 'dnd' ? 'bg-red-500' : discord.data['discord_status'] == 'idle' ? 'bg-yellow-500' : discord.data['discord_status'] == 'online' ? 'bg-green-500' : 'bg-zinc-600')} />
                <div className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full ' + (discord.data['discord_status'] == 'dnd' ? 'bg-red-500' : discord.data['discord_status'] == 'idle' ? 'bg-yellow-500' : discord.data['discord_status'] == 'online' ? 'bg-green-500' : 'bg-zinc-600')} />
              </div>
            </div>
          </div>
        ) : (
          <div className={'w-36 rounded-full mb-4 md:mb-0 ring ring-primary ring-offset-base-100 ring-offset-2'}>
            <Image className='rounded-full hover:opacity-75 transition duration-700' src={'https://media.tenor.com/IHdlTRsmcS4AAAAS/404.gif'} alt='avatar' width={1024} height={1024} />
          </div>
        )}
      </div>
    </div>
  );
}
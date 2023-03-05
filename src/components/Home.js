import React, { useState, useEffect } from 'react'
import config from '../config.romanwashere.json';
import axios from 'axios'

export default function Home() {   
    const [ profile, setProfile ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://linkcord.js.org/api/v3/user/'+config.discord.id);
            setProfile(response.data.data)
        }
        fetchData();
    }, [])

    var statusColor = 'h-4 w-4 rounded-full bg-gray-500';
    var status = 'Offline';
    var picture = 'https://cdn.discordapp.com/attachments/1080594562042568715/1081697475724840991/4.png'

    if(profile.activities && profile.activities[0].name === 'Spotify') {
      status = `Listening to part ${profile.activities[0].details} made by ${profile.activities[0].state}`

      if(profile.status === 'online') {
          statusColor = 'h-4 w-4 rounded-full bg-green-500'
      } else if(profile.status === 'idle') {
          statusColor = 'h-4 w-4 rounded-full bg-orange-500'
      } else if(profile.status === 'dnd') {
          statusColor = 'h-4 w-4 rounded-full bg-red-500'
      }
    } else if(profile.activities && profile.activities[0].name === 'Visual Studio Code') {
      status = profile.activities[0].name
      statusColor = 'h-4 w-4 rounded-full bg-blue-500'
    } else if(profile.clients && profile.clients.mobile) {
      status = 'Online in phone'
      statusColor = 'h-4 w-4 rounded-full bg-green-500'
    } else if(profile.status === 'online') {
        status = 'Online'
        statusColor = 'h-4 w-4 rounded-full bg-green-500'
    } else if(profile.status === 'idle') {
        status = 'Idle'
        statusColor = 'h-4 w-4 rounded-full bg-orange-500'
    } else if(profile.status === 'dnd') {
        status = 'Do Not Disturb'
        statusColor = 'h-4 w-4 rounded-full bg-red-500'
    }

    if(profile.avatar) {
        picture = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}?size=1024`
    }

    return (
        <div className='container mx-auto w-11/12 sm:w-9/12 md:w-7/12 rounded-md flex flex-col-reverse my-16 py-10 px-8 justify-between md:flex-row md:items-center'>
        <div className='md:w-8/12'>
        <div className='space-y-2'>
          <div className='font-semibold text-xl text-neutral-200 md:text-3xl'>
            <h1> Hello there, I'm <a href={'https://github.com/'+config.github.username} className='text-violet-500 hover:underline cursor-pointer transition-all'> @{config.github.username} </a> </h1>
          </div>
          <p className='text-zinc-200 font-medium'> {config.pronouns} ・ {config.develop} developer </p>
        </div>
        <div className='font-medium rounded-md flex text-zinc-300 items-center mt-4'>
          <div className='area'>
            <div className={statusColor}></div>
          </div>
          <div className='truncate hover:text-clip'>
                <div>
                    <div className='text-zinc-300 break-words mx-2 select-none leading-tight'>
                      <p> {status} </p>
                </div>            
            </div>     
          </div>
        </div>
        </div>
        <div className='rounded-full h-36 mb-4 w-36 md:mb-0 flex justify-center'>
          <div>
            <img className='rounded-full hover:opacity-75 cursor-pointer' src={picture} alt='discord' />
          </div>
        </div>
      </div>  
    )
}

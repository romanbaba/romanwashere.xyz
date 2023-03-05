import React from 'react'
import config from '../config.romanwashere.json';

export default function Footer() {   
    return (
        <div className='select-none bg-zinc-950 w-full py-4 text-zinc-200'>
            <div className='mx-auto w-11/12 sm:w-9/12 md:w-7/12'>
                <div className='space-y-4 text-center'>
                    <p> Develop by <a href={'https://discord.com/users/'+config.discord.id} target='_blank' rel='noreferrer' className='underline underline-offset-1 text-ellipsis overflow-hidden'>'Roman</a> 💖 </p>
                </div>
            </div>
        </div>
    )
}

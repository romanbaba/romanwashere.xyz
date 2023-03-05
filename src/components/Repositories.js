import React, { useState, useEffect } from 'react'
import config from '../config.romanwashere.json'
import axios from 'axios'

export default function Repositories() {
    const [ repositories, setRepositories ] = useState([]);

    useEffect(() => {
        const fetchRepositories = async () => {
            const response = await axios.get('https://api.github.com/users/'+config.github.username+'/repos');
            setRepositories(response.data)
        }

        fetchRepositories();
    }, [])

    return (
      <div className='container mx-auto pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12'>
        <div className='space-y-2 my-8'>
            <h3 className='font-semibold text-3xl text-zinc-200'> Repositories </h3>
            <p className='text-zinc-400'> My Github Open Source Projects. </p>
        </div>
        <div className='grid gap-4 md:grid-cols-2'>
            {repositories.slice(0, 4).map(repo => (
                <div className='area'>
                <a href={repo.html_url} target="_blank" rel='noreferrer noopener' className='rounded-md focusRing overflow-x-hidden cursor-pointer p-4 transition duration-200 bg-zinc-950 hover:bg-zinc-950/70 items-center justify-between flex space-x-2'>
                    <div className='line-clamp-2'>
                        <h2 className='font-semibold text-zinc-200 truncate'> {repo.name} </h2>
                        <p className='text-zinc-400 line-clamp-2'> {repo.description} </p>
                    </div>
                </a>
            </div>
            ))}
        </div>
      </div>
    )
}
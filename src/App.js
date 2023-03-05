import { Helmet } from 'react-helmet';
import Home from "./components/Home"
import Contact from "./components/Contact"
import Repositories from "./components/Repositories"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import React from 'react'
import config from './config.romanwashere.json'

export default function App() {
  return (
    <>
    <Helmet>
          <title> @{config.github.username} | Full-stack </title>
          <link rel="icon" type="image/x-icon" href="./favicon.ico" />
    </Helmet>

    <Index />
    </>
  )
}

function Index() {
  return (
    <div className='bg-[#000] h-full selection:bg-violet-500 selection:text-zinc-100'>
      <Navbar />
      <Home />
      <Contact />
      <Repositories />
      <div>
        <div className='space-y-2 my-8'>

        </div>
      </div>
      <Footer />
    </div>
  )
}
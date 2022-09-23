import Head from 'next/head'
import React from 'react'
import Footer from '../sections/Footer'
import Header from '../sections/Header'

const layout = ({children}) => {
  return (
    <>
    <Head>
        <title>Dark Mode Theme</title>
        <meta name='description' content='Create dark mode in tailwind'/>
    </Head>
    <div className=' min-h-screen flex flex-col'> 
        <Header/>
    
        <main className='flex-grow'>
            {children}
        </main>
        <Footer/>   
    </div>
    </>
  )
}

export default layout
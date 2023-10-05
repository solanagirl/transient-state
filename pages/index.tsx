import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className='min-h-screen bg-gray animate-gradient'>
      <Navbar />
      <main className='px-16 md:px-24'>
        <div className='w-full flex flex-row flex-wrap-reverse md:flex-wrap gap-8'>
          <>
            <iframe className='hidden md:block' src="https://docs.google.com/presentation/d/e/2PACX-1vT1xWJa8AJlYHkK2FuWRsW1Lk8xyTKiXURPd7FPgAmboyzk9YOfbN7AaQOdquraMuJGsG_wSkNjyjoA/embed?start=false&loop=false&delayms=10000" width="960" height="569"></iframe>
            <iframe className='block md:hidden' src="https://docs.google.com/presentation/d/e/2PACX-1vT1xWJa8AJlYHkK2FuWRsW1Lk8xyTKiXURPd7FPgAmboyzk9YOfbN7AaQOdquraMuJGsG_wSkNjyjoA/embed?start=false&loop=false&delayms=10000" width="400" height="250"></iframe>
          </>
          <div className='flex flex-shrink flex-col gap-8'>
            <h1 className='text-2xl'>Govern the Direction of Flow</h1>
            <h2 className='text-lg text-wrap md:w-64'>Vote on topics of change to be evaluated in The Transient State.</h2>
            <div className='flex flex-grow flex-col gap-4 bg-black justify-between opacity-80'>
              <div>
                <div className='bg-black text-white mx-2 px-2 py-1 border-b-2 border-white'>
                  <p>Number 1</p>
                </div>
                <div className='bg-black text-white mx-2 px-2 py-1 border-b-2 border-white'>
                  <p>Number 1</p>
                </div>
                <div className='bg-black text-white mx-2 px-2 py-1 border-b-2 border-white'>
                  <p>Number 1</p>
                </div>
              </div>
              <div className='text-white text-center mx-1 my-1 py-8 border-white border-2 cursor-pointer hover:bg-gray-800'>
                <p>Propose Topic</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

    </div>
  )
}

export default Home

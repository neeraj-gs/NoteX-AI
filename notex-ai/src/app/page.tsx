import TypeWriterTitle from '@/components/TypeWriterTitle'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className='bg-gradient-to-r min-h-screen grainy from-rose-100 to-teal-100'>
      <div className='flex justify-between'>
        <h2 className='text-3xl text-green-600 font-extrabold'>NoteX AI</h2>
        <div className='mr-4 mt-2'>
          {/* <Link href="/sign-up">
            <Button  className='mr-2 bg-green-600'>Sign Up</Button>
          </Link>
          <Link href="/sign-in">
            <Button  className='mr-2 bg-green-600'>Sign In</Button>
          </Link> */}
          <UserButton afterSignOutUrl='/'/>
        </div>
      </div>
      
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h1 className='font-semibold text-4xl text-center'>
          Notes App Integrated with your 
          <span className='text-green-600 font-bold'> Personal AI</span>   Assistant.
        </h1>
        <div className="mt-4"></div>

        {/* //typewriter */}
        <h3 className='font-semibold text-3xl text-center text-slate-700'>
          <TypeWriterTitle />
        </h3>
        <div className="mt-8"></div>

        <Link href="/dashboard" className='flex justify-center'>
          <Button className='bg-green-600'>Get Started <ArrowRight className='ml-2 w-5 h-5' /></Button>
        </Link>

      </div>
    </div>
  )
}

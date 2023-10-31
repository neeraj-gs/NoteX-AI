import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-gradient-to-r min-h-screen grainy from-rose-100 to-teal-100'>
      <h2>NoteX AI.</h2>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h1 className='font-semibold text-4xl text-center'>
          Notes App Integrated with your 
          <span className='text-green-600 font-bold'> Personal AI</span>   Assistant.
        </h1>
        <div className="mt-4"></div>

        {/* //typewriter */}
        <h3 className='font-semibold text-3xl text-center text-slate-700'>AI Integrated</h3>
      </div>
    </div>
  )
}

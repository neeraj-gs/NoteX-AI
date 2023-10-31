import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-gradient-to-r min-h-screen grainy from-rose-100 to-teal-100'>
      <h2>NoteX AI.</h2>
      <div className='h-screen flex justify-center items-center'>
        <h1 className='font-semibold text-4xl text-center'>AI Notes App Assisted with Your AI Companion.</h1>
      </div>
    </div>
  )
}

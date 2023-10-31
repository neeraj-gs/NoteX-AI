import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import { Separator } from '@/components/ui/separator'

type Props = {}

const DashboardPage = (props: Props) => {
  return (
    <>
        <div className='grainy min-h-screen'>
            <div className='max-w-7xl mx-auto p-10'>
                <div className="h-14"></div>
                <div className='flex justify-around items-center md:flex-row sm:flex-col'>
                    <div className='flex justify-evenly items-center'>
                      <Link href="/">
                        <Button className='bg-green-600' size="sm" ><ArrowLeft className='mr-2 w-4 h-4' />Back</Button>
                      </Link>
                      <div className='w-8'></div>
                      <h1 className='text-3xl font-bold text-gray-800'>My Notes</h1>
                      <div className="w-8"></div>
                      <UserButton afterSignOutUrl='/'/>
                    </div>
                </div>

                <div className="h-8"></div>
                <Separator />
                <div className="h-8"></div>

                {/*List all NOtes Here */}
                <div className='text-center'>
                  <h2 className='text-xl text-gray-500'>You Have No Notes Yet..  Create One</h2>
                </div>

            </div>
        </div>
    </>
  )
}

export default DashboardPage
import { Button } from '@/components/ui/button'
import { clerk } from '@/lib/clerk-server'
import { db } from '@/lib/db'
import { $notes } from '@/lib/db/schema'
import { auth } from '@clerk/nextjs'
import { and, eq } from 'drizzle-orm'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    params:{
        noteId:string
    }
}

const NotebookPage = async ({params:{noteId}}: Props) => {
    const {userId} = await auth();
    if(!userId){
        return redirect('/dashboard')
    }
    const user = await clerk.users.getUser(userId)
    const notes = await db
    .select()
    .from($notes)
    .where(and(eq($notes.id, parseInt(noteId)), eq($notes.userId, userId)));

    if(!notes.length){
        return redirect('/dashboard')
    }

    const note = notes[0];


  return (
    <div className='min-h-screen grainy p-8'>
        <div className='max-w-4xl mx-auto'>
            <div className='border shadow-xl border-stone-200 rounded-xl p-4 flex items-center'>
                <Link href='/dashboard'>
                    <Button className='bg-green-600' size='sm'><ArrowLeft /> Back</Button>
                </Link>
                <div className="w-4"></div>
                <span className='font-semibold'>
                    {user.firstName} {user.lastName}
                </span>
                <span className='inline-block mx-1'>/</span>
                <span className='text-stone-500 font-semibold'>{note.name}</span>
            </div>
        </div>
    </div>
  )
}

export default NotebookPage
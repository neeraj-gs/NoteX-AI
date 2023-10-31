"use client"
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Plus } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'

type Props = {}

const CreateNoteDialog = (props: Props) => {
    const [input,setInput] = React.useState('')

  return (
    <Dialog>
        <DialogTrigger>
            <div className=' flex border-dashed border-2 border-emerald-600 h-full rounded-xl items-center justify-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4'>
                <Plus className='w-6 h-6 text-green-600' strokeWidth={3}/>
                <h2 className='font-semibold text-green-600 sm:mt-2'>Create New NoteBook</h2>
            </div>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Create New Note Book</DialogTitle>
                <DialogDescription>You can Create notebook by clicking the buton Below</DialogDescription>
            </DialogHeader>
            <form>
                <Input value={input} onChange={e=>setInput(e.target.value)} placeholder='Name...' />
                <div className="h-4"></div>
                <div className="flex items-center gap-2 justify-end">
                    <Button type='reset' variant='secondary'>Cancel</Button>
                    <Button type='submit' className='bg-green-600'>Create</Button>
                </div>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default CreateNoteDialog
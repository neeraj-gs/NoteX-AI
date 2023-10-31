"use client"
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Plus } from 'lucide-react'

type Props = {}

const CreateNoteDialog = (props: Props) => {
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
                <div className="h-4"></div>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default CreateNoteDialog
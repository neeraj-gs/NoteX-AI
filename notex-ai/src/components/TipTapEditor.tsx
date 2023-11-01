"use client"
import React, { useEffect, useState } from 'react'
import {EditorContent, useEditor} from '@tiptap/react'
import {StarterKit} from '@tiptap/starter-kit'
import TipTapMenuBar from './TipTapMenuBar'
import { Button } from './ui/button'
import { useDebounce } from '@/lib/useDebounce'

type Props = {}

const TipTapEditor = (props: Props) => {
    const [editorState,setEditorState] =  useState('');
    const editor = useEditor({
        autofocus:true,
        extensions: [
            StarterKit,
        ],
        content:editorState,
        onUpdate:({editor})=>{
            setEditorState(editor.getHTML()) //allows to get back html and bind it ot the state
        }
    })

    const debouncedEditorState = useDebounce(editorState,500)

    useEffect(()=>{
        //save to db
        
        console.log(debouncedEditorState)
    },[debouncedEditorState])
  return (
    <>
        <div className='flex'>
            {editor && (
                <TipTapMenuBar editor={editor} />
            )}
            
            <Button className='ml-4'>Saved</Button>
        </div>

        <div className='prose'>
            <EditorContent editor={editor} />
        </div>
    </>
  )
}

export default TipTapEditor
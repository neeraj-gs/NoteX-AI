import React, { useState } from 'react'
import {EditorContent, useEditor} from '@tiptap/react'
import {StarterKit} from '@tiptap/starter-kit'
import TipTapMenuBar from './TipTapMenuBar'
import { Button } from './ui/button'

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
  return (
    <>
        <div className='flex'>
            {editor && (
                <TipTapMenuBar editor={editor} />
            )}
            
            <Button>Saved</Button>
        </div>

        <div className='prose'>
            <EditorContent editor={editor} />
        </div>
    </>
  )
}

export default TipTapEditor
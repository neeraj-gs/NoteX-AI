import React, { useState } from 'react'
import {EditorContent, useEditor} from '@tiptap/react'
import {StarterKit} from '@tiptap/starter-kit'

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
    <div>
        <div>
            <EditorContent editor={editor} />
        </div>
    </div>
  )
}

export default TipTapEditor
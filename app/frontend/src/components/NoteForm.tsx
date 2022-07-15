import { NoteObject } from '../interfaces/note.interface';
import React, { useState } from 'react'

interface NoteFormProps {
  createNote: (noteObject: NoteObject) => void;
}

const NoteForm: React.FunctionComponent<NoteFormProps> = ({ createNote }) => {
  const [newNote, setNewNote] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNote(event.target.value)
  }

  const addNote = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    createNote({
      content: newNote,
      important: false
    })

    setNewNote('')
  }

  return (
    <div>
      <h2>Create a new note</h2>

      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleChange}
          placeholder='write here note content'
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default NoteForm
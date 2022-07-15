import { NoteObject } from "../interfaces/note.interface"

interface NoteProps {
  note: NoteObject;
  toggleImportance: React.MouseEventHandler<HTMLButtonElement>;
}

const Note: React.FunctionComponent<NoteProps> = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li className="note">
      <span>{note.content}</span>
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note
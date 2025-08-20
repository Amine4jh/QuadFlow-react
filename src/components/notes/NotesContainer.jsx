import useNotesStore from "../../stores/notesStore";
import NotesForm from "./Modal";

const NotesContainer = () => {
  const { notes, removeNote } = useNotesStore();
  const confirmMsg = "You want to delete this task, are you sure?";

  return (
    <div id="notesContainer">
      <div id="notesContent">
        {notes.map((note) => (
          <div id="note" key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <button
              onClick={() => (confirm(confirmMsg) ? removeNote(note.id) : "")}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {notes.length === 0 && (
        <small className="text-border text-3xl text-center block my-6">
          No notes yet!
        </small>
      )}
      <NotesForm />
    </div>
  );
};

export default NotesContainer;

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
        {/* <div id="note">
          <h3>Note 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
          <button>Delete</button>
        </div>
        <div id="note">
          <h3>Note 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <button>Delete</button>
        </div>
        <div id="note">
          <h3>Note 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <button>Delete</button>
        </div>
        <div id="note">
          <h3>Note 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
          <button>Delete</button>
        </div> */}
      </div>
      <NotesForm />
    </div>
  );
};

export default NotesContainer;

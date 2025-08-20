import { useState } from "react";
import useNotesStore from "../../stores/notesStore";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descError, setDescError] = useState("");
  const addNote = useNotesStore((state) => state.addNote);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError("");
    setDescError("");
    let valid = true;
    if (title.trim().length < 3) {
      valid = false;
      setTitleError("Title must be at least 3 characters");
    }
    if (description.trim().length < 3) {
      valid = false;
      setDescError("Description must be at least 3 words");
    }
    if (valid) {
      addNote({ id: Date.now(), title: title, description: description });
      console.log(useNotesStore.getState().notes);
      setTitle("");
      setDescription("");
      // e.target.submit()
    }
  };
  return (
    <form action="" id="noteForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        placeholder="Title..."
      />
      <small className="text-destructive text-sm mx-2">{titleError}</small>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description..."
        id="desc"
      ></textarea>
      <small className="text-destructive text-sm mx-2">{descError}</small>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;

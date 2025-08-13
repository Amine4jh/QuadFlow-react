const NoteForm = () => {
  return (
    <form action="" id="noteForm">
      <input type="text" id="title" placeholder="Title..." />
      <small></small>
      <input type="text" id="desc" placeholder="Description..." />
      <small></small>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;

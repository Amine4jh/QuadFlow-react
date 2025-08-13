const NotesForm = () => {
  return (
    <div className="modal">
      <form>
        <input type="text" placeholder="Title..." />
        <textarea id="" placeholder="Description..."></textarea>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default NotesForm;

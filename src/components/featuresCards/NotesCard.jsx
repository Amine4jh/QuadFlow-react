import { CgNotes } from "react-icons/cg";

const NotesCard = () => {
  return (
    <div id="card">
      <CgNotes id="icon" />
      <h3>Note Taking</h3>
      <p>
        Create, search, and organize notes with markdown support and instant
        search capabilities.
      </p>
    </div>
  );
};

export default NotesCard;

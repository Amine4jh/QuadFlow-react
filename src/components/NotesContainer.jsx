import { IoMdAddCircleOutline } from "react-icons/io";

const NotesContainer = () => {
  return (
    <div id="notesContainer">
      <div>
        <div id="note">
          <h3>Note 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <button>Delete</button>
        </div>
        <div id="note">
          <h3>Note 2</h3>
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
      </div>
      <IoMdAddCircleOutline />
    </div>
  );
};

export default NotesContainer;

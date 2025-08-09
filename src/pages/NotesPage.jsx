import Nav from "../components/layout/Nav";
import NotesContainer from "../components/NotesContainer";
import Footer from "../components/layout/Footer";

const NotesPage = () => {
  return (
    <div id="container">
      <Nav />
      <h1>Take Notes</h1>
      <p>Capture and organize your thoughts</p>
      <NotesContainer />
      <Footer />
    </div>
  );
};

export default NotesPage;

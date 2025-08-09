import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import CalendarContent from "../components/calendar/CalendarContent";
import CalendarForm from "../components/calendar/CalendarForm";

const CalendarPage = () => {
  return (
    <div id="container">
      <Nav />
      <h1>Calendar</h1>
      <p>Visualize your schedule and track important events</p>
      <CalendarContent />
      <Footer />
    </div>
  );
};

export default CalendarPage;

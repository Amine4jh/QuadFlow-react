import Nav from "../components/layout/Nav";
import PomodoroContainer from "../components/PomodoroContainer";
import Footer from "../components/layout/Footer";

const PomodoroPage = () => {
  return (
    <div id="container">
      <Nav />
      <h1>Pomodoro Timer</h1>
      <p>Boost productivity with the Pomodoro Technique</p>
      <PomodoroContainer />
      <Footer />
    </div>
  );
};

export default PomodoroPage;

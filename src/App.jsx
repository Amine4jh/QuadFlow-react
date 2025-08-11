import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FeaturesLayout from "./pages/FeaturesLayout";
import TodoPage from "./pages/TodoPage";
import NotesPage from "./pages/NotesPage";
import CalendarPage from "./pages/CalendarPage";
import PomodoroPage from "./pages/PomodoroPage";

const App = () => {
  const Routing = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    {
      path: "/features",
      element: <FeaturesLayout />,
      children: [
        { index: true, element: <TodoPage /> },
        { path: "/features/notes", element: <NotesPage /> },
        { path: "/features/calendar", element: <CalendarPage /> },
        { path: "/features/pomodoro", element: <PomodoroPage /> },
      ],
    },
  ]);
  return <RouterProvider router={Routing}></RouterProvider>;
};

export default App;

import { useState, useEffect } from "react";
import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";

import "@schedule-x/theme-default/dist/index.css";

import useCalendarStore from "../../stores/calendarStore";

function CalendarApp() {
  const { events } = useCalendarStore();
  const eventsService = useState(() => createEventsServicePlugin())[0];

  const calendar = useCalendarApp({
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    events: [
      {
        id: "1",
        title: "Event 1",
        start: "2025-08-22 00:00",
        end: "2025-08-22 02:00",
        description: "My cool event description!",
      },
    ],
    isDark: true,
    plugins: [
      eventsService,
      createEventModalPlugin(),
      createDragAndDropPlugin(),
    ],
  });

  events.map((event) => {
    calendar.eventsService.add(event);
  });

  useEffect(() => {
    // get all events
    eventsService.getAll();
  });

  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
}

export default CalendarApp;

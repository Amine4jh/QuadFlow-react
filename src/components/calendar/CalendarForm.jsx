import { useState } from "react";
import useCalendarStore from "../../stores/calendarStore";

const CalendarForm = () => {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [description, setDescription] = useState("");

  const addEvent = useCalendarStore((state) => state.addEvent);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validStart = start.replace("T", " ");
    const validEnd = end.replace("T", " ");
    addEvent({
      id: Date.now(),
      title: title,
      start: validStart,
      end: validEnd,
      description: description,
    });

    setTitle("");
    setStart("");
    setEnd("");
    setDescription("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div id="eventTitle">
        <label htmlFor="eventTitle">Event Title:</label>
        <input
          type="text"
          id="eventTitle"
          name="eventTitle"
          placeholder="Name your event..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <small></small>
      </div>
      <div id="startDate">
        <label htmlFor="startDate">Start Date & Time:</label>
        <input
          type="datetime-local"
          id="startDate"
          name="startDate"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
        <small></small>
      </div>
      <div id="endDate">
        <label htmlFor="endDate">End Date & Time:</label>
        <input
          type="datetime-local"
          id="endDate"
          name="endDate"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
        <small></small>
      </div>
      <div id="eventDescription">
        <label htmlFor="endDate">Task Name:</label>
        <textarea
          name="eventDescription"
          id="eventDescription"
          placeholder="Describe it..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <small></small>
      </div>
      <button type="submit" id="primary">
        Add new event
      </button>
    </form>
  );
};

export default CalendarForm;

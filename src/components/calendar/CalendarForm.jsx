import { useState } from "react";
import useCalendarStore from "../../stores/calendarStore";

const CalendarForm = () => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");

  const addEvent = useCalendarStore((state) => state.addEvent);

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({
      id: Date.now(),
      title: title,
      start: `${startDate} ${startTime}`,
      end: `${endDate} ${endTime}`,
      description: description,
    });

    setTitle("");
    setStartDate("");
    setStartTime("");
    setEndDate("");
    setEndTime("");
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
      <div id="startDate" className="flex justify-between">
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="startTime">Start Time:</label>
          <input
            type="time"
            id="startTime"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <small></small>
      </div>
      <div id="endDate" className="flex justify-between">
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="endTime">End Time:</label>
          <input
            type="time"
            id="endTime"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
        <small></small>
      </div>
      <div id="checkbox" className="flex items-center">
        <label htmlFor="allDay">All the Day</label>
        <input type="checkbox" id="allDay" />
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

const CalendarForm = () => {
  return (
    <form action="">
      <div id="eventTitle">
        <label htmlFor="eventTitle">Event Title:</label>
        <input
          type="text"
          id="eventTitle"
          name="eventTitle"
          placeholder="Name your event..."
        />
        <small></small>
      </div>
      <div id="startDate">
        <label htmlFor="startDate">Start Date & Time:</label>
        <input type="datetime-local" id="startDate" name="startDate" />
        <small></small>
      </div>
      <div id="endDate">
        <label htmlFor="endDate">End Date & Time:</label>
        <input type="datetime-local" id="endDate" name="endDate" />
        <small></small>
      </div>
      <div id="eventDescription">
        <label htmlFor="endDate">Task Name:</label>
        <textarea
          name="eventDescription"
          id="eventDescription"
          placeholder="Describe it..."
        ></textarea>
        <small></small>
      </div>
      <button type="submit" id="primary">Add new event</button>
    </form>
  );
};

export default CalendarForm;

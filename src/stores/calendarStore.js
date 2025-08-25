import { create } from "zustand";

const useCalendarStore = create((set) => ({
  events: [],
  addEvent: (event) => {
    set((state) => ({ events: [...state.events, event] }));
  },
}));

export default useCalendarStore;

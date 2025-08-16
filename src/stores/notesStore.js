import { create } from "zustand";

const useNotesStore = create((set) => ({
  notes: [],
  addNote: (note) => {
    set((state) => ({ notes: [...state.notes, note] }));
  },
  removeNote: (id) => {
    set((state) => ({ notes: state.notes.filter((note) => note.id !== id) }));
  },
  // toggleTask: (id) => {
  //   set((state) => ({
  //     tasks: state.tasks.map((task) =>
  //       task.id === id ? { ...task, completed: !task.completed } : task
  //     ),
  //   }));
  // },
  // getActiveTask: () => get().tasks.filter((task) => !task.completed),
}));

export default useNotesStore;

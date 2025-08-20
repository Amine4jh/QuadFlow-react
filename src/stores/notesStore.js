import { create } from "zustand";

const useNotesStore = create((set) => ({
  notes: [],
  addNote: (note) => {
    set((state) => ({ notes: [...state.notes, note] }));
  },
  removeNote: (id) => {
    set((state) => ({ notes: state.notes.filter((note) => note.id !== id) }));
  },
}));

export default useNotesStore;

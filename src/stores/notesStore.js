import { create } from "zustand";
import { persist } from "zustand/middleware";

const useNotesStore = create(
  persist(
    (set) => ({
      notes: [],
      addNote: (note) => {
        set((state) => ({ notes: [...state.notes, note] }));
      },
      removeNote: (id) => {
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        }));
      },
    }),
    {
      name: "notes",
    }
  )
);

export default useNotesStore;

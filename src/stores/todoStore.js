import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTodoStore = create(
  persist((set, get) => ({
    tasks: [],
    addTask: (task) => {
      set((state) => ({ tasks: [...state.tasks, task] }));
    },
    removeTask: (id) => {
      set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) }));
    },
    toggleTask: (id) => {
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        ),
      }));
    },
    getActiveTask: () => get().tasks.filter((task) => !task.completed),
  }))
);

export default useTodoStore;

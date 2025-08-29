import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTodoStore = create(
  persist(
    (set, get) => ({
      tasks: [],
      filter: "all",
      addTask: (task) => {
        set((state) => ({ tasks: [...state.tasks, task] }));
      },
      removeTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        }));
      },
      toggleTask: (id) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        }));
      },
      setFilter: (filter) => set({ filter }),

      filteredTasks: () => {
        const { tasks, filter } = get();
        if (filter === "active") return tasks.filter((t) => !t.completed);
        if (filter === "completed") return tasks.filter((t) => t.completed);
        return tasks;
      },
    }),
    {
      name: "tasks",
    }
  )
);

export default useTodoStore;

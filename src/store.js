// store.js
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export default useStore;


// store.js

export const useFetchStore = create((set) => ({
  todos: [],  // Initialize with an empty array
  asyncFetch: async () => {
    console.log("Fetching data...");
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      set({ todos: data }); // Set the fetched data in the store
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  },
}));

export const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));


export const useThemeStore = create((set) => ({
  theme: 'light',
  toggleTheme: () => set((state) => ({
    theme: state.theme === 'light' ? 'dark' : 'light',
  })),
}));



import { create } from "zustand";
import {persist} from "zustand/middleware"

type Theme = "light" | "dark"

interface ThemeStore{
  theme: Theme;
  toggleTheme: ()=> void;
}
// 用zustand可以让数据持久化
export const useThemeStore = create<ThemeStore>()(
  persist((set,get) => ({
    theme: typeof window !== "undefined" && window.matchMedia(
      "(prefers-color-scheme:dark").matches ? "dark" : "light",
    toggleTheme: () => {
      const newTheme = get().theme === "light" ? "dark" : ("light" as Theme);
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle(
          "dark", newTheme === "dark");
      }
      set({ theme: newTheme });
    },
  }), {
    name: "theme", onRehydrateStorage: () => (state) => {
      if (state?.theme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
  } })
);
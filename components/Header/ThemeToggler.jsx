import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className=""
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <MoonIcon className="h-5 w-5 text-zinc-700 dark:text-white" />
      ) : (
        <SunIcon className="h-5 w-5 text-zinc-700 dark:text-white" />
      )}
    </button>
  );
}

export default ThemeToggler;

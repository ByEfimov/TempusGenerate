import { useLayoutEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("app-theme") || "LTempus"
  );
  useLayoutEffect(() => {
    document.documentElement.setAttribute("Data-Theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);
  return { theme, setTheme };
};

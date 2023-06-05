import { useEffect, useState } from "react";

export const sizes: any = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xl2: "1536px",
};

export const useMediaQuery = (screen: any) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = `(min-width: ${sizes[screen]})`;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, screen]);

  return matches;
};

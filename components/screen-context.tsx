import { createContext, useEffect, useState, type ReactNode } from "react";

interface ScreenContext {
  width: number;
  height: number;
}

export const ScreenContext = createContext<ScreenContext>({} as ScreenContext);

export default function ScreenContextContainer({
  children,
}: {
  children: ReactNode;
}) {
  const [screenContext, setScreenContext] = useState<ScreenContext>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setScreenContext(() => ({
          width: window.innerWidth,
          height: window.innerHeight,
        }));
      };
      setScreenContext(() => ({
        width: window.innerWidth,
        height: window.innerHeight,
      }));
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return (
    <ScreenContext.Provider value={screenContext}>
      {children}
    </ScreenContext.Provider>
  );
}

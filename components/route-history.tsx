import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, useLocation } from "react-router";

const PATH_MAP = {
  "/shop": "Shop",
  "/": "Home",
};

export const HistoryContext = createContext<string[]>([]);

export function RouteHistoryContainer({ children }: { children: ReactNode }) {
  const [history, setHistory] = useState<string[]>([]);
  const location = useLocation();

  function addHistory(pathname: string) {
    setHistory((history: string[]) => {
      let similarIndex = null;
      for (let i = 0; i < history.length; i++) {
        if (history[i] === pathname) {
          similarIndex = i;
          break;
        }
      }

      if (similarIndex !== null) {
        return history.slice(0, similarIndex + 1);
      } else {
        return [...history, pathname];
      }
    });
  }

  useEffect(() => {
    addHistory(location.pathname);
  }, [location]);

  console.log(history);

  return (
    <HistoryContext.Provider value={history}>
      {children}
    </HistoryContext.Provider>
  );
}

export function RouteHistoryDisplay({ children }: { children: ReactNode }) {
  const historyContext = useContext(HistoryContext);
  return (
    <div className="pb-20">
      <div className="bg-gray-200 w-full h-0.5 px-4"></div>
      <div className="container-padding py-6 flex flex-col gap-y-2 lg:gap-y-6">
        <ul className="flex items-center gap-x-1">
          {["/", ...historyContext].map((pathname: string, i: number) => {
            return (
              <>
                <li>
                  <Link to={pathname} className="text-gray-500">
                    {PATH_MAP[pathname as keyof typeof PATH_MAP]}
                  </Link>
                </li>
                {i < historyContext.length && (
                  <li>
                    <RiArrowRightSLine className="mt-0.5 text-lg text-gray-600 font-black" />
                  </li>
                )}
              </>
            );
          })}
        </ul>
        {children}
      </div>
    </div>
  );
}

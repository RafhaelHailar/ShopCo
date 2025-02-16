import type { Route } from "./+types/page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <div className="bg-gray-400 w-full h-1 px-4"></div>
    </div>
  );
}

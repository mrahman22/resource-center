import { Header } from "./components/Header";
import { Resources } from "./components/Resources";
import { resources } from "./data/resources";

export const App = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      <Header />
      <Resources resources={resources} />
    </div>
  );
};

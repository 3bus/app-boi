import { tw } from "twind";
import { ExampleComponent } from "./components";

export const App = () => {
  return (
    <div className={tw`bg-purple-500`}>
      <ExampleComponent />
    </div>
  );
};

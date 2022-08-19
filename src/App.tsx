import { tw, css } from "twind/css";
import { Header, NavigationBar } from "./components";

export const App = () => {
  return (
    <div
      className={tw`w-screen h-screen flex flex-row sm:justify-center sm:items-center`}
    >
      <div
        className={tw([
          css`
            max-width: 390px;
            max-height: 844px;
          `,
          "w-full h-full bg-gray-200 relative",
        ])}
      >
        <Header />

        <NavigationBar />
      </div>
    </div>
  );
};

import { tw } from "twind";

export const ExampleComponent = () => {
  return (
    <div className={tw`bg-gray-500 w-full`}>
      <p className={tw(["text-lg font-bold"])}>Test</p>
    </div>
  );
};

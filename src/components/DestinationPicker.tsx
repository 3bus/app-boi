import { tw } from "twind";
import { TextInput } from "../components";

export const DestinationPicker = () => {
  return (
    <div className={tw`bg-white rounded-xl p-4 flex flex-col gap-y-2`}>
      <p className={tw` text-lg pb-2`}>Recents</p>
      <TextInput className="w-full rounded-full py-2 px-4 bg-gray-100" />
      <TextInput className="w-full rounded-full py-2 px-4 bg-lightBlue-100" />
    </div>
  );
};

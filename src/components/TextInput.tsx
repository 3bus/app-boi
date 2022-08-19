import { apply, tw } from "twind";

type Props = {
  className?: string;
};

export const TextInput = ({ className }: Props) => {
  return (
    <input
      type="text"
      placeholder="Choose destination"
      className={tw(apply`rounded-md p-2 bg-white text-gray-600`, className)}
    />
  );
};

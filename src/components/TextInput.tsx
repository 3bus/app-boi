import { apply, tw } from "twind";

type Props = {
  className?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const TextInput = ({ className, ...props }: Props) => {
  return (
    <input
      {...props}
      type="text"
      placeholder="Choose destination"
      className={tw(apply`rounded-md p-2 bg-white text-gray-600`, className)}
    />
  );
};

import { tw } from "twind";

export const SectionContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className={tw`p-4`}>{children}</div>;
};

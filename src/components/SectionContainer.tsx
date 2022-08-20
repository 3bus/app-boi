import { tw } from "twind";

export const SectionContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className={tw`p-6`}>{children}</div>;
};

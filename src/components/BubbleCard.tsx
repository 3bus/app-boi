import { ReactNode } from "react";
import { apply, tw } from "twind";

type Props = {
  text: string;
  subtext?: string;
  renderRightContent?: () => ReactNode;
  onClick: () => void;
  className?: string;
};

export const BubbleCard = ({
  text,
  subtext,
  renderRightContent,
  onClick,
  className,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={tw([
        apply`p-4 rounded-xl bg-white flex flex-row items-center justify-between hover:cursor-pointer`,
        className,
      ])}
    >
      <div className={tw`flex flex-col gap-y-1`}>
        <p className={tw`font-bold text-blueGray-700`}>{text}</p>
        <p className={tw` text-sm text-blueGray-500`}>{subtext}</p>
      </div>
      {renderRightContent && renderRightContent()}
    </div>
  );
};

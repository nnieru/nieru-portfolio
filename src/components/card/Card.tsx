import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const Card: FC<Props> = ({children}: Props) => {
  return <div className="bg-white border border-gray-200 rounded-lg flex">
    {children}
  </div>;
}

import { FC } from "react";
import { ContainerProps } from "./Container.types";

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-2xl mx-auto px-4 sm:px-0">{children}</div>;
};

export default Container;

import { FC } from "react";
import { formatDate } from "../../utils/date";
import { DateCreatedProps } from "./DateCreated.types";

const DateCreated: FC<DateCreatedProps> = ({ createdAt }) => {
  const formattedDate = formatDate(createdAt);

  return <div className="text-neutral-500 text-sm">{formattedDate}</div>;
};

export default DateCreated;

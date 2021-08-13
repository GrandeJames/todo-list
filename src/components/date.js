import { format, isThisYear, isToday, isTomorrow, isYesterday } from "date-fns";

export function getFormattedDate(date) {
  if (date) {
    if (isThisYear(getDateObj(date))) {
      if (isYesterday(getDateObj(date))) {
        return "Yesterday";
      } else if (isToday(getDateObj(date))) {
        return "Today";
      } else if (isTomorrow(getDateObj(date))) {
        return "Tomorrow";
      }
      return format(getDateObj(date), "LLLL dd");
    }
    return format(getDateObj(date), "LLLL dd, yyyy");
  }
}

function getDateObj(date) {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7) - 1;
  const day = date.substring(8, 10);

  return new Date(year, month, day);
}

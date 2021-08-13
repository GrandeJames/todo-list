import { format, isThisYear, isToday, isTomorrow, isYesterday } from "date-fns";

export function getFormattedDate(dateString) {
  if (dateString) {
    if (!isThisYear(getDate(dateString))) {
      return format(getDate(dateString), "LLLL dd, yyyy");
    } else if (isYesterday(getDate(dateString))) {
      return "Yesterday";
    } else if (isToday(getDate(dateString))) {
      return "Today";
    } else if (isTomorrow(getDate(dateString))) {
      return "Tomorrow";
    }
    return format(getDate(dateString), "LLLL dd");
  }
}

function getDate(date) {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7) - 1;
  const day = date.substring(8, 10);

  return new Date(year, month, day);
}

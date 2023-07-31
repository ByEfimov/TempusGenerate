import moment from "moment";

export function nextDate() {
  const tomorrow = moment().add(1, "days").format("YYYY-MM-DD");
  return tomorrow;
}

export function lastDate() {
  const yesterday = moment().subtract(1, "days").format("YYYY-MM-DD");
  return yesterday;
}

export function thisDate() {
  const today = moment().format("YYYY-MM-DD");
  return today;
}

const date = new Date();
export const thisDay = String(date.getDate()).padStart(2, "0");

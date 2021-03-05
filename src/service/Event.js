const EventForPay = require("./EventForPay");
class Event {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function convertEventToEventForPay(date, hours) {
  let startInDay;
  let endInDay;
  let isNextDay = false;

  const startHour = new Date("2021-03-05T06:00:00");
  const endHour = new Date("2021-03-05T22:00:00");

  // const startHour = hours.start;
  // const endHour = hours.end;

  if (date.start >= startHour && date.start < endHour) {
    startInDay = true;
  } else {
    startInDay = false;
  }

  if (
    date.end >= endHour &&
    date.end < new Date(startHour.setDate(startHour.getDate() + 1))
  ) {
    endInDay = false;
  } else {
    endInDay = true;
  }

  if (
    startInDay &&
    endInDay &&
    date.end.getDate() - date.start.getDate() >= 1
  ) {
    isNextDay = true;
  }

  return new EventForPay({ startInDay, endInDay, isNextDay });
}

module.exports = { Event, convertEventToEventForPay };

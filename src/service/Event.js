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

  const startHour = new Date("2021-03-05T06:00:00");
  const endHour = new Date("2021-03-05T22:00:00");

  // let startHour = new Date(`${date.start.toLocaleDateString()} ${hours.start}`);
  // let endHour = new Date(`${date.end.toLocaleDateString()} ${hours.end}`);

  console.log(
    1,
    startHour,
    endHour,
    date.start,
    date.end,
    new Date(startHour.setDate(startHour.getDate() + 1))
  );

  if (date.start >= startHour && date.start < endHour.toLocaleString()) {
    startInDay = true;
  } else {
    startInDay = false;
  };

  if (date.end >= endHour && date.end < new Date(startHour.setDate(startHour.getDate() + 1)).toLocaleString()) {
    endInDay = true;
  } else {
    endInDay = false;
  };

  console.log(2, { startInDay, endInDay });

  return new EventForPay({ startInDay, endInDay });
}

module.exports = { Event, convertEventToEventForPay };

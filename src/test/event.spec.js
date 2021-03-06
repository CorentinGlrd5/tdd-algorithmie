const { Event, convertEventToEventForPay } = require("../service/Event");

describe("Test Event service", () => {
  let start;
  let end;
  let hours = {
    start: new Date("2021-03-05T06:00:00"),
    end: new Date("2021-03-05T22:00:00"),
  };

  test("The event starts during the day ends during the day", () => {
    start = new Date("2021-03-05T07:00:00");
    end = new Date("2021-03-05T21:00:00");

    let event = new Event(start, end);
    let eventForPay = convertEventToEventForPay(event, hours);

    expect(eventForPay.startInDay).toBe(true);
    expect(eventForPay.endInDay).toBe(true);
    expect(eventForPay.isNextDay).toBe(false);
  });

  test("The event starts during the night ends during the night", () => {
    start = new Date("2021-03-05T22:00:00");
    end = new Date("2021-03-06T05:00:00");

    let event = new Event(start, end);
    let eventForPay = convertEventToEventForPay(event, hours);

    expect(eventForPay.startInDay).toBe(false);
    expect(eventForPay.endInDay).toBe(false);
    expect(eventForPay.isNextDay).toBe(false);
  });

  test("the event starts day ends during the night", () => {
    start = new Date("2021-03-05T11:15:00");
    end = new Date("2021-03-05T23:30:00");

    let event = new Event(start, end);
    let eventForPay = convertEventToEventForPay(event, hours);

    expect(eventForPay.startInDay).toBe(true);
    expect(eventForPay.endInDay).toBe(false);
    expect(eventForPay.isNextDay).toBe(false);
  });

  test("the event starts during the night ends during the day", () => {
    start = new Date("2021-03-05T05:15:00");
    end = new Date("2021-03-05T10:30:00");

    let event = new Event(start, end);
    let eventForPay = convertEventToEventForPay(event, hours);

    expect(eventForPay.startInDay).toBe(false);
    expect(eventForPay.endInDay).toBe(true);
    expect(eventForPay.isNextDay).toBe(false);
  });

  test("the event starts during the day, continues during the night and ends during the day", () => {
    start = new Date("2021-03-05T08:00:00");
    end = new Date("2021-03-06T09:10:00");

    let event = new Event(start, end);
    let eventForPay = convertEventToEventForPay(event, hours);

    expect(eventForPay.startInDay).toBe(true);
    expect(eventForPay.endInDay).toBe(true);
    expect(eventForPay.isNextDay).toBe(true);
  });
});

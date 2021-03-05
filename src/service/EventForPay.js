class EventForPay {
  constructor({ startInDay, endInDay, isNextDay }) {
    this.startInDay = startInDay;
    this.endInDay = endInDay;
    this.isNextDay = isNextDay;
  }
}

module.exports = EventForPay;

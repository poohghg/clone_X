export default class DateHelper {
  private dayList = ['일', '월', '화', '수', '목', '금', '토'];

  static nextDate(day: number, midnight?: boolean) {
    const date = new Date();
    date.setDate(date.getDate() + day);
    if (midnight) date.setHours(0, 0, 0, 0);
    return date;
  }

  static toKRDate(date: Date) {
    // UTC 시간을 한국 시간으로 변환
    const diff = 9 * 60 * 60 * 1000;
    return new Date(date.getTime() + diff);
  }

  static getDayOfWeek() {
    const date = new Date();
    const dayOfWeek = date.getDay();
    return new this().dayList[dayOfWeek];
  }
}

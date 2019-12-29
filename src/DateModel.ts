import moment, { Moment } from "moment";

export default class DateModel {
  public moment: Moment;

  constructor(value: string | null) {
    this.moment = moment(value ?? "");
  }
}

import React from "react";
import { DateRangeInput, DateRange } from "@blueprintjs/datetime";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import moment from "moment";
import DateModel from "../DateModel";

interface Props {
  from?: DateModel;
  to?: DateModel;
  onValueChanged?: (from?: DateModel, to?: DateModel) => void;
}

export default class DateRangePicker extends React.Component<Props, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <DateRangeInput
          formatDate={this.formatDate}
          parseDate={this.parseDate}
          value={[
            this.props.from?.moment.toDate(),
            this.props.to?.moment.toDate()
          ]}
          onChange={(range: DateRange) => this.handleOnChange(range)}
        ></DateRangeInput>
      </div>
    );
  }

  private handleOnChange = (dateRange: DateRange): void => {
    if (this.props.onValueChanged) {
      this.props.onValueChanged(
        new DateModel(this.formatDate(dateRange[0])),
        new DateModel(this.formatDate(dateRange[1]))
      );
    }
  };

  private formatDate = (date?: Date): string => {
    if (!date) {
      return "";
    }

    return moment(date).format("YYYY/MM/DD");
  };

  private parseDate = (dateString: string): Date => {
    return moment(dateString).toDate();
  };
}

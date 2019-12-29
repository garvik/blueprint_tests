import React from "react";
import "./App.css";
import DateRangePicker from "./DateRangePicker/DateRangePicker";
import DateModel from "./DateModel";

interface Props {}

interface State {
  from?: DateModel;
  to?: DateModel;
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      from: undefined,
      to: undefined
    };
  }

  public render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <DateRangePicker
            from={this.state.from}
            to={this.state.to}
            onValueChanged={this.valueChangedHandler}
          ></DateRangePicker>
        </header>
      </div>
    );
  }

  private valueChangedHandler = (from?: DateModel, to?: DateModel): void => {
    this.setState({
      from: from,
      to: to
    });
  };
}

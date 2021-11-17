import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: "",
      hours: "",
      min: "",
      sec: "",
    };
  }

  //method to update current time
  updateCurrentTime = () => {
    var date1 = new Date();
    var date2 = new Date("04/11/2022");

    var seconds = Math.floor((date2 - date1) / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days_difference = Math.floor(hours / 24);

    var hours_difference = hours - days_difference * 24;

    var mins_difference =
      minutes - days_difference * 24 * 60 - hours_difference * 60;
    var secs_difference =
      seconds -
      days_difference * 24 * 60 * 60 -
      hours_difference * 60 * 60 -
      mins_difference * 60;

    this.setState({
      days: Math.trunc(days_difference),
      hours: Math.trunc(hours_difference),
      min: Math.trunc(mins_difference),
      sec: Math.trunc(secs_difference),
    });
  };

  componentDidMount() {
    this.timer = setInterval(this.updateCurrentTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <div className="flex3 counter">
          <div className="date-section">
            <h3 className="flex3">
              Coming &nbsp; <span className="p-comming"> 4 Nov 2022</span>
            </h3>
            <div className="flex3 space-between">
              <div
                className="date"
                style={{
                  backgroundColor: this.props.isSignedUp
                    ? "rgba(81, 117, 255, 0.1)"
                    : "#333950",
                }}
              >
                <h1
                  style={{
                    color: this.props.isSignedUp ? "#5175FF" : "#fff",
                  }}
                >
                  {this.state.days !== "" ? this.state.days : null}
                </h1>
                <p
                  className="body2"
                  style={{
                    color: !this.props.isSignedUp ? "#fff" : "",
                  }}
                >
                  Days
                </p>
              </div>
              <div
                className="date"
                style={{
                  backgroundColor: this.props.isSignedUp
                    ? "rgba(81, 117, 255, 0.1)"
                    : "#333950",
                }}
              >
                <h1
                  style={{
                    color: this.props.isSignedUp ? "#5175FF" : "#fff",
                  }}
                >
                  {" "}
                  {this.state.hours !== "" ? this.state.hours : null}
                </h1>
                <p
                  className="body2"
                  style={{
                    color: !this.props.isSignedUp ? "#fff" : "",
                  }}
                >
                  Hours
                </p>
              </div>
              <div
                className="date"
                style={{
                  backgroundColor: this.props.isSignedUp
                    ? "rgba(81, 117, 255, 0.1)"
                    : "#333950",
                }}
              >
                <h1
                  style={{
                    color: this.props.isSignedUp ? "#5175FF" : "#fff",
                  }}
                >
                  {" "}
                  {this.state.min !== "" ? this.state.min : null}
                </h1>
                <p
                  className="body2"
                  style={{
                    color: !this.props.isSignedUp ? "#fff" : "",
                  }}
                >
                  Min
                </p>
              </div>
              <div
                className="date"
                style={{
                  backgroundColor: this.props.isSignedUp
                    ? "rgba(81, 117, 255, 0.1)"
                    : "#333950",
                }}
              >
                <h1
                  style={{
                    color: this.props.isSignedUp ? "#5175FF" : "#fff",
                  }}
                >
                  {" "}
                  {this.state.sec !== "" ? this.state.sec : null}
                </h1>
                <p
                  className="body2"
                  style={{
                    color: !this.props.isSignedUp ? "#fff" : "",
                  }}
                >
                  Sec
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;

/**
 *
 */

import React, { Component } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    });
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    console.log(good);
    console.log(this.countTotalFeedback());
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <Feedback
          options={Object.keys(this.state)}
          onLeaveFeedback={this.leaveFeedback}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

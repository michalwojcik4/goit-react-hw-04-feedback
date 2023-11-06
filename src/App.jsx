import { useEffect, useState } from 'react';

import { Section } from './components/Section';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { Notification } from './components/Notification/Notification';

import css from './App.module.css';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);

  const incrementGood = () => {
    setGood(prev => prev + 1);
    setTotal(prev => prev + 1);
  };

  const incrementNeutral = () => {
    setNeutral(prev => prev + 1);
    setTotal(prev => prev + 1);
  };

  const incrementBad = () => {
    setBad(prev => prev + 1);
    setTotal(prev => prev + 1);
  };

  useEffect(() => {
    setPositiveFeedback(total ? Math.round((good / total) * 100) : 0);
  }, [good, neutral, bad, total]);

  return (
    <div>
      <Section title="Please leave feedback">
        <div className={css.buttonList}>
          <FeedbackOptions name={'Good'} onLeaveFeedback={incrementGood} />
          <FeedbackOptions
            name={'Neutral'}
            onLeaveFeedback={incrementNeutral}
          />
          <FeedbackOptions name={'Bad'} onLeaveFeedback={incrementBad} />
        </div>
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback}
          />
        )}
      </Section>
    </div>
  );
}

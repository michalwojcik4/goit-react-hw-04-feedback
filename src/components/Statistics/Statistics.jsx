import PropTypes from 'prop-types';

import css from './Statistics.module.css';

export function Statistics({ good, neutral, bad, total, positiveFeedback }) {
  let color = 'red';
  if (positiveFeedback > 50) color = 'green';
  if (positiveFeedback === 50) color = 'orange';

  return (
    <>
      <ul className={css}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>
          Positive feedback:{' '}
          <span style={{ color: color }}>{positiveFeedback}%</span>
        </li>
      </ul>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};

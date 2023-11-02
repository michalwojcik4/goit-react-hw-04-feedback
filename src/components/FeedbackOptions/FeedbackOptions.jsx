import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ name, onLeaveFeedback }) {
  return (
    <button className={css.button} type="button" onClick={onLeaveFeedback}>
      {name}
    </button>
  );
}

FeedbackOptions.propTypes = {
  name: PropTypes.string,
  onLeaveFeedback: PropTypes.func.isRequired,
};

import { FeedbackBtnBox, Btn } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, keysKeys }) => {
  // console.log(keysKeys);
  return (
    <FeedbackBtnBox>
      {keysKeys.map(key => (
        <Btn type="button" key={key} id={key} onClick={onLeaveFeedback}>
          {/* {key.slice(0, 1).toUpperCase()}
          {key.slice(1)} */}
          {key}
        </Btn>
      ))}
    </FeedbackBtnBox>
  );
};

FeedbackOptions.propTypes = {
  keysKeys: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

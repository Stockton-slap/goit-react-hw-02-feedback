// import PropTypes from 'prop-types';
// import { Component } from 'react';

// import css from './FeedbackOptions.module.css';

// class FeedbackOptions extends Component {
//   onBtnClick = e => {
//     const { name } = e.target;

//     this.setState({ [name]: this.state[name] + 1 });
//   };

//   render() {
//     const { onLeaveFeedback, options } = this.props;

//     const optionsKeys = Object.keys(options);

//     return (
//       <ul className={css.feedbackBtnList}>
//         {optionsKeys.map((optionsKey, i) => {
//           return (
//             <li key={i}>
//               <button
//                 type="button"
//                 className={css.button}
//                 name={optionsKey}
//                 onClick={onLeaveFeedback}
//               >
//                 Good
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }
// }

// FeedbackOptions.propTypes = {
//   options: PropTypes.shape({
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//   }),
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

// export default FeedbackOptions;

// WITH EMOTION =====================================================================================================================
import PropTypes from 'prop-types';

import { Button, FeedbackBtnList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  // console.log(typeof options);
  return (
    <FeedbackBtnList>
      {options.map((option, i) => {
        return (
          <li key={i}>
            <Button type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </Button>
          </li>
        );
      })}
    </FeedbackBtnList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

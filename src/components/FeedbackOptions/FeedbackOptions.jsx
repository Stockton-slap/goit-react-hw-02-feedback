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

import { Component } from 'react';

import {
  Button,
  FeedbackBtnList,
  FeedbackBtnItem,
} from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback, options } = this.props;

    const optionsKeys = Object.keys(options);

    return (
      <FeedbackBtnList>
        {optionsKeys.map((optionsKey, i) => {
          return (
            <FeedbackBtnItem key={i}>
              <Button type="button" name={optionsKey} onClick={onLeaveFeedback}>
                {optionsKey}
              </Button>
            </FeedbackBtnItem>
          );
        })}
      </FeedbackBtnList>
    );
  }
}

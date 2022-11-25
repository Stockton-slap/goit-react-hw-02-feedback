// import PropTypes from 'prop-types';
// import { Component } from 'react';

// import Notification from 'components/Notification/Notification';
// import css from './Statistics.module.css';

// class Statistics extends Component {
//   render() {
//     const { good, neutral, bad, total, positivePercentage } = this.props;

//     if (total === 0) {
//       return <Notification message="There is no feedback" />;
//     }

//     return (
//       <ul className={css.statsList}>
//         <li className={css.statsItem}>
//           Good: <b>{good}</b>
//         </li>
//         <li className={css.statsItem}>
//           Neutral: <b>{neutral}</b>
//         </li>
//         <li className={css.statsItem}>
//           Bad: <b>{bad}</b>
//         </li>
//         <li className={css.statsItem}>
//           Total: <b>{total}</b>
//         </li>
//         <li className={css.statsItem}>
//           Positive feedback: <b>{positivePercentage}</b>
//         </li>
//       </ul>
//     );
//   }
// }

// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.string.isRequired,
// };

// export default Statistics;

// WITH EMOTION =====================================================================================================================

import { Component } from 'react';

import { StatsList, StatsItem } from './Statistics.styled';
import { Notification } from 'components/Notification/Notification';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    if (total === 0) {
      return <Notification message="There is no feedback"></Notification>;
    }

    return (
      <StatsList>
        <StatsItem>
          Good: <b>{good}</b>
        </StatsItem>
        <StatsItem>
          Neutral: <b>{neutral}</b>
        </StatsItem>
        <StatsItem>
          Bad: <b>{bad}</b>
        </StatsItem>
        <br />
        <StatsItem>
          Total: <b>{total}</b>
        </StatsItem>
        <StatsItem>
          Positive feedback: <b>{positivePercentage}</b>
        </StatsItem>
      </StatsList>
    );
  }
}
